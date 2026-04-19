import "./Sidebar.css";

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div>
        <p className="miniText">PORTFOLIO</p>
        <h1 className="brand">Samriti</h1>
        <p className="role">AI • ML • Developer</p>
      </div>

      <nav className="navMenu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </nav>

      <p className="status">Open to opportunities</p>
    </aside>
  );
}