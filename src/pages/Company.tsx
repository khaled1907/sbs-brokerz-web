import React from 'react'
import { Building2, Settings, Edit, Shield, CheckCircle2, Crown, Plus } from 'lucide-react'

const team = [
  { name: 'Mohammed Ali', role: 'Company Admin', email: 'm.ali@prestigerealestate.ae', phone: '+971 50 123 4567', status: 'Active' },
  { name: 'Sarah Johnson', role: 'Senior Broker', email: 'sarah.j@prestigerealestate.ae', phone: '+971 55 987 6543', status: 'Active' },
  { name: 'Ahmed Hassan', role: 'Broker', email: 'ahmed.h@prestigerealestate.ae', phone: '+971 52 456 7890', status: 'Active' },
  { name: 'Elena Rostova', role: 'Broker', email: 'elena.r@prestigerealestate.ae', phone: '+971 50 111 2222', status: 'Invited' },
]

export function Company() {
  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-[#009A51]" /> Company Profile
        </h1>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
          <Settings className="w-5 h-5" />
        </button>
      </header>

      <div className="p-6 lg:p-8 max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="h-28 bg-slate-800 relative">
              <div className="absolute -bottom-10 left-6 lg:left-8 w-20 h-20 bg-white rounded-xl p-2 shadow-md border border-slate-100">
                <div className="w-full h-full bg-slate-100 rounded flex items-center justify-center text-slate-400 text-sm font-medium">Logo</div>
              </div>
              <button className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm flex items-center gap-2 transition-colors">
                <Edit className="w-4 h-4" /> Edit Profile
              </button>
            </div>
            <div className="pt-14 pb-6 px-6 lg:px-8">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Prestige Real Estate LLC</h2>
                  <p className="text-slate-500 mt-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009A51]" /> Verified Brokerage
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">ORN Number</p>
                  <p className="text-lg font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded inline-block border border-slate-200">12345</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Office Address</p>
                  <p className="text-slate-900 font-medium">Suite 405, Boulevard Plaza Tower 1<br />Downtown Dubai, UAE</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Contact Details</p>
                  <p className="text-slate-900 font-medium">+971 4 123 4567<br />info@prestigerealestate.ae</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#009A51] to-[#00703B] rounded-xl shadow-md overflow-hidden text-white flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex items-center gap-2 text-green-100 mb-4 font-medium">
                <Crown className="w-5 h-5" /> Current Plan
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Agency Premium</h3>
              <p className="text-green-100 text-sm mb-6">Billed annually. Next billing: 15 Dec 2024</p>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-50 font-medium">Active Listings</span>
                    <span className="font-bold">156 / 500</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5 mt-2">
                    <div className="bg-white h-1.5 rounded-full w-[31%]"></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-50 font-medium">Team Members</span>
                    <span className="font-bold">4 / 10</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-1.5 mt-2">
                    <div className="bg-white h-1.5 rounded-full w-[40%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-black/10 text-center">
              <button className="text-white font-medium text-sm hover:underline">Manage Subscription</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Team Management</h3>
              <p className="text-sm text-slate-500 mt-1">Manage broker access and roles.</p>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" /> Invite Member
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Member</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Contact Info</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {team.map((member, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 border border-slate-200 text-sm shrink-0">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-semibold text-slate-900">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="flex flex-col text-sm">
                        <span className="text-slate-900">{member.email}</span>
                        <span className="text-slate-500">{member.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                        member.role === 'Company Admin' ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {member.role === 'Company Admin' && <Shield className="w-3 h-3" />}
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                        member.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-medium text-[#009A51] hover:text-[#008043]">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
