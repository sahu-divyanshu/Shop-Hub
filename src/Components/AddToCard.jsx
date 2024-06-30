import { useDispatch, useSelector } from "react-redux";
import { cartItems, removeItem } from "../Redux/Reducers/AddCart";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const AddToCard = () => {
  const items = useSelector(cartItems);
  const Dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const removeToCart = (value) => {
    setItem((prevNames) => [...prevNames, value.title]);
    Dispatch(removeItem(value));
  };
  const removeFromPopUp = () => {
    let newList = [...item];
    newList.pop();
    setItem(newList);
  };
  return (
    <div className="flex flex-col gap-7">
      {items.map((value, index) => {
        return (
          <div key={index}>
            <div className="w-[80%]  mx-auto   grid grid-cols-1 md:grid-cols-2 border-2 border-gray-700 border-solid place-items-center">
              <div className="image w-3/4 h-3/4 ">
                <img
                  className="object-contain w-full h-full"
                  src={value.image}
                  alt="value Image"
                />
              </div>
              <div className="about p-5">
                <h1 className="title text-3xl text-gray-900 font-bold">
                  {value.title}
                </h1>
                <div
                  className="price p-2 bg-cyan-500 w-36 h-10 flex items-center justify-evenly rounded-lg my-6"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 100% 0, 100% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div className="h-3 w-3 m-2 bg-gray-50 rounded-[100%]"></div>
                  <h2 className="text-lg font-semibold text-gray-50">
                    {" "}
                    $ {value.price}
                  </h2>
                </div>
                <div className="cat my-6 p-2 text-base text-red-600 bg-gray-400 border border-gray-700 border-solid rounded-lg">
                  {value.category}
                </div>
                <div className="discription text-base font-semibold text-gray-500 my-6">
                  {value.description}
                </div>
                <button
                  className="px-4 py-3 rounded-lg bg-red-500 text-lg text-white hover:animate-pulse "
                  onClick={() => {
                    removeToCart(value);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="fixed bottom-8 left-10 flex flex-col gap-4">
        {item.map((value, index) => (
          <div key={index} className="flex justify-between items-center gap-4">
            <div className="bg-red-500 h-9 w-2"></div>
            <h1 className="text-lg text-red-500">
              {value} Item remove from Store
            </h1>
            <button onClick={removeFromPopUp}>
              <RxCross1 className="text-lg text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCard;
