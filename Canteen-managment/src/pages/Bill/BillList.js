import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Table, Button } from "react-bootstrap";
import DeleteModal from "../../components/Modal/DeleteModal";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const BillList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [bills, setbills] = useState([]);
  const loadDate = async () => {
    try {
      const result = await axios("http://localhost:5000/api/bills");
      setbills(result.data);
      console.log(bills);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadDate();
  }, []);

  return (
    <div className="container">
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="display-4 text-primary text-center">Bill List</h1>
    </div>
  );
};

export default BillList;
