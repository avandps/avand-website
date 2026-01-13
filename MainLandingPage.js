import Hero from '../components/Hero';
import StepForm from '../components/StepForm';
import ServiceCard from '../components/ServiceCard';
import Calculator from '../components/Calculator';

export default function Home() {
  return (
    <div className="bg-[#0b2f2e] min-h-screen text-[#f4ecd8]">
      {/* Dynamic Header */}
      <Header /> 

      <main>
        {/* Animated Hero Section */}
        <Hero />

        {/* Dynamic Services Grid */}
        <section id="services" className="py-20 px-8">
          <h2 className="text-center text-4xl font-bold mb-12">Our Specialized Finance Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* These components pull data from services.json */}
            <ServiceCard title="First Home Buyers" icon="🏠" />
            <ServiceCard title="Refinancing" icon="🔄" />
            <ServiceCard title="Investment Loans" icon="📈" />
            <ServiceCard title="Construction" icon="🏗️" />
          </div>
        </section>

        {/* The Lead Generation Form */}
        <section id="contact" className="py-20 bg-[#082524]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Book a Free Consultation</h2>
              <p className="mb-8 opacity-80">Serving Alfredton, Ballarat, and all of Victoria.</p>
              {/* Calculator component sits next to the form for high engagement */}
              <Calculator />
            </div>
            <StepForm />
          </div>
        </section>
      </main>

      {/* Footer with legal disclaimer and location details */}
      <Footer />
    </div>
  );
}