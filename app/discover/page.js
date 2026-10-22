'use client';

import { useState, useEffect } from 'react';

const mockUsers = [
  { id: 1, name: 'Amina', age: 25, county: 'Nairobi', bio: 'Loves nyama choma and hiking Ngong Hills. Looking for genuine connection.', interests: 'Travel, Food, Music', tribe: 'Kikuyu' },
  { id: 2, name: 'Brian', age: 28, county: 'Mombasa', bio: 'Coastal vibes. Beach walks and Swahili culture. Student mode.', interests: 'Beach, Culture, Sports', tribe: 'Swahili' },
  { id: 3, name: 'Faith', age: 23, county: 'Kisumu', bio: 'Lake side girl. Church mode. Loves music and community.', interests: 'Music, Church, Cooking', tribe: 'Luo' },
  { id: 4, name: 'Kevin', age: 30, county: 'Kiambu', bio: 'Professional in tech. Coffee dates and good conversation.', interests: 'Tech, Coffee, Movies', tribe: 'Kikuyu' },
  { id: 5, name: 'Wanjiku', age: 26, county: 'Nairobi', bio: 'Sheng speaker, creative, loves matatu culture and art.', interests: 'Art, Music, Sheng', tribe: 'Kikuyu' },
];

export default function Discover() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countyFilter, setCountyFilter] = useState('All');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => setError(err.message)
      );
    } else {
      setError('Geolocation not supported');
    }
  }, []);

  const filteredUsers = countyFilter === 'All' 
    ? mockUsers 
    : mockUsers.filter(u => u.county === countyFilter);

  const currentUser = filteredUsers[currentIndex % filteredUsers.length];

  const handleLike = () => {
    alert(`You liked ${currentUser.name}! (In full app: check for mutual match)`);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePass = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '1.5rem 0' }}>Discover Nearby Matches</h2>
      
      {location && (
        <p style={{ textAlign: 'center', color: 'green' }}>
          Location enabled: ~{location.lat.toFixed(2)}, {location.lng.toFixed(2)}
        </p>
      )}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>Location: {error} (using mock data)</p>}

      <div className="filters">
        <label>County: 
          <select value={countyFilter} onChange={(e) => setCountyFilter(e.target.value)}>
            <option>All</option>
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Kiambu</option>
          </select>
        </label>
        <label>Age: <input type="number" placeholder="Min" style={{width: '60px'}} /> - <input type="number" placeholder="Max" style={{width: '60px'}} /></label>
        <label>Interests: <input type="text" placeholder="e.g. music, travel" /></label>
      </div>

      {currentUser && (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="profile-card">
            <div style={{ height: '250px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '4rem' }}>👤</span>
            </div>
            <h3>{currentUser.name}, {currentUser.age}</h3>
            <p><strong>County:</strong> {currentUser.county} | <strong>Tribe:</strong> {currentUser.tribe}</p>
            <p>{currentUser.bio}</p>
            <p><em>Interests: {currentUser.interests}</em></p>
          </div>
          <div className="swipe-actions">
            <button className="swipe-btn pass" onClick={handlePass}>✕</button>
            <button className="swipe-btn like" onClick={handleLike}>♥</button>
          </div>
        </div>
      )}
    </div>
  );
}
