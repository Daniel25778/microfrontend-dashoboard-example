# Micro Frontend com Vite Plugin Federation

Dashboard administrativo demonstrando arquitetura de Micro Frontends com React, TypeScript e Tailwind CSS.

## Arquitetura

```
mf-admin/
├── host/           → Shell App — sidebar, header e orquestração
└── mfe-metrics/    → Remote App — cards de métricas e gráfico
```

O **Host** consome o **MFE Metrics** em runtime via `vite-plugin-federation`. Cada app é independente: repositório próprio, build próprio, deploy próprio.

```
[ Host App (Shell) ]
        |
        ├── Sidebar + Header (próprios)
        |
        └── <MetricsDashboard /> ← carregado do mfe-metrics em runtime
                                    via lazy + Suspense
```

## Stack

- React 18 + TypeScript
- Vite 4 + @originjs/vite-plugin-federation
- Tailwind CSS + Material UI
- Recharts (gráfico de barras)

## Como rodar

### 1. Instalar dependências

```bash
# Host
cd host && npm install

# MFE
cd ../mfe-metrics && npm install
```

### 2. Build e preview do MFE (obrigatório primeiro)

O Host consome o `remoteEntry.js` do MFE em runtime, então o MFE precisa estar rodando antes.

```bash
cd mfe-metrics
npm run build
npm run preview   # roda em http://localhost:5001
```

### 3. Dev do Host

```bash
cd host
npm run dev       # roda em http://localhost:5000
```

Acesse `http://localhost:5000` para ver o dashboard completo.

## Como funciona o Federation

**mfe-metrics** expõe o componente:

```ts
// vite.config.ts — mfe-metrics
federation({
  name: 'mfeMetrics',
  filename: 'remoteEntry.js',
  exposes: {
    './MetricsDashboard': './src/pages/MetricsDashboard',
  },
  shared: ['react', 'react-dom'],
})
```

**host** consome em runtime:

```ts
// vite.config.ts — host
federation({
  name: 'host',
  remotes: {
    mfeMetrics: 'http://localhost:5001/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom'],
})
```

```tsx
// App.tsx — host
const MetricsDashboard = lazy(() => import('mfeMetrics/MetricsDashboard'))
```

O `shared` garante que React não seja carregado duas vezes, uma para cada app.

## Por que Micro Frontends?

Em times grandes, um único repositório front-end vira gargalo — qualquer mudança pode afetar tudo. Com Micro Frontends:

- Times diferentes deployam de forma independente
- Falha em um módulo não derruba o produto inteiro
- É possível até misturar frameworks (React + Vue) no mesmo shell
