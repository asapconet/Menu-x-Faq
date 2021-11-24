import React from "react";
import Button1 from "./button";
import menu from "../data/api";

export const Card = () => {

  return (
    <div>
      {menu.map((e) => {
        const { id, title, price, img, desc } = e;
        return (
          <div className="flex sm:flex-col " key={id}>
            <div className="food-card sm:w-40">
              <h2>{title}</h2>
              <img src={img} alt={title} />
              <div className="p-1">
                <h3 className="">${price}</h3>

                <div className='m-2'>
                  <Button1>opt1</Button1>
                  <Button1>optn2</Button1>
                  <Button1>optn3</Button1>
                </div>
              </div>
            </div>
            <div class="flex flex-col text-justify w-80 p-2 m-2 rounded-tl-none rounded-bl-2xl rounded-tr-2xl bg-white">
              <h4 className="p-1 text-3xl font-bold capitalize text-center">
                receipe
              </h4>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
