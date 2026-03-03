import './index.css'

// Pricing Plans
const plans = [
  { name: 'Free', price: '$0', period: '/mo', features: ['5 threads/month', 'Basic templates'], highlight: false, url: '#' },
  { name: 'Pro', price: '$9', period: '/mo', features: ['Unlimited threads', 'AI generation', 'Scheduling', 'Analytics'], highlight: true, url: 'https://getthread.lemonsqueezy.com' },
  { name: 'Agency', price: '$29', period: '/mo', features: ['Everything in Pro', '5 team members', 'API access'], highlight: false, url: 'https://getthread.lemonsqueezy.com' }
]

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section style={{ padding: '120px 24px 80px', textAlign: 'center', background: 'radial-gradient(ellipse at top, rgba(249,115,22,0.15) 0%, transparent 50%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(249,115,22,0.1)', borderRadius: '20px', marginBottom: '24px', fontSize: '14px', color: '#f97316' }}>
            🚀 The AI-powered thread generator
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px' }}>
            Turn ideas into <span style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>viral threads</span> in seconds
          </h1>
          <p style={{ fontSize: '20px', color: '#a1a1a1', marginBottom: '40px', lineHeight: '1.6' }}>
            Nexus writes your Twitter threads while you focus on building. AI-generated, human-edited, ready to go viral.
          </p>
          <a href="https://getthread.lemonsqueezy.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', marginRight: '16px' }}>
            Start Free Trial
          </a>
          <a href="https://getthread.lemonsqueezy.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#1a1a1a', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', border: '1px solid #2a2a2a' }}>
            See Pricing
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', background: '#111111' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px' }}>
            Everything you need to <span style={{ color: '#f97316' }}>dominate X</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🤖', title: 'AI Generation', desc: 'Give us a topic or URL, we write the thread' },
              { icon: '📅', title: 'Smart Scheduling', desc: 'Schedule posts for optimal engagement times' },
              { icon: '📊', title: 'Analytics', desc: 'Track impressions, likes, retweets in real-time' },
              { icon: '🎯', title: 'Viral Templates', desc: 'Proven hooks and structures that work' },
              { icon: '🔄', title: 'Repurpose', desc: 'Turn threads into LinkedIn posts & newsletters' },
              { icon: '✏️', title: 'Easy Editor', desc: 'Edit AI output with our intuitive builder' },
            ].map((feature, i) => (
              <div key={i} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px', textAlign: 'left' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: '#a1a1a1', lineHeight: '1.5' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', textAlign: 'center', marginBottom: '60px' }}>
            Simple pricing, <span style={{ color: '#f97316' }}>no surprises</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {plans.map((plan, i) => (
              <div key={i} style={{ background: '#1a1a1a', border: plan.highlight ? '2px solid #f97316' : '1px solid #2a2a2a', borderRadius: '12px', padding: '24px', textAlign: 'center', position: 'relative' }}>
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#f97316', padding: '4px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>{plan.name}</h3>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '48px', fontWeight: '800' }}>{plan.price}</span>
                  <span style={{ color: '#a1a1a1' }}>{plan.period}</span>
                </div>
                <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '24px', padding: 0 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ padding: '8px 0', color: '#a1a1a1' }}>✓ {f}</li>
                  ))}
                </ul>
                <a href={plan.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', background: plan.highlight ? 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' : '#1a1a1a', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', textAlign: 'center', textDecoration: 'none', border: plan.highlight ? 'none' : '1px solid #2a2a2a' }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid #2a2a2a', textAlign: 'center', color: '#a1a1a1' }}>
        <p>© 2025 ThreadGenius. Built by Nexus 🧙‍♂️</p>
      </footer>
    </div>
  )
}

export default App
