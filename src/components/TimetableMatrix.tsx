import React, { useState } from 'react';
import { School, MapPin, Calendar, Clock, BookOpen, Layers } from 'lucide-react';
import { MASTER_SCHEDULE } from '../data/masterSchedule';
import { VENUES, DAYS_OF_WEEK, SENIOR_PERIOD_SLOTS, DayOfWeek } from '../data/timetableData';

export const TimetableMatrix: React.FC = () => {
  const [viewMode, setViewMode] = useState<'bySection' | 'byVenue'>('bySection');
  const [selectedSection, setSelectedSection] = useState<string>('IV ECE-A');
  const [selectedVenue, setSelectedVenue] = useState<string>('IST 225');

  const allSections = [
    'IV ECE-A',
    'IV ECE-B',
    'III ECE-DS',
    'III ECE-A',
    'III ECE-B',
    'III BME',
    'II ECE-DS A',
    'II ECE-DS B',
    'II BME',
    'I ECE-A',
    'I ECE-B & EEE',
    'I ECE-DS',
    'I Biotech-B & Biomed',
  ];

  return (
    <div className="space-y-6">
      {/* Controls Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <School className="w-5 h-5 text-blue-600" />
            Master FET Timetable Matrix
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Complete schedule dataset for all 10 departments and sections at SRM IST Tiruchirappalli.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Toggle */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('bySection')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'bySection'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              By Class / Section
            </button>
            <button
              onClick={() => setViewMode('byVenue')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'byVenue'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              By Classroom Venue
            </button>
          </div>

          {/* Selector Dropdown */}
          {viewMode === 'bySection' ? (
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {allSections.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          ) : (
            <select
              value={selectedVenue}
              onChange={(e) => setSelectedVenue(e.target.value)}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {VENUES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({v.floorLabel})
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              {viewMode === 'bySection' ? `Weekly Schedule: ${selectedSection}` : `Occupancy Schedule: ${selectedVenue}`}
            </span>
          </div>
          <span className="text-xs text-slate-400">
            Standard Periods 1 to 9 (09:00 AM – 04:50 PM)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <th className="p-3 font-semibold w-24">Day</th>
                {SENIOR_PERIOD_SLOTS.map((slot) => (
                  <th key={slot.period} className="p-2 font-semibold text-center border-l border-slate-200 dark:border-slate-700/60">
                    <div>P{slot.period}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{slot.startTime}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {DAYS_OF_WEEK.map((day) => (
                <tr key={day} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/20">
                    {day}
                  </td>
                  {SENIOR_PERIOD_SLOTS.map((slot) => {
                    let cellSession;
                    if (viewMode === 'bySection') {
                      cellSession = MASTER_SCHEDULE.find(
                        (s) => s.section === selectedSection && s.day === day && s.period === slot.period
                      );
                    } else {
                      cellSession = MASTER_SCHEDULE.find(
                        (s) => s.room === selectedVenue && s.day === day && s.period === slot.period
                      );
                    }

                    return (
                      <td
                        key={slot.period}
                        className={`p-2 text-center border-l border-slate-200 dark:border-slate-800 ${
                          cellSession
                            ? 'bg-blue-50/60 dark:bg-blue-950/30'
                            : 'bg-emerald-50/30 dark:bg-emerald-950/20'
                        }`}
                      >
                        {cellSession ? (
                          <div className="flex flex-col items-center justify-center">
                            <span className="font-bold text-slate-800 dark:text-slate-200 text-xs">
                              {cellSession.subject}
                            </span>
                            <span className="text-[10px] text-blue-600 dark:text-blue-400">
                              {viewMode === 'bySection' ? cellSession.room : cellSession.section}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                            FREE
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
