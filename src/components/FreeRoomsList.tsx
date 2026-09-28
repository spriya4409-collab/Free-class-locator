import React from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Building,
  Sparkles,
  Users,
  Copy,
  Check,
  ChevronRight,
} from 'lucide-react';
import { RoomAvailability } from '../utils/classroomTracker';
import { DayOfWeek } from '../data/timetableData';

interface FreeRoomsListProps {
  rooms: RoomAvailability[];
  currentDay: DayOfWeek;
  currentPeriod: number;
  onSelectRoom?: (roomName: string) => void;
}

export const FreeRoomsList: React.FC<FreeRoomsListProps> = ({
  rooms,
  currentDay,
  currentPeriod,
  onSelectRoom,
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const freeRooms = rooms.filter((r) => r.isFree);
  const occupiedRooms = rooms.filter((r) => !r.isFree);

  const handleCopyText = (room: RoomAvailability) => {
    const text = `${room.venue.name} (${room.venue.floorLabel}): FREE from ${room.startTime} to ${room.endTime} (Remaining periods: P${room.freeStartPeriod} to P${room.freeEndPeriod})`;
    navigator.clipboard.writeText(text);
    setCopiedId(room.venue.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Free Rooms Header & Summary Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl p-5 text-white shadow-lg shadow-emerald-900/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 uppercase tracking-wider backdrop-blur-xs">
              Live Tracker Status
            </span>
            <span className="text-xs text-emerald-100">
              {currentDay} &bull; Period {currentPeriod}
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            {freeRooms.length} Quiet Classrooms Available Now
          </h2>
          <p className="text-sm text-emerald-100 mt-1 max-w-xl">
            Verified free rooms with guaranteed undisturbed study windows. No scheduled lectures or incoming professors during these periods.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
            <div className="text-xs text-emerald-200">Top Uninterrupted Window</div>
            <div className="text-xl font-black text-white">
              {freeRooms[0]?.durationMinutes
                ? `${Math.floor(freeRooms[0].durationMinutes / 60)}h ${freeRooms[0].durationMinutes % 60}m`
                : 'N/A'}
            </div>
          </div>
        </div>
      </div>

      {/* Free Rooms Grid */}
      {freeRooms.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
          <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            No Free Classrooms In This Slot
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            All tracked venues currently have scheduled lectures or lab sessions during Period {currentPeriod}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {freeRooms.map((room) => {
            const isCopied = copiedId === room.venue.id;
            const hours = Math.floor((room.durationMinutes || 0) / 60);
            const mins = (room.durationMinutes || 0) % 60;
            const durationStr = `${hours > 0 ? `${hours}h ` : ''}${mins > 0 ? `${mins}m` : ''}`.trim();

            return (
              <div
                key={room.venue.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 p-5 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Free Badge Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />

                <div>
                  {/* Card Header: Room Name & Floor */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {room.venue.name}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {room.venue.floorLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {room.venue.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleCopyText(room)}
                      title="Copy guaranteed free window details"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Guaranteed Free Window Box */}
                  <div className="my-3 p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40">
                    <div className="flex items-center justify-between text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        GUARANTEED FREE WINDOW
                      </span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-300">
                        {durationStr}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{room.startTime}</span>
                      <span className="text-xs text-slate-400 font-normal px-2">until</span>
                      <span>{room.endTime}</span>
                    </div>

                    <div className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-1 font-medium flex items-center gap-1">
                      <span>Periods P{room.freeStartPeriod} to P{room.freeEndPeriod}</span>
                      <span>&bull;</span>
                      <span>{room.remainingPeriodsCount} consecutive periods</span>
                    </div>
                  </div>

                  {/* Next class details */}
                  <div className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    {room.nextScheduledClass ? (
                      <div>
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          Next lecture at {room.nextScheduledClass.startTime} (Period {room.nextScheduledClass.period}):
                        </span>{' '}
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {room.nextScheduledClass.section}
                        </span>{' '}
                        ({room.nextScheduledClass.subject})
                      </div>
                    ) : (
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        No further classes scheduled today! Free until end of day (04:50 PM).
                      </span>
                    )}
                  </div>

                  {/* Day Timeline Mini Strip */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mb-1 flex justify-between">
                      <span>Today's Periods (P1-P9):</span>
                      <span className="text-emerald-600 dark:text-emerald-400">Green = Free</span>
                    </div>
                    <div className="grid grid-cols-9 gap-1">
                      {room.todayAllPeriods.map((slot) => {
                        const isCurrentSlot = slot.period === currentPeriod;
                        return (
                          <div
                            key={slot.period}
                            title={`Period ${slot.period}: ${slot.isOccupied ? `Occupied by ${slot.booking?.section} (${slot.booking?.subject})` : 'Free'}`}
                            className={`h-5 rounded flex items-center justify-center text-[9px] font-bold transition-all ${
                              slot.isOccupied
                                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
                                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                            } ${isCurrentSlot ? 'ring-2 ring-blue-500 ring-offset-1' : ''}`}
                          >
                            P{slot.period}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {room.venue.homeFor && room.venue.homeFor.length > 0 && (
                  <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-slate-400" />
                    <span>Home venue: {room.venue.homeFor.join(', ')}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Occupied Rooms Accordion/Section */}
      {occupiedRooms.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-500" />
                Currently Occupied Venues during Period {currentPeriod} ({occupiedRooms.length})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                These rooms have scheduled classes in progress. Check their schedule for upcoming free slots.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {occupiedRooms.map((room) => (
              <div
                key={room.venue.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 text-xs opacity-85 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {room.venue.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 font-medium">
                    Occupied
                  </span>
                </div>
                <div className="mt-2 text-slate-600 dark:text-slate-400">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">
                    {room.currentBooking?.section}
                  </div>
                  <div className="text-slate-500">
                    Subject: {room.currentBooking?.subject}
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400">
                  Floor: {room.venue.floorLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
