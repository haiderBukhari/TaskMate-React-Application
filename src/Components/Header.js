import React, { useEffect, useState } from "react";
import "../Assets/Header.css";
const Header = () => {
  let [color, setcolor] = useState(JSON.parse(localStorage.getItem("color")) ||"grad1");
  let [active, setactive] = useState(JSON.parse(localStorage.getItem("active")) ||"grad6");
  useEffect(()=>{
    localStorage.setItem("active",JSON.stringify(active));
    localStorage.setItem("color",JSON.stringify(color));
  },[color, active])

  let handleevent = (e) => {
    let alp = document.querySelectorAll(".box");
    alp.forEach((arr) => {
      arr.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
    console.log(e.target);
  };
  useEffect(() => {
    document.documentElement.classList.add(color);
    // document.createElementby
    document.querySelector("body").removeAttribute("class");
    if(document.querySelector('.head-main').classList.contains("class")){
      document.querySelector('.head-main').removeAttribute("class");
    }
    document.querySelector(".head-main").classList.add(color);
    document.querySelector("body").classList.add(color);
    // document.querySelector(".header").addAttribute("class", {color});
  }, [color, active]);
  return (
    <div className="head-main">
      <div className="header">
        <h1>Taskmate</h1>
        <div className="boxes">
          <div
            className={`box grad1 ${active==="grad1"?"clicked":""}`}
            onClick={(e) => {
              setcolor("grad1");
              setactive("grad1");
            }}
          ></div>
          <div
            className={`box grad2 ${active==="grad2"?"clicked":""}`}
            onClick={(e) => {
              setcolor("grad2");
              setactive("grad2");
            }}
          ></div>
          <div
            className={`box grad3 ${active==="grad3"?"clicked":""}`}
            onClick={(e) => {
              setcolor("grad3");
              setactive("grad3");
            }}
          ></div>
          <div
            className={`box grad4 ${active==="grad4"?"clicked":""}`}
            onClick={(e) => {
              setcolor("grad4");
              setactive("grad4");
            }}
          ></div>
          <div
            className={`box grad5 ${active==="grad5"?"clicked":""}`}
            onClick={(e) => {
              setcolor("grad5");
              setactive("grad5");
            }}
          ></div>
          <div
            className={`box grad6 ${active==="grad6"?"clicked":""}`}
            onClick={(e) => {
              setcolor("grad6");
              setactive("grad6");
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
