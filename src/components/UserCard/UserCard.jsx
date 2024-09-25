import './UserCard.css';
export function UserCard(props) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <h1 className="card-title">User</h1>
        <p className="text">Username: {props.name}</p>
        <p className="text">Age: {props.age}</p>
      </div>
    </div>
  );
}
