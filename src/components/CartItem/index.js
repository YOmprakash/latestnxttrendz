import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      const onIncreaseCartItem = () => {
        incrementCartItemQuantity(id)
      }

      const onDecreaseCartItem = () => {
        decrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="cart-quantity-button"
                aria-label="Decrease Quantity"
                onClick={onDecreaseCartItem}
                data-testid="minus"
              >
                <BsDashSquare />
              </button>
              <p className="cart-quantity ">{quantity}</p>
              <button
                type="button"
                className="cart-quantity-button"
                aria-label="Increase Quantity"
                onClick={onIncreaseCartItem}
                data-testid="plus"
              >
                <BsPlusSquare />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            aria-label="icon"
            data-testid="remove"
          >
            <AiFillCloseCircle size={24} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
