import Navbar from '../components/Navbar';

const PostTaskPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="card max-w-2xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-2">Post a New Task</h2>
          <p className="text-gray-600 mb-8">Describe your requirement and hire the right freelancer.</p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Task Title</label>
              <input
                type="text"
                placeholder="Example: Design social media poster"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Design</option>
                <option>Writing</option>
                <option>Video</option>
                <option>Development</option>
                <option>Admin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Description</label>
              <textarea
                rows="5"
                placeholder="Detailed task explanation..."
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Budget</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Deadline</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Skills Required</label>
              <input
                type="text"
                placeholder="Figma, Adobe, Copywriting"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button className="btn btn-primary w-full py-3">Publish Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostTaskPage;
