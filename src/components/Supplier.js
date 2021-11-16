import React, { Component, useState } from 'react';
import '../Styles/Main.css'
export default function Supplier(props) {


    const [batch, setBatchCode] = useState('')

    function handleSubmit(event) {
        // alert(batch)
    }
    return (
        <div className="main">
            <h1>Supplier</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="main-inputs">
                <input type="text" placeholder="Enter your new batch code" onChange={(e) => { setBatchCode(e.target.value) }} />
                <input type="submit" value="Submit" onClick={handleSubmit} />

                <button onClick={(e) => { e.preventDefault(); }}>Scan QR code</button>
            </div>
            {
                props.MedicineName ? <h2>Medicine Name : {props.MedicineName}</h2> : null
            }
        </div>
    )
}

