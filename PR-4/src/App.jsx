import { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import { styles } from "./styles/styles";

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState({});

  const getInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!input.name) newErrors.name = "Name required";
    if (!input.profile) newErrors.profile = "Profile URL required";
    if (!input.email) newErrors.email = "Email required";
    if (!input.rating) newErrors.rating = "Rating required";
    if (!input.description) newErrors.description = "Description required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const setData = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setList([...list, input]);
    setInput({});
    setErrors({});
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <ReviewForm
          input={input}
          errors={errors}
          getInput={getInput}
          setData={setData}
        />
        <ReviewList list={list} />
      </div>
    </div>
  );
}

export default App;