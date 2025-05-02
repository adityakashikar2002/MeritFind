const StatsCard = ({ title, value, icon, color = 'primary' }) => {
    const colorClasses = {
      primary: 'bg-indigo-100 text-indigo-800',
      secondary: 'bg-green-100 text-green-800',
      danger: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-blue-100 text-blue-800'
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color]}`}>
            <span className="text-xl">{icon}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsCard;