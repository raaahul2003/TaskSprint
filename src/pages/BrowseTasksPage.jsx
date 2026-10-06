import Navbar from '../components/Navbar';

const BrowseTasksPage = () => {
  const tasks = [
    {
      title: 'Logo Design for Startup',
      price: 50,
      category: 'Design',
      timeLeft: '2 days left',
      description: 'Need a modern and minimal logo for a startup website.',
      company: 'StartupX',
    },
    {
      title: 'Social Media Captions',
      price: 30,
      category: 'Writing',
      timeLeft: '1 day left',
      description: 'Write 10 captions for Instagram and Facebook marketing campaign.',
      company: 'BrandWave',
    },
    {
      title: 'Data Entry Work',
      price: 75,
      category: 'Admin',
      timeLeft: '6 hours left',
      description: 'Organize records and maintain spreadsheet with accurate data entry.',
      company: 'NovaWorks',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container page-content">
        <div className="browse-layout">
          <aside className="filters-panel">
            <h3>Filters</h3>

            <div className="filter-group">
              <label>Category</label>
              <select>
                <option>All</option>
                <option>Design</option>
                <option>Writing</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" />
            </div>

            <button className="btn btn-primary full-width">Apply Filters</button>
          </aside>

          <main className="task-list-area">
            <div className="toolbar">
              <h2>Browse Tasks</h2>
              <div className="toolbar-actions">
                <input type="text" placeholder="Search tasks..." />
                <select>
                  <option>Newest</option>
                  <option>Highest Price</option>
                  <option>Urgent</option>
                </select>
              </div>
            </div>

            <div className="task-grid browse-grid">
              {tasks.map((task, index) => (
                <div key={index} className="task-card">
                  <div className="task-top">
                    <span className="badge">{task.category}</span>
                    <span className="time-left">{task.timeLeft}</span>
                  </div>

                  <h3>{task.title}</h3>
                  <p>{task.description}</p>

                  <div className="task-meta">
                    <span>💰 ${task.price}</span>
                    <span>{task.company}</span>
                  </div>

                  <div className="task-footer">
                    <span className="rating">⭐ 4.8</span>
                    <button className="btn btn-primary small">Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default BrowseTasksPage;
