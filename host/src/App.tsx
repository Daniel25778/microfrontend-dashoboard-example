import React, { lazy, Suspense } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const MetricsDashboard = lazy(() => import('mfeMetrics/MetricsDashboard'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-slate-400">Carregando módulo...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 ml-56">
        <Header />
        <main className="pt-16 p-8">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
            <p className="text-sm text-slate-400 mt-1">Bem-vindo de volta, Daniel.</p>
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <MetricsDashboard />
          </Suspense>
        </main>
      </div>
    </div>
  )
}
