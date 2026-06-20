import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-100 fixed top-0 left-0 right-0 z-20 lg:left-56">
      <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 min-w-0">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <MenuIcon fontSize="small" />
          </button>
          <div className="flex items-center gap-2 text-sm text-slate-400 min-w-0">
            <span className="hidden sm:inline">Home</span>
            <span className="hidden sm:inline">/</span>
            <span className="truncate text-slate-700 font-medium">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-48">
            <SearchIcon fontSize="small" className="text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
            />
          </div>

          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-500 transition-all hover:bg-slate-100">
            <NotificationsNoneIcon fontSize="small" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-500"></span>
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-400 text-white text-xs font-semibold">
            DW
          </div>
        </div>
      </div>
    </header>
  )
}
