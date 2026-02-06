export const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#cce072,#14a9b4)",
    padding: "40px",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "30px",
  },
  formCard: {
    background: "#39befc",
    padding: "30px",
    borderRadius: "16px",
  },
  addReviewTitle: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "800",
    marginBottom: "20px",
    background: "linear-gradient(90deg,#1e3a8a,#16a34a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  userReviewTitle: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "25px",
    background: "linear-gradient(90deg,#facc15,#f97316)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#22c55e",
    color: "#0f172a",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  reviewSection: {
    background: "rgba(255,255,255,0.15)",
    padding: "30px",
    borderRadius: "16px",
  },
  reviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
    gap: "20px",
  },
  reviewCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  email: {
    fontSize: "13px",
    color: "#6b7280",
  },
  reviewText: {
    fontSize: "14px",
  },
};

export const errorStyle = {
  color: "red",
  fontSize: "12px",
};