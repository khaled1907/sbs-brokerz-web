import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Marketplace } from './pages/Marketplace'
import { HotDeals } from './pages/HotDeals'
import { MyAds } from './pages/MyAds'
import { ClientCRM } from './pages/ClientCRM'
import { Company } from './pages/Company'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="deals" element={<HotDeals />} />
          <Route path="my-ads" element={<MyAds />} />
          <Route path="clients" element={<ClientCRM />} />
          <Route path="company" element={<Company />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
