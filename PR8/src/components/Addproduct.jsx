import { useState } from "react";
import { useNavigate } from "react-router";
import { Row, Form, Col, Button, Image } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { Getstoragedata, Setstoragedata } from "../service/sessionstorage";

const AddProductLS = () => {
  const navigate = useNavigate();

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

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!formdata.title.trim()) newErrors.title = "Title is required";
    if (!formdata.Brand.trim()) newErrors.Brand = "Brand is required";
    if (!formdata.Desc.trim()) newErrors.Desc = "Description is required";
    if (!formdata.price) newErrors.price = "Price is required";
    if (!formdata.image) newErrors.image = "Image file is required";
    if (!formdata.Quantity) newErrors.Quantity = "Quantity is required";
    if (!formdata.Category) newErrors.Category = "Category is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newProduct = {
      ...formdata,
      id: generateUniqueId({ length: 6, useLetters: false }),
    };

    let data = Getstoragedata() || [];
    data.push(newProduct);
    Setstoragedata(data);

    setformdata(intialstate);
    navigate("/");
  };

  // ✅ Handle Change (File + Normal Input)
  const handlechange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setformdata({
            ...formdata,
            image: reader.result, // base64 string
          });
        };

        reader.readAsDataURL(file); // convert to base64
      }
    } else {
      setformdata({
        ...formdata,
        [name]: value,
      });
    }
  };

  return (
    <Form onSubmit={handlesubmit} className="mt-4">

      {/* Title */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Title</Form.Label>
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

      {/* Brand */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Brand</Form.Label>
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

      {/* Description */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Description</Form.Label>
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

      {/* Price */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Price</Form.Label>
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

      {/* Image Upload */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Image</Form.Label>
        <Col sm="10">
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handlechange}
            isInvalid={!!Errors.image}
          />
          <Form.Control.Feedback type="invalid">
            {Errors.image}
          </Form.Control.Feedback>

          {/* Image Preview */}
          {formdata.image && (
            <div className="mt-3">
              <Image
                src={formdata.image}
                alt="Preview"
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
                thumbnail
              />
            </div>
          )}
        </Col>
      </Form.Group>

      {/* Quantity */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Quantity</Form.Label>
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

      {/* Category */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">Category</Form.Label>
        <Col sm="10">
          <Form.Select
            name="Category"
            value={formdata.Category}
            onChange={handlechange}
            isInvalid={!!Errors.Category}
          >
            <option value="">Select category</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Groceries">Groceries</option>
            <option value="Mobile">Mobile</option>
            <option value="Book">Book</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {Errors.Category}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      {/* Submit */}
      <div className="text-center mt-4">
        <Button type="submit" variant="primary">
          Add Product
        </Button>
      </div>

    </Form>
  );
};

export default AddProductLS;