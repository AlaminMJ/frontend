import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Modal/DeleteModal";

const UserList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [shoes, setShoes] = useState([]);
  const loadDate = async () => {
    try {
      const result = await axios("http://localhost:5000/api/users");
      setShoes(result.data);
      console.log(shoes);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadDate();
  }, []);
  const deleteUser = async (id) => {
    if (window.confirm("Confirm Delete")) {
      try {
        const result = await axios.delete(`/users/${id}`);
        alert("successfull");
        loadDate();
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <div>
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="m-4">
        <h1 className="text-center text-primary display-5">User List</h1>
        <div className="d-flex justify-content-between">
          <div className="col-3 mb-2"></div>
          <Link to="/adduser">
            <Button className="mb-2">Add new</Button>
          </Link>
        </div>

        <MaterialTable
          className="mt-2"
          columns={[
            { title: "UserName", field: "userName" },
            { title: "Roll", field: "roll" },

            {
              title: "action",
              render: (rowData) => (
                <>
                  <Link to={`/updateuser/${rowData._id}`}>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </Link>

                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => deleteUser(rowData._id)}
                  >
                    Delete
                  </button>
                </>
              ),
            },
          ]}
          data={[
            { userName: "Alamin", roll: "admin" },
            { userName: "Alamin", roll: "canteen" },
            { userName: "Alamin", roll: "store" },
            { userName: "Alamin", roll: "admin" },
          ]}
          title="Users"
          options={{
            exportButton: true,
          }}
        />
      </div>
    </div>
  );
};

export default UserList;
