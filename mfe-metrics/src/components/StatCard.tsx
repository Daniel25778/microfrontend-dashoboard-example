import React from 'react'
import { Box, Typography, Paper } from '@mui/material'

interface StatCardProps {
  title: string
  value: string
  change: string
  positive: boolean
  icon: React.ReactNode
}

export default function StatCard({ title, value, change, positive, icon }: StatCardProps) {
  return (
    <Paper elevation={0} sx={{
      borderRadius: 3,
      p: 2.5,
      border: '1px solid #F1F5F9',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      background: '#fff',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography sx={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>{title}</Typography>
        <Box sx={{
          width: 36, height: 36, borderRadius: 2,
          background: '#F8FAFC', display: 'flex',
          alignItems: 'center', justifyContent: 'center', color: '#64748B'
        }}>
          {icon}
        </Box>
      </Box>
      <Typography sx={{ fontSize: 24, fontWeight: 600, color: '#1E293B' }}>{value}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
        <Box component="span" sx={{
          fontSize: 11, fontWeight: 600, px: 1, py: 0.3, borderRadius: 10,
          background: positive ? '#ECFDF5' : '#FFF1F2',
          color: positive ? '#059669' : '#E11D48',
        }}>
          {change}
        </Box>
        <Typography sx={{ fontSize: 11, color: '#94A3B8' }}>vs. mês anterior</Typography>
      </Box>
    </Paper>
  )
}
