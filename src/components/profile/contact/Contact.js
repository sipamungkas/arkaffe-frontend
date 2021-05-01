import { useState } from "react";

import EditPencil from "../../editPencil/EditPencil";

import classes from "./Contact.module.css";

export default function Contact() {
  const [email, setEmail] = useState("zulaikha17@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("(+62)813456782");
  const [address, setAddress] = useState(
    "Iskandar Street no. 67 Block A Near Bus Stop"
  );

  return (
    <div className={classes.card}>
      <span className={classes.title}>Contacts</span>
      <div className={classes.edit}>
        <EditPencil />
      </div>
      <div className={classes.content}>
        <div className={classes["form-group"]}>
          <label className={classes.label} htmlFor="email">
            Email address :
          </label>
          <input
            type="email"
            value={email}
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes["form-group"]}>
          <label className={classes.label} htmlFor="mobile">
            Mobile Number :
          </label>
          <input
            type="text"
            value={phoneNumber}
            className={classes.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={classes["form-group"]}>
          <label className={classes.label} htmlFor="email">
            Delivery address :
          </label>
          <input
            type="text"
            value={address}
            className={classes.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
