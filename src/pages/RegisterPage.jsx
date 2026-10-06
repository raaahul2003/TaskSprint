import Navbar from '../components/Navbar';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <div className="card w-full max-w-lg p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Create your account</h2>
          <p className="mb-6 text-slate-600">Join TaskSprint and start posting or finding tasks</p>

          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Select Role</label>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 hover:bg-blue-50">
                  <input type="radio" name="role" />
                  <span>Client</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 p-3 hover:bg-blue-50">
                  <input type="radio" name="role" />
                  <span>Freelancer</span>
                </label>
              </div>
            </div>

            <button className="btn btn-primary w-full">Create Account</button>
          </form>

          <p className="mt-6 text-center text-slate-600">
            Already have an account?{' '}
            <a href="/login" className="font-bold text-primary hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
