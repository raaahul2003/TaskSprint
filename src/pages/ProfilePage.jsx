import { useState } from 'react';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Developer',
    email: 'john@example.com',
    role: 'Freelancer',
    bio: 'Experienced designer and developer with 5+ years in the industry',
    location: 'San Francisco, CA',
    hourlyRate: 50,
    skills: ['React', 'UI Design', 'Web Development', 'Figma'],
    avatar: 'JD'
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(formData);
    setEditing(false);
    alert('✅ Profile updated successfully!');
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card p-6 text-center sticky top-20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                {profile.avatar}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">{profile.name}</h2>
              <p className="text-sm text-slate-600 mb-2">{profile.role}</p>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 mb-4">
                ✓ Verified
              </div>
              <div className="space-y-2 text-sm text-slate-600 border-t border-slate-200 pt-4 mt-4">
                <p>📍 {profile.location}</p>
                <p>💰 ${profile.hourlyRate}/hr</p>
                <p>⭐ 4.8 (24 reviews)</p>
              </div>
              <button
                onClick={() => setEditing(!editing)}
                className="btn btn-primary w-full mt-6"
              >
                {editing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            {!editing ? (
              <>
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">About</h3>
                  <p className="text-slate-700 leading-7">{profile.bio}</p>
                </div>

                {/* Skills */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, idx) => (
                      <span key={idx} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="card p-4 text-center">
                    <p className="text-2xl font-bold text-primary mb-1">15</p>
                    <p className="text-sm text-slate-600">Tasks Completed</p>
                  </div>
                  <div className="card p-4 text-center">
                    <p className="text-2xl font-bold text-success mb-1">$3,200</p>
                    <p className="text-sm text-slate-600">Total Earned</p>
                  </div>
                  <div className="card p-4 text-center">
                    <p className="text-2xl font-bold text-warning mb-1">4.8⭐</p>
                    <p className="text-sm text-slate-600">Average Rating</p>
                  </div>
                </div>
              </>
            ) : (
              /* Edit Form */
              <div className="card p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Edit Profile</h3>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Bio</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Hourly Rate ($)</label>
                    <input
                      type="number"
                      name="hourlyRate"
                      value={formData.hourlyRate}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Save Changes
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
