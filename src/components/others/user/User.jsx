import React from "react";
import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.wrap}>
      <div className={s.dataUser}>
        <div className={s.name}>{props.name}</div>
        <div className={s.proff}>{props.professional}</div>
        <div className={s.job}>{props.job}</div>
      </div>

      <img src={props.ava} alt="" className={s.imgUs} />
    </div>
  );
};

export default User;
