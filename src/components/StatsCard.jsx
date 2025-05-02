// const StatsCard = ({ title, value, icon, color = 'primary' }) => {
//     const colorClasses = {
//       primary: 'bg-indigo-100 text-indigo-800',
//       secondary: 'bg-green-100 text-green-800',
//       danger: 'bg-red-100 text-red-800',
//       warning: 'bg-yellow-100 text-yellow-800',
//       info: 'bg-blue-100 text-blue-800'
//     };
  
//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm font-medium text-gray-600">{title}</p>
//             <p className="text-3xl font-bold mt-1">{value}</p>
//           </div>
//           <div className={`p-3 rounded-full ${colorClasses[color]}`}>
//             <span className="text-xl">{icon}</span>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default StatsCard;




const StatsCard = ({ title, value, icon, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-indigo-200 text-indigo-700',
    secondary: 'bg-green-200 text-green-700',
    danger: 'bg-red-200 text-red-700',
    warning: 'bg-yellow-200 text-yellow-700',
    info: 'bg-blue-200 text-blue-700',
  };

  const iconBackgroundClasses = {
    primary: 'bg-indigo-400 text-white',
    secondary: 'bg-green-400 text-white',
    danger: 'bg-red-400 text-white',
    warning: 'bg-yellow-400 text-white',
    info: 'bg-blue-400 text-white',
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{title}</p>
          <p className="text-4xl font-bold mt-2 text-gray-800">{value}</p>
        </div>
        <div
          className={`p-4 rounded-full ${iconBackgroundClasses[color]} shadow-sm`}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;