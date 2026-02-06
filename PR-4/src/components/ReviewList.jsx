import ReviewCard from "./ReviewCard";
import { styles } from "../styles/styles";

function ReviewList({ list }) {
  return (
    <div style={styles.reviewSection}>
      <h2 style={styles.userReviewTitle}>User Reviews</h2>

      <div style={styles.reviewGrid}>
        {list.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewList;