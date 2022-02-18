import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const loadDate = async () => {
    try {
      const result = await axios.get("/productlists");
      setProducts(result.data);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    loadDate();
  }, []);

  const deleteProducts = async (id) => {

    

    if (window.confirm("Confirm Delete")) {

      try {
        await axios.delete(`/productlists/${id}`);
        alert("successfull");
        loadDate();
      } catch (error) {
        alert(error.message);
      }

    

    }

  };
  return (
    <div className="container px-4">
      <h1 className="display-4 text-primary text-center">product List</h1>
      <div>
        <Link to="/addproduct">
          <Button className="d-flex align-items-center ms-auto">
            <AiOutlinePlus className="me-2" size={20} /> Add Product
          </Button>
        </Link>
      </div>

      <div className="product-list-container mt-4">
        {products.map((product) => {
          return (
            <Card key={product._id}>
              <Card.Img
                variant="top"
                className="product-list-img"
                src={product.imgurl}
              />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <div className="d-flex justify-content-between">
                  <p>{product.productCode}</p>
                  <p>{product.unit}</p>
                </div>
                <Link to={`/updateProductlist/${product._id}`}>
                  <Button variant="primary" size="sm">
                    Edit
                  </Button>
                </Link>

                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => deleteProducts(product._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
