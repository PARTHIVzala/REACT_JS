import { useState } from "react";
import { errorStyle } from "../styles/styles";

function InputField({ name, placeholder, value, onChange, error }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: error
            ? "1px solid red"
            : hover
            ? "1px solid #2563eb"
            : "1px solid #ccc",
          boxShadow: hover
            ? "0 0 8px rgba(37,99,235,0.6)"
            : "none",
          transition: "0.3s",
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

export default InputField;