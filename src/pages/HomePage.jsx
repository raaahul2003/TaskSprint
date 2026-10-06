import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-primary">
              Fast. Affordable. Flexible.
            </span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Get tasks done quickly with TaskSprint
            </h1>
            <p className="mb-6 max-w-xl text-lg text-slate-600">
              Post small jobs or start earning by completing freelance tasks. Simple,
              reliable, and built for real work.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <button className="btn btn-primary">Post a Task</button>
              <button className="btn btn-secondary">Browse Tasks</button>
            </div>

            <div className="flex flex-wrap gap-8 text-slate-700">
              <div>
                <strong className="block text-2xl">500+</strong>
                <span>Clients</span>
              </div>
              <div>
                <strong className="block text-2xl">1200+</strong>
                <span>Freelancers</span>
              </div>
              <div>
                <strong className="block text-2xl">5000+</strong>
                <span>Tasks completed</span>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="mb-4 text-xl font-bold text-slate-900">Popular tasks</h3>
            <ul className="space-y-3 text-slate-600">
              <li>💰 Logo Design — $50</li>
              <li>💰 Blog Writing — $40</li>
              <li>💰 Video Editing — $120</li>
              <li>💰 Research — $35</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Featured tasks</h2>
            <a href="/browse" className="font-bold text-primary hover:underline">
              View all
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Logo Design for Startup',
                price: 50,
                category: 'Design',
                time: '2 days left',
                desc: 'Need a modern and minimal logo for a startup website and brand identity.',
              },
              {
                title: 'Social Media Captions',
                price: 30,
                category: 'Writing',
                time: '1 day left',
                desc: 'Write 10 Instagram and Facebook captions for a modern fitness brand.',
              },
              {
                title: 'Data Entry Work',
                price: 75,
                category: 'Admin',
                time: '6 hours left',
                desc: 'Organize customer records into spreadsheet and validate the information.',
              },
            ].map((task, i) => (
              <div key={i} className="card p-6 transition hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <span className="badge">{task.category}</span>
                  <span className="text-xs font-bold text-warning">{task.time}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{task.title}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">{task.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">💰 ${task.price}</span>
                  <button className="btn btn-primary btn-small">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">How it works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: '1', title: 'Post a task', desc: 'Describe your requirement and set a budget.' },
              { num: '2', title: 'Choose freelancers', desc: 'Review proposals and hire the best fit.' },
              { num: '3', title: 'Get results', desc: 'Approve delivery and release payment securely.' },
            ].map((item, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-primary">
                  {item.num}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
