export default function Home() {
  return (
    <main style={{padding: "40px 20px", maxWidth: 1200, margin: "0 auto"}}>
      <section style={{textAlign: "center", padding: "60px 0"}}>
        <div style={{
          width: 120, height: 120, margin: "0 auto 24px", borderRadius: 28,
          background: "linear-gradient(135deg, #f8e08a, #c69214)",
          color: "#000", fontWeight: "bold", fontSize: 56,
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>VH</div>
        <h1 style={{fontSize: "clamp(42px, 8vw, 86px)", margin: 0}}>ValleyHome Architect</h1>
        <p style={{color: "#d4af37", fontSize: "clamp(24px, 4vw, 48px)"}}>
          Designing Luxury with Harmony
        </p>
        <p style={{fontSize: 22, color: "#ddd"}}>
          Architect • Interior • Planner • Engineer
        </p>
      </section>

      <Section title="Our Services">
        <Grid items={[
          "Architectural Design",
          "Interior Design",
          "3D Elevation",
          "Planning & Approval",
          "Structural Engineering",
          "Turnkey Consultancy"
        ]} />
      </Section>

      <Section title="Featured Projects">
        <Grid items={[
          "Luxury Villas",
          "Modern Residences",
          "Commercial Buildings",
          "Contemporary Interiors"
        ]} />
      </Section>

      <Section title="Contact Us">
        <p style={{fontSize: 22, lineHeight: 1.8, color: "#ddd", textAlign: "center"}}>
          📞 9957337943 / 8822641991<br />
          ✉️ valleyhomearchitect@gmail.com<br />
          📍 Lachit Borphukan Nagar, Path No. 2, Near Punjan Chariali, Sivasagar, Assam
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section style={{padding: "50px 0"}}>
      <h2 style={{color: "#d4af37", fontSize: "clamp(30px, 5vw, 52px)", textAlign: "center"}}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Grid({ items }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 24
    }}>
      {items.map((item) => (
        <div key={item} style={{
          background: "#111",
          border: "1px solid #2a2a2a",
          borderRadius: 20,
          padding: 28,
          textAlign: "center"
        }}>
          <div style={{ color: "#d4af37", fontSize: 24, marginBottom: 10 }}>✦</div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>{item}</div>
        </div>
      ))}
    </div>
  );
}