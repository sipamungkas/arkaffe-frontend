import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "./MenuItem";
import classes from "./MenuList.module.css";
import { connect } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

function MenuList(props) {
  const token = props.loginReducer.user.token;
  let [tab, setTab] = useState(1);
  let [productlist, setProductList] = useState([]);

  const location = useLocation();
  const history = useHistory();

  const BASE_URL = process.env.REACT_APP_API;
  const tabList = [
    "Favorite Product",
    "Coffee",
    "Non Coffee",
    "Foods",
    "Add-on",
  ];
  // let currentTab = tab;

  // let getProduct = (query) => {
  //   // if (currentTab) {
  //   //   currentTab = tabList[currentTab];
  //   // }
  //   // axios(`${BASE_URL}/product?category=${currentTab}`, {
  //   axios(`${BASE_URL}/product${query}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => {
  //       setProductList(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    // getProduct(location.search);
    let query = `?category=Coffee`;
    if (location.search) {
      query = location.search;
    }
    axios(`${BASE_URL}/product${query}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setProductList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location, BASE_URL, token]);

  return (
    <section className={classes["menu-list"]}>
      <div className={classes["tab-container"]}>
        {tabList.map((tabName, index) => (
          <span
            key={index}
            onClick={() => {
              setTab(index);
              history.push(`/products?category=${tabList[index]}`);
            }}
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
        <button
          className={`btn ${classes["btn-new-product"]}`}
          onClick={() => {
            history.push("/products/new");
          }}
        >
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
