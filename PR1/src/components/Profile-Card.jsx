import { useState } from "react";
import "./Profile-Card.css";

function ProfileCard({ name, like, post, view, link }) {
  const [likes, setLikes] = useState(like);
  const [liked, setLiked] = useState(false); // 👈 NEW

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true); // 👈 lock
    }
  };

  return (
    <div className="profile-card">
      <img src={link} alt={name} className="profile-img" />
      <h2 className="profile-name">{name}</h2>

      <div className="profile-stats">
        <div>
          <span className="count">{post}</span>
          <span className="label">Posts</span>
        </div>
        <div>
          <span className="count">{likes}</span>
          <span className="label">Likes</span>
        </div>
        <div>
          <span className="count">{view}</span>
          <span className="label">Views</span>
        </div>
      </div>

      <button
        className={`like-btn ${liked ? "liked" : ""}`}
        onClick={handleLike}
        disabled={liked}   // 👈 button disable
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default ProfileCard;
