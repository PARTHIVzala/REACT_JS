import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const emptyForm = {
    fullName: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    joiningDate: "",
    image: "",
    id: null
  };

  const [formData, setFormData] = useState(emptyForm);
  const [users, setUsers] = useState([]);

  // Load Data
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("employees")) || [];
    setUsers(data);
  }, []);

  // Save Data Automatically
  useEffect(() => {
    sessionStorage.setItem("employees", JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Image Upload with Size Validation
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }

    setFormData(emptyForm);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const editUser = (id) => {
    const selected = users.find((u) => u.id === id);
    setFormData(selected);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="emp-form">
        <h1 className="form-title">Employee Form</h1>

        <input type="text" name="fullName" placeholder="Full Name"
          value={formData.fullName} onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email"
          value={formData.email} onChange={handleChange} required />

        <input type="text" name="phone" placeholder="Phone"
          value={formData.phone} onChange={handleChange} required />

        <input type="text" name="department" placeholder="Department"
          value={formData.department} onChange={handleChange} required />

        <input type="text" name="designation" placeholder="Designation"
          value={formData.designation} onChange={handleChange} required />

        <input type="date" name="joiningDate"
          value={formData.joiningDate} onChange={handleChange} required />

        {/* File Upload */}
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {/* Image Preview */}
        {formData.image && (
          <img
            src={formData.image}
            alt="preview"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              marginTop: "10px"
            }}
          />
        )}

        <button type="submit">
          {formData.id ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <div className="card-container">
        {users.map((u) => (
          <div className="emp-card" key={u.id}>
            <div className="card-header">

              {/* Default Avatar if No Image */}
              <img
                src={
                  u.image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="employee"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "15px"
                }}
              />

              <div>
                <h2>{u.fullName}</h2>
                <span>{u.designation}</span>
              </div>
            </div>

            <div className="card-body">
              <p><b>Email:</b> {u.email}</p>
              <p><b>Phone:</b> {u.phone}</p>
              <p><b>Department:</b> {u.department}</p>
              <p><b>Joining:</b> {u.joiningDate}</p>

              <button onClick={() => deleteUser(u.id)}
                style={{ background: "red", color: "white", marginRight: "10px" }}>
                Delete
              </button>

              <button onClick={() => editUser(u.id)}
                style={{ background: "orange", color: "white" }}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
