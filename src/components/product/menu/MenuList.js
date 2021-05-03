import { useState, useEffect} from "react";
import axios from "axios";
import MenuItem from "./MenuItem";
import classes from "./MenuList.module.css";

export default function MenuList() {
  let [tab, setTab] = useState(1);
  let [productlist, setProductList] = useState([]);
  const BASE_URL = process.env.REACT_APP_API;
  const tabList = [
    "Favorite Product",
    "Coffee",
    "Non Coffee",
    "Foods",
    "Add-on",
  ];
  let currentTab = tab;

  let getProduct = () => {
    if (currentTab) {
      currentTab = tabList[currentTab];
    }
    axios(`${BASE_URL}/product?category=${currentTab}`)
      .then((res) => {
        setProductList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

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
        {productlist.map((product, index) => (
          <MenuItem key={index} product={product} />
        ))}
      </div>
      <button className={`btn ${classes["btn-new-product"]}`}>
        Add New Product
      </button>
    </section>
  );
}
