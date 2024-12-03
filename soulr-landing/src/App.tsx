import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features id="features" />
      <HowItWorks id="how-it-works" />
      <FAQ id="faq" />
      <CTA id="cta" />
      <Footer />
    </div>
  );
}

export default App;