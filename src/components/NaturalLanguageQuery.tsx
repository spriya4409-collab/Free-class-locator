import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Compass,
} from 'lucide-react';
import { parseNaturalLanguageQuery, getFreeClassrooms, formatTime12h, RoomAvailability } from '../utils/classroomTracker';
import { DayOfWeek } from '../data/timetableData';

interface NaturalLanguageQueryProps {
  onApplySettings: (day: DayOfWeek, period: number) => void;
}

export const NaturalLanguageQuery: React.FC<NaturalLanguageQueryProps> = ({ onApplySettings }) => {
  const [inputText, setInputText] = useState("It's Tuesday at 01:30 PM (Period 6). Where can my group sit undisturbed?");
  const [copied, setCopied] = useState(false);
  const [parsedResult, setParsedResult] = useState<{
    day: DayOfWeek;
    period: number;
    timeStr?: string;
    matchedPrompt?: string;
    freeRooms: RoomAvailability[];
  }>(() => {
    const parsed = parseNaturalLanguageQuery("It's Tuesday at 01:30 PM (Period 6). Where can my group sit undisturbed?");
    const free = getFreeClassrooms(parsed.day, parsed.period).filter((r) => r.isFree);
    return {
      ...parsed,
      freeRooms: free,
    };
  });

  const sampleQueries = [
    "It's Tuesday at 01:30 PM (Period 6). Where can my group sit undisturbed?",
    "Where can we sit on Monday during Period 5?",
    "Wednesday at 11:00 AM (Period 3) free classrooms",
    "Thursday afternoon P7 (02:10 PM) study room",
    "Friday period 8 undisturbed group discussion rooms",
  ];

  const handleSearch = (textToSearch?: string) => {
    const query = textToSearch || inputText;
    if (!query.trim()) return;

    const parsed = parseNaturalLanguageQuery(query);
    const free = getFreeClassrooms(parsed.day, parsed.period).filter((r) => r.isFree);

    setParsedResult({
      ...parsed,
      freeRooms: free,
    });
  };

  const formattedOutputText = parsedResult.freeRooms
    .map(
      (r) =>
        `- ${r.venue.name} (${r.venue.floorLabel}): FREE from ${r.startTime} to ${r.endTime} (Remaining periods: P${r.freeStartPeriod} to P${r.freeEndPeriod})`
    )
    .join('\n');

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(formattedOutputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyToLiveTracker = () => {
    onApplySettings(parsedResult.day, parsedResult.period);
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Natural Language Assistant
              </span>
              <span className="text-xs text-slate-400">FET Timetable Cross-Reference</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-slate-100">
              Undisturbed Study Room Assistant
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Type when and what time you need a quiet space, and the assistant cross-references all 10 section schedules to calculate guaranteed undisturbed study windows before any professor arrives.
            </p>
          </div>
        </div>

        {/* Input Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="e.g. It's Tuesday at 01:30 PM (Period 6). Where can my group sit undisturbed?"
              className="w-full px-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            onClick={() => handleSearch()}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span>Find Free Rooms</span>
          </button>
        </div>

        {/* Quick Sample Queries */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Try asking:
          </span>
          {sampleQueries.map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputText(q);
                handleSearch(q);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700/50 text-[11px]"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Structured Tracker Output Box */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Tracker Output Format
              </h3>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                {parsedResult.freeRooms.length} Available Venues
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Query parsed: <strong className="text-slate-700 dark:text-slate-300">{parsedResult.day}</strong> &bull; Period {parsedResult.period} ({parsedResult.timeStr || 'Period Slot'})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyOutput}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy List</span>
                </>
              )}
            </button>

            <button
              onClick={handleApplyToLiveTracker}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Open in Live Tracker</span>
            </button>
          </div>
        </div>

        {/* Display Output as Exact Assistant Response Format */}
        <div className="mt-4 bg-slate-950 rounded-xl p-4 font-mono text-xs sm:text-sm text-slate-200 border border-slate-800 space-y-2 overflow-x-auto">
          <div className="text-slate-400 text-xs font-sans pb-1 border-b border-slate-800 flex items-center justify-between">
            <span>Official Assistant Output:</span>
            <span className="text-emerald-400 font-mono">Status: Verified</span>
          </div>

          {parsedResult.freeRooms.length === 0 ? (
            <div className="text-amber-400 py-2">
              No free classrooms identified for {parsedResult.day} Period {parsedResult.period}.
            </div>
          ) : (
            parsedResult.freeRooms.map((r, i) => (
              <div key={i} className="flex items-baseline gap-2 py-1 border-b border-slate-900/60 last:border-0">
                <span className="text-emerald-400 font-bold">•</span>
                <span className="text-sky-300 font-bold">
                  {r.venue.name} ({r.venue.floorLabel}):
                </span>
                <span className="text-emerald-300 font-semibold">
                  FREE from {r.startTime} to {r.endTime}
                </span>
                <span className="text-slate-400 text-xs">
                  (Remaining periods: P{r.freeStartPeriod} to P{r.freeEndPeriod})
                </span>
              </div>
            ))
          )}
        </div>

        {/* Room cards preview below output */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {parsedResult.freeRooms.slice(0, 4).map((r) => (
            <div
              key={r.venue.id}
              className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs"
            >
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>{r.venue.name}</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  {Math.floor((r.durationMinutes || 0) / 60)}h {(r.durationMinutes || 0) % 60}m Free
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {r.venue.floorLabel} &bull; {r.venue.type}
              </div>
              <div className="text-[11px] text-slate-700 dark:text-slate-300 font-medium mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                {r.startTime} – {r.endTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
