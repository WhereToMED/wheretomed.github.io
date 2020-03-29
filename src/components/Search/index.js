import React, { useState, useEffect } from "react";
import "./style.scss";
import List from "../List";
import { medicines, allPharmacies } from "../../Data/data";
// console.log(medicines, pharmacies);

const Search = () => {
  //   const [dataLocations, setLocations] = useState();
  const [currentData, setCurrentData] = useState();
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //   const [locationValue, setLocationValue] = useState("");

  const getResults = () => {
    const medicineResult = medicines.find(m => m.generic === inputValue);

    const resArray = [];
    console.log(medicineResult.pharmacies);

    allPharmacies.filter(pharm => {
      const res = pharm.medicines.find(p => p.name === inputValue);

      resArray.push({ pName: pharm.name, ...res });
      return;
    });

    resArray && resArray.length && setCurrentData(resArray);
  };

  useEffect(() => {
    // getLocations();
    // setResults(data)
    // !results && getLocations()
    //prompt show list component here
  }, [currentData]);

  //   const filterLocation = location => {
  //     !location === "All locations" && setLocationValue(location);
  //     if (location === "All locations") {
  //       setCurrentData(results);
  //       return;
  //     }

  //     const dataRank = [];

  //     results.map(res => res.locations.includes(location) && dataRank.push(res));
  //     setCurrentData(dataRank);
  //   };

  //   let locArray = [];

  //   const getLocations = () => {
  //     if (dataLocations) return;
  //     results &&
  //       results.map((d, index) => {
  //         d.locations.map((dL, index) => {
  //           if (locArray.indexOf(dL) >= 0) return;
  //           locArray.push(dL);
  //         });
  //         setLocations(locArray);
  //       });
  //   };

  const showResults = e => {
    e.preventDefault();
    getResults();
    setShowList(true);
  };

  //const showEnter = !inputValue.length && !locationValue.length;

  return (
    <>
      <main className="search">
        <h2 className="start">{"Start Your Search"}</h2>

        <>
          <input
            list="medicines"
            name="medicine-choice"
            onChange={e => setInputValue(e.currentTarget.value)}
          />

          <datalist id="medicines">
            {medicines &&
              medicines.map(medicine => <option>{medicine.generic}</option>)}
          </datalist>
          <button
            //disabled={showEnter}
            type="button"
            onClick={e => showResults(e)}
          >
            enter
          </button>
        </>
        <List data={currentData} />

        {/* {showList && <List />} */}

        {/* {!showList && (
          <form className="search_form">
            <label>Medicine</label>
            <input
              type="search"
              onChange={e => setInputValue(e.currentTarget.value)}
            />
            <select
              onChange={event => filterLocation(event.currentTarget.value)}
            >
              <option>All locations</option>
              {dataLocations &&
                dataLocations.map((d, index) => (
                  <option key={index}>{d}</option>
                ))}
            </select>
            <button
              disabled={showEnter}
              type="button"
              onClick={e => showResults(e)}
            >
              enter
            </button>
          </form>
        )} */}
        {/*new result component*/}
        {/* {showList && <List data={currentData} />} */}
      </main>
    </>
  );
};

export default Search;
