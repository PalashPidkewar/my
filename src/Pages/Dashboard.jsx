// // src/pages/Dashboard.jsx
// import Layout from '../components/Layout';
// import { useAuth } from '../content/AuthContext.jsx';
// import { Link } from 'react-router-dom';
// import EmpLoginUser from './EmpLoginUser.jsx';
// const Dashboard = () => {
//   const { user } = useAuth();

//   return (
//     <Layout>
//       <div>
//       <h1 className="text-3xl font-bold mb-4">Welcome, {user?.name}</h1>
//       <div>
//       <p className="text-lg">Role: {user?.role}</p>

//       <Link className="block hover:bg-gray-700 p-2 rounded" to="/emplogin">All Employer Login</Link>
//       </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;
// src/pages/Dashboard.jsx
// import { Link } from 'react-router-dom';
// import { useAuth } from '../content/AuthContext.jsx';
// import Layout from '../components/Layout';

// const Dashboard = () => {
//   const { user } = useAuth();

//   return (
//     <Layout>
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
//             Welcome, {user?.name || 'Guest'}
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* User Info */}
//             <div className="bg-gray-50 p-4 rounded-lg border flex justify-between items-start">
//               {/* Left Side - User Info */}
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">User Information</h2>
//                 <p><span className="font-medium">Name:</span> {user?.name}</p>
//                 <p><span className="font-medium">Role:</span> {user?.role}</p>
//               </div>

//               {/* Right Side - Reset Password Link */}
//               <div>
//                 <Link
//                   to="/reset-password"
//                   className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded font-medium"
//                 >
//                   Reset Password
//                 </Link>
//               </div>
              
//             </div>


//             {/* Navigation Links */}
//             <div className="bg-gray-50 p-4 rounded-lg border">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2 flex justify-center">Quick Actions</h2>
//               <ul className="space-y-2">
//                 {user?.role === 'admin' && (
//                   <li>
//                     <Link
//                       to="/emplogin"
//                       className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition flex justify-center"
//                     >
//                       View All Employee Logins
//                     </Link>
//                   </li>
//                 )}

//                 {/* Add more links as needed */}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;

import { Link } from 'react-router-dom';
import { useAuth } from '../content/AuthContext.jsx';
import Layout from '../components/Layout';
import {
  UserCircle,
  Lock,
  Users,
  LayoutDashboard
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-3">
            <LayoutDashboard className="w-7 h-7 text-blue-500" />
            Welcome, {user?.name || 'Guest'}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User Info Card */}
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-gray-600" />
                User Information
              </h2>
              <div className="text-gray-700 space-y-1">
                <p><span className="font-medium">Name:</span> {user?.name}</p>
                <p><span className="font-medium">Role:</span> {user?.role}</p>
              </div>
              <div className="mt-6">
                <Link
                  to="/reset-password"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
                >
                  <Lock className="w-4 h-4" />
                  Reset Password
                </Link>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2 justify-center">
                Quick Actions
              </h2>
              <ul className="space-y-3">
                {user?.role === 'admin' && (
                  <li>
                    <Link
                      to="/emplogin"
                      className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                      <Users className="w-5 h-5" />
                      View All Employee Logins
                    </Link>
                  </li>
                )}

                {/* Add more action links here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
