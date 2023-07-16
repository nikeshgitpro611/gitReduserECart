import React from "react";
import CartItems from "./CartItem";
import cartItems from "./data";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const {cart, clearCart, totalCost} = useGlobalContext();

  // console.log('removeGlobal : ', remove);
  // console.log('Cart : ', cart);
  // const cartArray = [...cartItems];
  const cartArray = Array.from(cart.entries());
  // console.log('cartArray : ', cartArray);
  // console.log("cartItems : ", cartItems);
  // console.log('cartArray : ', cartArray);
  if (cartArray.length === 0) {
    // console.log("I am here.....!!!");
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently Empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      {/* ----Cart Items----- */}
      <div className="">{cartArray.map((cartItemss) => {
        const [id, item] = cartItemss;
        // console.log('id : ', id);
        // console.log('item : ', item);
        // const {id, title, price, img, amount} = cartItemss;
        return <CartItems key={id} {...item}/>
      })}
      </div>

      {/* ---Footer Details--- */}
      <footer>
        <hr />
        <div className="">
          <h5 className="cart-total"> Total <span>{totalCost.toFixed(2)}</span></h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
