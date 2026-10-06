const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <h2>TaskSprint</h2>
        <ul>
          <li className="active">Overview</li>
          <li>My Tasks</li>
          <li>Applications</li>
          <li>Submissions</li>
          <li>Earnings</li>
          <li>Profile</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="btn btn-primary">Post a Task</button>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <span>Active Tasks</span>
            <strong>04</strong>
          </div>
          <div className="stat-card">
            <span>Earnings</span>
            <strong>$520</strong>
          </div>
          <div className="stat-card">
            <span>Submitted</span>
            <strong>12</strong>
          </div>
          <div className="stat-card">
            <span>Reviews</span>
            <strong>4.8 ⭐</strong>
          </div>
        </div>

        <div className="dashboard-panels">
          <div className="panel">
            <h3>Recent Tasks</h3>

            <div className="list-item">
              <div>
                <strong>Logo Design</strong>
                <p>Status: In Progress</p>
              </div>
              <button className="btn btn-secondary small">View</button>
            </div>

            <div className="list-item">
              <div>
                <strong>Social Media Captions</strong>
                <p>Status: Submitted</p>
              </div>
              <button className="btn btn-secondary small">Review</button>
            </div>
          </div>

          <div className="panel">
            <h3>Notifications</h3>
            <div className="notification">
              <p>New application for your Logo Design task.</p>
            </div>
            <div className="notification">
              <p>Your submission was approved.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
