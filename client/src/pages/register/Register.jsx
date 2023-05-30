// // import React, { useState } from "react";
// // import upload from "../../utils/upload";
// // import "./Register.scss";
// // import newRequest from "../../utils/newRequest";
// // import { useNavigate } from "react-router-dom";

// // function Register() {
// //   const [file, setFile] = useState(null);
// //   const [user, setUser] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     img: "",
// //     country: "",
// //     isSeller: false,
// //     desc: "",
// //     phone: ""
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     console.log(e.target.name,"event target")
// //     setUser((prev) => {
// //       console.log(e.target.name, "name")
// //         console.log(e.target.value,"value");
// //       return { ...prev, [e.target.name]: e.target.value };
// //     });
// //   };

// //   const handleSeller = (e) => {
// //     setUser((prev) => {
// //       return { ...prev, isSeller: e.target.checked };
// //     });
// //   };
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const url = await upload(file);
// //     try {
// //       await newRequest.post("/auth/register", {
// //         ...user,
// //         img: url,
// //       });
// //       navigate("/")
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };
// //   return (
// //     <div className="register">
// //       <form onSubmit={handleSubmit}>
// //         <div className="left">
// //           <h1>Create a new account</h1>
// //           <label htmlFor="">Username</label>
// //           <input
// //             name="username"
// //             type="text"
// //             placeholder="username"
// //             onChange={handleChange}
// //           />
// //           <label htmlFor="">Email</label>
// //           <input
// //             name="email"
// //             type="email"
// //             placeholder="email"
// //             onChange={handleChange}
// //           />
// //           <label htmlFor="">Password</label>
// //           <input name="password" type="password" onChange={handleChange} />
// //           <label htmlFor="">Profile Picture</label>
// //           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// //           <label htmlFor="">Country</label>
// //           <input
// //             name="country"
// //             type="text"
// //             placeholder="Usa"
// //             onChange={handleChange}
// //           />
// //           <button type="submit">Register</button>
// //         </div>
// //         <div className="right">
// //           <h1>I want to become a seller</h1>
// //           <div className="toggle">
// //             <label htmlFor="">Activate the seller account</label>
// //             <label className="switch">
// //               <input type="checkbox" onChange={handleSeller} />
// //               <span className="slider round"></span>
// //             </label>
// //           </div>
// //           <label htmlFor="">Phone Number</label>
// //           <input
// //             name="phone"
// //             type="text"
// //             placeholder="+1 234 567 89"
// //             onChange={handleChange}
// //           />
// //           <label htmlFor="">Description</label>
// //           <textarea
// //             placeholder="A short description of yourself"
// //             name="desc"
// //             id=""
// //             cols="30"
// //             rows="10"
// //             onChange={handleChange}
// //           ></textarea>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import upload from "../../utils/upload";
// import "./Register.scss";
// import newRequest from "../../utils/newRequest";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [file, setFile] = useState(null);
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     img: "",
//     country: "",
//     isSeller: false,
//     desc: "",
//     phone: ""
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSeller = (e) => {
//     const { checked } = e.target;
//     setUser((prevUser) => ({ ...prevUser, isSeller: checked }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url = await upload(file);
//     try {
//       await newRequest.post("/auth/register", {
//         ...user,
//         img: url,
//       });
//       navigate("/");
//     } catch (err) {
//       console.log(err,"err");
//     }
//   };

//   return (
//     <div className="register">
//       <form onSubmit={handleSubmit}>
//         <div className="left">
//           <h1>Create a new account</h1>
//           <label htmlFor="username">Username</label>
//           <input
//             name="username"
//             type="text"
//             placeholder="username"
//             value={user.username}
//             onChange={handleChange}
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             name="email"
//             type="email"
//             placeholder="email"
//             value={user.email}
//             onChange={handleChange}
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             name="password"
//             type="password"
//             value={user.password}
//             onChange={handleChange}
//           />
//           <label htmlFor="profilePicture">Profile Picture</label>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <label htmlFor="country">Country</label>
//           <input
//             name="country"
//             type="text"
//             placeholder="USA"
//             value={user.country}
//             onChange={handleChange}
//           />
//           <button type="submit">Register</button>
//         </div>
//         <div className="right">
//           <h1>I want to become a seller</h1>
//           <div className="toggle">
//             <label htmlFor="isSeller">Activate the seller account</label>
//             <label className="switch">
//               <input
//                 name="isSeller"
//                 type="checkbox"
//                 checked={user.isSeller}
//                 onChange={handleSeller}
//               />
//               <span className="slider round"></span>
//             </label>
//           </div>
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             name="phone"
//             type="text"
//             placeholder="+1 234 567 89"
//             value={user.phone}
//             onChange={handleChange}
//           />
//           <label htmlFor="desc">Description</label>
//           <textarea
//             placeholder="A short description of yourself"
//             name="desc"
//             id="desc"
//             cols="30"
//             rows="10"
//             value={user.desc}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSeller = (e) => {
    const { checked } = e.target;
    setUser((prevUser) => ({ ...prevUser, isSeller: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={user.username}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={user.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          />
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="country">Country</label>
          <input
            name="country"
            type="text"
            placeholder="INDIA"
            value={user.country}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="isSeller">Activate the seller account</label>
            <label className="switch">
              <input
                name="isSeller"
                type="checkbox"
                checked={user.isSeller}
                onChange={handleSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+91 "
            value={user.phone}
            onChange={handleChange}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            value={user.desc}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
