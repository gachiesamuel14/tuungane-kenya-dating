export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h2>Tuungane — Find Love Nearby in Kenya 🇰🇪</h2>
        <p>Location-based matchmaking. Connect with people in your county, town, or within a few kilometers.</p>
        <p>Supports filters by county (Nairobi, Mombasa, Kisumu, Kiambu...), age, tribe, interests, religion, and more.</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="/discover" className="btn">Start Discovering</a>
          <a href="/profile" className="btn btn-secondary">Create Profile</a>
        </div>
      </section>

      <section>
        <h3 style={{ textAlign: 'center', margin: '2rem 0' }}>How It Works</h3>
        <div className="card-grid">
          <div className="profile-card">
            <h4>1. Create Profile</h4>
            <p>Add photos, bio, interests, county, and preferences.</p>
          </div>
          <div className="profile-card">
            <h4>2. Enable Location</h4>
            <p>We use GPS to show nearby matches. Or filter by county.</p>
          </div>
          <div className="profile-card">
            <h4>3. Swipe & Match</h4>
            <p>Like profiles. Mutual likes = match. Then chat!</p>
          </div>
          <div className="profile-card">
            <h4>4. Local Vibes</h4>
            <p>Sheng-friendly, M-Pesa ready, student/professional/church modes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
