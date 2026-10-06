const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="text-2xl font-bold text-primary">
          TaskSprint
        </a>

        <div className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/browse" className="hover:text-primary">Browse</a>
          <a href="/dashboard" className="hover:text-primary">Dashboard</a>
          <a href="/post-task" className="hover:text-primary">Post Task</a>
        </div>

        <div className="flex gap-3">
          <a href="/login" className="btn btn-secondary">
            Login
          </a>
          <a href="/register" className="btn btn-primary">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
