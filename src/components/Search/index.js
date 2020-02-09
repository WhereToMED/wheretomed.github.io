import React, {useState}from 'react';
import './style.scss'

const Search = () => {

    const [result, setResults] = useState();

     const getResults = () => {
         //check if there are any results 

         //if none show error page

         //if results set state
         setResults([{name:"Malaron", price:2.50, needPrescription:false, inStock:true, locations:['Labadi', 'Osu', 'Dansoman', 'South Odorkor'] }])
     }

    return (
        <container>
            <main className='search'>
            <h2 className='start'>Start Your Search</h2>
            <form className='search_form'>
            <input type="search" />
            <button type='button' onClick={() => {
                getResults()
                console.log(result)}}>enter</button>
            </form>
             
            {/*new result component*/}
            {result && <div>true</div>
            }
   
        
            </main>
        </container>
    )
}

export default Search