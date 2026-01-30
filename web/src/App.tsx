import { motion } from 'framer-motion';
import {
  Wind,
  Droplets,
  ShieldCheck,
  Settings,
  Activity,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => (
  <nav className="glass" style={{
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 5%',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Activity size={32} color="var(--primary)" />
      <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>
        FUBOTICS <span style={{ color: 'var(--primary)', fontWeight: 400 }}>ZHH</span>
      </span>
    </div>
    <div style={{ display: 'flex', gap: '2.5rem', fontWeight: 500 }}>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
    <button className="btn btn-primary">Partner With Us</button>
  </nav>
);

const Hero = () => (
  <section id="home" style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.4)), url("/hero.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '80px'
  }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '650px' }}
      >
        <span style={{
          background: 'rgba(0, 119, 182, 0.1)',
          color: 'var(--primary)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Initiative by Fubotics Pvt Ltd
        </span>
        <h1 style={{ fontSize: '4.5rem', marginTop: '1.5rem', marginBottom: '1.5rem', color: 'var(--text)' }}>
          Zero Harm <br />
          <span style={{ color: 'var(--primary)' }}>Healthcare</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          We undertake 100% responsibility for Infection Prevention & Control in OTs and ICUs.
          Focus on treating patients, while we handle the environment.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Explore Services <ArrowRight size={20} />
          </button>
          <button className="btn btn-outline">Our Mission</button>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, features }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass"
    style={{
      padding: '3rem',
      borderRadius: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}
  >
    <div style={{
      width: '60px',
      height: '60px',
      background: 'var(--primary)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      <Icon size={32} />
    </div>
    <h3 style={{ fontSize: '1.8rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-muted)' }}>{description}</p>
    <ul style={{ marginTop: 'auto' }}>
      {features.map((f: string, i: number) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
          <CheckCircle2 size={18} color="var(--primary)" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => (
  <section id="services" style={{ background: 'var(--bg-alt)' }}>
    <div className="container">
      <h2 className="section-title">Comprehensive Protection</h2>
      <p className="section-subtitle">
        Scientifically driven infection control methodologies ensuring the highest safety standards for your medical facility.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem'
      }}>
        <FeatureCard
          icon={Wind}
          title="Air Borne Control"
          description="Expert HVAC solutions and robotic duct cleaning to eliminate effluents scientifically."
          features={[
            "HEPA Integrity & Leak Testing",
            "Air Velocity Monitoring",
            "ACPH & Differential Pressure",
            "Particulate Count Monitoring",
            "Temperature & Humidity Control"
          ]}
        />
        <FeatureCard
          icon={Droplets}
          title="Water Borne Control"
          description="Ensuring pure and safe water supply through rigorous testing and maintenance."
          features={[
            "Total Viable Counts (TVC)",
            "Total Dissolved Solids (TDS)",
            "RO System Maintenance",
            "pH & Hardness Monitoring",
            "Compliance Documentation"
          ]}
        />
        <FeatureCard
          icon={ShieldCheck}
          title="Surface Aseptics"
          description="Deep cleaning of high-traffic zones with NABH 6th edition approved chemicals."
          features={[
            "Deep O.T. Sterilization",
            "Rapid Multi-Op Turnaround",
            "NABH 6th Ed. Standards",
            "High-Quality Bio-Chemicals",
            "Verified Aseptic Results"
          ]}
        />
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section style={{ padding: '60px 0', background: 'var(--primary)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-around', color: 'white' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ fontSize: '3rem' }}>20+</h4>
        <p style={{ opacity: 0.8 }}>Years Expertise</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ fontSize: '3rem' }}>100%</h4>
        <p style={{ opacity: 0.8 }}>Responsibility</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ fontSize: '3rem' }}>0</h4>
        <p style={{ opacity: 0.8 }}>Harm Objective</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ fontSize: '3rem' }}>Scientific</h4>
        <p style={{ opacity: 0.8 }}>Gap Analysis</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact">
    <div className="container" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '4rem',
      alignItems: 'center'
    }}>
      <div>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Secure Your <span style={{ color: 'var(--primary)' }}>O.T.s?</span></h2>
        <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Connect with our specialized team to conduct a thorough gap analysis of your facility today.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}><Phone size={24} /></div>
            <div>
              <p style={{ fontWeight: 700 }}>Call Us</p>
              <p style={{ color: 'var(--text-muted)' }}>+91 xxxxxxxxx</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}><Mail size={24} /></div>
            <div>
              <p style={{ fontWeight: 700 }}>Email</p>
              <p style={{ color: 'var(--text-muted)' }}>hello@fubotics.com</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--primary)' }}><Settings size={24} /></div>
            <div>
              <p style={{ fontWeight: 700 }}>Corporate Office</p>
              <p style={{ color: 'var(--text-muted)' }}>www.fubotics.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass" style={{ padding: '3rem', borderRadius: '32px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input type="text" placeholder="Hospital Name" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd' }} />
            <input type="text" placeholder="Location" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd' }} />
          </div>
          <input type="email" placeholder="Professional Email" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd' }} />
          <textarea placeholder="Services Interested In" rows={4} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd' }}></textarea>
          <button className="btn btn-primary" style={{ padding: '1.2rem' }}>Request Consultation</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '60px 5%', background: 'var(--text)', color: 'white' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Activity size={24} color="var(--primary-light)" />
        <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>FUBOTICS <span style={{ color: 'var(--primary-light)', fontWeight: 400 }}>ZHH</span></span>
      </div>
      <p style={{ opacity: 0.6 }}>&copy; 2024 Fubotics Private Limited. All Rights Reserved.</p>
      <div style={{ display: 'flex', gap: '2rem', opacity: 0.8 }}>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />

      {/* Before/After Section */}
      <section style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Scientific Results</h2>
          <p className="section-subtitle">Evidence-based deep cleaning of ventilation systems and conduits.</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            background: 'var(--bg-alt)',
            padding: '2rem',
            borderRadius: '24px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                height: '300px',
                background: '#444',
                borderRadius: '16px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 700
              }}>BEFORE CLEANING</div>
              <p style={{ fontWeight: 600 }}>Effluent accumulation in ducts</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                height: '300px',
                background: 'var(--primary)',
                borderRadius: '16px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 700
              }}>AFTER CLEANING</div>
              <p style={{ fontWeight: 600, color: 'var(--primary)' }}>Robotic scientific purification</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
