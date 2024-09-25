export function UserCard(props) {
  return (
    <div className="card-wrapper">
      <h1 className="card-title">User</h1>
      <p>Username: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
