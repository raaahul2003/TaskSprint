import Navbar from '../components/Navbar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <div className="card w-full max-w-md p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Welcome back</h2>
          <p className="mb-6 text-slate-600">Login to continue with TaskSprint</p>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <a href="#" className="font-semibold text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-primary w-full">Login</button>
          </form>

          <p className="mt-6 text-center text-slate-600">
            Don’t have an account?{' '}
            <a href="/register" className="font-bold text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
