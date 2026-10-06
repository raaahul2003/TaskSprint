import Navbar from '../components/Navbar';

const TaskDetailsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container page-content">
        <div className="task-details-layout">
          <div className="task-main-card">
            <div className="task-detail-header">
              <span className="badge">Design</span>
              <span className="time-left">2 days left</span>
            </div>

            <h2>Logo Design for Startup</h2>
            <div className="task-meta-row">
              <span>💰 $50</span>
              <span>📍 StartupX</span>
              <span>👥 5 Applicants</span>
            </div>

            <p>
              We are looking for a modern and minimal logo design for our startup website and
              brand identity. The logo should feel premium, clean, and memorable.
            </p>

            <div className="detail-section">
              <h3>Requirements</h3>
              <ul>
                <li>Minimal and professional design</li>
                <li>Use premium colors and clean typography</li>
                <li>Deliver in PNG and SVG format</li>
                <li>At least 3 design variations</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Skills Required</h3>
              <div className="tag-list">
                <span>Figma</span>
                <span>Branding</span>
                <span>Adobe Photoshop</span>
              </div>
            </div>
          </div>

          <aside className="sidebar-card">
            <h3>Client Info</h3>
            <div className="client-box">
              <div className="avatar-circle">J</div>
              <div>
                <strong>John Client</strong>
                <p>⭐ 4.9 rating</p>
              </div>
            </div>

            <button className="btn btn-primary full-width">Apply Now</button>

            <div className="mini-info">
              <p>Posted 2 hours ago</p>
              <p>Budget: $50</p>
              <p>Deadline: 2 days</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default TaskDetailsPage;
