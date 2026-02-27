import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Getstoragedata, Setstoragedata } from "../service/sessionstorage";
const Editproduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const intialstate = {
    id: "",
    image: "",
    title: "",
    Desc: "",
    Brand: "",
    price: "",
    Quantity: "",
    Category: "",
  };

  const [formdata, setformdata] = useState(intialstate);
  const [Errors, setErrors] = useState({});
  const validate = () => {
    let newErrors = {};

    if (!formdata.title.trim()) newErrors.title = "Title is required";
    if (!formdata.Brand.trim()) newErrors.Brand = "Brand is required";
    if (!formdata.Desc.trim()) newErrors.Desc = "Description is required";
    if (!formdata.price) newErrors.price = "Price is required";
    if (!formdata.image.trim()) newErrors.image = "Image URL is required";
    if (!formdata.Quantity) newErrors.Quantity = "Quantity is required";
    if (!formdata.Category) newErrors.Category = "Category is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    let data = Getstoragedata();
    let updatedata = data.map((prod) => {
      if (prod.id == id) {
        return formdata;
      } else {
        return prod;
      }
    });
    Setstoragedata(updatedata);
    setformdata(intialstate);
    navigate("/");
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  useEffect(() => {
    if (id) {
      let data = Getstoragedata();
      let record = data.find((prod) => prod.id == id);
      setformdata(record);
    }
  }, [id]);
  return (
    <>
      <Form onSubmit={handlesubmit} className="mt-4">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Title
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="title"
              value={formdata.title}
              onChange={handlechange}
              isInvalid={!!Errors.title}
              placeholder="Enter the Title"
            />
            <Form.Control.Feedback type="invalid">
              {Errors.title}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Brand
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="Brand"
              value={formdata.Brand}
              onChange={handlechange}
              isInvalid={!!Errors.Brand}
              placeholder="Enter the Brand"
            />
            <Form.Control.Feedback type="invalid">
              {Errors.Brand}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Description
          </Form.Label>

          <Col sm="10">
            <Form.Control
              as="textarea"
              rows={4}
              name="Desc"
              value={formdata.Desc}
              onChange={handlechange}
              isInvalid={!!Errors.Desc}
              placeholder="Enter the Description"
            />
            <Form.Control.Feedback type="invalid">
              {Errors.Desc}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              name="price"
              value={formdata.price}
              onChange={handlechange}
              isInvalid={!!Errors.price}
              placeholder="Enter the price"
            />
            <Form.Control.Feedback type="invalid">
              {Errors.price}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            image
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="url"
              name="image"
              value={formdata.image}
              onChange={handlechange}
              isInvalid={!!Errors.image}
              placeholder="Enter Image Url"
            />
            <Form.Control.Feedback type="invalid">
              {Errors.image}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Quantity
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              name="Quantity"
              value={formdata.Quantity}
              onChange={handlechange}
              isInvalid={!!Errors.Quantity}
              placeholder="Enter the Quantity"
            />
            <Form.Control.Feedback type="invalid">
              {Errors.Quantity}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Select
              aria-label="Default select example"
              name="Category"
              value={formdata.Category}
              onChange={handlechange}
              isInvalid={!!Errors.Category}
            >
              <option>Select category</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Grosseries">Groceries</option>
              <option value="Mobile">Mobile</option>
              <option value="Book">Book</option>

            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {Errors.Category}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">

          <Col sm="10">
            <Form.Control.Feedback type="invalid">
              {Errors.Rating}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="submit" variant="primary" size="sm">
            update product
          </Button>
        </div>
      </Form>
    </>
  );
};
export default Editproduct;
