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
        <button
          type="button"
          className="checkout-button desktop-btn"
          data-testid="remove"
        >
          Checkout
        </button>
      </div>
      <button
        type="button"
        className="checkout-button mobile-btn"
        data-testid="remove"
      >
        Checkout
      </button>
    </>
  )
}

export default CartSummary
