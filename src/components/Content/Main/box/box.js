import React from "react";
import "./style.css";
import IMG1 from "../../../../image/css-icon1.png";
import IMG2 from "../../../../image/html-icon1.png";
import IMG3 from "../../../../image/url-icon1.png";

const box_arr = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    image: IMG1,
    text_: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
    sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
    accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
    in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
    ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
    massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    image: IMG2,
    text_: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
    sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
    accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
    in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
    ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
    massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    image: IMG3,
    text_: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
    sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
    accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa
    in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at
    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
    ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
    massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.`,
  }
];

const Box = () => {
  return (
   <div className="contain-box">
     {box_arr.map(box => {
       return (
         <div key={box.id} className="box">
           <h3 className="box_title">{box.title}</h3>
            <img src={box.image} className="box_img" alt="img"/>
           <p>
              {box.text_}
           </p>
         </div>
       )
     })}
   </div>
  );
};

export default Box;
