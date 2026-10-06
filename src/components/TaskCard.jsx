const TaskCard = ({ title, price, category, timeLeft, description, company }) => {
  return (
    <div className="task-card">
      <div className="task-top">
        <span className="badge">{category}</span>
        <span className="time-left">{timeLeft}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="task-meta">
        <span>💰 ${price}</span>
        <span>{company}</span>
      </div>

      <div className="task-footer">
        <span className="rating">⭐ 4.8</span>
        <button className="btn btn-primary small">Apply</button>
      </div>
    </div>
  );
};

export default TaskCard;
