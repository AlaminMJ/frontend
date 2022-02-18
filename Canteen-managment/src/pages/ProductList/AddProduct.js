import React from "react";
<<<<<<< HEAD
import axios from "../../"
=======
import axios from "axios";
import { Link } from "react-router-dom";
>>>>>>> 720855100308bb9da291cd7cd451a55015068008
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IoMdPaperPlane } from "react-icons/io";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/api/productlists", data)
      .then((res) => {
        alert("Sucessfull Added");
      })
      .catch((err) => {
        alert(err.message);
        console.dir(err);
      });
  };
  return (
    <div>
      <h1 className="display-4 text-primary text-center">Add Product</h1>
      <div className="d-flex justify-content-between mx-4">
        <div></div>
        <Link to="/productlist">
          <Button>Product List</Button>
        </Link>
      </div>
      {/* form */}
      <Form className=" w-75 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              {...register("productName", { required: true })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Product code</Form.Label>
            <Form.Control
              type="number"
              placeholder="123"
              {...register("productCode", { required: true })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Unit</Form.Label>
            <Form.Select required {...register("unit", { required: true })}>
              <option selected>Kg</option>
              <option>Pices</option>
              <option>Litter</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="url"
              {...register("imgurl", { required: true })}
            />
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="d-flex align-items-center"
        >
          Submit <IoMdPaperPlane size={22} className="ms-2" />
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
