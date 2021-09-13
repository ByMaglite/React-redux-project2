import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {sellPhone} from "../redux/actions/actions";

const PhoneComp = () => {
    const [number, setNumber] = useState(1);
    const numberOfPhones = useSelector(state => state.phone.numberOfPhones);
    const dispatch = useDispatch();
    return (
        <div className="container"> 
            <h2>Phones -- Hooks Example</h2>
            <h3>Number of Phones : {numberOfPhones}</h3>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={() => dispatch(sellPhone(number))}>Sell Phone</button>
        </div>
    )
}

export default PhoneComp;