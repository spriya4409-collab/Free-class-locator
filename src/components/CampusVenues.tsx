import React, { useState } from 'react';
import { Building, MapPin, Search, Layers, School } from 'lucide-react';
import { VENUES, RoomVenue } from '../data/timetableData';

interface CampusVenuesProps {
  onSelectVenue?: (venueId: string) => void;
}

export const CampusVenues: React.FC<CampusVenuesProps> = ({ onSelectVenue }) => {
  const [filterFloor, setFilterFloor] = useState<number | 'all'>('all');
  const [filterType, setFilterType] = useState<'all' | 'classroom' | 'lab'>('all');
  const [query, setQuery] = useState('');

  const filtered = VENUES.filter((v) => {
    if (filterFloor !== 'all' && v.floor !== filterFloor) return false;
    if (filterType !== 'all' && v.type !== filterType) return false;
    if (
      query &&
      !v.name.toLowerCase().includes(query.toLowerCase()) &&
      !v.description.toLowerCase().includes(query.toLowerCase())
    )
      return false;
    return true;
  });

  // Group by floors
  const floors = [7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-500" />
              Classroom & Venue Directory (Faculty of Engineering & Technology)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Building floor directory & home venues for SRM IST Tiruchirappalli campus.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search venue or alias..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Floor quick filters */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5 items-center text-xs">
          <span className="text-slate-400 mr-2">Filter Floor:</span>
          {(['all', 0, 1, 2, 3, 4, 5, 6, 7] as const).map((fl) => (
            <button
              key={fl}
              onClick={() => setFilterFloor(fl)}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                filterFloor === fl
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {fl === 'all' ? 'All Floors' : fl === 0 ? 'Ground' : `${fl}th Floor`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Venues */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((venue) => (
          <div
            key={venue.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-blue-400 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-lg font-black text-slate-900 dark:text-white">
                  {venue.name}
                </span>
                <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  {venue.floorLabel}
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                {venue.type}
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-medium">
              {venue.description}
            </p>

            {venue.homeFor && venue.homeFor.length > 0 && (
              <div className="mt-3 text-xs bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 p-2.5 rounded-xl border border-blue-200 dark:border-blue-900">
                <span className="font-bold">Home Venue For:</span> {venue.homeFor.join(', ')}
              </div>
            )}

            {venue.aliases && venue.aliases.length > 0 && (
              <div className="mt-2 text-[11px] text-slate-400 flex flex-wrap gap-1">
                <span className="font-semibold text-slate-500">Aliases:</span>
                {venue.aliases.map((a, i) => (
                  <span key={i} className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
