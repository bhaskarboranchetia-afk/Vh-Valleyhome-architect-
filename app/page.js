export default function Home() {
  const services = [
    'Architectural Design',
    'Interior Design',
    '2D & 3D Planning',
    'Structural Engineering',
    'Construction Consultation',
    'Landscape Design'
  ];

  const reviews = [
    '★★★★★ Excellent design and professional execution.',
    '★★★★★ Beautiful elevation and practical planning.',
    '★★★★★ Highly recommended for luxury home design.'
  ];

  return (
    <main>
      <section style={{padding:'100px 20px',textAlign:'center',maxWidth:1200,margin:'0 auto'}}>
        <div style={{
          width:110,height:110,margin:'0 auto 24px',borderRadius:28,
          background:'linear-gradient(135deg,#fff3b0,#d4af37,#a67c00)',
          color:'#000',display:'flex',alignItems:'center',justifyContent:'center',
          fontSize:46,fontWeight:'bold'
        }}>VH</div>
        <h1 style={{fontSize:'clamp(44px,8vw,88px)',margin:0}}>ValleyHome Architect</h1>
        <p style={{fontSize:'clamp(24px,4vw,38px)',color:'#d4af37'}}>Designing Luxury with Harmony</p>
        <p style={{fontSize:20,color:'#ccc'}}>Architect • Interior • Planner • Engineer</p>
        <a href="https://wa.me/919957337943"
           style={{display:'inline-block',marginTop:24,padding:'14px 28px',
           background:'#d4af37',color:'#000',borderRadius:999,textDecoration:'none',fontWeight:'bold'}}>
          Chat on WhatsApp
        </a>
      </section>

      <section style={{maxWidth:1200,margin:'0 auto',padding:'60px 20px'}}>
        <h2 style={{color:'#d4af37',fontSize:40}}>Our Services</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
          {services.map(s => (
            <div key={s} style={{background:'#111',padding:24,borderRadius:20,border:'1px solid #222'}}>{s}</div>
          ))}
        </div>
      </section>

      <section style={{maxWidth:1200,margin:'0 auto',padding:'60px 20px'}}>
        <h2 style={{color:'#d4af37',fontSize:40}}>Project Gallery</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:20}}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{background:'#111',padding:16,borderRadius:20}}>
              <div style={{
                height:200,borderRadius:14,
                background:'linear-gradient(135deg,#1f2937,#d4af37)'
              }} />
              <p>Luxury Project {i}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{maxWidth:1200,margin:'0 auto',padding:'60px 20px'}}>
        <h2 style={{color:'#d4af37',fontSize:40}}>Client Reviews</h2>
        {reviews.map(r => (
          <div key={r} style={{background:'#111',padding:24,borderRadius:20,marginBottom:16}}>{r}</div>
        ))}
      </section>

      <section style={{maxWidth:1200,margin:'0 auto',padding:'60px 20px'}}>
        <h2 style={{color:'#d4af37',fontSize:40}}>Contact Us</h2>
        <div style={{background:'#111',padding:28,borderRadius:20}}>
          <p>📞 9957337943 / 8822641991</p>
          <p>📧 valleyhomearchitect@gmail.com</p>
          <p>📍 Lachit Borphukan Nagar, Path No. 2, Near Punjan Chariali, Sivasagar, Assam</p>
          <p>🗺️ Google Maps: https://maps.google.com</p>
        </div>
      </section>
    </main>
  );
}
