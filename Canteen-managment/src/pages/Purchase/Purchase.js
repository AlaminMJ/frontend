import React from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IoMdPaperPlane } from "react-icons/io";
const Purchase = () => {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const today = curr.toISOString().substr(0, 10);
  return (
    <div className="container">
      <h1 className="display-4 text-primary text-center">Purchase Products</h1>
      <div>
        <Link to="/purchaselist" className="mb-4">
          <Button className="d-flex align-items-center ms-auto">
            Purchase List
          </Button>
        </Link>
      </div>
      <Form className=" w-75 mx-auto mt-5">
        <Row className="mb-3">
          <Form.Group as={Col} className="col-8" controlId="formGridState">
            <Form.Label>Product name</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Rice</option>
              <option>Soyabin Oin</option>
              <option>Mosoor Dal</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="col-4" controlId="formGridState">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" defaultValue={today} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Product code</Form.Label>
            <Form.Control type="number" placeholder="123" />
          </Form.Group> */}
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="123" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" placeholder="123" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Unite</Form.Label>
            <Form.Control type="text" placeholder="Kg" disabled />
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

export default Purchase;
