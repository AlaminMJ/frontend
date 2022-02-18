import axios from "axios";
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import DeleteModal from "../../components/Modal/DeleteModal";
const SellList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [sells, setSells] = useState([]);
  const loadDate = async () => {
    // try {
    //   const result = await axios();
    //   setSells(result.data);
    //   console.log(sells);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  useEffect(() => {
    loadDate();
  }, []);
  const deleteSell = async (id) => {
    try {
      await axios.delete(`/sells/${id}`);
      alert("successfull");
      loadDate();
    } catch (error) {
      alert(error.message);

      if (window.confirm("Confirm Delete")) {
        try {
          await axios.delete(`/sells/${id}`);
          alert("successfull");
          loadDate();
        } catch (error) {
          alert(error.message);
        }
      }
    }

    return (
      <div>
        <div className="container">
          <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
          <h1 className="display-4 text-primary text-center">Sell List</h1>
          <div>
            <Form.Group
              className="col-3 ms-auto mb-3"
              controlId="formGridPassword"
            >
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={new Date().toJSON().slice(0, 10)}
              />
            </Form.Group>
          </div>
          <div>
            <MaterialTable
              className="mt-2"
              columns={[
                { title: "Date", field: "date" },
                { title: "Product Name", field: "name" },
                { title: "Price", field: "price" },
                { title: "unit", field: "unite" },
                { title: "quantity", field: "quantity" },

                {
                  title: "Action",
                  render: (rowData) => (
                    <>
                      <Link to={`/bill/${rowData._id}`}>
                        <button className="btn btn-sm btn-primary">View</button>
                      </Link>

                      <Link to={`/updateshoe/${rowData._id}`}>
                        <button className="btn btn-sm btn-success ms-2">
                          Edit
                        </button>
                      </Link>

                      <button
                        className="btn btn-sm btn-danger ms-2"
                        onClick={() => deleteSell(rowData._id)}
                      >
                        Delete
                      </button>
                    </>
                  ),
                },
              ]}
              data={[
                {
                  date: "10-02-22",
                  name: "alamin",
                  quantity: 20,
                  unit: "kg",
                  price: 200,
                },
              ]}
              title="Sell List"
              options={{
                exportButton: true,
              }}
            />
          </div>
        </div>
      </div>
    );
  };
};
export default SellList;
