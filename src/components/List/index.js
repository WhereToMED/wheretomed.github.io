import React, {useState, useEffect}from 'react';
import './style.scss'

const List = (data) => {
   // console.log(data.data.map((d) => d.name))

     useEffect(() => {
    })

    return (
        <>
            <main className='list'>
                <ul>
                {data.data.map((d, index) =>  <li className={`result ${index}`}>
                        <h3 >{d.name}</h3>
                        <h4>{d.price}</h4>
                        <h4>{d.needPrescription}</h4>
                        <h4>{d.inStock}</h4>
                        <h4>{d.locations}</h4>
                        <h4>{d.rating}</h4>
                        <h4>{d.dosage}</h4>
                    </li>
                )}
                </ul>
            </main>
        </>
    )
}

export default List