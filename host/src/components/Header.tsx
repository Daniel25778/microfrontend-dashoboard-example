import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 fixed top-0 left-56 right-0 z-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span>Home</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">Dashboard</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-48">
          <SearchIcon fontSize="small" className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
          />
        </div>

        {/* Notification */}
        <button className="relative w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-all">
          <NotificationsNoneIcon fontSize="small" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-semibold">
          DW
        </div>
      </div>
    </header>
  )
}
