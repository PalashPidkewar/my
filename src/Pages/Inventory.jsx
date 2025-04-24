// // // src/pages/InventoryPage.jsx
// // import { useEffect, useState } from 'react';
// // import API from '../api/api.js'; // Import the API instance
// // import Layout from '../components/Layout';
// // import { useAuth } from '../content/AuthContext.jsx';

// // const InventoryPage = () => {
// //   const { user } = useAuth();
// //   const [items, setItems] = useState([]);
// //   const [formData, setFormData] = useState({
// //     type: '',
// //     itemName: '',
// //     quantity: '',
// //     unit: '',
// //     remarks: ''
// //   });

// //   const fetchInventory = async () => {
// //     try {
// //       const res = await API.get('/inventory/get'); // Use the API instance for the GET request
// //       setItems(res.data); // Set fetched data to the state
// //     } catch (err) {
// //       console.error('Error fetching inventory:', err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchInventory();
// //   }, []);

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await API.post('/inventory/add', formData); // Use the API instance for the POST request
// //       setFormData({
// //         type: '',
// //         itemName: '',
// //         quantity: '',
// //         unit: '',
// //         remarks: ''
// //       });
// //       fetchInventory(); // Fetch updated inventory after submitting the new item
// //     } catch (err) {
// //       console.error('Error adding item:', err);
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

// //       {user?.role === 'admin' && (
// //         <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-xl mb-10 space-y-4">
// //           <div>
// //             <label className="block font-semibold">Type</label>
// //             <select name="type" value={formData.type} onChange={handleChange} required className="w-full border rounded p-2">
// //               <option value="">Select Type</option>
// //               <option value="raw">Raw Material</option>
// //               <option value="finished">Finished Product</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block font-semibold">Item Name</label>
// //             <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required className="w-full border rounded p-2" />
// //           </div>

// //           <div>
// //             <label className="block font-semibold">Quantity</label>
// //             <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required className="w-full border rounded p-2" />
// //           </div>

// //           <div>
// //             <label className="block font-semibold">Unit</label>
// //             <select name="unit" value={formData.unit} onChange={handleChange} required className="w-full border rounded p-2">
// //               <option value="">Select Unit</option>
// //               <option value="kg">Kg</option>
// //               <option value="pieces">Pieces</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block font-semibold">Remarks</label>
// //             <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="w-full border rounded p-2" />
// //           </div>

// //           <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
// //             Add Inventory Item
// //           </button>
// //         </form>
// //       )}

// //       <div className="bg-white p-4 rounded shadow">
// //         <h2 className="text-xl font-semibold mb-2">Inventory List</h2>
// //         <table className="w-full table-auto border">
// //           <thead className='flex justify-center '>
// //             <tr className="bg-gray-100 ">
// //               <th className="p-2 border">Type</th>
// //               <th className="p-2 border">Item</th>
// //               <th className="p-2 border">Quantity</th>
// //               <th className="p-2 border">Unit</th>
// //               <th className="p-2 border">Date</th>
// //               <th className="p-2 border">Remarks</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {items.map((item, i) => (
// //               <tr key={i} className="border-t">
// //                 <td className="p-2 border capitalize">{item.type}</td>
// //                 <td className="p-2 border">{item.itemName}</td>
// //                 <td className="p-2 border">{item.quantity}</td>
// //                 <td className="p-2 border">{item.unit}</td>
// //                 <td className="p-2 border">{new Date(item.date).toLocaleDateString()}</td>
// //                 <td className="p-2 border">{item.remarks || '-'}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default InventoryPage;
// import { useEffect, useState } from 'react';
// import API from '../api/api.js';
// import Layout from '../components/Layout';
// import { useAuth } from '../content/AuthContext.jsx';

// const InventoryPage = () => {
//   const { user } = useAuth();
//   const [items, setItems] = useState([]);
//   const [formData, setFormData] = useState({
//     type: '',
//     itemName: '',
//     quantity: '',
//     unit: '',
//     remarks: ''
//   });

//   const fetchInventory = async () => {
//     try {
//       const res = await API.get('/inventory/get');
//       setItems(res.data);
//     } catch (err) {
//       console.error('Error fetching inventory:', err);
//     }
//   };

//   useEffect(() => {
//     fetchInventory();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/inventory/add', formData);
//       setFormData({
//         type: '',
//         itemName: '',
//         quantity: '',
//         unit: '',
//         remarks: ''
//       });
//       fetchInventory();
//     } catch (err) {
//       console.error('Error adding item:', err);
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-blue-700 mb-8">Inventory Management</h1>

//         {user?.role === 'admin' && (
//           <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-12 space-y-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block font-semibold text-gray-700 mb-1">Type</label>
//                 <select name="type" value={formData.type} onChange={handleChange} required className="w-full border rounded-lg p-2">
//                   <option value="">Select Type</option>
//                   <option value="raw">Raw Material</option>
//                   <option value="finished">Finished Product</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block font-semibold text-gray-700 mb-1">Item Name</label>
//                 <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required className="w-full border rounded-lg p-2" />
//               </div>

//               <div>
//                 <label className="block font-semibold text-gray-700 mb-1">Quantity</label>
//                 <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required className="w-full border rounded-lg p-2" />
//               </div>

//               <div>
//                 <label className="block font-semibold text-gray-700 mb-1">Unit</label>
//                 <select name="unit" value={formData.unit} onChange={handleChange} required className="w-full border rounded-lg p-2">
//                   <option value="">Select Unit</option>
//                   <option value="kg">Kg</option>
//                   <option value="pieces">Pieces</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block font-semibold text-gray-700 mb-1">Remarks</label>
//               <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="w-full border rounded-lg p-2 h-24" />
//             </div>

//             <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition">
//               Add Inventory Item
//             </button>
//           </form>
//         )}

//         <div className="bg-white rounded-xl shadow overflow-x-auto">
//           <h2 className="text-xl font-semibold text-gray-800 px-6 pt-6 mb-4">Inventory List</h2>
//           <table className="min-w-full text-sm text-left">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//               <th className="p-4 border">S.no</th>
//                 <th className="p-4 border">Type</th>
//                 <th className="p-4 border">Item</th>
//                 <th className="p-4 border">Quantity</th>
//                 <th className="p-4 border">Unit</th>
//                 <th className="p-4 border">Date</th>
//                 <th className="p-4 border">Remarks</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, i) => (
//                 <tr key={i} className={`border-t ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
//                         <td className="p-4 border capitalize">{i+1}</td>
//                   <td className="p-4 border capitalize">{item.type}</td>
//                   <td className="p-4 border">{item.itemName}</td>
//                   <td className="p-4 border">{item.quantity}</td>
//                   <td className="p-4 border">{item.unit}</td>
//                   <td className="p-4 border">{new Date(item.date).toLocaleDateString()}</td>
//                   <td className="p-4 border">{item.remarks || '-'}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default InventoryPage;
import { useEffect, useState } from 'react';
import API from '../api/api.js';
import Layout from '../components/Layout';
import { useAuth } from '../content/AuthContext.jsx';

const InventoryPage = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    type: '',
    itemName: '',
    quantity: '',
    unit: '',
    remarks: ''
  });

  const [filter, setFilter] = useState({
    startDate: '',
    endDate: ''
  });

  const fetchInventory = async (startDate, endDate) => {
    try {
      let url = '/inventory/get';
      if (startDate && endDate) {
        url += `?startDate=${startDate}&endDate=${endDate}`;
      }

      const res = await API.get(url);
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching inventory:', err);
    }
  };

  useEffect(() => {
    fetchInventory(); // fetch all initially
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/inventory/add', formData);
      setFormData({ type: '', itemName: '', quantity: '', unit: '', remarks: '' });
      fetchInventory(); // refresh list
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const handleFilterChange = (e) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchInventory(filter.startDate, filter.endDate);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

        {/* Filter Form */}


        {/* Admin Form */}
        {user?.role === 'admin' && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-10 space-y-4">
            <form onSubmit={handleFilterSubmit} className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={filter.startDate}
                  onChange={handleFilterChange}
                  className="border rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={filter.endDate}
                  onChange={handleFilterChange}
                  className="border rounded p-2"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded mt-4 md:mt-6"
              >
                Filter
              </button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Type</label>
                <select name="type" value={formData.type} onChange={handleChange} required className="w-full border rounded p-2">
                  <option value="">Select Type</option>
                  <option value="raw">Raw Material</option>
                  <option value="finished">Finished Product</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold">Item Name</label>
                <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block font-semibold">Quantity</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block font-semibold">Unit</label>
                <select name="unit" value={formData.unit} onChange={handleChange} required className="w-full border rounded p-2">
                  <option value="">Select Unit</option>
                  <option value="kg">Kg</option>
                  <option value="pieces">Pieces</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold">Remarks</label>
                <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="w-full border rounded p-2" />
              </div>
            </div>

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add Inventory Item
            </button>
          </form>
        )}

        {/* Inventory Table */}
        <div className="bg-white p-4 rounded shadow overflow-auto">
          <h2 className="text-xl font-semibold mb-2">Inventory List</h2>
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Unit</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2 border capitalize">{item.type}</td>
                  <td className="p-2 border">{item.itemName}</td>
                  <td className="p-2 border">{item.quantity}</td>
                  <td className="p-2 border">{item.unit}</td>
                  <td className="p-2 border">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="p-2 border">{item.remarks || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default InventoryPage;

