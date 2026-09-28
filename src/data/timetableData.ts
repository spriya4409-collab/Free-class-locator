export interface PeriodSlot {
  period: number;
  name: string;
  startTime: string; // "09:00"
  endTime: string;   // "09:50"
  isBreak?: boolean;
  breakType?: 'tea' | 'lunch';
}

export const SENIOR_PERIOD_SLOTS: PeriodSlot[] = [
  { period: 1, name: "Period 1", startTime: "09:00", endTime: "09:50" },
  { period: 2, name: "Period 2", startTime: "09:50", endTime: "10:40" },
  { period: 3, name: "Period 3", startTime: "10:50", endTime: "11:40" },
  { period: 4, name: "Period 4", startTime: "11:40", endTime: "12:30" },
  { period: 5, name: "Period 5", startTime: "12:30", endTime: "13:20" },
  { period: 6, name: "Period 6", startTime: "13:20", endTime: "14:10" },
  { period: 7, name: "Period 7", startTime: "14:10", endTime: "15:00" },
  { period: 8, name: "Period 8", startTime: "15:10", endTime: "16:00" },
  { period: 9, name: "Period 9", startTime: "16:00", endTime: "16:50" },
];

export const FIRST_YEAR_PERIOD_SLOTS: PeriodSlot[] = [
  { period: 1, name: "Period 1", startTime: "09:00", endTime: "09:50" },
  { period: 2, name: "Period 2", startTime: "09:55", endTime: "10:45" },
  { period: 3, name: "Period 3", startTime: "10:50", endTime: "11:40" },
  { period: 4, name: "Period 4", startTime: "11:45", endTime: "12:35" },
  { period: 5, name: "Period 5 / Lunch", startTime: "12:35", endTime: "13:30" },
  { period: 6, name: "Period 6", startTime: "13:30", endTime: "14:20" },
  { period: 7, name: "Period 7", startTime: "14:25", endTime: "15:15" },
  { period: 8, name: "Period 8", startTime: "15:20", endTime: "16:10" },
  { period: 9, name: "Period 9", startTime: "16:15", endTime: "17:05" },
];

export interface RoomVenue {
  id: string;
  name: string;
  floor: number;
  floorLabel: string;
  type: 'classroom' | 'lab' | 'workshop' | 'seminar';
  description: string;
  homeFor?: string[];
  aliases?: string[];
}

export const VENUES: RoomVenue[] = [
  { id: "IST 106", name: "IST 106", floor: 1, floorLabel: "1st Floor", type: "classroom", description: "TB-106 / H-TB-106 / CDC-TB-106", aliases: ["TB-106", "H-TB-106", "CDC-TB-106"] },
  { id: "IST 107", name: "IST 107", floor: 1, floorLabel: "1st Floor", type: "lab", description: "MPMC LAB-107 / LAB-107", aliases: ["MPMC LAB-107", "LAB-107", "DLMS/EEC-107"] },
  { id: "IST 108", name: "IST 108", floor: 1, floorLabel: "1st Floor", type: "lab", description: "LAB-IST 108 / BIO DSP LAB-108 / I-108 / PCB Lab", aliases: ["LAB-IST 108", "LAB-108", "BIO DSP LAB-108", "I-108", "PCB Lab"] },
  { id: "IST 211", name: "IST 211", floor: 2, floorLabel: "2nd Floor", type: "classroom", description: "Home venue for III-BME (AN)", homeFor: ["III BME"] },
  { id: "IST 225", name: "IST 225", floor: 2, floorLabel: "2nd Floor", type: "classroom", description: "Home venue for IV ECE-A", homeFor: ["IV ECE-A"] },
  { id: "IST 227", name: "IST 227", floor: 2, floorLabel: "2nd Floor", type: "classroom", description: "Home venue for IV ECE-B", homeFor: ["IV ECE-B"] },
  { id: "IST 309", name: "IST 309", floor: 3, floorLabel: "3rd Floor", type: "lab", description: "LAB-309 / DSP Lab", aliases: ["LAB-309", "DLMS/EEC-309"] },
  { id: "IST 411", name: "IST 411", floor: 4, floorLabel: "4th Floor", type: "classroom", description: "Home venue for II ECE-DS B (AN)", homeFor: ["II ECE-DS B"] },
  { id: "IST 416", name: "IST 416", floor: 4, floorLabel: "4th Floor", type: "classroom", description: "Home venue for II ECE-DS A (FN)", homeFor: ["II ECE-DS A"] },
  { id: "IST 502", name: "IST 502", floor: 5, floorLabel: "5th Floor", type: "classroom", description: "I ECE-DS Classroom", homeFor: ["I ECE-DS"] },
  { id: "IST 510", name: "IST 510", floor: 5, floorLabel: "5th Floor", type: "classroom", description: "CDC / IST 510", aliases: ["CDC IST510", "IST510"] },
  { id: "IST 518", name: "IST 518", floor: 5, floorLabel: "5th Floor", type: "classroom", description: "Home venue for III ECE-A (FN) & III ECE-B (AN)", homeFor: ["III ECE-A", "III ECE-B"] },
  { id: "IST 519", name: "IST 519", floor: 5, floorLabel: "5th Floor", type: "classroom", description: "Home venue for III ECE-DS (FN)", homeFor: ["III ECE-DS"] },
  { id: "IST 520", name: "IST 520", floor: 5, floorLabel: "5th Floor", type: "classroom", description: "G-IST520 / IST520", aliases: ["G-IST520", "IST520"] },
  { id: "IST 602", name: "IST 602", floor: 6, floorLabel: "6th Floor", type: "classroom", description: "Home venue for II-BME (FN), I ECE-A, I ECE-B/EEE", homeFor: ["II BME", "I ECE-A", "I ECE-B & EEE"] },
  { id: "IST 609", name: "IST 609", floor: 6, floorLabel: "6th Floor", type: "classroom", description: "CDC IST609", aliases: ["CDC IST609"] },
  { id: "IST 617", name: "IST 617", floor: 6, floorLabel: "6th Floor", type: "lab", description: "PPS LAB / PCB Lab IST 617", aliases: ["PPS LAB 617", "PCB Lab 617"] },
  { id: "IST 618", name: "IST 618", floor: 6, floorLabel: "6th Floor", type: "lab", description: "PPS LAB IST 618", aliases: ["PPS LAB 618"] },
  { id: "IST 625", name: "IST 625", floor: 6, floorLabel: "6th Floor", type: "classroom", description: "CDC / G-625", aliases: ["CDC 625", "G-625"] },
  { id: "IST 626", name: "IST 626", floor: 6, floorLabel: "6th Floor", type: "classroom", description: "German IST626", aliases: ["German 626"] },
  { id: "IST 702", name: "IST 702", floor: 7, floorLabel: "7th Floor", type: "classroom", description: "I Biotech-B / Biomedical Engg Classroom", homeFor: ["I Biotech-B & Biomedical"] },
  { id: "IST 710", name: "IST 710", floor: 7, floorLabel: "7th Floor", type: "classroom", description: "F IST710 / CDC IST710 / A IST710", aliases: ["F IST710", "CDC IST710", "A IST710"] },
  { id: "Workshop", name: "Workshop (IST 20, 21)", floor: 0, floorLabel: "Ground Floor", type: "workshop", description: "Basic Civil & Mechanical Workshop", aliases: ["IST 20,21", "Workshop"] },
];

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
export const DAYS_OF_WEEK: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
