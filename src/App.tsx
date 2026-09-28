import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { QuickSearch } from './components/QuickSearch';
import { FreeRoomsList } from './components/FreeRoomsList';
import { NaturalLanguageQuery } from './components/NaturalLanguageQuery';
import { TimetableMatrix } from './components/TimetableMatrix';
import { CampusVenues } from './components/CampusVenues';
import { DayOfWeek, VENUES } from './data/timetableData';
import { getFreeClassrooms, getPeriodForTime } from './utils/classroomTracker';
import { Clock, Info, ShieldCheck, School } from 'lucide-react';

export default function App() {
  const [currentDay, setCurrentDay] = useState<DayOfWeek>('Tuesday');
  const [currentPeriod, setCurrentPeriod] = useState<number>(6);
  const [activeTab, setActiveTab] = useState<'tracker' | 'assistant' | 'matrix' | 'venues'>('tracker');
  const [selectedFloor, setSelectedFloor] = useState<number | 'all'>('all');
  const [filterType, setFilterType] = useState<'all' | 'classroom' | 'lab'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate room availability for current selection
  const rawRooms = useMemo(() => {
    return getFreeClassrooms(currentDay, currentPeriod);
  }, [currentDay, currentPeriod]);

  // Apply UI filters (floor, type, search)
  const filteredRooms = useMemo(() => {
    return rawRooms.filter((r) => {
      if (selectedFloor !== 'all' && r.venue.floor !== selectedFloor) return false;
      if (filterType !== 'all' && r.venue.type !== filterType) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = r.venue.name.toLowerCase().includes(query);
        const matchesDesc = r.venue.description.toLowerCase().includes(query);
        const matchesHome = r.venue.homeFor?.some((h) => h.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesHome) return false;
      }
      return true;
    });
  }, [rawRooms, selectedFloor, filterType, searchQuery]);

  const freeCount = useMemo(() => {
    return rawRooms.filter((r) => r.isFree).length;
  }, [rawRooms]);

  const handleApplyAssistantSettings = (day: DayOfWeek, period: number) => {
    setCurrentDay(day);
    setCurrentPeriod(period);
    setActiveTab('tracker');
  };

  const handleSetToCurrentTime = () => {
    const now = new Date();
    const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday ... 5 is Friday
    const dayMap: Record<number, DayOfWeek> = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
    };
    if (dayMap[dayIndex]) {
      setCurrentDay(dayMap[dayIndex]);
    }
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    const currentP = getPeriodForTime(`${hours}:${mins}`);
    setCurrentPeriod(currentP);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Top Navbar */}
      <Navbar
        currentDay={currentDay}
        currentPeriod={currentPeriod}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        freeRoomsCount={freeCount}
        totalRoomsCount={VENUES.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'tracker' && (
          <div className="space-y-6">
            {/* Quick search & period controller */}
            <QuickSearch
              currentDay={currentDay}
              setCurrentDay={setCurrentDay}
              currentPeriod={currentPeriod}
              setCurrentPeriod={setCurrentPeriod}
              selectedFloor={selectedFloor}
              setSelectedFloor={setSelectedFloor}
              filterType={filterType}
              setFilterType={setFilterType}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* Free rooms grid and list */}
            <FreeRoomsList
              rooms={filteredRooms}
              currentDay={currentDay}
              currentPeriod={currentPeriod}
            />
          </div>
        )}

        {activeTab === 'assistant' && (
          <NaturalLanguageQuery onApplySettings={handleApplyAssistantSettings} />
        )}

        {activeTab === 'matrix' && <TimetableMatrix />}

        {activeTab === 'venues' && <CampusVenues />}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 mt-12 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="font-semibold text-slate-700 dark:text-slate-300">
            SRM Institute of Science and Technology &bull; Tiruchirappalli Campus (Faculty of Engineering and Technology)
          </div>
          <p className="max-w-2xl mx-auto">
            Classroom schedule data cross-referenced across IV ECE-A/B, III ECE-DS, III ECE-A/B, III BME, II ECE-DS A/B, II BME, and First Year divisions. Designed to prevent lecture interruption for project teams.
          </p>
        </div>
      </footer>
    </div>
  );
}
