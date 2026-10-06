import Navbar from '../components/Navbar';

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="container page-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-large">R</div>
            <div>
              <h2>Rahul Kumar</h2>
              <p>@rahuldesigner</p>
            </div>
            <button className="btn btn-secondary">Edit Profile</button>
          </div>

          <div className="profile-stats">
            <div className="stat-card small">
              <span>Rating</span>
              <strong>4.8 ⭐</strong>
            </div>
            <div className="stat-card small">
              <span>Jobs Done</span>
              <strong>25</strong>
            </div>
            <div className="stat-card small">
              <span>Earnings</span>
              <strong>$560</strong>
            </div>
          </div>

          <div className="profile-section">
            <h3>Bio</h3>
            <p>
              I am a freelance designer focused on branding, UI design, and marketing visuals.
              I work on clean, modern, creative projects.
            </p>
          </div>

          <div className="profile-section">
            <h3>Skills</h3>
            <div className="tag-list">
              <span>Figma</span>
              <span>UI/UX</span>
              <span>Adobe Photoshop</span>
              <span>Branding</span>
            </div>
          </div>

          <div className="profile-section">
            <h3>Recent Reviews</h3>
            <div className="review-box">
              <p>“Very professional and responsive. Great work.”</p>
              <span>— John Client</span>
            </div>
            <div className="review-box">
              <p>“Fast delivery and excellent design quality.”</p>
              <span>— Anita Brand</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
