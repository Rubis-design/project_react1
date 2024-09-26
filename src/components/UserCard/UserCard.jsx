import './UserCard.css';
export function UserCard({ name, age }) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <h1 className="card-title">User</h1>
        <p className="text">Username: {name}</p>
        <p className="text">Age: {age}</p>
      </div>
    </div>
  );
}
