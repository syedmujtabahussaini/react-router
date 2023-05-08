import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navi = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navi("/users", { state: { name: "mujtaba" } })}>
        Users Page
      </button>
      <Link to={"/users"}>User Page</Link>
    </>
  );
}

export default Home;
