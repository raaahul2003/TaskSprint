import Navbar from '../components/Navbar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <h2>Welcome back</h2>
          <p>Login to continue with TaskSprint</p>

          <form className="auth-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="form-row">
              <label className="checkbox-row">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button className="btn btn-primary full-width">Login</button>
          </form>

          <div className="auth-footer">
            <span>Don’t have an account?</span>
            <a href="/register">Sign up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
