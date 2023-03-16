import React from "react";
import Spend from "../assets/images/spend.png";
import Income from "../assets/images/income.png";
import Dem1 from "../assets/images/DEM5.png";
import Dem2 from "../assets/images/DEM2.webp";
import Dem3 from "../assets/images/DEM3.webp";
import Dem4 from "../assets/images/DEM4.webp";
import Example from "../components/datanylys";

const Card = () => {
  return <div></div>;
};
export default Card;
export function Balance() {
  return (
    <div className="col-12 p-3 shadow rounded-3">
      <div className="d-flex justify-content-between align-items-center">
        <div style={{ fontSize: "10px", color: "gray" }}>Available balance</div>
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "10px", color: "gray" }}>Credit</div>
          <div
            className="p-1 d-flex dataswitch bg-white align-items-center bg-light mx-2"
            style={{ width: "35px", height: "18px", borderRadius: "50px" }}
          >
            <div
              className="dataswitchChild shadow"
              style={{
                width: "15px",
                cursor: "pointer",
                height: "15px",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="p-4 justify-content-center align-items-center"
        style={{ fontSize: "40px", fontWeight: "400" }}
      >
        {" "}
        $12,234{" "}
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <small
          className="text-dark"
          style={{ fontSize: "10px", fontWeight: "600" }}
        >
          ****** 4632
        </small>
        <div className="col-4 d-flex justify-content-end">
          <div
            className="position-relative"
            style={{
              background: "#ff6347ba",
              left: "11px",
              borderRadius: "50px",
              width: "30px",
              height: "30px",
            }}
          ></div>
          <div
            style={{
              background: "#f68f04",
              borderRadius: "50px",
              width: "30px",
              height: "30px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export function PaymentLimit() {
  return (
    <div className="py-3">
      <div className="my-2 d-flex justify-content-between">
        <div style={{ fontSize: "11px", color: "gray" }}>
          Internet payment limit
        </div>
        <div style={{ fontSize: "12px", color: "gray" }}>
          {" "}
          <span style={{ fontWeight: "400", color: "black" }}>$1,200 </span> /
          3,000{" "}
        </div>
      </div>
      {/* loading */}
      <div className="PaymentLimit rounded-3">
        <div className="PaymentLimitChild rounded-3"></div>
      </div>
    </div>
  );
}

export function SpendORincome() {
  return (
    <div className="py-3 d-flex justify-content-between">
      <div
        className="border d-flex p-2 rounded col-5"
        style={{ textAlign: "right" }}
      >
        <img src={Income} alt="income" className="col-6" />
        <div>
          <div className="text-muted">Income</div>
          <div className="fw-bold">$2.254</div>
        </div>
      </div>

      <div
        className="bg-white d-flex shadow-sm p-2 rounded col-6"
        style={{ textAlign: "right" }}
      >
        <img src={Spend} alt="spending" className="col-6" />
        <div>
          <div className="text-muted">Spendings</div>
          <div className="fw-bold">$2.254</div>
        </div>
      </div>
    </div>
  );
}

export function Spendtrack() {
  return (
    <div className="py-3 d-flex justify-content-between">
      <div
        className="border d-flex p-2 rounded col-5"
        style={{ textAlign: "right" }}
      >
        <img src={Income} alt="income" className="col-6" />
        <div>
          <div className="text-muted">Income</div>
          <div className="fw-bold">$2.254</div>
        </div>
      </div>

      <div
        className="bg-white d-flex shadow-sm p-2 rounded col-6"
        style={{ textAlign: "right" }}
      >
        <img src={Spend} alt="spending" className="col-6" />
        <div>
          <div className="text-muted">Spendings</div>
          <div className="fw-bold">$2.254</div>
        </div>
      </div>
    </div>
  );
}

export function Latextspend() {
  return (
    <div className="py-3">
      <div className="mb-2 d-flex justify-content-between align-items-center">
        <div style={{ fontSize: "20px", fontWeight: "600" }}>
          Latest spendings
        </div>
        <div className="text-muted">View all</div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="p-3 rounded d-flex justify-content-center align-items-center shadow bi bi-cart-plus-fill"
            style={{ marginRight: "20px" }}
          ></div>
          <div>
            <b>Online Store</b>
            <p>May 23 2022 at 8:2 PM</p>
          </div>
        </div>

        <div
          className="text-dark"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          -$32.50{" "}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="p-3 rounded d-flex justify-content-center align-items-center shadow bi bi-house-door-fill"
            style={{ marginRight: "20px" }}
          ></div>
          <div>
            <b>House keeping</b>
            <p>May 23 2022 at 4:20PM</p>
          </div>
        </div>

        <div
          className="text-dark"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          -$4.20{" "}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="p-3 rounded d-flex justify-content-center align-items-center shadow bi bi-ticket"
            style={{ marginRight: "20px" }}
          ></div>
          <div>
            <b>Tickets</b>
            <p>May 23 2022 at 1:30PM</p>
          </div>
        </div>

        <div
          className="text-dark"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          -$100.29{" "}
        </div>
      </div>
    </div>
  );
}

export function Datastact() {
  return (
    <div className="col-12" style={{ height: "250px" }}>
      <Example />
    </div>
  );
}
export function Salary() {
  return (
    <div className="py-3 my-2">
      <div className="mb-2 d-flex justify-content-between align-items-center ">
        <div style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
          Send money to
        </div>
        <div className="text-muted">View all</div>
      </div>
      <hr />

      <div className="d-flex py-2 styleScrollsend">
        <div
          className="p-4 bg-dark text-white fw-bold d-flex justify-content-center align-items-center"
          style={{ borderRadius: "50px", width: "60px", height: "60px" }}
        >
          {" "}
          +{" "}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem1 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {" "}
          +{" "}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem2 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {" "}
          +{" "}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem3 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {" "}
          +{" "}
        </div>
        <div
          className="p-4 shadow text-white fw-bold mx-3 d-flex justify-content-center align-items-center"
          style={{
            borderRadius: "50px",
            width: "60px",
            height: "60px",
            backgroundImage: "url(" + Dem4 + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {" "}
          +{" "}
        </div>
      </div>
    </div>
  );
}

export function SchedulPayement() {
  return (
    <div className="py-3 my-2 ej">
      <div className="mb-2 d-flex align-items-center">
        <div style={{ fontSize: "20px", fontWeight: "700", color: "black" }}>
          Schedule payment
        </div>
      </div>

      <div
        className="d-flex  styleScrollX "
        style={{ overflowX: "scroll", width: "100%" }}
      >
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "#ffcb00",
          }}
        >
          {" "}
          <p style={{ fontSize: "30px", fontWeight: "400" }}>$13.99/m</p>
          <div>
            <span className="bi bi-playstation"></span>
            <p>Ps5 Game</p>
          </div>
        </div>
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column mx-3"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "#ff2700",
          }}
        >
          {" "}
          <p style={{ fontSize: "30px", fontWeight: "400" }}>$1.99/m</p>
          <div>
            <span className="bi bi-discord"></span>
            <p>Discord</p>
          </div>
        </div>
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column mx-3"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "lightblue",
          }}
        >
          {" "}
          <p style={{ fontSize: "30px", fontWeight: "400" }}>$10.00/m</p>
          <div>
            <span className="bi bi-xbox"></span>
            <p>Xbox</p>
          </div>
        </div>
        <div
          className="py-2 px-4 text-white d-flex justify-content-between flex-column mx-3"
          style={{
            borderRadius: "10px",
            width: "180px",
            height: "200px",
            flexShrink: "0",
            backgroundColor: "black",
          }}
        >
          {" "}
          <p style={{ fontSize: "30px", fontWeight: "400" }}>$18.39/m</p>
          <div>
            <span className="bi bi-steam"></span>
            <p>Steam</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export function BottomNav() {
  return (
   
<div className="py-3 px-2 justify-content-between bottomNav">
  <a href="" className="bi bi-pie-chart-fill">
         </a>
        <a href=""  className="bi bi-bar-chart-line">
       </a>
        <a href=""  className="bi bi-arrow-down-up">
          </a>
          <a href=""  className="bi bi-wallet2">
        </a>  <a href=""  className="bi bi-emoji-sunglasses">
        </a>
</div>
  )
}
