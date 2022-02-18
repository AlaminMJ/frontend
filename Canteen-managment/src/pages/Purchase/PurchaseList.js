import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Modal/DeleteModal";

const PurchaseList = () => {
  const [modalShow, setModalShow] = useState(false);

  const [shoes, setShoes] = useState([]);
  // const loadDate = async () => {
  //   try {
  //     const result = await axios.get(
  //       "https://acmecanteen.herokuapp.com/api/shoes"
  //     );
  //     setShoes(result.data);
  //     console.log(shoes);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  useEffect(() => {
    axios
      .get("https://acmecanteen.herokuapp.com/api/shoes")
      .then((res) => {
        setShoes(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);
  const deletePurchase = async (id) => {
    try {
      await axios.delete(`/purchases/${id}`);
      alert("successfull");
      // loadDate();
    } catch (error) {
      alert(error.message);

      if (window.confirm("Confirm Delete")) {
        try {
          await axios.delete(`/purchases/${id}`);
          alert("successfull");
          loadDate();
        } catch (error) {
          alert(error.message);
        }
      }
    }
    return (
      <div className="container">
        <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
        <h1 className="display-4 text-primary text-center">Purchase List</h1>
        <div>
          <Link to="/purchase" className="mb-4">
            <Button className="d-flex align-items-center ms-auto">
              Purchase
            </Button>
          </Link>
        </div>
        <MaterialTable
          className="mt-2"
          columns={[
            { title: "ID", field: "id" },
            { title: "Name", field: "name" },
            { title: "Date", field: "date" },

            {
              title: "action",
              render: (rowData) => (
                <>
                  <Link to={`/updateshoe/${rowData._id}`}>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </Link>

                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => deletePurchase(rowData._id)}
                  >
                    Delete
                  </button>
                </>
              ),
            },
          ]}
          data={[]}
          title="Purchase List"
          options={{
            exportButton: true,
          }}
        />
      </div>
    );
  };
};

export default PurchaseList;
