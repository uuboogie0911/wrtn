import { BuildTimeline } from './components/BuildTimeline';
import { Conclusion } from './components/Conclusion';
import { ConsultingTimeline } from './components/ConsultingTimeline';
import { Differentiators } from './components/Differentiators';
import { Estimate } from './components/Estimate';
import { Hero } from './components/Hero';
import { Kpi } from './components/Kpi';
import { Overview } from './components/Overview';
import { RagArchitecture } from './components/RagArchitecture';
import { SalesStrategy } from './components/SalesStrategy';
import { Staffing } from './components/Staffing';

function App() {
  return (
    <main>
      <Hero />
      <Overview />
      <SalesStrategy />
      <Differentiators />
      <ConsultingTimeline />
      <BuildTimeline />
      <RagArchitecture />
      <Staffing />
      <Estimate />
      <Kpi />
      <Conclusion />
    </main>
  );
}

export default App;
