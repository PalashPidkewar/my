// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Update to useNavigate
// // import API from '../api/api.js'; // Import the custom API instance

// // const RegisterPage = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'employee', // Default to employee role
// //   });

// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate(); // useNavigate instead of useHistory

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     try {
// //       const response = await API.post('/user/register', formData); // Use custom API instance here
// //       if (response.status === 201) {
// //         navigate('/login'); // use navigate to redirect after successful registration
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Something went wrong');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
// //         <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>

// //         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="name" className="block text-gray-700">Name</label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               required
// //             />
// //           </div>

// //           <div className="mb-6">
// //             <label htmlFor="role" className="block text-gray-700">Role</label>
// //             <select
// //               id="role"
// //               name="role"
// //               value={formData.role}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             >
// //               <option value="employee">Employee</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </div>

// //           <div className="mb-4">
// //             <button
// //               type="submit"
// //               className={`w-full py-2 bg-blue-600 text-white rounded-md ${loading ? 'opacity-50' : ''}`}
// //               disabled={loading}
// //             >
// //               {loading ? 'Registering...' : 'Register'}
// //             </button>
// //           </div>
// //         </form>

// //         <p className="text-center">
// //           Already have an account?{' '}
// //           <a href="/login" className="text-blue-600">Login here</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // Update to useNavigate
// import API from "../api/api.js"; // Import the custom API instance

// const RegisterPage = () => {
//   const [role, setRole] = useState("admin");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     photo: null,
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // useNavigate instead of useHistory

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await API.post("/user/register", formData); // Use custom API instance here
//       if (response.status === 201) {
//         navigate("/login"); // use navigate to redirect after successful registration
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
//           Create Your Account
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           <div>
//             <label className="block mb-1 text-sm font-semibold">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               value={formData.name}
//               className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="John Doe"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-semibold">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               value={formData.email}
//               className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="john@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-semibold">Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               value={formData.password}
//               className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="••••••••"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-semibold">Select Role</label>
//             <select
//               name="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="admin">Admin</option>
//               <option value="employee">Employee</option>
//             </select>
//           </div>

//           {role === "employee" && (
//             <div>
//               <label className="block mb-1 text-sm font-semibold">Upload Photo</label>
//               <input
//                 type="file"
//                 name="photo"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-xl"
//               />
//             </div>
//           )}

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? "Registering..." : "Register"}
//           </motion.button>
//         </form>

//         <p className="text-center">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600">Login here</a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../api/api.js";

const RegisterPage = () => {
  const [role, setRole] = useState("admin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("role", role);
      if (role === "employee" && formData.photo) {
        data.append("photo", formData.photo);
      }

      const response = await API.post("/user/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Create Your Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-5" onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label className="block mb-1 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Select Role</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          {role === "employee" && (
            <div>
              <label className="block mb-1 text-sm font-semibold">Upload Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-xl"
              />
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">Login here</a>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
