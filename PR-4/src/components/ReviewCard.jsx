import { styles } from "../styles/styles";

function ReviewCard({ review }) {
  const defaultImg = "https://i.pravatar.cc/150?img=12";

  return (
    <div style={styles.reviewCard}>
      <img
        src={review.profile && review.profile.trim() !== "" ? review.profile : defaultImg}
        alt="profile"
        style={styles.avatar}
        onError={(e) => {
          e.target.src = defaultImg;
        }}
      />

      <h3>{review.name}</h3>
      <p style={styles.email}>{review.email}</p>

      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            style={{
              color: i < review.rating ? "#fbbf24" : "#94a3b8",
              fontSize: "18px",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <p style={styles.reviewText}>{review.description}</p>
    </div>
  );
}

export default ReviewCard;
