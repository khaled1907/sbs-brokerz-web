import React from 'react'
import { Bell, Search, Plus, TrendingUp, Clock, MapPin, Building, ChevronRight, Flame, Users } from 'lucide-react'

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-slate-800">Overview</h1>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search properties, clients..."
              className="pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-[#009A51] focus:ring-1 focus:ring-[#009A51] outline-none w-56 lg:w-64 transition-all"
            />
          </div>
          <button className="relative text-slate-500 hover:text-slate-700">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>
      </header>

      <div className="p-6 lg:p-8 space-y-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Active Deals', value: '24', trend: '+3 this week', positive: true, icon: Flame },
            { label: 'My Listings', value: '156', trend: '+12 this month', positive: true, icon: Building },
            { label: 'Client Requests', value: '89', trend: '-2 this week', positive: false, icon: Users },
            { label: 'Total Value (AED)', value: '45.2M', trend: '+15% vs last month', positive: true, icon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <stat.icon className="w-5 h-5 text-slate-600" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                  {stat.trend}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-800">Recent AI Matches</h2>
              <button className="text-sm text-[#009A51] font-medium hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { title: '3 BR Apartment', location: 'Downtown Dubai', client: 'Sarah Johnson', match: 98, price: '3,200,000' },
                { title: '4 BR Villa', location: 'Dubai Hills Estate', client: 'Ahmed Al Maktoum', match: 95, price: '6,500,000' },
                { title: 'Office Space', location: 'Business Bay', client: 'TechCorp LLC', match: 91, price: '1,800,000' },
                { title: '2 BR Apartment', location: 'Dubai Marina', client: 'Fatima Al Hashimi', match: 88, price: '2,100,000' },
              ].map((match, i) => (
                <div key={i} className="p-5 lg:p-6 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 border border-slate-200">
                      <Building className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-[#009A51] transition-colors">{match.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-3 text-sm text-slate-500 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {match.location}</span>
                        <span className="hidden lg:block w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {match.client}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <div className="text-sm font-bold text-slate-900 mb-1">{match.price} AED</div>
                    <div className="inline-flex items-center gap-1 bg-[#009A51]/10 text-[#009A51] px-2 py-0.5 rounded text-xs font-semibold">
                      <Flame className="w-3 h-3" /> {match.match}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { label: 'Add New Property', icon: Plus },
                  { label: 'Add Client Request', icon: Users },
                  { label: 'Send Broadcast', icon: Bell },
                ].map((action, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-[#009A51] hover:bg-green-50 transition-all text-left group">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded shadow-sm border border-slate-100 group-hover:text-[#009A51]">
                        <action.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-slate-700 group-hover:text-slate-900">{action.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#009A51]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
              <div className="space-y-5">
                {[
                  { text: 'New lead generated for Downtown Villa', time: '10 mins ago', type: 'lead' },
                  { text: 'Ali Raza viewed your Marina listing', time: '1 hour ago', type: 'view' },
                  { text: 'Contract generated for Palm Jumeirah Apt', time: '3 hours ago', type: 'doc' },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="relative mt-1">
                      <div className={`w-2.5 h-2.5 rounded-full ${activity.type === 'lead' ? 'bg-[#009A51]' : activity.type === 'view' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                      {i !== 2 && <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-slate-200"></div>}
                    </div>
                    <div>
                      <p className="text-sm text-slate-700 font-medium">{activity.text}</p>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
