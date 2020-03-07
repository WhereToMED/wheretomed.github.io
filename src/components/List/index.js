import React, {useState, useEffect}from 'react';
import './style.scss'

const List = ({data}) => {

    const [originalData, setOriginalData] = useState();
    const [filterTerm, setFilterTerm] = useState();
    const [currentListData, setCurrentListData] = useState();
    const [locations, setLocations] = useState();

    const priceLow = () => originalData.sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
    const priceHigh = () => originalData.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))

    const ratingLow = () => originalData.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
    const ratingHigh = () => originalData.sort((a,b) => parseFloat(a.rating) - parseFloat(b.rating))

    const filterPrice = (priceRanking) => {
        if (priceRanking === 'Price') return
        const dataRank = priceRanking === 'Low' ? setFilterTerm('price high') : setFilterTerm('price low')
        setCurrentListData(dataRank)
    }

    const filterRating = (rating) => {
        if (rating === 'Rating') return

        const dataRank = rating === 'Low' ? setFilterTerm('rating high') : setFilterTerm('rating low')
        setCurrentListData(dataRank)
    }

    const filterLocation = (location) => {
        if (location === 'All locations') setCurrentListData(originalData)
        
        const dataRank = []

        originalData.map((data) => data.locations.includes(location) && dataRank.push(data))

        setCurrentListData(dataRank)
    }
 
     useEffect(() => {
        if(filterTerm ) {
            filterTerm === 'price high' && setCurrentListData(priceHigh())
            filterTerm === 'price low' && setCurrentListData(priceLow())
            filterTerm === 'rating high' && setCurrentListData(ratingHigh())
            filterTerm === 'rating low' && setCurrentListData(ratingLow())
        }

        setOriginalData(data)
    })

    const listData= currentListData || originalData
    let locArray = []

    const getLocations = () => {
        if (locations) return 
        listData && listData.map((d, index) => {
            d.locations.map((dL, index) => {
                if (locArray.indexOf(dL) >= 0) return 
                    locArray.push(dL)
                })
                setLocations(locArray)
        })
    }
            
    return (
        <>
            <main className='list'>
                <div>
                    Filter by:
                    <select onChange={(event) =>filterLocation(event.currentTarget.value) } onClick={() =>getLocations() }>
                        <option>All locations</option>
                        {locations && locations.map((d, index) =>  <option key={index} >{d}</option>) }}
                        </select>
                        <select onChange={(event) =>filterPrice(event.currentTarget.value) }>
                            <option>Price</option>
                            <option>Low</option>
                            <option>High</option>
                        </select>
                        <select onChange={(event) =>filterRating(event.currentTarget.value) }>
                            <option>Rating</option>
                            <option>Low</option>
                            <option>High</option>
                        </select>
                        <button onClick={() => setCurrentListData(originalData)}>Reset</button>


                </div>
               {listData  &&<ul>
                {listData.map((d, index) =>  <li key={index} >
                        <h3 >{d.name}</h3>
                        <h4>{`GH$${d.price}`}</h4>
                        <h4>{`Prescription needed: ${d.needPrescription}`}</h4>
                        <h4>{`In stock: ${d.inStock}`}</h4>
                        <h4>{`Locations: ${d.locations}`}</h4>
                        <h4>{`Rating: ${d.rating}`}</h4>
                        <h4>{`Dosage: ${d.dosage}`}</h4>
                    </li>
                )}
                </ul>}
            </main>
        </>
    )
}

export default List



/**
 Sort out dynamic filtering
Get reset button to work

 Filter list on search of medication - need to do

 on Show all pharmacies- prompt to log in

 Refactor and tidy up data
 */