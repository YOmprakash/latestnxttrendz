import Popup from 'reactjs-popup'
import PaymentPopup from '../PaymentPopup'

import './index.css'

const CartSummary = ({cartList}) => {
  let total = 0
  cartList.forEach(eachCartItem => {
    total += eachCartItem.price * eachCartItem.quantity
  })

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
            <button type="button" className="checkout-button">
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
    </>
  )
}

export default CartSummary
