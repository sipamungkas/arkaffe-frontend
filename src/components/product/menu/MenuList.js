import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./MenuItem";
import classes from "./MenuList.module.css";

export default function MenuList() {
  let [tab, setTab] = useState(1);
  let [productlist, setProductList] = useState([])
  const BASE_URL = process.env.REACT_APP_API;
  const tabList = ["Favorite Product", "Coffee", "Non Coffee", "Foods", "Add-on"];
  const getProduct = () => {
    let currentTab = tab
    if(currentTab){
      currentTab = tabList[currentTab]
    } 
    console.log(currentTab)
    axios(`${BASE_URL}/product?category=${currentTab}`)
    .then((res)=> {
      console.log(res.data)
    })
  }

  useEffect(() => {
console.log(getProduct())
  })


  return (
    <section className={classes["menu-list"]}>
      <div className={classes["tab-container"]}>
        {tabList.map((tabName, index) => (
          <span
            key={index}
            onClick={() => setTab(index)}
            className={`${classes["tab-content"]} ${
              index === tab ? classes.active : ""
            }`}
          >
            {tabName}
          </span>
        ))}
      </div>
      <div className={classes["menu-container"]}>
        <MenuItem />
      </div>
      <button className={`btn ${classes["btn-new-product"]}`}>
        Add New Product
      </button>
    </section>
  );
}
