import { DayOfWeek } from './timetableData';

export interface ClassSession {
  section: string;
  subject: string;
  room: string; // Venue ID (e.g. 'IST 225')
  period: number; // 1 to 9
  day: DayOfWeek;
  notes?: string;
  yearGroup: 'senior' | 'firstYear';
}

// Master list of all scheduled bookings across all 10 sections
export const MASTER_SCHEDULE: ClassSession[] = [
  // --- 1. IV ECE-A (Home Venue: IST 225) ---
  // Mon: P1: C, P2: D, P3: A, P4: D | P5-P9: Free
  { section: 'IV ECE-A', subject: 'C', room: 'IST 225', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'D', room: 'IST 225', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'A', room: 'IST 225', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'D', room: 'IST 225', period: 4, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: C, P2-P5: LAB (IST 108), P4: F | P6-P9: Free
  { section: 'IV ECE-A', subject: 'C', room: 'IST 225', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'LAB (IST 108)', room: 'IST 108', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'LAB (IST 108)', room: 'IST 108', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'LAB / F', room: 'IST 108', period: 4, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'LAB (IST 108)', room: 'IST 108', period: 5, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: B, P2: IST 108, P3: E, P4: F | P5-P9: Free
  { section: 'IV ECE-A', subject: 'B', room: 'IST 225', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'LAB (IST 108)', room: 'IST 108', period: 2, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'E', room: 'IST 225', period: 3, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'F', room: 'IST 225', period: 4, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1: F, P2: A, P3: E, P4: B | P5-P9: Free
  { section: 'IV ECE-A', subject: 'F', room: 'IST 225', period: 1, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'A', room: 'IST 225', period: 2, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'E', room: 'IST 225', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'B', room: 'IST 225', period: 4, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1: C, P2: A, P3: D, P4: E | P5-P9: Free
  { section: 'IV ECE-A', subject: 'C', room: 'IST 225', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'A', room: 'IST 225', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'D', room: 'IST 225', period: 3, day: 'Friday', yearGroup: 'senior' },
  { section: 'IV ECE-A', subject: 'E', room: 'IST 225', period: 4, day: 'Friday', yearGroup: 'senior' },

  // --- 2. IV ECE-B (Home Venue: IST 227) ---
  // Mon: P1: C, P2: A, P3: TE, P4: E, P5: F | P6-P9: Free
  { section: 'IV ECE-B', subject: 'C', room: 'IST 227', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'A', room: 'IST 227', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'TE', room: 'IST 227', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'E', room: 'IST 227', period: 4, day: 'Monday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'F', room: 'IST 227', period: 5, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: C, P2: E, P3: A, P4: F, P5: B | P6-P9: Free
  { section: 'IV ECE-B', subject: 'C', room: 'IST 227', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'E', room: 'IST 227', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'A', room: 'IST 227', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'F', room: 'IST 227', period: 4, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'B', room: 'IST 227', period: 5, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: C, P2: D, P3: B, P4: LAB-IST 108, P5: B | P6-P9: Free
  { section: 'IV ECE-B', subject: 'C', room: 'IST 227', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'D', room: 'IST 227', period: 2, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'B', room: 'IST 227', period: 3, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'LAB', room: 'IST 108', period: 4, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'B', room: 'IST 227', period: 5, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1: D, P2: B, P3: DREA K, P4: A, P5: A | P6-P9: Free
  { section: 'IV ECE-B', subject: 'D', room: 'IST 227', period: 1, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'B', room: 'IST 227', period: 2, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'DREA K', room: 'IST 227', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'A', room: 'IST 227', period: 4, day: 'Thursday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'A', room: 'IST 227', period: 5, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1: E, P2: D, P3: Free, P4: F | P5-P9: Free
  { section: 'IV ECE-B', subject: 'E', room: 'IST 227', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'D', room: 'IST 227', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'IV ECE-B', subject: 'F', room: 'IST 227', period: 4, day: 'Friday', yearGroup: 'senior' },

  // --- 3. III ECE-DS (Home Venue: IST 519/FN) ---
  // Mon: P1: E, P2: B, P3: C, P4: A | P5-P9: Free
  { section: 'III ECE-DS', subject: 'E', room: 'IST 519', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'B', room: 'IST 519', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'C', room: 'IST 519', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'A', room: 'IST 519', period: 4, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: C, P2: B, P3: D, P4: F | P5-P9: Free
  { section: 'III ECE-DS', subject: 'C', room: 'IST 519', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'B', room: 'IST 519', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'D', room: 'IST 519', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'F', room: 'IST 519', period: 4, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: H, P2: B, P3: A, P4: C, P5: LUNCH, P6-P8: LAB-108/107, P9: G-625
  { section: 'III ECE-DS', subject: 'H', room: 'IST 519', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'B', room: 'IST 519', period: 2, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'A', room: 'IST 519', period: 3, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'C', room: 'IST 519', period: 4, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'LAB', room: 'IST 108', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'LAB', room: 'IST 108', period: 7, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'LAB', room: 'IST 108', period: 8, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'G', room: 'IST 625', period: 9, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1: A, P2: D, P3: E, P4: F | P5-P9: Free
  { section: 'III ECE-DS', subject: 'A', room: 'IST 519', period: 1, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'D', room: 'IST 519', period: 2, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'E', room: 'IST 519', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'F', room: 'IST 519', period: 4, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1: D, P2: A, P3: E, P4: B-Proj, P5: LUNCH, P6: G-625, P7-P9: LAB-108/107
  { section: 'III ECE-DS', subject: 'D', room: 'IST 519', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'A', room: 'IST 519', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'E', room: 'IST 519', period: 3, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'B-Proj', room: 'IST 519', period: 4, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'G', room: 'IST 625', period: 6, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'LAB', room: 'IST 108', period: 7, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'LAB', room: 'IST 108', period: 8, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-DS', subject: 'LAB', room: 'IST 108', period: 9, day: 'Friday', yearGroup: 'senior' },

  // --- 4. III ECE-A (Home Venue: IST 518/FN) ---
  // Mon: P1: E, P2: B, P3: B, P4: A | P5-P9: Free
  { section: 'III ECE-A', subject: 'E', room: 'IST 518', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'B', room: 'IST 518', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'B', room: 'IST 518', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'A', room: 'IST 518', period: 4, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: H, P2: D, P3: B, P4: B-Proj | P5-P9: Free
  { section: 'III ECE-A', subject: 'H', room: 'IST 518', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'D', room: 'IST 518', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'B', room: 'IST 518', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'B-Proj', room: 'IST 518', period: 4, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: C, P2: Free, P3: D, P4: F, P5: LUNCH, P6: G-625, P7-P9: LAB-108/309
  { section: 'III ECE-A', subject: 'C', room: 'IST 518', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'D', room: 'IST 518', period: 3, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'F', room: 'IST 518', period: 4, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'G', room: 'IST 625', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'LAB', room: 'IST 108', period: 7, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'LAB', room: 'IST 108', period: 8, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'LAB', room: 'IST 108', period: 9, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1: A, P2: A, P3: C, P4: F | P5-P9: Free
  { section: 'III ECE-A', subject: 'A', room: 'IST 518', period: 1, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'A', room: 'IST 518', period: 2, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'C', room: 'IST 518', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'F', room: 'IST 518', period: 4, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1: D, P2: E, P3: E, P4: C, P5: LUNCH, P6: G-625, P7-P9: LAB-108/309
  { section: 'III ECE-A', subject: 'D', room: 'IST 518', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'E', room: 'IST 518', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'E', room: 'IST 518', period: 3, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'C', room: 'IST 518', period: 4, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'G', room: 'IST 625', period: 6, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'LAB', room: 'IST 108', period: 7, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'LAB', room: 'IST 108', period: 8, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-A', subject: 'LAB', room: 'IST 108', period: 9, day: 'Friday', yearGroup: 'senior' },

  // --- 5. III ECE-B (Home Venue: IST 518/AN) ---
  // Mon: P1-P2: LAB-108/309, P3-P5: Free, P6: E, P7: B, P8: A, P9: D
  { section: 'III ECE-B', subject: 'LAB', room: 'IST 309', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'LAB', room: 'IST 309', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'E', room: 'IST 518', period: 6, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'B', room: 'IST 518', period: 7, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'A', room: 'IST 518', period: 8, day: 'Monday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'D', room: 'IST 518', period: 9, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: G-625, P2-P5: Free, P6: F, P7: B, P8: D, P9: C
  { section: 'III ECE-B', subject: 'G', room: 'IST 625', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'F', room: 'IST 518', period: 6, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'B', room: 'IST 518', period: 7, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'D', room: 'IST 518', period: 8, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'C', room: 'IST 518', period: 9, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: G-625, P2-P4: Free, P5: LUNCH, P6: B-Proj, P7: B, P8: A, P9: H
  { section: 'III ECE-B', subject: 'G', room: 'IST 625', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'B-Proj', room: 'IST 518', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'B', room: 'IST 518', period: 7, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'A', room: 'IST 518', period: 8, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'H', room: 'IST 518', period: 9, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1-P5: Free, P6: A, P7: C, P8: E, P9: F
  { section: 'III ECE-B', subject: 'A', room: 'IST 518', period: 6, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'C', room: 'IST 518', period: 7, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'E', room: 'IST 518', period: 8, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'F', room: 'IST 518', period: 9, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1-P2: LAB-108/309, P3-P5: Free, P6: C, P7: A, P8: E, P9: D
  { section: 'III ECE-B', subject: 'LAB', room: 'IST 309', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'LAB', room: 'IST 309', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'C', room: 'IST 518', period: 6, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'A', room: 'IST 518', period: 7, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'E', room: 'IST 518', period: 8, day: 'Friday', yearGroup: 'senior' },
  { section: 'III ECE-B', subject: 'D', room: 'IST 518', period: 9, day: 'Friday', yearGroup: 'senior' },

  // --- 6. III BME (Home Venue: IST 211/AN) ---
  // Mon: P1: G-625, P2: Free, P3-P4: MPMC LAB-107, P5: Free, P6: E, P7: B, P8: F, P9: H
  { section: 'III BME', subject: 'G', room: 'IST 625', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'MPMC LAB', room: 'IST 107', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'MPMC LAB', room: 'IST 107', period: 4, day: 'Monday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'E', room: 'IST 211', period: 6, day: 'Monday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'B', room: 'IST 211', period: 7, day: 'Monday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'F', room: 'IST 211', period: 8, day: 'Monday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'H', room: 'IST 211', period: 9, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1-P2: BIO DSP LAB-108, P3-P4: G-625, P5: Free, P6: C, P7: D, P8: A, P9: B
  { section: 'III BME', subject: 'BIO DSP LAB', room: 'IST 108', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'BIO DSP LAB', room: 'IST 108', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'G', room: 'IST 625', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'G', room: 'IST 625', period: 4, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'C', room: 'IST 211', period: 6, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'D', room: 'IST 211', period: 7, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'A', room: 'IST 211', period: 8, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'B', room: 'IST 211', period: 9, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1-P4: Free, P5: LUNCH, P6: C, P7: A, P8: F, P9: D
  { section: 'III BME', subject: 'C', room: 'IST 211', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'A', room: 'IST 211', period: 7, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'F', room: 'IST 211', period: 8, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'D', room: 'IST 211', period: 9, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1-P3: Free, P4: I-108, P5: Free, P6: A, P7: C, P8: E, P9: B
  { section: 'III BME', subject: 'I-108', room: 'IST 108', period: 4, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'A', room: 'IST 211', period: 6, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'C', room: 'IST 211', period: 7, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'E', room: 'IST 211', period: 8, day: 'Thursday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'B', room: 'IST 211', period: 9, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1-P2: I-108, P3-P5: Free, P6: F, P7: A, P8: D, P9: E
  { section: 'III BME', subject: 'I-108', room: 'IST 108', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'I-108', room: 'IST 108', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'F', room: 'IST 211', period: 6, day: 'Friday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'A', room: 'IST 211', period: 7, day: 'Friday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'D', room: 'IST 211', period: 8, day: 'Friday', yearGroup: 'senior' },
  { section: 'III BME', subject: 'E', room: 'IST 211', period: 9, day: 'Friday', yearGroup: 'senior' },

  // --- 7. II ECE-DS A (Home Venue: IST 416/FN) ---
  // Mon: P1: E, P2: A, P3-P4: I, P5: Free, P6-P7: G-602, P8-P9: LAB-309/107
  { section: 'II ECE-DS A', subject: 'E', room: 'IST 416', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'A', room: 'IST 416', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'I', room: 'IST 416', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'I', room: 'IST 416', period: 4, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'G-602', room: 'IST 602', period: 6, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'G-602', room: 'IST 602', period: 7, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'LAB-309/107', room: 'IST 309', period: 8, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'LAB-309/107', room: 'IST 309', period: 9, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: C, P2: A, P3: E, P4: D, P5: Free, P6-P7: G-602, P8-P9: H-TB-106
  { section: 'II ECE-DS A', subject: 'C', room: 'IST 416', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'A', room: 'IST 416', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'E', room: 'IST 416', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'D', room: 'IST 416', period: 4, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'G-602', room: 'IST 602', period: 6, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'G-602', room: 'IST 602', period: 7, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'H-TB-106', room: 'IST 106', period: 8, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'H-TB-106', room: 'IST 106', period: 9, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: A, P2: B, P3: C, P4: D, P5: LUNCH, P6-P7: H-TB-106, P8-P9: Free
  { section: 'II ECE-DS A', subject: 'A', room: 'IST 416', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'B', room: 'IST 416', period: 2, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'C', room: 'IST 416', period: 3, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'D', room: 'IST 416', period: 4, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'H-TB-106', room: 'IST 106', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'H-TB-106', room: 'IST 106', period: 7, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1: B, P2: C, P3: A, P4: F, P5: Free, P6-P7: LAB-309/107, P8-P9: Free
  { section: 'II ECE-DS A', subject: 'B', room: 'IST 416', period: 1, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'C', room: 'IST 416', period: 2, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'A', room: 'IST 416', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'F', room: 'IST 416', period: 4, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'LAB-309/107', room: 'IST 309', period: 6, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'LAB-309/107', room: 'IST 309', period: 7, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1: D, P2: B, P3: E, P4: C | P5-P9: Free
  { section: 'II ECE-DS A', subject: 'D', room: 'IST 416', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'B', room: 'IST 416', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'E', room: 'IST 416', period: 3, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS A', subject: 'C', room: 'IST 416', period: 4, day: 'Friday', yearGroup: 'senior' },

  // --- 8. II ECE-DS B (Home Venue: IST 411/AN) ---
  // Mon: P1-P2: LAB-309/107, P3: D, P4: B, P5: C, P6: Free, P7: 1, P8: A, P9: Free
  { section: 'II ECE-DS B', subject: 'LAB-309/107', room: 'IST 107', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'LAB-309/107', room: 'IST 107', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'D', room: 'IST 411', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'B', room: 'IST 411', period: 4, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'C', room: 'IST 411', period: 5, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: '1', room: 'IST 411', period: 7, day: 'Monday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'A', room: 'IST 411', period: 8, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1-P2: LAB-309/107, P3: C, P4: D, P5: E, P6: Free, P7: Free, P8: Free, P9: Free
  { section: 'II ECE-DS B', subject: 'LAB-309/107', room: 'IST 107', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'LAB-309/107', room: 'IST 107', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'C', room: 'IST 411', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'D', room: 'IST 411', period: 4, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'E', room: 'IST 411', period: 5, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1-P2: G-401, P3-P4: Free, P5: LUNCH, P6: 1, P7: E, P8: A, P9: D
  { section: 'II ECE-DS B', subject: '1', room: 'IST 411', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'E', room: 'IST 411', period: 7, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'A', room: 'IST 411', period: 8, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'D', room: 'IST 411', period: 9, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1-P2: G-401, P3: H-TB-106, P4: Free, P5: A, P6: C, P7: Free, P8: B, P9: E
  { section: 'II ECE-DS B', subject: 'H-TB-106', room: 'IST 106', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'A', room: 'IST 411', period: 5, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'C', room: 'IST 411', period: 6, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'B', room: 'IST 411', period: 8, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'E', room: 'IST 411', period: 9, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1-P2: H-TB-106, P3-P5: Free, P6: F, P7: A, P8: B, P9: C
  { section: 'II ECE-DS B', subject: 'H-TB-106', room: 'IST 106', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'H-TB-106', room: 'IST 106', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'F', room: 'IST 411', period: 6, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'A', room: 'IST 411', period: 7, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'B', room: 'IST 411', period: 8, day: 'Friday', yearGroup: 'senior' },
  { section: 'II ECE-DS B', subject: 'C', room: 'IST 411', period: 9, day: 'Friday', yearGroup: 'senior' },

  // --- 9. II BME (Home Venue: IST 602/FN) ---
  // Mon: P1: E, P2: C, P3-P4: I, P5: Free, P6-P7: DLMS/EEC-107,309, P8-P9: Free
  { section: 'II BME', subject: 'E', room: 'IST 602', period: 1, day: 'Monday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'C', room: 'IST 602', period: 2, day: 'Monday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'I', room: 'IST 602', period: 3, day: 'Monday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'I', room: 'IST 602', period: 4, day: 'Monday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'DLMS/EEC', room: 'IST 107', period: 6, day: 'Monday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'DLMS/EEC', room: 'IST 107', period: 7, day: 'Monday', yearGroup: 'senior' },

  // Tue: P1: C, P2: E, P3: B, P4: A, P5: Free, P6-P7: H-TB-106, P8-P9: Free
  { section: 'II BME', subject: 'C', room: 'IST 602', period: 1, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'E', room: 'IST 602', period: 2, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'B', room: 'IST 602', period: 3, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'A', room: 'IST 602', period: 4, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'H-TB-106', room: 'IST 106', period: 6, day: 'Tuesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'H-TB-106', room: 'IST 106', period: 7, day: 'Tuesday', yearGroup: 'senior' },

  // Wed: P1: B, P2: D, P3: A, P4: Free, P5: LUNCH, P6: H-TB-106, P7: G-602, P8-P9: Free
  { section: 'II BME', subject: 'B', room: 'IST 602', period: 1, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'D', room: 'IST 602', period: 2, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'A', room: 'IST 602', period: 3, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'H-TB-106', room: 'IST 106', period: 6, day: 'Wednesday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'G-602', room: 'IST 602', period: 7, day: 'Wednesday', yearGroup: 'senior' },

  // Thu: P1: A, P2: E, P3: B, P4: D, P5: Free, P6-P7: Free, P8-P9: DLMS/EEC-107,309
  { section: 'II BME', subject: 'A', room: 'IST 602', period: 1, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'E', room: 'IST 602', period: 2, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'B', room: 'IST 602', period: 3, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'D', room: 'IST 602', period: 4, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'DLMS/EEC', room: 'IST 107', period: 8, day: 'Thursday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'DLMS/EEC', room: 'IST 107', period: 9, day: 'Thursday', yearGroup: 'senior' },

  // Fri: P1: F, P2: A, P3: C, P4: D, P5: Free, P6-P7: Free, P8-P9: G-602
  { section: 'II BME', subject: 'F', room: 'IST 602', period: 1, day: 'Friday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'A', room: 'IST 602', period: 2, day: 'Friday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'C', room: 'IST 602', period: 3, day: 'Friday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'D', room: 'IST 602', period: 4, day: 'Friday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'G-602', room: 'IST 602', period: 8, day: 'Friday', yearGroup: 'senior' },
  { section: 'II BME', subject: 'G-602', room: 'IST 602', period: 9, day: 'Friday', yearGroup: 'senior' },

  // --- 10. I Year Classes ---
  // A. I ECE-A
  // Mon: P1-P2: E (IST 602), P3: B (IST 602), P4: A (IST 602), P5: LUNCH, P6: Che lab, P7: F (IST 710), P8-P9: CDC (IST 710)
  { section: 'I ECE-A', subject: 'E', room: 'IST 602', period: 1, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'E', room: 'IST 602', period: 2, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'B', room: 'IST 602', period: 3, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'A', room: 'IST 602', period: 4, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'F', room: 'IST 710', period: 7, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'CDC', room: 'IST 710', period: 8, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'CDC', room: 'IST 710', period: 9, day: 'Monday', yearGroup: 'firstYear' },

  // Tue: P1: C (IST 602), P2: B (IST 602), P3: A (IST 602), P4: D (IST 602), P5: LUNCH, P6-P9: Workshop (IST 20,21)
  { section: 'I ECE-A', subject: 'C', room: 'IST 602', period: 1, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'B', room: 'IST 602', period: 2, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'A', room: 'IST 602', period: 3, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'D', room: 'IST 602', period: 4, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'Workshop', room: 'Workshop', period: 6, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'Workshop', room: 'Workshop', period: 7, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'Workshop', room: 'Workshop', period: 8, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'Workshop', room: 'Workshop', period: 9, day: 'Tuesday', yearGroup: 'firstYear' },

  // Wed: P1: B (IST 602), P2: E (IST 602), P3: D (IST 602), P4-P5: LUNCH/Free, P6-P7: PPS LAB (IST 618), P8-P9: PCB Lab (IST 108)
  { section: 'I ECE-A', subject: 'B', room: 'IST 602', period: 1, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'E', room: 'IST 602', period: 2, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'D', room: 'IST 602', period: 3, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'PPS LAB', room: 'IST 618', period: 6, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'PPS LAB', room: 'IST 618', period: 7, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'PCB Lab', room: 'IST 108', period: 8, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'PCB Lab', room: 'IST 108', period: 9, day: 'Wednesday', yearGroup: 'firstYear' },

  // Thu: P1-P2: German (IST 602), P3: A (IST 602), P4-P5: Free, P6-P7: CDC (IST 510), P8-P9: NSS (IST 201)
  { section: 'I ECE-A', subject: 'German', room: 'IST 602', period: 1, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'German', room: 'IST 602', period: 2, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'A', room: 'IST 602', period: 3, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'CDC', room: 'IST 510', period: 6, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'CDC', room: 'IST 510', period: 7, day: 'Thursday', yearGroup: 'firstYear' },

  // Fri: P1: D (IST 602), P2: A (IST 602), P3: C (IST 602), P4: B (IST 602), P5: Free, P6: F (IST 602), P7-P9: German (IST 626)
  { section: 'I ECE-A', subject: 'D', room: 'IST 602', period: 1, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'A', room: 'IST 602', period: 2, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'C', room: 'IST 602', period: 3, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'B', room: 'IST 602', period: 4, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'F', room: 'IST 602', period: 6, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'German', room: 'IST 626', period: 7, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'German', room: 'IST 626', period: 8, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-A', subject: 'German', room: 'IST 626', period: 9, day: 'Friday', yearGroup: 'firstYear' },

  // B. I ECE-B & EEE
  // Mon: P1: F (IST 710)/G (IST 520), P2: CDC (IST 609), P3: Che lab, P4: Che lab, P5: E (IST 602), P6: E (IST 602), P7: B (IST 602), P8-P9: A (IST 602)
  { section: 'I ECE-B & EEE', subject: 'F/G', room: 'IST 710', period: 1, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'CDC', room: 'IST 609', period: 2, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'E', room: 'IST 602', period: 5, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'E', room: 'IST 602', period: 6, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'B', room: 'IST 602', period: 7, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 8, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 9, day: 'Monday', yearGroup: 'firstYear' },

  // Tue: P1-P4: Workshop (IST 20,21), P5: C (IST 602), P6: B (IST 602), P7: A (IST 602), P8-P9: D (IST 602)
  { section: 'I ECE-B & EEE', subject: 'Workshop', room: 'Workshop', period: 1, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'Workshop', room: 'Workshop', period: 2, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'Workshop', room: 'Workshop', period: 3, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'Workshop', room: 'Workshop', period: 4, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'C', room: 'IST 602', period: 5, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'B', room: 'IST 602', period: 6, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 7, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'D', room: 'IST 602', period: 8, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'D', room: 'IST 602', period: 9, day: 'Tuesday', yearGroup: 'firstYear' },

  // Wed: P1: F (IST 710)/G (IST 520), P2-P3: PPS Lab (IST 617), P4: CDC (IST 510), P5: CDC (IST 510), P6: PPS LAB (IST 618), P7: B (IST 602), P8: E (IST 602), P9: D (IST 602)
  { section: 'I ECE-B & EEE', subject: 'F/G', room: 'IST 710', period: 1, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'PPS LAB', room: 'IST 617', period: 2, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'PPS LAB', room: 'IST 617', period: 3, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'CDC', room: 'IST 510', period: 4, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'CDC', room: 'IST 510', period: 5, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'PPS LAB', room: 'IST 618', period: 6, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'B', room: 'IST 602', period: 7, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'E', room: 'IST 602', period: 8, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'D', room: 'IST 602', period: 9, day: 'Wednesday', yearGroup: 'firstYear' },

  // Thu: P1-P2: NSS (201), P3: PCB Lab/EC Lab (IST 617), P4: C (IST 626), P5: A (IST 710), P6: German (IST 626), P7-P9: D (IST 602)
  { section: 'I ECE-B & EEE', subject: 'PCB/EC Lab', room: 'IST 617', period: 3, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'C', room: 'IST 626', period: 4, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 710', period: 5, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'German', room: 'IST 626', period: 6, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'D', room: 'IST 602', period: 7, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'D', room: 'IST 602', period: 8, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'D', room: 'IST 602', period: 9, day: 'Thursday', yearGroup: 'firstYear' },

  // Fri: P1-P2: German (IST 602), P3-P9: B (IST 602), A (IST 602)
  { section: 'I ECE-B & EEE', subject: 'German', room: 'IST 602', period: 1, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'German', room: 'IST 602', period: 2, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'B', room: 'IST 602', period: 3, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 4, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'B', room: 'IST 602', period: 5, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 6, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'B', room: 'IST 602', period: 7, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 8, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-B & EEE', subject: 'A', room: 'IST 602', period: 9, day: 'Friday', yearGroup: 'firstYear' },

  // C. I ECE-DS
  // Mon: P1: F (IST 710), P2-P3: CDC, P4: PCB Lab (IST 617), P5: E (IST 502), P6: E (IST 502), P7: B (IST 502), P8-P9: A (IST 502)
  { section: 'I ECE-DS', subject: 'F', room: 'IST 710', period: 1, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'PCB Lab', room: 'IST 617', period: 4, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'E', room: 'IST 502', period: 5, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'E', room: 'IST 502', period: 6, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'B', room: 'IST 502', period: 7, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'A', room: 'IST 502', period: 8, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'A', room: 'IST 502', period: 9, day: 'Monday', yearGroup: 'firstYear' },

  // Tue: P1: Che lab, P2-P3: NSS (201), P4: C (IST 502), P5: B (IST 502), P6: B (IST 502), P7: A (IST 502), P8: E (IST 502), P9: D (IST 502)
  { section: 'I ECE-DS', subject: 'C', room: 'IST 502', period: 4, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'B', room: 'IST 502', period: 5, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'B', room: 'IST 502', period: 6, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'A', room: 'IST 502', period: 7, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'E', room: 'IST 502', period: 8, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'D', room: 'IST 502', period: 9, day: 'Tuesday', yearGroup: 'firstYear' },

  // Wed: P1-P2: CDC (IST 510), P3: A (IST 710), P4-P6: PPS LAB (IST 617), P7: IST 502, P8: IST 502, P9: IST 502
  { section: 'I ECE-DS', subject: 'CDC', room: 'IST 510', period: 1, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'CDC', room: 'IST 510', period: 2, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'A', room: 'IST 710', period: 3, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'PPS LAB', room: 'IST 617', period: 4, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'PPS LAB', room: 'IST 617', period: 5, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'PPS LAB', room: 'IST 617', period: 6, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Class', room: 'IST 502', period: 7, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Class', room: 'IST 502', period: 8, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Class', room: 'IST 502', period: 9, day: 'Wednesday', yearGroup: 'firstYear' },

  // Thu: P1: F (IST 710), P2: A (IST 510), P3: D (IST 710), P4: German (IST 502), P5-P6: Free, P7: C (IST 502), P8-P9: B (IST 502)
  { section: 'I ECE-DS', subject: 'F', room: 'IST 710', period: 1, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'A', room: 'IST 510', period: 2, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'D', room: 'IST 710', period: 3, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'German', room: 'IST 502', period: 4, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'C', room: 'IST 502', period: 7, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'B', room: 'IST 502', period: 8, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'B', room: 'IST 502', period: 9, day: 'Thursday', yearGroup: 'firstYear' },

  // Fri: P1-P2: German (IST 626), P3-P4: PPS LAB, P5-P9: Workshop (IST 20,21)
  { section: 'I ECE-DS', subject: 'German', room: 'IST 626', period: 1, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'German', room: 'IST 626', period: 2, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Workshop', room: 'Workshop', period: 5, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Workshop', room: 'Workshop', period: 6, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Workshop', room: 'Workshop', period: 7, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Workshop', room: 'Workshop', period: 8, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I ECE-DS', subject: 'Workshop', room: 'Workshop', period: 9, day: 'Friday', yearGroup: 'firstYear' },

  // D. I Biotech-B & Biomedical Engg
  // Mon: P1: YOGA, P2: C (IST 520), P3: YOGA, P4: F (IST 710)/G (IST 520), P5: E (IST 702), P6: E (IST 702), P7: A (IST 702), P8-P9: B (IST 702)
  { section: 'I Biotech-B & Biomed', subject: 'C', room: 'IST 520', period: 2, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'F/G', room: 'IST 710', period: 4, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'E', room: 'IST 702', period: 5, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'E', room: 'IST 702', period: 6, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'A', room: 'IST 702', period: 7, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'B', room: 'IST 702', period: 8, day: 'Monday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'B', room: 'IST 702', period: 9, day: 'Monday', yearGroup: 'firstYear' },

  // Tue: P1: C (IST 520), P2-P3: CDC (IST 710), P4: F (IST 710), P5-P6: Free, P7: B (IST 702), P8: A (IST 702), P9: D (IST 702)
  { section: 'I Biotech-B & Biomed', subject: 'C', room: 'IST 520', period: 1, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'CDC', room: 'IST 710', period: 2, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'CDC', room: 'IST 710', period: 3, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'F', room: 'IST 710', period: 4, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'B', room: 'IST 702', period: 7, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'A', room: 'IST 702', period: 8, day: 'Tuesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'D', room: 'IST 702', period: 9, day: 'Tuesday', yearGroup: 'firstYear' },

  // Wed: P1-P4: Workshop (IST 20,21), P5: Free, P6: D (IST 702), P7: B (IST 702), P8: E (IST 702), P9: D (IST 702)
  { section: 'I Biotech-B & Biomed', subject: 'Workshop', room: 'Workshop', period: 1, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'Workshop', room: 'Workshop', period: 2, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'Workshop', room: 'Workshop', period: 3, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'Workshop', room: 'Workshop', period: 4, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'D', room: 'IST 702', period: 6, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'B', room: 'IST 702', period: 7, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'E', room: 'IST 702', period: 8, day: 'Wednesday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'D', room: 'IST 702', period: 9, day: 'Wednesday', yearGroup: 'firstYear' },

  // Thu: P1: A (IST 710), P2-P3: Che lab, P4: C (IST 510)/G (IST 520), P5: B (IST 702), P6: Japanese (IST 702), P7-P9: A (IST 702)
  { section: 'I Biotech-B & Biomed', subject: 'A', room: 'IST 710', period: 1, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'C', room: 'IST 510', period: 4, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'B', room: 'IST 702', period: 5, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'Japanese', room: 'IST 702', period: 6, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'A', room: 'IST 702', period: 7, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'A', room: 'IST 702', period: 8, day: 'Thursday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'A', room: 'IST 702', period: 9, day: 'Thursday', yearGroup: 'firstYear' },

  // Fri: P1: F (IST 702), P2: CDC (IST 702), P3-P4: Japanese (IST 702), P5-P7: Free, P8-P9: PPS LAB
  { section: 'I Biotech-B & Biomed', subject: 'F', room: 'IST 702', period: 1, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'CDC', room: 'IST 702', period: 2, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'Japanese', room: 'IST 702', period: 3, day: 'Friday', yearGroup: 'firstYear' },
  { section: 'I Biotech-B & Biomed', subject: 'Japanese', room: 'IST 702', period: 4, day: 'Friday', yearGroup: 'firstYear' },
];
