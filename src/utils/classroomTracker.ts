import { DayOfWeek, SENIOR_PERIOD_SLOTS, FIRST_YEAR_PERIOD_SLOTS, VENUES, RoomVenue } from '../data/timetableData';
import { MASTER_SCHEDULE, ClassSession } from '../data/masterSchedule';

export interface RoomAvailability {
  venue: RoomVenue;
  isFree: boolean;
  currentBooking?: ClassSession;
  freeStartPeriod?: number;
  freeEndPeriod?: number;
  startTime?: string;
  endTime?: string;
  durationMinutes?: number;
  remainingPeriodsCount?: number;
  nextScheduledClass?: {
    period: number;
    startTime: string;
    section: string;
    subject: string;
  };
  todayAllPeriods: {
    period: number;
    isOccupied: boolean;
    booking?: ClassSession;
  }[];
}

// Convert "HH:MM" (24h) to "hh:mm AM/PM"
export function formatTime12h(time24: string): string {
  const [hStr, mStr] = time24.split(':');
  let h = parseInt(hStr, 10);
  const m = mStr || '00';
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${h.toString().padStart(2, '0')}:${m} ${ampm}`;
}

// Check which period a 24h time string belongs to
export function getPeriodForTime(time24: string): number {
  const [hour, min] = time24.split(':').map(Number);
  const minutesFromMidnight = hour * 60 + min;

  // Senior slots: 09:00 to 16:50
  for (const slot of SENIOR_PERIOD_SLOTS) {
    const [startH, startM] = slot.startTime.split(':').map(Number);
    const [endH, endM] = slot.endTime.split(':').map(Number);
    const startTotal = startH * 60 + startM;
    const endTotal = endH * 60 + endM;

    if (minutesFromMidnight >= startTotal && minutesFromMidnight <= endTotal) {
      return slot.period;
    }
  }

  // If before 09:00, default to Period 1
  if (minutesFromMidnight < 9 * 60) return 1;
  // If between periods (e.g. 10:40-10:50 tea break), map to next upcoming period
  if (minutesFromMidnight > 10 * 60 + 40 && minutesFromMidnight < 10 * 60 + 50) return 3;
  // If between 15:00 and 15:10 tea break
  if (minutesFromMidnight > 15 * 60 && minutesFromMidnight < 15 * 60 + 10) return 8;
  // If after 16:50, default to Period 9
  return 9;
}

export function getFreeClassrooms(day: DayOfWeek, targetPeriod: number): RoomAvailability[] {
  const results: RoomAvailability[] = [];

  for (const venue of VENUES) {
    // Collect all schedule info for this venue on this day
    const venueBookings = MASTER_SCHEDULE.filter(
      (s) => s.day === day && s.room === venue.id
    );

    const todayPeriods = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => {
      const booking = venueBookings.find((s) => s.period === p);
      return {
        period: p,
        isOccupied: !!booking,
        booking,
      };
    });

    const currentBooking = venueBookings.find((s) => s.period === targetPeriod);
    const isFree = !currentBooking;

    if (!isFree) {
      results.push({
        venue,
        isFree: false,
        currentBooking,
        todayAllPeriods: todayPeriods,
      });
      continue;
    }

    // Room is free at targetPeriod. Let's find uninterrupted duration.
    let endPeriod = targetPeriod;
    let nextClass: ClassSession | undefined;

    for (let p = targetPeriod + 1; p <= 9; p++) {
      const booking = venueBookings.find((s) => s.period === p);
      if (booking) {
        nextClass = booking;
        break;
      }
      endPeriod = p;
    }

    const startSlot = SENIOR_PERIOD_SLOTS.find((s) => s.period === targetPeriod)!;
    const endSlot = SENIOR_PERIOD_SLOTS.find((s) => s.period === endPeriod)!;

    // Calculate total duration in minutes
    const [sH, sM] = startSlot.startTime.split(':').map(Number);
    const [eH, eM] = endSlot.endTime.split(':').map(Number);
    const durationMinutes = (eH * 60 + eM) - (sH * 60 + sM);

    results.push({
      venue,
      isFree: true,
      freeStartPeriod: targetPeriod,
      freeEndPeriod: endPeriod,
      startTime: formatTime12h(startSlot.startTime),
      endTime: formatTime12h(endSlot.endTime),
      durationMinutes,
      remainingPeriodsCount: endPeriod - targetPeriod + 1,
      nextScheduledClass: nextClass
        ? {
            period: nextClass.period,
            startTime: formatTime12h(
              SENIOR_PERIOD_SLOTS.find((s) => s.period === nextClass!.period)?.startTime || '16:00'
            ),
            section: nextClass.section,
            subject: nextClass.subject,
          }
        : undefined,
      todayAllPeriods: todayPeriods,
    });
  }

  // Sort: Free rooms first, then longer duration first, then by floor
  return results.sort((a, b) => {
    if (a.isFree && !b.isFree) return -1;
    if (!a.isFree && b.isFree) return 1;
    if (a.isFree && b.isFree) {
      if ((b.durationMinutes || 0) !== (a.durationMinutes || 0)) {
        return (b.durationMinutes || 0) - (a.durationMinutes || 0);
      }
      return a.venue.floor - b.venue.floor;
    }
    return a.venue.name.localeCompare(b.venue.name);
  });
}

// Natural language query parser
export function parseNaturalLanguageQuery(query: string): {
  day: DayOfWeek;
  period: number;
  timeStr?: string;
  matchedPrompt?: string;
} {
  const lower = query.toLowerCase();

  // Match day
  let day: DayOfWeek = 'Tuesday'; // default matching prompt example
  if (lower.includes('monday') || lower.includes('mon')) day = 'Monday';
  else if (lower.includes('tuesday') || lower.includes('tue')) day = 'Tuesday';
  else if (lower.includes('wednesday') || lower.includes('wed')) day = 'Wednesday';
  else if (lower.includes('thursday') || lower.includes('thu')) day = 'Thursday';
  else if (lower.includes('friday') || lower.includes('fri')) day = 'Friday';

  // Match period (e.g. "period 6", "p6", "period 1", etc.)
  const periodMatch = lower.match(/(?:period|p)\s*([1-9])/);
  if (periodMatch) {
    return {
      day,
      period: parseInt(periodMatch[1], 10),
      matchedPrompt: `Detected ${day}, Period ${periodMatch[1]}`,
    };
  }

  // Match time formats like "01:30 pm", "1:30pm", "13:30", "11:00 am", "2 pm", "2:00"
  const timeRegex = /(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i;
  const match = lower.match(timeRegex);
  if (match) {
    let hours = parseInt(match[1], 10);
    const mins = match[2] ? parseInt(match[2], 10) : 0;
    const modifier = match[3]?.toLowerCase();

    if (modifier === 'pm' && hours < 12) hours += 12;
    if (modifier === 'am' && hours === 12) hours = 0;
    // Heuristic: If hours between 1 and 6 and no AM/PM specified, college daytime hours are PM (13:00 to 18:00)
    if (!modifier && hours >= 1 && hours <= 6) {
      hours += 12;
    }

    const time24 = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    const period = getPeriodForTime(time24);
    return {
      day,
      period,
      timeStr: formatTime12h(time24),
      matchedPrompt: `Detected ${day} at ${formatTime12h(time24)} (Period ${period})`,
    };
  }

  // Default to Tuesday Period 6 as in user prompt example
  return {
    day: 'Tuesday',
    period: 6,
    timeStr: '01:30 PM',
    matchedPrompt: 'Defaulted to Tuesday Period 6 (01:30 PM)',
  };
}
