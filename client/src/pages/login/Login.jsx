/* eslint-disable react/no-unescaped-entities */
// import React, { useState } from "react";
// import "./Login.scss";
// import newRequest from "../../utils/newRequest";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await newRequest.post("/auth/login", { username, password });
//       localStorage.setItem("currentUser", JSON.stringify(res.data));
//       navigate("/")
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleSubmit}>
//         <h1>Sign in</h1>
//         <label htmlFor="">Username</label>
//         <input
//           name="username"
//           type="text"
//           placeholder="Enter your username"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="">Password</label>
//         <input
//           name="password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         {error && error}
//       </form>
//     </div>
//   );
// }

// export default Login;

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.log(err.response.data, "hjkdfhkjhfg");
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}
export default Login;