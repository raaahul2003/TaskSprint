import Navbar from '../components/Navbar';

const BrowseTasksPage = () => {
  const tasks = [
    { title: 'Logo Design for Startup', price: 50, category: 'Design', time: '2 days left', desc: 'Need a modern and minimal logo for a startup website.', company: 'StartupX' },
    { title: 'Social Media Captions', price: 30, category: 'Writing', time: '1 day left', desc: 'Write 10 captions for Instagram and Facebook campaigns.', company: 'BrandWave' },
    { title: 'Data Entry Work', price: 75, category: 'Admin', time: '6 hours left', desc: 'Organize customer records and maintain spreadsheet data.', company: 'NovaWorks' },
    { title: 'Website Copy Writing', price: 80, category: 'Writing', time: '5 days left', desc: 'Professional website content for SaaS product page.', company: 'CloudBase' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <aside className="md:col-span-1">
            <div className="card p-6">
              <h3 className="mb-4 text-lg font-bold text-slate-900">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">Category</label>
                  <select className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>All</option>
                    <option>Design</option>
                    <option>Writing</option>
                    <option>Admin</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">Price Range</label>
                  <input type="number" placeholder="Min" className="mb-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="number" placeholder="Max" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <button className="btn btn-primary w-full">Apply Filters</button>
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-900">Browse Tasks</h2>
              <div className="flex w-full max-w-lg gap-3">
                <input type="text" placeholder="Search tasks..." className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                <select className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Newest</option>
                  <option>Highest Price</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {tasks.map((task, i) => (
                <div key={i} className="card p-6 transition hover:shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="badge">{task.category}</span>
                    <span className="text-xs font-bold text-warning">{task.time}</span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-900">{task.title}</h3>
                  <p className="mb-4 text-sm leading-6 text-slate-600">{task.desc}</p>

                  <div className="mb-4 flex items-center justify-between text-sm text-slate-700">
                    <span>💰 ${task.price}</span>
                    <span>{task.company}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-warning">⭐ 4.8</span>
                    <button className="btn btn-primary btn-small">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseTasksPage;
