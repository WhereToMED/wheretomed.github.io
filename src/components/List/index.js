import React, {useState, useEffect} from 'react';
import './style.scss'

const List = ({data}) => {

    const originalData = data

    const [filterTerm, setFilterTerm] = useState();
    const [currentListData, setCurrentListData] = useState();

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

     useEffect(() => {
        if(filterTerm ) {

           if( filterTerm === 'price high') {
               const newList = priceHigh()
               setCurrentListData(newList)
           }

            if(filterTerm === 'price low') {
                const newList = priceLow()
                setCurrentListData(newList)
            }

            if(filterTerm === 'rating high') {
                const newList = ratingHigh()
                setCurrentListData(newList)
            }

            if(filterTerm === 'rating low') {
                const newList = ratingLow()
                setCurrentListData(newList)
            }
        }


        !currentListData && setCurrentListData(data)
       
    }, [currentListData])

    const listData= currentListData || originalData

    const getPharmacies = () => {
        alert('you need to be logged in to view')
    }
    
            
    return (
        <>
            <main className='list'>
            <button onClick={() => window.location.reload()}>Reset</button>
                <div>

                    
                    Filter by:
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
                       


                </div>
               {listData  &&<ul>
                {listData.map((d, index) =>  <li key={index} >
                        <h3 >{d.name}</h3>
                        <h4>{`GH$${d.price}`}</h4>
                        <h4>{`Prescription needed: ${d.needPrescription}`}</h4>
                        <h4>{`In stock: ${d.inStock}`}</h4>
                        <h4>{`Rating: ${d.rating}`}</h4>
                        <h4>{`Dosage: ${d.dosage}`}</h4>
                        <button onClick={getPharmacies}>Get Pharmacies</button>
                    </li>
                )}
                </ul>}
            </main>
        </>
    )
}

export default List



/**
 

<h4>{`Locations: ${d.locations}`}</h4>
 
 Sort out dynamic filtering of list

 Filter list on search of medication - need to do

 on Show all pharmacies- prompt to log in

 Refactor and tidy up data
 */