import React, { useState, useEffect } from "react";
import "./style.scss";

const List = ({ data, medicine }) => {
  // const originalData = data

  // const [filterTerm, setFilterTerm] = useState();
  // const [currentListData, setCurrentListData] = useState();
  const [showOverlay, setShowOverlay] = useState(false);
  const [medicineOnDisplayDetails, setMedicineOnDisplayDetails] = useState();
  // const priceLow = () => originalData.sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
  // const priceHigh = () => originalData.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))

  // const ratingLow = () => originalData.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
  // const ratingHigh = () => originalData.sort((a,b) => parseFloat(a.rating) - parseFloat(b.rating))

  // const filterPrice = (priceRanking) => {
  //     if (priceRanking === 'Price') return
  //     const dataRank = priceRanking === 'Low' ? setFilterTerm('price high') : setFilterTerm('price low')
  //     setCurrentListData(dataRank)
  // }

  // const filterRating = (rating) => {
  //     if (rating === 'Rating') return

  //     const dataRank = rating === 'Low' ? setFilterTerm('rating high') : setFilterTerm('rating low')
  //     setCurrentListData(dataRank)
  // }

  //  useEffect(() => {
  //     if(filterTerm ) {

  //        if( filterTerm === 'price high') {
  //            const newList = priceHigh()
  //            setCurrentListData(newList)
  //        }

  //         if(filterTerm === 'price low') {
  //             const newList = priceLow()
  //             setCurrentListData(newList)
  //         }

  //         if(filterTerm === 'rating high') {
  //             const newList = ratingHigh()
  //             setCurrentListData(newList)
  //         }

  //         if(filterTerm === 'rating low') {
  //             const newList = ratingLow()
  //             setCurrentListData(newList)
  //         }
  //     }

  //     !currentListData && setCurrentListData(data)

  // }, [currentListData])

  // const listData= currentListData || originalData

  // const getPharmacies = () => {
  //     alert('you need to be logged in to view')
  // }

  const onMedicineButtonClick = (d, e) => {
    e.preventDefault();
    setShowOverlay(true);
    d && setMedicineOnDisplayDetails(d);
    console.log(d);
  };

  return (
    <>
      <div className="listContainer">
        <a href="#" onClick={() => window.location.reload()}>{`<< Go Back`}</a>
        <div className="filters">
          <ul className="filtersList">
            Sort by:
            <li>
              <button>Price</button>
            </li>
            <li>
              <button>Location </button>
            </li>
            <li>
              <button>Service</button>
            </li>
            <li>
              <button>Availability </button>
            </li>
          </ul>
        </div>

        {medicineOnDisplayDetails && showOverlay && (
          <div className="medicineDetails">
            <h3>{medicineOnDisplayDetails.name.split("-")[0]}</h3>
            <ul className="medicineDetailsList">
              <li className="listPrice">
                <span>
                  IN-STORE PRICE:{" "}
                  <span>{`GH$ ${medicineOnDisplayDetails.price}`}</span>
                </span>
              </li>
              <li>
                <h4>Specicification</h4>
                <p>{`Brand: generic | Form: tablet | Dose: ${medicineOnDisplayDetails.dose}`}</p>
              </li>

              <ul className="manufacturerMainList">
                {medicineOnDisplayDetails.manufacture_ids.map(manu => {
                  return (
                    <ul className="manufacturerList" key={manu.name}>
                      <li>{`Manufacturer: ${manu.name}`}</li>
                      <li>{`Mobile authentication: ${manu.mobile_authenticator_system}`}</li>
                      <li>{`Available: ${
                        manu.quantity ? "true" : "false"
                      }`}</li>
                    </ul>
                  );
                })}
              </ul>

              <button className="discountButton">GET DISCOUNT</button>

              <li className="pharmacyWebsite">{`Pick up in store: ${medicineOnDisplayDetails.pAddress}`}</li>
              <a href={`#${medicineOnDisplayDetails.pWebsite}`}>
                Visit website
              </a>
            </ul>
          </div>
        )}

        <main className="list">
          {data && (
            <>
              <h3 className="medicineName">{medicine}</h3>
              <ul>
                {data.map((d, index) => (
                  <li key={index}>
                    <button onClick={e => onMedicineButtonClick(d, e)}>
                      <p>{`${index + 1}. ${d.pName} - `}</p>
                      <p>{`${d.price}GH$`}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* <button onClick={() => window.location.reload()}>Reset</button>
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
              */}
        </main>
        {showOverlay && (
          <div className="overlay" onClick={() => setShowOverlay(false)} />
        )}
      </div>
    </>
  );
};

export default List;

/**
 

<h4>{`Locations: ${d.locations}`}</h4>
 
 Sort out dynamic filtering of list

 Filter list on search of medication - need to do

 on Show all pharmacies- prompt to log in

 Refactor and tidy up data
 */
