import React, { useState } from 'react'
import { Plus, Search, Filter, MoreVertical, Eye, Flame } from 'lucide-react'

const ads = [
  { id: 'REF-1042', title: 'Luxury 4BR Villa in Dubai Hills', type: 'Sale', price: '6,500,000 AED', status: 'Active', views: 245, matches: 12, date: '12 Oct 2023' },
  { id: 'REF-1043', title: '2BR Apartment Full Marina View', type: 'Rent', price: '180,000 AED/yr', status: 'Active', views: 890, matches: 45, date: '10 Oct 2023' },
  { id: 'REF-1039', title: 'Commercial Office Space Business Bay', type: 'Rent', price: '320,000 AED/yr', status: 'Pending', views: 124, matches: 3, date: '05 Oct 2023' },
  { id: 'REF-1035', title: '3BR Townhouse JVC off-plan', type: 'Sale', price: '2,100,000 AED', status: 'Sold', views: 1420, matches: 88, date: '28 Sep 2023' },
]

export function MyAds() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'requests'>('inventory')

  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-slate-800">My Ads</h1>
        <button className="bg-[#009A51] hover:bg-[#008043] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Post New Ad
        </button>
      </header>

      <div className="p-6 lg:p-8 flex-1">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-wrap gap-4 items-center justify-between bg-slate-50/50">
            <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-3 lg:px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'inventory' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                My Inventory (156)
              </button>
              <button
                onClick={() => setActiveTab('requests')}
                className={`px-3 lg:px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'requests' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                My Requests (42)
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by REF or Title..."
                  className="pl-9 pr-4 py-1.5 bg-white border border-slate-300 rounded-lg text-sm focus:border-[#009A51] outline-none w-52"
                />
              </div>
              <button className="p-1.5 bg-white border border-slate-300 rounded-lg text-slate-500 hover:text-slate-700">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Property Details</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Posted</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ads.map((ad, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 mb-1">{ad.title}</span>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">{ad.type}</span>
                          <span>•</span>
                          <span className="font-medium">{ad.price}</span>
                          <span className="hidden sm:inline">• REF: {ad.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                        ad.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' :
                        ad.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {ad.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                          <Eye className="w-4 h-4 text-slate-400" /> {ad.views}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                          <Flame className="w-4 h-4 text-orange-400" /> {ad.matches}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 hidden lg:table-cell">{ad.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-100 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
            <span>Showing 1–4 of 156 entries</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 border border-[#009A51] bg-[#009A51] text-white rounded">1</button>
              <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50">2</button>
              <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
