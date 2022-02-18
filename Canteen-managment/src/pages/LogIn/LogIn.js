import React from "react";
import { Button, Form } from "react-bootstrap";
import "./LogIn.css";
import { useForm } from "react-hook-form";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const result = await axios.post("/login", data);
      console.log(result.data);
      localStorage.setItem("accessToken", result.data);
      reset();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      navigate("/");
      localStorage.setItem("test", "access");
    }
  };

  return (
    <div className="login">
      <Form className="w-50  p-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="display-5 text-center text-success">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            {...register("userName", {
              required: true
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true
            })}
          />
        </Form.Group>

        <Button variant="primary" className="px-4 mx-auto" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
