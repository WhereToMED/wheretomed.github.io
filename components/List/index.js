import React, { useState, useEffect } from "react";
import "./style.scss";

const List = ({ data, medicine }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [medicineOnDisplayDetails, setMedicineOnDisplayDetails] = useState();
  const [originalData, setOriginalData] = useState(data);
  const [listData, setListData] = useState();
  const [currentData, setCurrentData] = useState();
  const [priceCount, setPriceCount] = useState(0);

  const onMedicineButtonClick = (d, e) => {
    e.preventDefault();
    setShowOverlay(true);
    d && setMedicineOnDisplayDetails(d);
  };

  useEffect(() => {
    if (!listData) setCurrentData(originalData);
    listData && setCurrentData(listData);
  }, [listData, currentData]);

  const filterPrice = () => {
    const newData =
      priceCount === 0
        ? originalData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        : originalData.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );

    priceCount === 0 ? setPriceCount(1) : setPriceCount(0);

    setListData(newData);
  };

  return (
    <>
      <div className="listContainer">
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

        <a href="#" onClick={() => window.location.reload()}>{`<< Go Back`}</a>
        <div className="filters">
          <ul className="filtersList">
            Sort by:
            <li>
              <button onClick={() => filterPrice()}>Price</button>
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

        <main className="list">
          {currentData && (
            <>
              <h3 className="medicineName">{medicine}</h3>
              <ul>
                {currentData.map((d, index) => (
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
        </main>
        {showOverlay && (
          <div className="overlay" onClick={() => setShowOverlay(false)} />
        )}
      </div>
    </>
  );
};

export default List;
