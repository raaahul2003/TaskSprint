import { useState } from 'react';
import Navbar from '../components/Navbar';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'application',
      title: 'New Application',
      message: 'Sarah Johnson applied for your Logo Design task',
      timestamp: '2 hours ago',
      read: false,
      icon: '📝'
    },
    {
      id: 2,
      type: 'approved',
      title: 'Task Approved',
      message: 'Your Social Media Captions submission was approved by BrandWave',
      timestamp: '1 day ago',
      read: false,
      icon: '✅'
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message',
      message: 'StartupX sent you a message about the Logo Design task',
      timestamp: '2 days ago',
      read: true,
      icon: '💬'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Received',
      message: 'You received $75 payment for Data Entry Work task',
      timestamp: '3 days ago',
      read: true,
      icon: '💰'
    },
    {
      id: 5,
      type: 'deadline',
      title: 'Deadline Reminder',
      message: 'Website Copy Writing task deadline is in 2 days',
      timestamp: '4 days ago',
      read: true,
      icon: '⏰'
    },
    {
      id: 6,
      type: 'review',
      title: 'New Review',
      message: 'Client left a 5-star review for your Logo Design work',
      timestamp: '1 week ago',
      read: true,
      icon: '⭐'
    }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    alert('✅ All notifications marked as read');
  };

  const handleDelete = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all notifications?')) {
      setNotifications([]);
      alert('✅ All notifications cleared');
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const notificationsByDate = {
    today: notifications.filter(n => n.timestamp.includes('hours ago') || n.timestamp.includes('ago' && !n.timestamp.includes('day'))),
    thisWeek: notifications.filter(n => n.timestamp.includes('day') || n.timestamp.includes('week')),
    older: notifications.filter(n => n.timestamp.includes('week'))
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1">Notifications</h1>
              <p className="text-slate-600">
                {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
              </p>
            </div>
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <button onClick={handleMarkAllAsRead} className="btn btn-secondary text-sm">
                  Mark all as read
                </button>
              )}
              {notifications.length > 0 && (
                <button onClick={handleClearAll} className="btn btn-secondary text-sm">
                  Clear all
                </button>
              )}
            </div>
          </div>

          {notifications.length === 0 ? (
            <div className="card p-12 text-center">
              <p className="text-6xl mb-4">🔔</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No notifications</h3>
              <p className="text-slate-600">You're all caught up! Come back later for updates.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {notifications.map(notif => (
                <div
                  key={notif.id}
                  className={`card p-4 cursor-pointer transition ${
                    notif.read ? 'bg-white' : 'bg-blue-50 border-l-4 border-primary'
                  } hover:shadow-md`}
                  onClick={() => handleMarkAsRead(notif.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0">{notif.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className={`font-bold ${
                            notif.read ? 'text-slate-900' : 'text-slate-900 font-extrabold'
                          }`}>
                            {notif.title}
                          </h3>
                          <p className="text-slate-600 text-sm mt-1">{notif.message}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-slate-500">{notif.timestamp}</p>
                        <div className="flex gap-2">
                          {!notif.read && (
                            <span className="inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-bold text-white">
                              New
                            </span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(notif.id);
                            }}
                            className="text-slate-400 hover:text-danger text-sm font-bold"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
