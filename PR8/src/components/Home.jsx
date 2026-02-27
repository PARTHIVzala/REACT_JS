import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { Getstoragedata, Setstoragedata } from "../service/sessionstorage";
import { useNavigate } from "react-router";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const navigate = useNavigate();

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (confirmDelete) {
      let data = Getstoragedata();
      let filterData = data.filter((pro) => pro.id != id);
      setproducts(filterData);
      Setstoragedata(filterData);
    }
  };

  // Edit
  const handleEdit = (id) => {
    navigate(`/Edit-product/${id}`);
  };

  // Load Data
  useEffect(() => {
    let data = Getstoragedata();
    setproducts(data || []);
  }, []);

  // Search + Sorting
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "low") {
        return Number(a.price) - Number(b.price);
      } else if (sortType === "high") {
        return Number(b.price) - Number(a.price);
      } else if (sortType === "az") {
        return a.title.localeCompare(b.title);
      } else if (sortType === "za") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <Container className="mt-4">

      {/* Search + Sort */}
      <Row className="mb-3">
        <Col md={6} className="mb-2">
          <input
            type="text"
            placeholder="Search by title..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>

        <Col md={6}>
          <select
            className="form-select"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="az">Title: A to Z</option>
            <option value="za">Title: Z to A</option>
          </select>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="table-dark text-center">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-center align-middle">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </td>

                <td>{product.title}</td>
                <td>{product.Desc}</td>
                <td>{product.price}</td>
                <td>{product.Brand}</td>
                <td>{product.Category}</td>
                <td>{product.Quantity}</td>

                <td>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    className="me-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">
                <h5>No Products Found</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;