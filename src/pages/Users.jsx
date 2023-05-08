import { useLocation } from "react-router-dom";

function Users() {
  const location = useLocation();
console.log(location)
  return (
    <>
      <h1>Users Page {location.state.name}</h1>
    </>
  );
}

export default Users;
