import { useState } from "react"

const Searchbar = ({puppies}) => {

const [searchTerm, setSearchTerm] = useState('')
const filteredPuppies = puppies.filter((puppy) => puppy.name.includes(searchTerm))

    return(
        <>
        <input type='text' placeholder='cat' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
        {
            filteredPuppies && (
                filteredPuppies.map((puppy) => (
                    <div key={puppy.id}>{puppy.name}</div>
                ))
            )
        }
        </>
    )
}
export default Searchbar