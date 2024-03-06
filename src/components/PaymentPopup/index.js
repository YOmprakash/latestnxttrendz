import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import './index.css'

const PaymentPopup = ({handleCheckoutClick, total, cartList, onClose}) => {
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSelectPaymentMethod = method => {
    setSelectedMethod(method)
  }

  const handleConfirmOrder = () => {
    // Display order success message in the popup card
    setOrderPlaced(true)
    // Call onClose to close the popup after some delay
    setTimeout(() => {
      onClose()
    }, 2000) // Close the popup after 2 seconds
  }

  return (
    <>
      {orderPlaced ? (
        <div className="order-success-message">
          Your order has been placed successfully!
        </div>
      ) : (
        <>
          <h2 className="popup-heading">Choose Payment Method</h2>
          <div className="payment-method-container">
            <button
              type="button"
              className="payment-method-btn"
              onClick={() => handleSelectPaymentMethod('Card')}
              disabled
            >
              Card
            </button>
            <button
              type="button"
              className="payment-method-btn"
              onClick={() => handleSelectPaymentMethod('Net Banking')}
              disabled
            >
              Net Banking
            </button>
            <button
              type="button"
              className="payment-method-btn"
              onClick={() => handleSelectPaymentMethod('UPI')}
              disabled
            >
              UPI
            </button>
            <button
              type="button"
              className="payment-method-btn"
              onClick={() => handleSelectPaymentMethod('Wallet')}
              disabled
            >
              Wallet
            </button>
            <button
              type="button"
              className={`payment-method-btn ${
                selectedMethod ? 'selected' : ''
              }`}
              disabled={
                !selectedMethod || selectedMethod !== 'Cash on Delivery'
              }
              onClick={() => handleSelectPaymentMethod('Cash on Delivery')}
            >
              Cash on Delivery
            </button>
          </div>
          <div className="summary-container">
            <p>Number of Items: {cartList.length}</p>
            <p>Total Price: {total}</p>
          </div>
          <div className="button-container">
            <button type="button" className="close-btn" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className={`confirm-btn ${selectedMethod ? '' : 'disabled'}`}
              disabled={selectedMethod === null}
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default PaymentPopup
