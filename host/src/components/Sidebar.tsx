import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'
import DescriptionIcon from '@mui/icons-material/Description'
import AddIcon from '@mui/icons-material/Add'

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon fontSize="small" />, active: true },
  { label: 'Analytics', icon: <BarChartIcon fontSize="small" />, active: false },
  { label: 'Team', icon: <PeopleIcon fontSize="small" />, active: false },
  { label: 'Reports', icon: <DescriptionIcon fontSize="small" />, active: false },
  { label: 'Settings', icon: <SettingsIcon fontSize="small" />, active: false },
]

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')

  return (
    <aside className="w-56 min-h-screen bg-[#1B2130] flex flex-col py-6 px-3 fixed left-0 top-0 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 mb-8">
        <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <span className="text-white font-semibold text-base tracking-tight">AdminPanel</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all w-full text-left
              ${active === item.label
                ? 'bg-blue-500 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom actions */}
      <div className="flex flex-col gap-1 mt-4 border-t border-white/10 pt-4">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all w-full text-left">
          <AddIcon fontSize="small" />
          Add new
        </button>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 px-3 pt-4 border-t border-white/10 mt-2">
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-semibold">
          DW
        </div>
        <div>
          <p className="text-white text-sm font-medium leading-none">Daniel Wilson</p>
          <p className="text-slate-500 text-xs mt-0.5">Front-End Dev</p>
        </div>
      </div>
    </aside>
  )
}
