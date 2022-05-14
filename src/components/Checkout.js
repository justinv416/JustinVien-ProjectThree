import React from 'react'

const Checkout = (props) => {
  return (
    <div className='checkoutModal'>
        <div className="formContainer">
            <form action="" className="checkoutForm">
                <label htmlFor="name">Your Name:</label>
                <input className="checkoutInput" type="text" id="name" placeholder="Enter your name here"/>
                <label htmlFor="email">Your Email:</label>
                <input className="checkoutInput" type="email" placeholder="Enter your email here"/>
                <label htmlFor="address">Your Address:</label>
                <input className="checkoutInput" type="text" placeholder="Your address here"/>
            </form>
            <button onClick={() => props.proceedToCheckout(false)}>close</button>
        </div>
    </div>
  )
}

export default Checkout