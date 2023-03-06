import profilesData from '../data/berlin.json'
import React, {useState} from 'react'

export default function Facebook() {
  //setProfiles seems as is not being used in the function because the component is not calling it. However, when the component is first mounted, the useState hook initializes the profiles state to the profilesData array passed as an argument and this is achieved by destructuring the returned array of [profiles, setProfiles], and assigning the first element (profiles) to the initial state value, and the second element (setProfiles) to the state updater function.

  const [profiles, setProfiles] = useState(profilesData);
  const [selectedCountry, setSelectedCountry] = useState(null);

  //Array of countries from the profiles data
  const countries = [...new Set(profiles.map((profile) => profile.country))];

  //Creates filteredProfiles to filters profiles by selected country (based on countries above), or show all profiles if none is selected (: profiles)
  const filteredProfiles = selectedCountry ? profiles.filter((profile) => profile.country === selectedCountry) : profiles;

  //Handles country button clicks
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  //Handles button click to select All countries => selectedCountry = null
  const handleAllCountriesClick = () => {
    setSelectedCountry(null)
  }

  return (
    <div>
      <div>
        <button 
          onClick={handleAllCountriesClick} 
          style={{
            backgroundColor: selectedCountry === null ? "#43A5BE" : "transparent", 
            color: selectedCountry === null ? "white" : "black"}}>All</button>
        {countries.map((country, index) => (
        <button 
          key={index}
          onClick={() => handleCountryClick(country)}
          style={{
            backgroundColor: selectedCountry === country ? "#43A5BE" : "transparent",
            color: selectedCountry === country ? "white" : "black"}}>
          {country}
        </button>
      ))}
      </div>
    <div>
      {filteredProfiles.map((profile, index) => (
        <div className="idCard" key={index}>
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