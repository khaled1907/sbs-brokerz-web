import React, { useState } from 'react'
import { Bell, Search, Filter, SlidersHorizontal, MapPin, Building, BedDouble, Bath, Square, ArrowUpDown } from 'lucide-react'

export function Marketplace() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'requests'>('inventory')

  return (
    <div className="flex flex-col h-full min-h-screen">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <div className="flex items-center gap-4 lg:gap-8">
          <h1 className="text-xl font-semibold text-slate-800">Marketplace</h1>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-3 lg:px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'inventory' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <span className="hidden sm:inline">Available </span>Inventory
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-3 lg:px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'requests' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Client Requests
            </button>
          </div>
        </div>
        <button className="relative text-slate-500 hover:text-slate-700">
          <Bell className="w-5 h-5" />
        </button>
      </header>

      <div className="p-6 lg:p-8 flex-1 flex flex-col min-h-0">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 shrink-0">
          <div className="flex items-center gap-3 flex-1 max-w-3xl flex-wrap">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by area, building..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:border-[#009A51] focus:ring-1 focus:ring-[#009A51] outline-none transition-all"
              />
            </div>
            <select className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-700 outline-none focus:border-[#009A51]">
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Commercial</option>
            </select>
            <select className="hidden lg:block px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-700 outline-none focus:border-[#009A51]">
              <option>Price Range</option>
              <option>Under 1M AED</option>
              <option>1M - 3M AED</option>
              <option>3M - 5M AED</option>
              <option>5M+ AED</option>
            </select>
            <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 flex items-center gap-2 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort:</span>
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
              Newest <ArrowUpDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 pr-1 scrollbar-thin">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 pb-8">
            {Array.from({ length: 8 }, (_, item) => (
              <div key={item} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative h-44 bg-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <Building className="w-10 h-10 text-slate-400" />
                  </div>
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    FOR SALE
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                      Off-Plan
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 line-clamp-1 group-hover:text-[#009A51] transition-colors">
                        {item % 2 === 0 ? 'Luxury Penthouse in Marina' : 'Spacious Villa in JVC'}
                      </h3>
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item % 2 === 0 ? 'Dubai Marina' : 'Jumeirah Village Circle'}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#009A51] font-bold text-lg my-3">
                    {item % 2 === 0 ? '4,500,000' : '2,200,000'} AED
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 border-y border-slate-100 py-3">
                    <div className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-slate-400" /> {item % 2 === 0 ? '4' : '3'}</div>
                    <div className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-slate-400" /> {item % 2 === 0 ? '5' : '4'}</div>
                    <div className="flex items-center gap-1.5"><Square className="w-4 h-4 text-slate-400" /> {item % 2 === 0 ? '3,200' : '2,400'} sqft</div>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">BR</div>
                      <span className="text-xs text-slate-500 font-medium">Broker Group LLC</span>
                    </div>
                    <button className="text-[#009A51] text-sm font-semibold hover:text-[#008043]">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
