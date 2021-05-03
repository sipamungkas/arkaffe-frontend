import { useState, useEffect } from "react";

import EditPencil from "../../editPencil/EditPencil";

import classes from "./Detail.module.css";

export default function Detail(props) {
  const { user } = props;

  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("L");

  useEffect(() => {
    setDisplayName(user.display_name);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setBirthDate(user.birthday);
    setGender(user.gender);
  }, [user]);

  return (
    <div className={classes.card}>
      <span className={classes.title}>Details</span>
      <div className={classes.edit}>
        <EditPencil />
      </div>
      <div className={classes.content}>
        <div className={classes["content-left"]}>
          <div className={classes["form-group"]}>
            <label className={classes.label} htmlFor="displayName">
              Display Name :
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              className={classes.input}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div className={classes["form-group"]}>
            <label className={classes.label} htmlFor="mobile">
              First Name :
            </label>
            <input
              type="text"
              value={firstName}
              className={classes.input}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={classes["form-group"]}>
            <label className={classes.label} htmlFor="email">
              Last Name :
            </label>
            <input
              type="text"
              value={lastName}
              className={classes.input}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes["content-right"]}>
          <div className={classes["form-group-right"]}>
            <label className={classes.label} htmlFor="birthDate">
              DD/MM/YY :
            </label>
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              placeholder="dd-mm-yyyy"
              className={classes.input}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className={classes["form-group-right"]}>
            <div className="d-flex align-items-center ">
              <input
                className={`mr-2`}
                type="radio"
                name="gender"
                id=""
                value="L"
                checked={"L" === gender ? true : false}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className={`${classes.label} m-0`}>Male</label>
            </div>
            <div className="d-flex align-items-center ">
              <input
                className={`mr-2`}
                type="radio"
                name="gender"
                id=""
                value="P"
                checked={"P" === gender ? true : false}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className={`${classes.label} m-0`}>Female</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
