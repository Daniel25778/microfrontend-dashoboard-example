import React from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import StatCard from '../components/StatCard'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'

const chartData = [
  { month: 'Jan', value: 18 }, { month: 'Fev', value: 24 },
  { month: 'Mar', value: 19 }, { month: 'Abr', value: 28 },
  { month: 'Mai', value: 22 }, { month: 'Jun', value: 30 },
  { month: 'Jul', value: 27 }, { month: 'Ago', value: 35 },
  { month: 'Set', value: 29 }, { month: 'Out', value: 38 },
  { month: 'Nov', value: 33 }, { month: 'Dez', value: 42 },
]

const teamProgress = [
  { name: 'Ana Souza', role: 'UX Designer', progress: 76, color: '#3B82F6' },
  { name: 'Carlos Lima', role: 'Dev Front-End', progress: 52, color: '#10B981' },
  { name: 'Mariana Costa', role: 'Product Manager', progress: 88, color: '#F59E0B' },
  { name: 'Rafael Melo', role: 'Dev Back-End', progress: 34, color: '#6366F1' },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <Box sx={{
        background: '#1B2130', color: '#fff', borderRadius: 2,
        px: 2, py: 1.5, boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}>
        <Typography sx={{ fontSize: 11, color: '#94A3B8', mb: 0.5 }}>{label}</Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{payload[0].value} participantes</Typography>
      </Box>
    )
  }
  return null
}

export default function MetricsDashboard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Stat Cards */}
      <Grid container spacing={2}>
        {[
          { title: 'Total de Usuários', value: '12.483', change: '+8.2%', positive: true, icon: <PeopleOutlinedIcon fontSize="small" /> },
          { title: 'Taxa de Conclusão', value: '74,3%', change: '+3.1%', positive: true, icon: <CheckCircleOutlinedIcon fontSize="small" /> },
          { title: 'Tempo Médio', value: '3h 25min', change: '-0.8%', positive: false, icon: <AccessTimeIcon fontSize="small" /> },
          { title: 'Engajamento', value: '4.8', change: '+0.3', positive: true, icon: <TrendingUpIcon fontSize="small" /> },
        ].map((card) => (
          <Grid item xs={12} sm={6} xl={3} key={card.title}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>

      {/* Chart + Team */}
      <Grid container spacing={2}>
        {/* Chart */}
        <Grid item xs={12} xl={8}>
          <Paper elevation={0} sx={{
            borderRadius: 3, p: 3,
            border: '1px solid #F1F5F9',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              <Box>
                <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#1E293B' }}>Visão Geral de Participação</Typography>
                <Typography sx={{ fontSize: 11, color: '#94A3B8', mt: 0.5 }}>Participantes ativos por mês</Typography>
              </Box>
              <Box sx={{
                fontSize: 11, fontWeight: 500, color: '#64748B',
                border: '1px solid #E2E8F0', borderRadius: 1.5,
                px: 1.5, py: 0.8, background: '#F8FAFC'
              }}>
                2025
              </Box>
            </Box>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} barSize={18}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#94A3B8', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F8FAFC' }} />
                <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <Box sx={{ display: 'flex', gap: 4, mt: 2, pt: 2, borderTop: '1px solid #F1F5F9' }}>
              {[
                { label: 'Média mensal', val: '28,7' },
                { label: 'Pico', val: '42 — Dez' },
                { label: 'Total anual', val: '345' },
              ].map((s) => (
                <Box key={s.label}>
                  <Typography sx={{ fontSize: 11, color: '#94A3B8' }}>{s.label}</Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#1E293B', mt: 0.5 }}>{s.val}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Team Progress */}
        <Grid item xs={12} xl={4}>
          <Paper elevation={0} sx={{
            borderRadius: 3, p: 3, height: '100%',
            border: '1px solid #F1F5F9',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}>
            <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#1E293B' }}>Progresso do Time</Typography>
            <Typography sx={{ fontSize: 11, color: '#94A3B8', mt: 0.5, mb: 3 }}>Conclusão individual</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {teamProgress.map((person) => (
                <Box key={person.name}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: person.color, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontSize: 12, fontWeight: 600
                      }}>
                        {person.name.charAt(0)}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#334155', lineHeight: 1 }}>{person.name}</Typography>
                        <Typography sx={{ fontSize: 11, color: '#94A3B8', mt: 0.4 }}>{person.role}</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#475569' }}>{person.progress}%</Typography>
                  </Box>
                  <Box sx={{ height: 6, background: '#F1F5F9', borderRadius: 10, overflow: 'hidden' }}>
                    <Box sx={{
                      height: '100%', borderRadius: 10,
                      background: person.color,
                      width: `${person.progress}%`,
                      transition: 'width 0.5s ease'
                    }} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
