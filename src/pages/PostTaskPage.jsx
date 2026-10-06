const PostTaskPage = () => {
  return (
    <div className="container page-content">
      <div className="form-page-card">
        <h2>Post a New Task</h2>
        <p>Describe your requirement and hire the right freelancer.</p>

        <form className="task-form">
          <div className="form-group">
            <label>Task Title</label>
            <input type="text" placeholder="Example: Design social media poster" />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Design</option>
              <option>Writing</option>
              <option>Video</option>
              <option>Development</option>
              <option>Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea rows="5" placeholder="Detailed task explanation..." />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Budget</label>
              <input type="number" placeholder="Enter amount" />
            </div>

            <div className="form-group">
              <label>Deadline</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group">
            <label>Skills Required</label>
            <input type="text" placeholder="Figma, Adobe, Copywriting" />
          </div>

          <button className="btn btn-primary full-width">Publish Task</button>
        </form>
      </div>
    </div>
  );
};

export default PostTaskPage;
