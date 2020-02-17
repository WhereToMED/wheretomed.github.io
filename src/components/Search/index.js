import React, {useState, useEffect}from 'react';
import './style.scss'
import List from '../List'

const Search = () => {

    const [result, setResults] = useState();

     const getResults = () => {

        /**
         1. check if there are any results in database
         2. if none show error message
         3. if results set state

         Databases

         Pharmacy- location, stock. Relational link to medicines
         Medicines - name, location, dosage, price, need prescription, locations, pharmacies(relational link)
         Patients- name, age, location
         */

         setResults([{name:"Malaron", price:2.50, needPrescription:false, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 2', 'pharmacy 3', 'pharmacy 4'],locations:['Labadi', 'Osu', 'Dansoman', 'South Odorkor'], dosage: "high" }])
     }

     useEffect(() => {
         //prompt show list component here
        console.log(result)
    })

    return (

        <>
            <main className='search'>
            <h2 className='start'>Start Your Search</h2>
            <form className='search_form'>
            <input type="search" />
            <button type='button' onClick={() => getResults()}>enter</button>
            </form>
             
            {/*new result component*/}
            {result && <List data={result}/>
            }
   
        
            </main>
        </>
    )
}

export default Search