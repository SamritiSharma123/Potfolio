import "./Sidebar.css";

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div>
        <h1 className="brand">Samriti Sharma</h1>
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
