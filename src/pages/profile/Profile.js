import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Toaster, { notify } from "react-notify-toast";

import classes from "./Profile.module.css";
import Avatar from "../../components/profile/avatar/Avatar";
import Contact from "../../components/profile/contact/Contact";
import Detail from "../../components/profile/detail/Detail";
import Actions from "../../components/profile/actions/Actions";

const BASE_URL = process.env.REACT_APP_API;

function Profile(props) {
  const { token } = props.loginReducer.user;

  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.data[0];
        setUser(data);
      })
      .catch((err) => notify.show(err.message, "error"));
  }, [token]);

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/assets/images/profile-bg.png')",
      }}
    >
      <Toaster />
      <div className={`container ${classes.profile}`}>
        <h2 className={classes.title}>User Profile</h2>
        <div className={classes.content}>
          <Avatar user={user} />
          <Contact user={user} />
        </div>

        <div className={classes.content}>
          <Detail user={user} />
          <Actions user={user} />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};

const ConnectedProfile = connect(mapStateToProps)(Profile);
export default ConnectedProfile;
