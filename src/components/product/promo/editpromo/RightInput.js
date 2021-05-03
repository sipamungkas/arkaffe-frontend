import React, { useState } from "react";
import classes from "./RightInput.module.css";

function RightInput() {
  const [name, setName] = useState("");
  const [discount, setdiscount] = useState(0);
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);

  const onclickHandler = (e) => {
    if (sizes.includes(e.target.value)) {
      const data = sizes;
      data.splice(
        data.findIndex((size) => size === e.target.value),
        1
      );
      setSizes(data);
      // remove dari array pakai splice
    } else {
      const newData = [...sizes, e.target.value];
      setSizes(newData);
    }
  };
  console.log(price);
  console.log(sizes);
  return (
    <>
      <main className={classes["promo-container"]}>
        <form className={classes["form-group"]}>
          <label className={classes["label"]}>Name :</label>
          <input
            className={classes["input"]}
            type="text"
            name="promoname"
            placeholder="Type promo name min. 50 characters"
            // onChange={(e) => }
          />
          <label className={classes["label"]}>Normal Price :</label>
          <input
            className={classes["input"]}
            type="text"
            name="price"
            value={price}
            placeholder="Type the price"
            onChange={(e) => {
              const input = e.target.value;
              if (
                input.charCodeAt(input.length - 1) < 48 ||
                input.charCodeAt(input.length - 1) > 57
              )
                return;
              else return setPrice(input);
            }}
          />
          <label className={classes["label"]}>Description :</label>
          <textarea
            className={` ${classes["input"]} ${classes["text-area"]}`}
            type="text"
            name="description"
            placeholder="Describe your product min. 150 characters"
            // onChange={(e) => }
          />
          <label className={classes["label"]}>Input product size :</label>
          <label className={classes["sub-label"]}>
            Click size you want to use for this product
          </label>
          <div className={classes["product-size"]}>
            <div className={classes["drink-size"]}>
              <label className={`${classes["option"]}`}>
                <input
                  type="checkbox"
                  name="R"
                  value="R"
                  onChange={onclickHandler}
                />
                <span className={classes["text-size"]}>R</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input
                  type="checkbox"
                  name="L"
                  value="L"
                  onChange={onclickHandler}
                />
                <span className={classes["text-size"]}>L</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input
                  type="checkbox"
                  name="XL"
                  value="XL"
                  onChange={onclickHandler}
                />
                <span className={classes["text-size"]}>XL</span>
              </label>
            </div>
            <div className={classes["food-size"]}>
              <label className={`${classes["option"]}`}>
                <input
                  type="checkbox"
                  name="250"
                  value="250"
                  onChange={onclickHandler}
                />
                <span className={classes["text-size2"]}>250 gr</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input
                  type="checkbox"
                  name="300"
                  value="300"
                  onChange={onclickHandler}
                />
                <span className={classes["text-size2"]}>300 gr</span>
              </label>
              <label className={`${classes["option"]}`}>
                <input
                  type="checkbox"
                  name="500"
                  value="500"
                  onChange={onclickHandler}
                />
                <span className={classes["text-size2"]}>500 gr</span>
              </label>
            </div>
          </div>
          <label className={classes["label"]}>Input delivery methods :</label>
          <label className={classes["sub-label"]}>
            Click methods you want to use for this product
          </label>
          <div className={classes["delivery-methods"]}>
            <label className={`${classes["option"]}`}>
              <input type="checkbox" />
              <span className={classes["text-methods"]}>Home Delivery</span>
            </label>
            <label className={`${classes["option"]}`}>
              <input type="checkbox" />
              <span className={classes["text-methods"]}>Dine in</span>
            </label>
            <label className={`${classes["option"]}`}>
              <input type="checkbox" />
              <span className={classes["text-methods"]}>Take away</span>
            </label>
          </div>
          <p className={classes["text-discount"]}>Enter the discount :</p>
          <div className={classes["input-group-discount"]}>
            <label
              className={classes["label-discount"]}
              htmlFor="input-discount"
            >
              Input Discount:
            </label>
            <input
              className={classes["input-discount"]}
              type="number"
              placeholder="0"
              onChange={(e) => {
                return setdiscount(e.target.value);
              }}
            ></input>
            <label
              className={classes["label-discount-percent"]}
              htmlFor="input-discount"
            >
              %
            </label>
          </div>
          <div className={classes["btn-group"]}>
            <button className={classes["btn-submit"]} type="submit">
              Save Promo
            </button>
            <button className={classes["btn-cancel"]} type="">
              Cancel
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default RightInput;
