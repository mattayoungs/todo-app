import React from "react";

function ListTitle(props) {
  return (
    <div style={styles.titleCont}>
      <div style={styles.avatarCont}>
        <img
          style={styles.profileImg}
          src={props.user.avatarImg}
          alt={props.user.name}
        />
      </div>
      <h1 style={styles.title}>{props.user.name}'s To Dos</h1>
    </div>
  );
}
const styles = {
  titleCont: {
    display: "flex",
    alignItems: "center",
  },
  avatarCont: {
    width: "50px",
    height: "50px",
    paddingRight: "1rem",
  },
  profileImg: {
    height: "100%",
    objectFit: "cover",
    borderRadius: "25px",
  },
  title: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "39px",
  },
};
export default ListTitle;
