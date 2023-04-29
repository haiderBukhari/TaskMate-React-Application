import React, { Children, useEffect, useRef, useState } from "react";
import gif from "../Assets/load.gif";
import "../Assets/Body.css";
const Body = () => {

  let reference = useRef();
  let delete_record = useRef();
  let [initial, setinitilal] = useState(JSON.parse(localStorage.getItem("initial")) || []);
  useEffect(()=>{
    localStorage.setItem("initial", JSON.stringify(initial))
    setcount(initial.length)
  },[initial])
  let [Add, setAdd] = useState("Add");
  let [task, settask] = useState("");
  let [check, setcheck] = useState("");
  let [counts, setcount] = useState(0);

  let handleadd = () => {
    let to_conitnue = true;
    let obj = reference.current.value;
    console.log(obj);
    reference.current.value = "";
    initial.map((arr) => {
      if (arr.name === obj) {
        document.querySelector(".already_exist").classList.remove("hidden");
        to_conitnue = false;
        setTimeout(() => {
          document.querySelector(".already_exist").classList.add("hidden");
        }, 1000);
        // arr.name = obj;
        return;
      }
    });
    if (to_conitnue) {
      let dates = new Date(); 
      if (Add === "Edit") {
        initial.map((arr) => {
          if (check === arr.name) {
            arr.name = obj;
            arr.date = `${dates.toLocaleDateString()} ${dates.toLocaleTimeString()}`;
          }
        });
        setAdd("Add");
        setinitilal(initial);
        return;
      }
      let new_date = new Date(); 
      if (obj!=='' && obj.trim()!=='') {
        let data = { name: obj, date: `${new_date.toLocaleDateString()} ${new_date.toLocaleTimeString()}` };
        setinitilal([...initial, data]);
      }
    }
  };
  let handleedit = (value) => {
    setcheck(value);
    setAdd("Edit");
    document.querySelector("#search-box").value = value;
    settask(value);
  };
  let handledeletion = (e) => {
    let val = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
    console.log(val);
    let ins = [];
    initial.map((arr) => {
      if (arr.name !== val) {
          ins.push({name: arr.name,
          date: `${arr.date}`});
      }
      setinitilal(ins);
    });
  };
  let handleftn = (e) => {
    let data = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
    console.log(data);
    handleedit(data);
  };
  let handleclear = (e) => {
    setinitilal([]);
  };
  return (
    <div className="body">
      <div className="already_exist hidden">
        <p>Searched Name already exists</p>
      </div>
      <div className="search-div">
        <div className="search-ele">
          <input
            type="search"
            name=""
            id="search-box"
            autoComplete="off"
            placeholder="Add Task"
            ref={reference}
          />
          <button onClick={handleadd} className="btn-add">
            {Add}
          </button>
        </div>
      </div>
      <div className="pre-bottom">
        <div id="upper-part">
          <div className="bottom">
            <div id="todo">
              <div>
                <p id="todo-p">Todo</p>
                <p id="count">{counts}</p>
              </div>
              <button className="clear" onClick={handleclear}>
                Clear All
              </button>
            </div>
            <hr />
            <div className="final_bottom">
              {initial.map((arr) => (
                <div
                  className="element"
                  key={Math.floor(Math.random() * 100000000)}
                >
                  <div id="date">
                    <p id="para">{arr.name}</p>
                    <p id="dates">{arr.date}</p>
                  </div>
                  <div id="btn">
                    <i
                      onClick={handleftn}
                      className="fa-1x fa-solid fa-pen-to-square"
                    ></i>
                    <i
                      onClick={handledeletion}
                      className="fa-1x fa-solid fa-trash"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
