import Navbar from '../components/Navbar';

const PostTaskPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="card mx-auto max-w-2xl p-8">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">Post a New Task</h2>
          <p className="mb-8 text-slate-600">Describe your requirement and hire the right freelancer.</p>

          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Task Title</label>
              <input type="text" placeholder="Example: Design social media poster" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Category</label>
              <select className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Design</option>
                <option>Writing</option>
                <option>Video</option>
                <option>Development</option>
                <option>Admin</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Description</label>
              <textarea rows="5" placeholder="Detailed task explanation..." className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Budget</label>
                <input type="number" placeholder="Enter amount" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Deadline</label>
                <input type="date" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Skills Required</label>
              <input type="text" placeholder="Figma, Adobe, Copywriting" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <button className="btn btn-primary w-full py-3">Publish Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostTaskPage;
