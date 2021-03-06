import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../services/cart-slice";
import Button1 from "./button";
import menu from "../data/api";
import { FaUser, FaThumbsUp, FaPlus, FaHeart } from "react-icons/fa";
import { likeAction } from "../services/like-slice";
import { loveAction } from "../services/loveSlice";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.like.currentLikes);
  const love = useSelector((state) => state.love.currentLove);

  const likeHandler = () => {
    dispatch(likeAction.liked({ like }));
    console.log(like);
  };
  const loveHandler = () => {
    dispatch(loveAction.loved({ love }));
  };

  
  const { id, title, price, img } = props;

  const addToCartHandler = () => {
    dispatch(
      CartActions.addItemToCart({
        id,
        title,
        price,
        img,
      })
    );
    console.log(price);
  };

  let postTiming = () => {
    let hour = new Date().getHours().toFixed();
    let min = new Date().getMinutes().toFixed();
    let time = hour + ":" + min + "";
    return time;
  };
  let postDate = {
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  return (
    <div>
      {menu.map((e) => {
        const { id, title, price, img, desc, location } = e;
        return (
          <div
            className="card-container flex backdrop-filter backdrop-blur-sm"
            key={id}
          >
            <div className="food-card">
              <div className="">
                <h2>{title}</h2>
                <div className="img-holder ">
                  <img src={img} alt={title} />
                </div>
              </div>
              <div className="flex justify-between p-4 pb-0 ">
                <h3 className="text-green-500">${price}</h3>

                <div className=" flex items-center m-2 px-3">
                  <Button1 onClick={loveHandler}>
                    <FaHeart className="text-red-600" />
                    <span className="text-xs">{love}</span>
                  </Button1>
                  <span className="px-5">
                    <Button1 onClick={likeHandler}>
                      {<FaThumbsUp />}
                      <span className="text-xs">{like}</span>
                    </Button1>
                  </span>
                  <Button1 onClick={addToCartHandler}>
                    <FaPlus />
                    <span className="text-transparent">0</span>
                  </Button1>
                </div>
                <div className="text-sm font-bold">
                  <Link to="/user">
                    <FaUser className="text-2xl" />
                  </Link>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-400 float-right">
                {postDate.day + "/" + postDate.month + "/" + postDate.year}
              </span>
              <span className="mx-2 font-bold">{location}</span>

              {/* SIDE CARD ON SMALL SCREEN */}
              <div className="receipe-container-lg">
                <h4 className="pt-2 px-1 text-2xl font-bold capitalize">
                  receipe
                </h4>
                <p className="text-right text-medium m-0 p-2 ">{desc}</p>

                <div className="m-3 text-white ">
                  <h5>Comments</h5>
                  <div className="border-t text-sm ">
                    <span className="font-bold p-2">
                      <span>Jon: </span>
                      <span className="text-gray-400 text-xs font-medium">
                        at:{postTiming()}
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

            {/* SIDE CARD FOR LARGE CARD  */}
            <div className=" receipe-container flex flex-col text-justify w-96 p-2 my-2 rounded-tl-none rounded-bl-2xl rounded-tr-2xl border border-gray-600">
              <h4 className="p-1 text-3xl font-bold capitalize text-center">
                receipe
              </h4>
              <p className="text-right text-white text-medium m-0 ">{desc}</p>
              <div className="mt-5 text-gray-500 ">
                <h5>Comments</h5>
                <div className="border-t text-sm ">
                  <span className="font-bold float-left">
                    Jon:{" "}
                    <p className="font-light text-white px-2">
                      I tried this, reciepe and my mom loved it <br /> it was
                      delicious and I would buy and try some more
                    </p>
                    <span className="float-right text-gray-400 text-xs font-medium">
                      on:{postTiming()}
                    </span>
                  </span>
                  <span className="font-bold float-left">
                    Maang:
                    <p className="font-light text-white px-2">
                      This is delicious, nice job I would buy and try some more
                    </p>
                    <span className="float-right text-gray-400 text-xs font-medium">
                      at:{postTiming()}
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
