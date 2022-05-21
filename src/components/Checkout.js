import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkout = (props) => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className='checkoutModal'>
        <div className="formContainer">
          <h2 className="checkoutHeading">Checkout:</h2>
            <form className="checkoutForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input className="checkoutInput" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name here" required />
                <label htmlFor="email">Your Email:</label>
                <input className="checkoutInput" type="email" placeholder="Enter your email here" required />
                <label htmlFor="address">Your Address:</label>
                <input className="checkoutInput" type="text" placeholder="Your address here" required />
                <label htmlFor="city">Your City:</label>
                <input className="checkoutInput" type="text" placeholder="Your city here" required />
                <label htmlFor="postalCode">Your Postal Code:</label>
                <input className="checkoutInput" type="text" placeholder="Your postal code here" required />
                <h3 className='grandTotalModal'>{`Grand Total ${props.grandTotal}`}</h3>
                <button className="checkoutSubmit" type="submit">Submit Order</button>
            </form>
            <FontAwesomeIcon icon={faTimes} className="closeModal" onClick={() => props.proceedToCheckout(false)}/>
            {isSubmitted && 
            <div className="checkoutConfirmation">
              <p>{`Order is placed thanks, ${name}!`}</p>
            </div>}
        </div>
    </div>
  )
}

export default Checkout