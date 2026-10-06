import { useState } from 'react';
import Navbar from '../components/Navbar';

const TaskDetailsPage = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [bid, setBid] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const task = {
    id: 1,
    title: 'Logo Design for Startup',
    price: 50,
    category: 'Design',
    status: 'Open',
    description: 'Need a modern and minimal logo for a startup website and brand identity. The logo should be versatile enough to work on business cards, websites, and social media platforms.',
    fullDescription: 'We are looking for a talented logo designer to create a unique and professional logo for our new tech startup. The logo should reflect our innovation-driven culture and be suitable for various mediums. We prefer modern, minimalist designs but are open to creative suggestions.',
    requirements: [
      'Must have experience with design tools (Figma, Adobe Creative Suite)',
      'Portfolio with previous logo designs required',
      'Ability to provide multiple design variations',
      'Editable vector files (AI, EPS, SVG formats)',
      'Unlimited revisions until satisfaction'
    ],
    timeline: '5-7 days',
    proposalDeadline: 'Oct 12, 2026',
    client: {
      name: 'StartupX',
      rating: 4.8,
      reviews: 12,
      totalSpent: '$2,500',
      memberSince: 'Jan 2025'
    },
    applicants: 8,
    skills: ['Figma', 'Adobe XD', 'Brand Identity', 'UI Design']
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (bid && coverLetter) {
      alert(`✅ Application submitted!\n\nBid: $${bid}\nCover Letter: ${coverLetter.substring(0, 50)}...\n\nThe client will review your application within 24 hours.`);
      setBid('');
      setCoverLetter('');
      setShowApplyModal(false);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <button onClick={() => window.history.back()} className="mb-6 text-primary font-bold hover:underline">
          ← Back
        </button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">{task.title}</h1>
                  <div className="flex gap-3 flex-wrap">
                    <span className="badge">{task.category}</span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      {task.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary mb-1">💰 ${task.price}</div>
                  <p className="text-sm text-slate-600">Fixed Price</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About this task</h2>
              <p className="text-slate-700 leading-7 mb-4">{task.description}</p>
              <p className="text-slate-700 leading-7">{task.fullDescription}</p>
            </div>

            {/* Requirements */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {task.requirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700">
                    <span className="text-primary font-bold">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                {task.skills.map((skill, idx) => (
                  <span key={idx} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="card p-6 sticky top-20">
              <h3 className="font-bold text-slate-900 mb-4">Timeline</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-600">Project Duration</p>
                  <p className="font-bold text-slate-900">{task.timeline}</p>
                </div>
                <div>
                  <p className="text-slate-600">Proposal Deadline</p>
                  <p className="font-bold text-slate-900">{task.proposalDeadline}</p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-slate-600">Applicants</p>
                  <p className="font-bold text-slate-900">{task.applicants} freelancers applied</p>
                </div>
              </div>
              <button
                onClick={() => setShowApplyModal(true)}
                className="btn btn-primary w-full mt-6"
              >
                Apply Now
              </button>
            </div>

            {/* Client Info */}
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-4">About Client</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{task.client.name}</p>
                    <p className="text-sm text-slate-600">Member since {task.client.memberSince}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-slate-600">Rating</p>
                    <p className="font-bold">⭐ {task.client.rating}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-slate-600">Spent</p>
                    <p className="font-bold">{task.client.totalSpent}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600">{task.client.reviews} reviews • Verified Payment Method</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="card max-w-md w-full p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">Submit Your Proposal</h3>
            <p className="mb-4 text-sm text-slate-600">{task.title}</p>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Your Bid ($)</label>
                <input
                  type="number"
                  value={bid}
                  onChange={(e) => setBid(e.target.value)}
                  placeholder="Enter your bid amount"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  min="1"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Cover Letter</label>
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Tell the client why you're the best fit for this task..."
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                💡 Tip: Include relevant experience and why you're qualified
              </div>

              <div className="flex gap-3">
                <button type="submit" className="btn btn-primary flex-1">
                  Submit Proposal
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplyModal(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskDetailsPage;
