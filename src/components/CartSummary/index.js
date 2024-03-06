import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import PaymentPopup from '../PaymentPopup'

import './index.css'

const CartSummary = ({cartList}) => {
  let total = 0
  cartList.forEach(eachCartItem => {
    total += eachCartItem.price * eachCartItem.quantity
  })

  // State to manage the visibility of the payment popup
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false)

  // Function to handle opening the payment popup
  const handleCheckoutClick = () => {
    setIsPaymentPopupOpen(true)
  }

  // Function to handle closing the payment popup
  const handleClosePopup = () => {
    setIsPaymentPopupOpen(false)
  }

  return (
    <>
      <div className="cart-summary-container">
        <h1 className="order-total-value">
          Order Total: <span>{total}</span>
        </h1>
        <p className="total-items">{cartList.length} Items in cart</p>
        {/* Popup component to show the payment popup */}
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="checkout-button desktop-btn"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          }
          position="top left"
        >
          {close => (
            <PaymentPopup
              total={total}
              cartList={cartList}
              onClose={close} // Pass the handleClosePopup function to PaymentPopup
            />
          )}
        </Popup>
      </div>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="checkout-button mobile-btn"
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>
        }
        position="top left"
      >
        {close => (
          <PaymentPopup
            total={total}
            cartList={cartList}
            onClose={close} // Pass the handleClosePopup function to PaymentPopup
          />
        )}
      </Popup>
    </>
  )
}

export default CartSummary
