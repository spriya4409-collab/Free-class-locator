import React from 'react';
import { School, Clock, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { DayOfWeek } from '../data/timetableData';

interface NavbarProps {
  currentDay: DayOfWeek;
  currentPeriod: number;
  activeTab: 'tracker' | 'assistant' | 'matrix' | 'venues';
  setActiveTab: (tab: 'tracker' | 'assistant' | 'matrix' | 'venues') => void;
  freeRoomsCount: number;
  totalRoomsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentDay,
  currentPeriod,
  activeTab,
  setActiveTab,
  freeRoomsCount,
  totalRoomsCount,
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Campus Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-black text-xl tracking-wider">
              SRM
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base sm:text-lg text-slate-100 tracking-tight">
                  Free Classroom Tracker
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  FET Tiruchirappalli
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-sky-400" />
                SRM Institute of Science and Technology, Trichy Campus
              </p>
            </div>
          </div>

          {/* Real-time Status Badge */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg px-3.5 py-1.5 flex items-center space-x-3 text-xs">
              <div className="flex items-center text-slate-300">
                <Calendar className="w-3.5 h-3.5 mr-1 text-sky-400" />
                <span className="font-medium">{currentDay}</span>
              </div>
              <div className="h-3 w-px bg-slate-700" />
              <div className="flex items-center text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5 mr-1" />
                <span>Period {currentPeriod}</span>
              </div>
              <div className="h-3 w-px bg-slate-700" />
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-semibold">
                  {freeRoomsCount} of {totalRoomsCount} Rooms Free
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-t border-slate-800/80 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveTab('tracker')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'tracker'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Live Free Classrooms</span>
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === 'tracker' ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {freeRoomsCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('assistant')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'assistant'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Undisturbed Study Finder (Prompt)</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <School className="w-4 h-4" />
            <span>Master Section Timetables</span>
          </button>

          <button
            onClick={() => setActiveTab('venues')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'venues'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Campus Venues & Floor Map</span>
          </button>
        </div>
      </div>
    </header>
  );
};
