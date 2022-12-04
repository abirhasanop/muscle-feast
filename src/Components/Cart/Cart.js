// import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Break from '../Break/Break';
import { addToLs, getTime } from '../LocalStorage/localStorage';
import './Cart.css';

const Cart = (props) => {
   const notify = () => toast("All Activities Are Done");


    const [time, setTime] = useState([])

    const breakeTimes = [
        {id: 1, time: 10},
        {id: 2, time: 20},
        {id: 3, time: 30},
        {id: 4, time: 40},
        {id: 5, time: 50},
    ]

    useEffect(() =>{
    
        const getTimeFromLs = getTime()
        // console.log(getTimeFromLs)
        const displayingTime = getTimeFromLs.time
        setTime(displayingTime)

    }, [])

    const handleAddList = (time) => {
        // console.log("click")
        const newTime = time
        setTime(newTime)
        addToLs(time)
    }

    // console.log(time)
    const {cart} = props;
    let requiredTime = 0
    for(const item of cart){
        requiredTime = requiredTime + item.requiredTime
    }

    return (
        <div className='cart-container'>
            <div  className='title'>
                <h2>Abir Hasan</h2>
                <p>Toronto, Canada</p>
            </div>
            <div className='physical-info'>
                <h3>75kg-Weight</h3>
                <h3>6.5-Height</h3>
                <h3>75yrs-Old</h3>
            </div>
            <h2>Add A Break</h2>
            <div className='break-btn-container'>
                {
                breakeTimes.map(breakeTime => <Break key={breakeTime.id} handleAddList={handleAddList} time={breakeTime.time} />)
                }
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-details'>
                <h2>Exercise time: {requiredTime}s</h2>
                <h2>Break time: {time}s</h2>
            </div>
            <button className='toast-btn' onClick={notify}>Activity Completed</button>
            <ToastContainer/>
        </div>
    );
};

export default Cart;