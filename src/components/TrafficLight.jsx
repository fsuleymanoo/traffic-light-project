import { useState } from "react";

function TrafficLight() {
  const [color, setColor] = useState(null);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div
        className="bg-black"
        style={{ height: "300px", width: "20px" }}
      ></div>
      <div className="d-flex flex-column bg-black align-items-center rounded-4">
        <div
          className={`bg-danger rounded-circle m-2 ${
            color === "red" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setColor("red")}
          style={{ width: "150px", height: "150px" }}
        ></div>
        <div
          className={`bg-warning rounded-circle ${
            color === "yellow" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setColor("yellow")}
          style={{ width: "150px", height: "150px" }}
        ></div>
        <div
          className={`bg-success rounded-circle m-2 ${
            color === "green" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setColor("green")}
          style={{ width: "150px", height: "150px" }}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
