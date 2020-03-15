import React, {useState, useEffect}from 'react';
import './style.scss'
import List from '../List'

const data = [{name:"Malaron", price:2.50, needPrescription:false, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 2', 'pharmacy 3', 'pharmacy 4'],locations:['Labadi', 'Osu', 'Dansoman', 'South Odorkor'], dosage: "high", rating: 2 },
{name:"doxyclyclone", price:2.00, needPrescription:false, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 3'],locations:['Dansoman', 'South Odorkor', 'Mallam', 'McCarthy'], dosage: "Low", rating: 4 },
{name:"Larium", price:3.00, needPrescription:true, inStock:true, pharmacies:['pharmacy 1', 'pharmacy 5'],locations:['Labadi', 'Osu', 'Spintex'], dosage: "medium", rating: 3 }
]

const Search = () => {

    const [dataLocations, setLocations] = useState();
    const [currentData, setCurrentData] = useState();
    const [showList, setShowList] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [locationValue, setLocationValue] = useState('')

    const results = data;

     const getResults = () => {
        setCurrentData(results)
        return;

        /**
         1. check if there are any results in database
         2. if none show error message
         3. if results set state

         Databases

         Pharmacy- location, stock. Relational link to medicines
         Medicines - name, location, dosage, price, need prescription, locations, pharmacies(relational link)
         Patients- name, age, location
         */
  }

     useEffect(() => {
         getLocations()
       // setResults(data)
       // !results && getLocations()
        
         //prompt show list component here
    }, [currentData])

    const filterLocation = (location) => {
        !location === 'All locations' && setLocationValue(location)
        if (location === 'All locations') {
            setCurrentData(results)
        return}

        const dataRank = []

        results.map((res) => res.locations.includes(location) && dataRank.push(res))
        setCurrentData(dataRank)
    }

     let locArray = []

    const getLocations = () => {
        if (dataLocations) return 
        results && results.map((d, index) => {
            d.locations.map((dL, index) => {
                if (locArray.indexOf(dL) >= 0) return 
                    locArray.push(dL)
                })
                setLocations(locArray)
        })
    }

    const showResults = (e) => {
        e.preventDefault()
        setShowList(true)
    }

    const showEnter = !inputValue.length && !locationValue.length

    return (

        <>
            <main className='search'>
            <h2 className='start'>{!showList ?'Start Your Search' : 'Results'}</h2>
            {!showList && <form className='search_form'>
                <label>Medicine</label>
            <input type="search"  onChange={(e) => setInputValue(e.currentTarget.value)}/>
            <select onChange={(event) =>filterLocation(event.currentTarget.value) }>
                        <option>All locations</option>
                        {dataLocations && dataLocations.map((d, index) => <option key={index} >{d}</option>)}
                        </select>
            <button disabled={showEnter} type='button' onClick={(e) => showResults(e)}>enter</button>
            
            </form>}
             
            {/*new result component*/}
            {showList && <List data={currentData}/>
            }
   
        
            </main>
        </>
    )
}

export default Search