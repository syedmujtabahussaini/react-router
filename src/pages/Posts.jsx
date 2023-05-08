import { useLocation } from "react-router-dom";

function Posts() {
const location = useLocation()
 console.log(location)
    return (
    <>
      <h1>Post Page</h1>
    </>
  );
}

export default Posts;
