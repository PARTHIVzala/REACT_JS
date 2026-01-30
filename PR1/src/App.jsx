import "./App.css";
import ProfileCard from "./Components/Profile-Card"

function App() {
  const users = [
    { name: "Pranav", like: 500, post: 200, view: 2000, link: "https://i.pravatar.cc/150?img=1" },
    { name: "Hemali", like: 100, post: 2, view: 1500, link: "https://i.pravatar.cc/150?img=2" },
    { name: "Fazal", like: 1800, post: 211, view: 15000, link: "https://i.pravatar.cc/150?img=3" },
    { name: "Denisha", like: 980, post: 120, view: 8900, link: "https://i.pravatar.cc/150?img=4" },
    { name: "Nisha", like: 60, post: 8, view: 900, link: "https://i.pravatar.cc/150?img=5" },
    { name: "Amit", like: 320, post: 45, view: 5400, link: "https://i.pravatar.cc/150?img=6" },
    { name: "Yash", like: 780, post: 99, view: 7200, link: "https://i.pravatar.cc/150?img=7" },
    { name: "Karan", like: 150, post: 12, view: 2100, link: "https://i.pravatar.cc/150?img=8" },
    { name: "Pooja", like: 980, post: 110, view: 9100, link: "https://i.pravatar.cc/150?img=9" },
    { name: "Riya", like: 430, post: 66, view: 4800, link: "https://i.pravatar.cc/150?img=10" },
  ];

  return (
    <>
      <h1 className="page-title">Instagram Profile Cards</h1>

      <div className="card-container">
        {users.map((user, index) => (
          <ProfileCard key={index} {...user} />
        ))}
      </div>
    </>
  );
}

export default App;
