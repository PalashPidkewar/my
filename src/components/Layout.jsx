// // src/components/Layout.jsx
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../content/AuthContext.jsx';

// const Layout = ({ children }) => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
//         <h2 className="text-xl font-bold mb-6">GFRP Dashboard</h2>
//         <nav className="space-y-2">
//           <Link className="block hover:bg-gray-700 p-2 rounded" to="/dashboard">Home</Link>

//           {/* Admin only links */}
//           {user?.role === 'admin' && (
//             <>
//               <Link className="block hover:bg-gray-700 p-2 rounded" to="/production">Production</Link>
//               <Link className="block hover:bg-gray-700 p-2 rounded" to="/inventory">Inventory</Link>
//               <Link className="block hover:bg-gray-700 p-2 rounded" to="/truck">Truck Dispatch</Link>
//             </>
//           )}

//           {/* Employee can only view */}
//           {user?.role === 'employee' && (
//             <>
//               <Link className="block hover:bg-gray-700 p-2 rounded" to="/production">View Production</Link>
//               <Link className="block hover:bg-gray-700 p-2 rounded" to="/inventory">View Inventory</Link>
//               <Link className="block hover:bg-gray-700 p-2 rounded" to="/truck">Truck Details</Link>
//             </>
//           )}
//         </nav>

//         <button
//           onClick={handleLogout}
//           className="w-full bg-red-500 hover:bg-red-600 py-2 rounded mt-6"
//         >
//           Logout
//         </button>
//         <Link
//           to="/reset-password"
//           className="block text-center w-full bg-blue-500 hover:bg-green-600 text-white py-2 rounded mt-6"
//         >
//           Reset Password
//         </Link>


//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">{children}</main>
//     </div>
//   );
// };

// export default Layout;
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../content/AuthContext.jsx';
import {Home, Package, Truck, Warehouse, LogOut, KeyRound} from 'lucide-react';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white flex flex-col p-6 shadow-xl">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">GFRP Rebar</h1>
          <p className="text-sm text-gray-400 mt-1 capitalize">Role: {user?.role}</p>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <Link to="/dashboard" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
            <Home className="w-5 h-5" /> Home
          </Link>

          {user?.role === 'admin' && (
            <>
              <Link to="/production" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
                <Package className="w-5 h-5" /> Production
              </Link>
              <Link to="/inventory" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
                <Warehouse className="w-5 h-5" /> Inventory
              </Link>
              <Link to="/truck" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
                <Truck className="w-5 h-5" /> Truck Dispatch
              </Link>
            </>
          )}

          {user?.role === 'employee' && (
            <>
              <Link to="/production" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
                <Package className="w-5 h-5" /> View Production
              </Link>
              <Link to="/inventory" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
                <Warehouse className="w-5 h-5" /> View Inventory
              </Link>
              <Link to="/truck" className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded-lg transition">
                <Truck className="w-5 h-5" /> Truck Details
              </Link>
            </>
          )}
        </nav>

        <div className="space-y-2 mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-2 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
          <Link
            to="/reset-password"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-green-600 py-2 rounded-lg transition"
          >
            <KeyRound className="w-5 h-5" /> Reset Password
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;
