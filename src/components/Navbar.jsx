import Navbar from '../components/Navbar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a href="/" className="brand">TaskSprint</a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/browse">Browse</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/post-task">Post Task</a>
        </div>

        <div className="nav-actions">
          <a href="/login" className="btn btn-secondary">Login</a>
          <a href="/register" className="btn btn-primary">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
