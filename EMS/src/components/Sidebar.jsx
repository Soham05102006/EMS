import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  FileText, 
  Settings, 
  LogOut,
  UserCircle 
} from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Employees', path: '/employees', icon: <Users size={20} /> },
    { name: 'Attendance', path: '/attendance', icon: <CalendarCheck size={20} /> },
    { name: 'Leave', path: '/leave', icon: <FileText size={20} /> },
    { name: 'Payslip', path: '/payslip', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ]

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0 border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          Q
        </div>
        <span className="text-xl font-semibold text-white tracking-tight">QickEMS</span>
      </div>

      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
          <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
            <UserCircle size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Soham Ghatole</p>
            <p className="text-xs text-slate-500 truncate">Administrator</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <span className="group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800">
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all duration-200 group"
        >
          <LogOut size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Logout</span>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar
