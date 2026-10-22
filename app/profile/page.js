'use client';

import { useState } from 'react';

export default function Profile() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    county: 'Nairobi',
    tribe: '',
    bio: '',
    interests: '',
    religion: '',
    mode: 'general',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile saved! (In full version this goes to database + photo upload)');
    console.log(form);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '1.5rem 0' }}>Set Up Your Profile</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '12px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Age</label><br />
          <input type="number" name="age" value={form.age} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>County</label><br />
          <select name="county" value={form.county} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }}>
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Kiambu</option>
            <option>Nakuru</option>
            <option>Eldoret</option>
            <option>Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Tribe (optional)</label><br />
          <input name="tribe" value={form.tribe} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Bio</label><br />
          <textarea name="bio" value={form.bio} onChange={handleChange} rows="4" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Interests</label><br />
          <input name="interests" value={form.interests} onChange={handleChange} placeholder="e.g. music, travel, church" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Religion / Lifestyle</label><br />
          <input name="religion" value={form.religion} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Mode</label><br />
          <select name="mode" value={form.mode} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="general">General</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="church">Church</option>
          </select>
        </div>
        <button type="submit" className="btn">Save Profile</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
        Photo upload, GPS auto-detect, and real storage coming in full version.
      </p>
    </div>
  );
}
