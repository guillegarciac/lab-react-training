import profilesData from '../data/berlin.json';
import React, { useState } from 'react';

export default function FaceBookV2() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [profiles, setProfiles] = useState(profilesData);

  const countries = [];
    for (let i = 0; i < profiles.length; i++) {
    const country = profiles[i].country;
    if (!countries.includes(country)) {
    countries.push(country);
    }
  }

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <div className="filter-component">
        {countries.map((country, index) => (
          <button 
            key={index}
            onClick={() => handleClick(country)}
            className={selectedCountry === country ? 'active' : ''}>
            {country}
          </button>
        ))}
      </div>
      <div>
        {profiles.map((profile) => (
          <div
            key={profile.firstName}
            className={selectedCountry === profile.country ? 'active idCard': 'idCard'}>
            <img src={profile.img} alt={profile.firstName + " " + profile.lastName} />
            <div className="cardIDetails">
              <p><strong>First name:</strong> {profile.firstName}</p>
              <p><strong>Last name:</strong> {profile.lastName}</p>
              <p><strong>Country:</strong> {profile.country}</p>
              <p><strong>Type: </strong> {profile.isStudent ? "Student" : "Non-Student"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}