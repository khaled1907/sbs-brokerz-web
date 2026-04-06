import React from 'react'
import { Flame, Bell, MessageSquare, Phone, Zap } from 'lucide-react'

const deals = [
  { id: 1, type: 'match', matchScore: 98, requestBy: 'Ahmed Broker', property: '4 BR Villa in Dubai Hills', reqDetails: 'Budget: 6M AED, Needs Pool', status: 'new', time: '10 mins ago' },
  { id: 2, type: 'match', matchScore: 92, requestBy: 'Sarah Real Estate', property: '2 BR Apt Downtown', reqDetails: 'Budget: 2.5M AED, High Floor', status: 'read', time: '2 hours ago' },
  { id: 3, type: 'ai', matchScore: 85, requestBy: 'AI Suggestion', property: 'Office Space Business Bay', reqDetails: 'Based on your recent 3M AED listing', status: 'new', time: '5 hours ago' },
  { id: 4, type: 'match', matchScore: 78, requestBy: 'Luxury Homes LLC', property: 'Penthouse Palm Jumeirah', reqDetails: 'Budget: 15M AED, Sea View', status: 'contacted', time: '1 day ago' },
]

export function HotDeals() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          <Flame className="w-6 h-6 text-[#009A51]" /> Hot Deals
        </h1>
        <button className="relative text-slate-500 hover:text-slate-700">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <div className="p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Incoming Matches</h2>
            <p className="text-slate-500 mt-1">We found these requests matching your active inventory.</p>
          </div>
          <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-700 outline-none focus:border-[#009A51]">
            <option>All Statuses</option>
            <option>New Unread</option>
            <option>Contacted</option>
          </select>
        </div>

        <div className="space-y-4">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`bg-white border rounded-xl p-5 transition-all hover:shadow-md relative overflow-hidden ${
                deal.status === 'new' ? 'border-[#009A51]/30 shadow-sm' : 'border-slate-200'
              }`}
            >
              {deal.status === 'new' && (
                <div className="absolute top-0 left-0 w-1 h-full bg-[#009A51]"></div>
              )}

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col items-center justify-center shrink-0 w-20">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                      <path strokeDasharray={`${deal.matchScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#009A51" strokeWidth="3" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base font-bold text-slate-800">{deal.matchScore}%</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Match</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-1">
                    {deal.type === 'ai' ? (
                      <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold"><Zap className="w-3 h-3" /> AI Suggestion</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">Direct Match</span>
                    )}
                    <span className="text-xs text-slate-400">{deal.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{deal.property}</h3>
                  <p className="text-sm text-slate-600 mt-1 bg-slate-50 p-2 rounded border border-slate-100 inline-block">
                    <span className="font-semibold text-slate-700">Client Needs:</span> {deal.reqDetails}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                        {deal.requestBy.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{deal.requestBy}</p>
                        <p className="text-xs text-slate-500">Looking for inventory</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-sm font-medium text-slate-700 transition-colors">
                        <MessageSquare className="w-4 h-4" /> Message
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#009A51] hover:bg-[#008043] rounded-lg text-sm font-medium text-white transition-colors">
                        <Phone className="w-4 h-4" /> Reveal Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
