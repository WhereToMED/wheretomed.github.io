import React, {useState, useEffect}from 'react';
import './style.scss'
import List from '../List'

const data = [{name:"Malaron", price:2.50, needPrescription:false, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 2', 'pharmacy 3', 'pharmacy 4'],locations:['Labadi', 'Osu', 'Dansoman', 'South Odorkor'], dosage: "high", rating: 2 },
{name:"doxyclyclone", price:2.00, needPrescription:false, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 3'],locations:['Dansoman', 'South Odorkor', 'Mallam', 'McCarthy'], dosage: "Low", rating: 4 },
{name:"Larium", price:3.00, needPrescription:true, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 5'],locations:['Labadi', 'Osu', 'Spintex'], dosage: "medium", rating: 3 }
]

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

         setResults(data)
     }

     useEffect(() => {
         //prompt show list component here
        //console.log(result)
    })

    return (

        <>
            <main className='search'>
            <h2 className='start'>Start Your Search</h2>
            <form className='search_form'>
                <label>Medicine</label>
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