import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, Store, Flame, Megaphone, Users, Building2, Plus, X
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Marketplace', to: '/marketplace', icon: Store },
  { label: 'Hot Deals', to: '/deals', icon: Flame, badge: 3 },
  { label: 'My Ads', to: '/my-ads', icon: Megaphone },
  { label: 'Clients', to: '/clients', icon: Users },
  { label: 'Company', to: '/company', icon: Building2 },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#009A51] rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0">
              S
            </div>
            <span className="text-lg font-bold text-white tracking-wide">SBS Brokerz</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 shrink-0">
          <button className="w-full bg-[#009A51] hover:bg-[#008043] text-white rounded-md py-2.5 px-4 flex items-center justify-center gap-2 font-medium transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>New Listing</span>
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto scrollbar-thin">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                  isActive
                    ? 'bg-slate-800 text-white font-medium border-l-4 border-[#009A51]'
                    : 'hover:bg-slate-800/50 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#009A51]' : 'text-slate-400'}`} />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="bg-[#009A51] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-medium shrink-0">
              MA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Mohammed Ali</p>
              <p className="text-xs text-slate-400 truncate">Senior Broker</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
