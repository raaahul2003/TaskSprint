const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="sticky top-0 h-screen w-64 bg-slate-900 p-6 text-white">
        <h2 className="mb-8 text-2xl font-bold">TaskSprint</h2>
        <ul className="space-y-2">
          <li className="rounded-lg bg-white/10 p-3 font-semibold">Overview</li>
          <li className="rounded-lg p-3 hover:bg-white/5">My Tasks</li>
          <li className="rounded-lg p-3 hover:bg-white/5">Applications</li>
          <li className="rounded-lg p-3 hover:bg-white/5">Submissions</li>
          <li className="rounded-lg p-3 hover:bg-white/5">Earnings</li>
          <li className="rounded-lg p-3 hover:bg-white/5">Profile</li>
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <button className="btn btn-primary">Post a Task</button>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          {[
            { label: 'Active Tasks', value: '04' },
            { label: 'Earnings', value: '$520' },
            { label: 'Submitted', value: '12' },
            { label: 'Reviews', value: '4.8 ⭐' },
          ].map((stat, i) => (
            <div key={i} className="card p-6">
              <p className="mb-2 text-sm text-slate-600">{stat.label}</p>
              <strong className="text-2xl text-slate-900">{stat.value}</strong>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6 md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Tasks</h3>
            <div className="space-y-4">
              {[
                { title: 'Logo Design', status: 'In Progress' },
                { title: 'Social Media Captions', status: 'Submitted' },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none last:pb-0">
                  <div>
                    <strong className="block text-slate-900">{task.title}</strong>
                    <span className="text-sm text-slate-600">Status: {task.status}</span>
                  </div>
                  <button className="btn btn-secondary btn-small">View</button>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">Notifications</h3>
            <div className="space-y-3">
              <div className="rounded-lg border-l-4 border-primary bg-blue-50 p-3 text-sm text-slate-700">
                New application for your Logo Design task.
              </div>
              <div className="rounded-lg border-l-4 border-success bg-green-50 p-3 text-sm text-slate-700">
                Your submission was approved.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
