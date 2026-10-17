const LogTable = ({passwordArray = []}) => {

  return (
    <div className="passwords container mx-auto flex flex-col justify-center w-5xl">
      <h1 className="text-center pt-5 pb-2 text-3xl font-bold">Your Passwords</h1>

    {passwordArray.length === 0 && <div className="text-center text-xl">No passwords to show</div>}
    {passwordArray.length != 0 && 
      <table className="table-auto rounded-xl overflow-hidden">
        <thead className="bg-green-300">
          <tr>
            <th className="py-2">Site</th>
            <th className="py-2">Username</th>
            <th className="py-2">Password</th>
          </tr>
        </thead>

        <tbody className="bg-green-100">
        {passwordArray.map( (item, index) => (
          <tr key={index} className="border border-white">
            <td className="text-center min-w-52 py-3">{item.site}</td>
            <td className="text-center min-w-52 py-3">{item.username}</td>
            <td className="text-center min-w-52 py-3">••••••••</td>
          </tr>))}
        </tbody>
        
      </table>}
    </div>
  );
};

export default LogTable;
