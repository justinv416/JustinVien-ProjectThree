import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkout = (props) => {
  const [name, setName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
  }

  return (
    <div className='checkoutModal'>
        <div className="formContainer">
          <h2 className="checkoutHeading">Checkout:</h2>
            <form action="" className="checkoutForm" onSubmit={handleSubmit}>
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
                <button className="checkoutSubmit" type="submit" onClick={handleSubmit}>Submit Order</button>
            </form>
            <FontAwesomeIcon icon={faTimes} className="closeModal" onClick={() => props.proceedToCheckout(false)}/>
            <h3>{`Grand Total ${props.gTotal}`}</h3>
            {isSubmit && <p className="checkoutConfirmation">{`Order is placed thanks, ${name}!`}</p>}
        </div>
    </div>
  )
}

export default Checkout