import React from 'react';
import { Calendar, Clock, Filter, Sparkles, Building, Layers } from 'lucide-react';
import { DayOfWeek, DAYS_OF_WEEK, SENIOR_PERIOD_SLOTS } from '../data/timetableData';

interface QuickSearchProps {
  currentDay: DayOfWeek;
  setCurrentDay: (day: DayOfWeek) => void;
  currentPeriod: number;
  setCurrentPeriod: (period: number) => void;
  selectedFloor: number | 'all';
  setSelectedFloor: (floor: number | 'all') => void;
  filterType: 'all' | 'classroom' | 'lab';
  setFilterType: (type: 'all' | 'classroom' | 'lab') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const QuickSearch: React.FC<QuickSearchProps> = ({
  currentDay,
  setCurrentDay,
  currentPeriod,
  setCurrentPeriod,
  selectedFloor,
  setSelectedFloor,
  filterType,
  setFilterType,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Top row: Day Selector & Preset Jump Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Days of Week buttons */}
        <div>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-500" />
            Select Working Day
          </label>
          <div className="flex flex-wrap gap-1.5">
            {DAYS_OF_WEEK.map((day) => {
              const isSelected = day === currentDay;
              return (
                <button
                  key={day}
                  onClick={() => setCurrentDay(day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Time Block Shortcuts */}
        <div>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Quick Study Session Jump
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCurrentPeriod(1)}
              className={`px-2.5 py-1.5 text-xs rounded-lg font-medium border ${
                currentPeriod === 1
                  ? 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              Morning (P1: 09:00)
            </button>
            <button
              onClick={() => setCurrentPeriod(3)}
              className={`px-2.5 py-1.5 text-xs rounded-lg font-medium border ${
                currentPeriod === 3
                  ? 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              Midday (P3: 10:50)
            </button>
            <button
              onClick={() => setCurrentPeriod(6)}
              className={`px-2.5 py-1.5 text-xs rounded-lg font-medium border ${
                currentPeriod === 6
                  ? 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              Afternoon (P6: 01:20 PM)
            </button>
            <button
              onClick={() => setCurrentPeriod(8)}
              className={`px-2.5 py-1.5 text-xs rounded-lg font-medium border ${
                currentPeriod === 8
                  ? 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-700 dark:text-amber-200'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              Late AN (P8: 03:10 PM)
            </button>
          </div>
        </div>
      </div>

      {/* Period Selector Tabs (P1 to P9 with Exact Timings) */}
      <div>
        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-sky-500" />
          Select Period Time Slot (Senior Standard Slots)
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
          {SENIOR_PERIOD_SLOTS.map((slot) => {
            const isSelected = slot.period === currentPeriod;
            return (
              <button
                key={slot.period}
                onClick={() => setCurrentPeriod(slot.period)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl text-center transition-all border ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-400/30'
                    : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500'
                }`}
              >
                <span className="font-bold text-xs">P{slot.period}</span>
                <span
                  className={`text-[10px] leading-tight ${
                    isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {slot.startTime}
                </span>
                <span
                  className={`text-[9px] ${
                    isSelected ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  to {slot.endTime}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters row: Search input, Floor selection, Venue type */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
            <Filter className="w-3.5 h-3.5" />
            <span>Floor:</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto">
            {(['all', 1, 2, 3, 4, 5, 6, 7] as const).map((floor) => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  selectedFloor === floor
                    ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {floor === 'all' ? 'All Floors' : `F${floor}`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                filterType === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              All Venues
            </button>
            <button
              onClick={() => setFilterType('classroom')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                filterType === 'classroom'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Classrooms
            </button>
            <button
              onClick={() => setFilterType('lab')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                filterType === 'lab'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              Labs
            </button>
          </div>

          <input
            type="text"
            placeholder="Search room (e.g. 225, 519)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
