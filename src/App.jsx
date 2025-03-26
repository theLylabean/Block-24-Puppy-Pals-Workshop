import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log('puppyList: ', puppyList);

  console.log(featPupId)
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
    {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )}
    <div className='App'>
      {
        puppies.map((puppy) => (
          <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        ))
      }
    </div>
    </>
  )
}

export default App
