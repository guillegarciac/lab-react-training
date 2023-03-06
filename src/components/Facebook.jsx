import profilesData from '../data/berlin.json'
import React, {useState} from 'react'

export default function Facebook() {
  //setProfiles seems as is not being used in the function because the component is not calling it. However, when the component is first mounted, the useState hook initializes the profiles state to the profilesData array passed as an argument and this is achieved by destructuring the returned array of [profiles, setProfiles], and assigning the first element (profiles) to the initial state value, and the second element (setProfiles) to the state updater function.
  
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <div>
      {profiles.map((profile, index) => (
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
  );
}