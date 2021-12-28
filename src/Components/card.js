import React from "react";
import { useDispatch } from "react-redux";
import { CartActions} from "../Context/cart-slice";
import Button1 from "./button";
import menu from "../data/api";
import { FaUser, FaThumbsUp, FaPlus, FaHeart } from "react-icons/fa";

export const Card = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, img, location, desc, category } = props;
  const addToCartHandler = () => {
    dispatch(CartActions.addItemToCart({
      id,
      title,
      img,
      price,
      location,
      desc, 
      category
    }));
    console.log('item added')
  };

  const postTiming = () => {
    let hour = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let time = hour + ":" + min + "";
    return time;
  };
  const postDate = {
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  return (
    <div>
      {menu.map((e) => {
        const { id, title, price, img, desc, location } = e;
        return (
          <div className="card-container flex" key={id}>
            <div className="food-card sm:w-40">
              <h2>{title}</h2>
              <img src={img} alt={title} />
              <div className="flex justify-between p-4 pb-0 ">
                <h3 className="text-green-500">${price}</h3>

                <div className=" flex items-center m-2 px-3">
                  <Button1>
                    <FaHeart className="text-red-600" />
                    <span className="text-xs">10</span>
                  </Button1>
                  <span className="px-5">
                    <Button1>
                      <FaThumbsUp />
                      <span className="text-xs">12</span>
                    </Button1>
                  </span>
                  <Button1 onClick={addToCartHandler}>
                    <FaPlus />
                    <span className="text-transparent">0</span>
                  </Button1>
                </div>
                <div className="text-sm font-bold">
                  <FaUser className="text-2xl" />
                </div>
              </div>
              <span className="text-xs font-bold text-gray-400 float-right">
                {postDate.day + "/" + postDate.month + "/" + postDate.year}
              </span>
              <span className="mx-2 font-bold">{location}</span>
              <div className="receipe-container-lg">
                <h4 className="pt-2 px-1 text-2xl font-bold capitalize">
                  receipe
                </h4>
                <p className="text-right text-medium m-0 p-2 ">{desc}</p>

                <div className="m-3 text-gray-500 ">
                  <h5>Comments</h5>
                  <div className="border-t text-sm ">
                    <span className="font-bold p-2">
                      <span>Jon: </span>
                      <span className="text-gray-400 text-xs font-medium">
                        on:{postTiming()}
                      </span>
                      <p className="font-light px-2">
                        I tried this, reciepe and my mom loved it <br /> it was
                        delicious and I would buy and try some more
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class=" receipe-container flex flex-col text-justify w-80 p-2 my-2 rounded-tl-none rounded-bl-2xl rounded-tr-2xl bg-white">
              <h4 className="p-1 text-3xl font-bold capitalize text-center">
                receipe
              </h4>
              <p className="text-right text-medium m-0 ">{desc}</p>

              <div className="mt-5 text-gray-500 ">
                <h5>Comments</h5>
                <div className="border-t text-sm ">
                  <span className="font-bold float-left">
                    Jon:{" "}
                    <p className="font-light px-2">
                      I tried this, reciepe and my mom loved it <br /> it was
                      delicious and I would buy and try some more
                    </p>
                    <span className="float-right text-gray-400 text-xs font-medium">
                      on:{postTiming()}
                    </span>
                  </span>
                  <span className="font-bold float-left">
                    Maang:
                    <p className="font-light px-2">
                      This is delicious, nice job I would buy and try some more
                    </p>
                    <span className="float-right text-gray-400 text-xs font-medium">
                      on:{postTiming()}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
