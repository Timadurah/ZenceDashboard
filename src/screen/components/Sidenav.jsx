import React from "react";

export default function Sidenav() {
  return (
    <div className="sidebar py-4 shadow">
      <div className="owner">
        {/* logo div with background image */}
        <div className="logo"></div>
        <div className="profile"></div>
        <small>Wellcome back,</small>
        <b>Tim Adura</b>
        <legend>$34,321</legend>
        <span>Monthly budget</span>
      </div>
      <div className="links">
        <a href="" className="active">
          {" "}
          <div className="bi bi-pie-chart-fill"></div> Dashboard
        </a>
        <a href="">
          {" "}
          <div className="bi bi-bar-chart-line"></div> Investment{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-arrow-down-up"></div> Transaction{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-wallet2"></div> Wallet{" "}
        </a>
      </div>

      <div className="signOut">
        {" "}
        <a href="">
          {" "}
          <div className="bi bi-info-square"></div> Sign-out{" "}
        </a>
      </div>
    </div>
  );
}
