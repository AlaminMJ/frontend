import React from "react";
import { BsCalendar4, BsChatLeft, BsClipboard } from "react-icons/bs";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LineChart, XAxis, Tooltip, Line, CartesianGrid } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      name: "Saturday",
      purchase: 6000,
      sell: 2400,
    },
    {
      name: "Sunday",
      purchase: 6000,
      sell: 5398,
    },
    {
      name: "Monday",
      purchase: 2000,
      sell: 9800,
    },
    {
      name: "Tuesday",
      purchase: 5780,
      sell: 3908,
    },
    {
      name: "Wednesday",
      purchase: 1890,
      sell: 4800,
    },
    {
      name: "Thusday",
      purchase: 6590,
      sell: 3800,
    },
    {
      name: "Friday",
      purchase: 5490,
      sell: 2300,
    },
  ];
  return (
    <div className="container dashboard px-5">
      <div className="boxs">
        <div className="box">
          <div>
            <p className="text-primary m-0 fs-4 fw-light">Receive</p>
            <p className="fs-4  fw-light m-0">1020</p>
          </div>
          <BsCalendar4 className="icon" />
        </div>
        <div className="box">
          <div>
            <p className="text-primary m-0 fs-4 fw-light">Issu</p>
            <p className="fs-4  fw-light m-0">8020</p>
          </div>
          <BsChatLeft className="icon" />
        </div>
        <div className="box">
          <div>
            <p className="text-primary m-0 fs-4 fw-light">Balance</p>
            <p className="fs-4 fw-light m-0">120</p>
          </div>
          <MdOutlineForwardToInbox className="icon" />
        </div>
        <div className="box">
          <div>
            <p className="text-primary m-0 fs-4 fw-light">Return</p>
            <p className="fs-4  fw-light m-0">$120</p>
          </div>
          <BsClipboard className="icon" />
        </div>
      </div>
      <div className="chart">
        <h2 className="display-6 text-primary">Stock</h2>
        <div>
          <LineChart
            width={900}
            height={250}
            data={data}
            margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />

            <Line type="monotone" dataKey="purchase" stroke="#8884d8" />
            <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      {/* menu */}
     
    </div>
  );
};

export default Dashboard;
