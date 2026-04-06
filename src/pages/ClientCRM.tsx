import React from 'react'
import { Users, Search, Plus, Phone, Mail, FileText, MoreHorizontal } from 'lucide-react'

const clients = [
  { name: 'Tariq Al Habtoor', phone: '+971 50 123 4567', email: 'tariq.h@example.com', type: 'Buyer', status: 'Hot', lastContact: 'Today', notes: 'Looking for 4BR villa in Arabian Ranches under 7M AED' },
  { name: 'Elena Rostova', phone: '+971 55 987 6543', email: 'elena.r@example.com', type: 'Tenant', status: 'Warm', lastContact: '2 days ago', notes: 'Needs 2BR furnished in Marina by next month' },
  { name: 'John Smith', phone: '+971 52 456 7890', email: 'jsmith@company.com', type: 'Seller', status: 'Cold', lastContact: '1 week ago', notes: 'Considering selling his JVC townhouse, wants valuation' },
  { name: 'Fatima Al Qasimi', phone: '+971 50 111 2222', email: 'fatima.q@example.com', type: 'Investor', status: 'Hot', lastContact: 'Yesterday', notes: 'Looking for off-plan bulk deal in Downtown' },
  { name: 'David Chen', phone: '+971 56 333 4444', email: 'david.c@example.com', type: 'Buyer', status: 'Warm', lastContact: '3 days ago', notes: 'Pre-approved for mortgage, viewing properties this weekend' },
]

export function ClientCRM() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          <Users className="w-6 h-6 text-[#009A51]" /> Client CRM
        </h1>
        <button className="bg-[#009A51] hover:bg-[#008043] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" /> Add Client
        </button>
      </header>

      <div className="p-6 lg:p-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-4">Search & Filter</h3>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-[#009A51] outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Client Type</label>
                  <div className="space-y-2">
                    {['All Types', 'Buyer', 'Seller', 'Tenant', 'Landlord', 'Investor'].map((type, i) => (
                      <label key={i} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                        <input type="checkbox" className="rounded accent-[#009A51]" defaultChecked={i === 0} />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block mt-2">Status</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer ring-1 ring-red-200">Hot</span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:ring-1 hover:ring-orange-200">Warm</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:ring-1 hover:ring-slate-200">Cold</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 text-white shadow-sm">
              <h3 className="font-semibold mb-4 text-slate-200">CRM Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                  <span className="text-slate-400 text-sm">Total Clients</span>
                  <span className="font-bold text-lg">248</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                  <span className="text-slate-400 text-sm">Active Buyers</span>
                  <span className="font-bold text-lg text-[#009A51]">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">To Contact Today</span>
                  <span className="font-bold text-lg text-red-400">5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {clients.map((client, idx) => (
                  <div key={idx} className="p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-5">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-base font-bold text-slate-500 shrink-0">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-slate-900">{client.name}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-600">
                              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {client.phone}</span>
                              <span className="hidden sm:flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {client.email}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0 ml-2">
                          <div className="flex gap-2 flex-wrap justify-end">
                            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-semibold border border-slate-200">{client.type}</span>
                            <span className={`px-2.5 py-1 rounded text-xs font-semibold border ${
                              client.status === 'Hot' ? 'bg-red-50 text-red-700 border-red-200' :
                              client.status === 'Warm' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                              'bg-slate-50 text-slate-600 border-slate-200'
                            }`}>{client.status}</span>
                          </div>
                          <span className="text-xs text-slate-400">Last: {client.lastContact}</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-yellow-50/50 border border-yellow-100 p-3 rounded-lg text-sm text-slate-700 flex items-start gap-2">
                        <FileText className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                        <p>{client.notes}</p>
                      </div>
                    </div>
                    <div className="sm:border-l sm:border-slate-100 sm:pl-5 flex sm:flex-col gap-2 justify-center shrink-0">
                      <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-sm font-medium text-slate-700 transition-colors">
                        <Phone className="w-4 h-4" /> Call
                      </button>
                      <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-sm font-medium text-slate-700 transition-colors">
                        <Mail className="w-4 h-4" /> Email
                      </button>
                      <button className="p-2 border border-slate-300 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 flex items-center justify-center">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
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
