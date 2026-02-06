import InputField from "./InputField";
import { styles, errorStyle } from "../styles/styles";

function ReviewForm({ input, errors, getInput, setData }) {
  return (
    <div style={styles.formCard}>
      <h2 style={styles.addReviewTitle}>Add Review</h2>

      <form onSubmit={setData}>
        <InputField
          name="name"
          placeholder="Your Name"
          value={input.name}
          onChange={getInput}
          error={errors.name}
        />

        <InputField
          name="profile"
          placeholder="Profile Image URL"
          value={input.profile}
          onChange={getInput}
          error={errors.profile}
        />

        <InputField
          name="email"
          placeholder="Email Address"
          value={input.email}
          onChange={getInput}
          error={errors.email}
        />

        <InputField
          name="rating"
          placeholder="Rating (1–5)"
          value={input.rating}
          onChange={getInput}
          error={errors.rating}
        />

        <textarea
          name="description"
          placeholder="Write your review..."
          value={input.description || ""}
          onChange={getInput}
          style={styles.textarea}
        />
        {errors.description && (
          <p style={errorStyle}>{errors.description}</p>
        )}

        {/* BUTTON WITH HOVER */}
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.background = "#16a34a";
            e.target.style.color = "#fff";
            e.target.style.transform = "scale(1.06)";
            e.target.style.boxShadow =
              "0 6px 15px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#22c55e";
            e.target.style.color = "#0f172a";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Submit Review 🚀
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;