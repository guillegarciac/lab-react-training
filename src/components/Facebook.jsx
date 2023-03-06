import profilesData from '../data/berlin.json'
import React, {useState} from 'react'

export default function Facebook() {
  //setProfiles seems as is not being used in the function because the component is not calling it. However, when the component is first mounted, the useState hook initializes the profiles state to the profilesData array passed as an argument and this is achieved by destructuring the returned array of [profiles, setProfiles], and assigning the first element (profiles) to the initial state value, and the second element (setProfiles) to the state updater function.

  const [profiles, setProfiles] = useState(profilesData);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showMoreCountries, setShowMoreCountries] = useState(false);
  
  //Array of countries from the profiles data
  const countries = [...new Set(profiles.map((profile) => profile.country))];

  //it15 adds top5 countries and other countries in a separate button.
  //Sort countries by the number of profiles
  const sortedCountries = countries.sort((a, b) => {
    const aCount = profiles.filter((profile) => profile.country === a).length;
    const bCount = profiles.filter((profile) => profile.country === b).length;
    return bCount - aCount;
  });

  //Top 5 countries based on profile count
  const top5Countries = sortedCountries.slice(0, 5);

  //Creates filteredProfiles to filters profiles by selected country (based on countries above), or show all profiles if none is selected (: profiles)
  const filteredProfiles = selectedCountry ? profiles.filter((profile) => profile.country === selectedCountry) : profiles;

  //Handles country button clicks
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  //Handles button click to select All countries => selectedCountry = null
  const handleAllCountriesClick = () => {
    setSelectedCountry(null)
    setShowMoreCountries(false);
  }

  //Handles the Toggle for dropdown more countries visibility
  const handleMoreCountriesClick = () => {
    setSelectedCountry(null);
    setShowMoreCountries(!showMoreCountries); 
  };

  return (
    <div>
      <div>
        <button 
          onClick={handleAllCountriesClick} 
          style={{
            backgroundColor: selectedCountry === null ? "#43A5BE" : "transparent", 
            color: selectedCountry === null ? "white" : "black"}}>
            All
        </button>
        {top5Countries.map((country, index) => (
        <button 
          key={index}
          onClick={() => handleCountryClick(country)}
          style={{
            backgroundColor: selectedCountry === country ? "#43A5BE" : "transparent",
            color: selectedCountry === country ? "white" : "black"}}>
            {country}
        </button>
      ))}
      {countries.length > 5 && (
          <div className="more-countries">
            <button 
            onClick={handleMoreCountriesClick}
            style={{
              backgroundColor: showMoreCountries ? "#43A5BE" : "transparent",
              color: showMoreCountries ? "white" : "black"}}>
              See More Countries
            </button>
            {/* show or hide the dropdown menu based on the showMoreCountries state */}
            {showMoreCountries && (
              <div className="more-countries-dropdown">
                {sortedCountries.slice(5).map((country, index) => (
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
            )}
          </div>
        )}
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

