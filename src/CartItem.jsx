import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
  const { remove, increase, decreases } = useGlobalContext();
  // console.log("remove : ", remove);
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="">
        <h5>{title}</h5>
        <span className="item-price">{price}</span>
        <button
          className="remove-btn"
          onClick={() => {
            remove(id);
          }}
        >
          remove
        </button>
      </div>

      {/* ---Ins and dec---- */}
      <div className="">
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        <span className="amount">{amount}</span>
        <button
          className="amount-btn"
          onClick={() => {
            decreases(id);
          }}
        >
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
