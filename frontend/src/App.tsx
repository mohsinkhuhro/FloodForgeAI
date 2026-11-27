import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { AppShell } from './components/layout/AppShell';
import { FloodForgeProvider } from './context/FloodForgeContext';
import { CommandCenter } from './pages/CommandCenter';
import { EquityImpact } from './pages/EquityImpact';
import { FloodPrediction } from './pages/FloodPrediction';
import { IntelligenceMap } from './pages/IntelligenceMap';
import { LiveMonitoring } from './pages/LiveMonitoring';
import { MitigationOptimizer } from './pages/MitigationOptimizer';
import { ModelHealth } from './pages/ModelHealth';
import { NotFound } from './pages/NotFound';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

export function App() {
  return (
    <FloodForgeProvider>
      <BrowserRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<CommandCenter />} />
            <Route path="/monitoring" element={<LiveMonitoring />} />
            <Route path="/map" element={<IntelligenceMap />} />
            <Route path="/prediction" element={<FloodPrediction />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/optimizer" element={<MitigationOptimizer />} />
            <Route path="/equity" element={<EquityImpact />} />
            <Route path="/health" element={<ModelHealth />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
      <Analytics />
    </FloodForgeProvider>
  );
}

export default App;
