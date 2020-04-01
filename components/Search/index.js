import React, { useState, useEffect } from "react";
import "./style.scss";
import List from "../List";
import { medicines, allPharmacies } from "../../Data/data";

const Search = () => {
  const [currentData, setCurrentData] = useState();
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const getResults = () => {
    const resArray = [];

    allPharmacies.filter(pharm => {
      const res = pharm.medicines.find(p => p.name === inputValue);
      resArray.push({
        pName: pharm.name,
        pName: pharm.name,
        pAddress: pharm.address,
        pWebsite: pharm.website,
        pNumber: pharm.number,
        ...res
      });
      return;
    });

    resArray && resArray.length && setCurrentData(resArray);
  };

  useEffect(() => {}, [currentData]);

  const showResults = e => {
    e.preventDefault();
    getResults();
    setShowList(true);
  };

  return (
    <>
      {!showList && (
        <main className="search">
          <h2 className="searchTitle">The smart way to buy medicine</h2>
          <p className="searchText">
            The days of running shop to shop are over. WhereToMed brings you
            instant medicine comparison to save your time and money.
          </p>
          <section className="mainSearch">
            <input
              list="medicines"
              name="medicine-choice"
              onChange={e => setInputValue(e.currentTarget.value)}
              placeholder="Type your drug name..."
            />

            <datalist id="medicines">
              {medicines &&
                medicines.map(medicine => <option>{medicine.generic}</option>)}
            </datalist>

            <button
              //disabled={showEnter}
              type="button"
              onClick={e => showResults(e)}
              className="searchButton"
            >
              <svg width={25} height={20} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.948 1C4.57 1 1 4.562 1 8.943c0 4.39 3.57 7.952 7.948 7.952 1.908 0 3.67-.682 5.05-1.809l5.687 5.69c.3.299.79.299 1.09 0 .3-.3.3-.792 0-1.091l-5.695-5.69a7.903 7.903 0 001.816-5.052c0-4.38-3.57-7.943-7.948-7.943zm0 1.536a6.392 6.392 0 016.404 6.407 6.394 6.394 0 01-6.404 6.416 6.402 6.402 0 01-6.413-6.416 6.4 6.4 0 016.413-6.407z"
                  fill="white"
                  fillRule="nonzero"
                  stroke="white"
                  strokeWidth=".4"
                />
              </svg>
            </button>
          </section>
          <h3 className="searchCategoriesText">Categories:</h3>
          <ul className="searchCategoriesListContainer">
            <li>Antimalaria</li> <li>Antibiotic</li> <li>Pain Killer</li>
          </ul>
          <div className="border" />
          <p className="login">
            Already have an account?{" "}
            <a href="https://wheretomed.com/#Home">Sign in</a>
          </p>
        </main>
      )}

      {showList && <List data={currentData} medicine={inputValue} />}
    </>
  );
};

export default Search;
