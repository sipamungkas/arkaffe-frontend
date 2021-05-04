import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./MenuItem";
import classes from "./MenuList.module.css";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function MenuList(props) {
  // const token = props.loginReducer.user.token;
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
  const history = useHistory()

  let getProduct = () => {
    if (currentTab) {
      currentTab = tabList[currentTab];
    }
    axios(`${BASE_URL}/product?category=${currentTab}`, 
    // {headers: { Authorization: `Bearer ${token}` },}
    )
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
          <MenuItem
            key={index}
            product={product}
            user={props.loginReducer.user}
          />
        ))}
      </div>
      {props.loginReducer.user.role === 1 ? (
        <button className={`btn ${classes["btn-new-product"]}`} onClick={()=> {
            history.push("/products/new")
        }} >
          Add New Product
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

const mapStatetoProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};
const connectedMenuList = connect(mapStatetoProps)(MenuList);

export default connectedMenuList;
