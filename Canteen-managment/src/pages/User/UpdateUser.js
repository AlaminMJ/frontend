import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdPaperPlane } from "react-icons/io";

const UpdateUser = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .put("http://localhost:5000/api/users", data)
      .then((res) => {
        alert("Sucessfull Added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="container m-4">
      <h1 className="display-4 text-primary text-center">Update User</h1>
      <form
        className="row g-3 mt-4 w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label for="inputEmail4" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            {...register("userName", { required: true })}
          />
        </div>
        <div>
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            {...register("password", { required: true })}
          />
        </div>

        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Roll
          </label>
          <select
            id="inputState"
            className="form-select"
            {...register("roll", { required: true })}
          >
            <option disabled>Choose...</option>
            <option>Admin</option>
            <option>canteen</option>
            <option>store</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sumbit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
