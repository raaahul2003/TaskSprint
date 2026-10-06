import Navbar from '../components/Navbar';

const NotificationsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container page-content">
        <div className="notification-panel">
          <h2>Notifications</h2>

          <div className="notify-item">
            <strong>New application received</strong>
            <p>Someone applied for your Logo Design task.</p>
            <span>2 hours ago</span>
          </div>

          <div className="notify-item">
            <strong>Submission approved</strong>
            <p>Your Social Media Captions task was approved by the client.</p>
            <span>1 day ago</span>
          </div>

          <div className="notify-item">
            <strong>Payment released</strong>
            <p>$50 has been released for your completed task.</p>
            <span>2 days ago</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
