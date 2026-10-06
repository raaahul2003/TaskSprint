import Navbar from '../components/Navbar';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card wide">
          <h2>Create your account</h2>
          <p>Join TaskSprint and start posting or finding tasks</p>

          <form className="auth-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" />
            </div>

            <div className="form-group">
              <label>Select Role</label>
              <div className="role-options">
                <label className="role-option">
                  <input type="radio" name="role" />
                  <span>Client</span>
                </label>
                <label className="role-option">
                  <input type="radio" name="role" />
                  <span>Freelancer</span>
                </label>
              </div>
            </div>

            <button className="btn btn-primary full-width">Create Account</button>
          </form>

          <div className="auth-footer">
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
