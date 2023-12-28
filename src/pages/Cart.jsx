import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem';
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart}= useSelector((state) => state);
  const[totalAmount,setTotalAmount]= useState(0);

  //adding all the price of cart items & tofixed used for roundof digits after decimal
  useEffect(() => {
    setTotalAmount( cart.reduce( (accumulator,currvalue)=>accumulator + currvalue.price , 0 ).toFixed(2) );
  },[cart])

  return(
    <div className="flex items-center justify-center">
      {
        cart.length > 0 ? 
        (
        <div className="flex max-w-6xl gap-10">
          <div>
          {
            cart.map((item) =>{
              return <CartItem key={item.id} item={item}/>
            })
          }
          </div>

          <div className=" flex flex-col justify-between mb-4 mt-12">
            <div>
              <p className="text-green-700 font-semibold">Your Cart</p>
              <p className=" uppercase text-green-700 font-bold text-3xl">Summary</p>
              <p className="mt-4">
                <span>Total Item : {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p >Total Amount : <span className="font-bold"> ${totalAmount}</span></p>
              <button className=" bg-green-600 mt-3 p-2 rounded-lg w-full">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
        ):
        (
          <div className=" flex items-center justify-center flex-col gap-y-4 mt-[15rem]">
            <h2>Your Cart is Empty</h2>
            <NavLink to={'/'}>
                <button className=" bg-green-500 text-white px-5 py-3 rounded-lg mt-3 ">
                  Shop now
                </button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
