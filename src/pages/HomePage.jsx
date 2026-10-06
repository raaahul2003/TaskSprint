import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">Fast. Affordable. Flexible.</span>
            <h1>Get tasks done quickly with TaskSprint</h1>
            <p>
              Post small jobs or start earning by completing freelance tasks.
              Simple, reliable, and built for real work.
            </p>

            <div className="cta-group">
              <button className="btn btn-primary">Post a Task</button>
              <button className="btn btn-secondary">Browse Tasks</button>
            </div>

            <div className="stats-row">
              <div>
                <strong>500+</strong>
                <span>Clients</span>
              </div>
              <div>
                <strong>1200+</strong>
                <span>Freelancers</span>
              </div>
              <div>
                <strong>5000+</strong>
                <span>Tasks completed</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Popular tasks</h3>
            <ul>
              <li>Logo Design — $50</li>
              <li>Blog Writing — $40</li>
              <li>Video Editing — $120</li>
              <li>Research — $35</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Featured tasks</h2>
            <a href="/browse">View all</a>
          </div>

          <div className="task-grid">
            <div className="task-card">
              <div className="task-top">
                <span className="badge">Design</span>
                <span className="time-left">2 days left</span>
              </div>
              <h3>Logo Design for Startup</h3>
              <p>Need a modern and minimal logo for a startup website and brand identity.</p>
              <div className="task-meta">
                <span>💰 $50</span>
                <span>StartupX</span>
              </div>
              <div className="task-footer">
                <span className="rating">⭐ 4.8</span>
                <button className="btn btn-primary small">Apply</button>
              </div>
            </div>

            <div className="task-card">
              <div className="task-top">
                <span className="badge">Writing</span>
                <span className="time-left">1 day left</span>
              </div>
              <h3>Social Media Captions</h3>
              <p>Write 10 Instagram and Facebook captions for a modern fitness brand.</p>
              <div className="task-meta">
                <span>💰 $30</span>
                <span>BrandWave</span>
              </div>
              <div className="task-footer">
                <span className="rating">⭐ 4.9</span>
                <button className="btn btn-primary small">Apply</button>
              </div>
            </div>

            <div className="task-card">
              <div className="task-top">
                <span className="badge">Admin</span>
                <span className="time-left">6 hours left</span>
              </div>
              <h3>Data Entry Work</h3>
              <p>Organize customer records into spreadsheet and validate the information.</p>
              <div className="task-meta">
                <span>💰 $75</span>
                <span>NovaWorks</span>
              </div>
              <div className="task-footer">
                <span className="rating">⭐ 5.0</span>
                <button className="btn btn-primary small">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="section-head">
            <h2>How it works</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-box">
              <span>1</span>
              <h3>Post a task</h3>
              <p>Describe your requirement and set a budget.</p>
            </div>

            <div className="feature-box">
              <span>2</span>
              <h3>Choose freelancers</h3>
              <p>Review proposals and hire the best fit.</p>
            </div>

            <div className="feature-box">
              <span>3</span>
              <h3>Get results</h3>
              <p>Approve delivery and release payment securely.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
