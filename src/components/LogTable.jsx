import Actions from "./ActionIcons";

const LogTable = ({ passwordArray = [], onEditItem, onDeleteItem }) => {
  return (
    <div className="passwords container mx-auto flex flex-col justify-center w-5xl max-w-full px-4 pb-24">
      <h1 className="text-center pt-5 pb-2 text-3xl font-bold">
        Your Passwords
      </h1>

      {passwordArray.length === 0 && (
        <div className="text-center text-xl">No passwords to show</div>
      )}

      {passwordArray.length != 0 && (
        <div className="w-full overflow-x-auto rounded-xl">
          <table className="table-auto w-full min-w-max overflow-hidden rounded-xl">
            <thead className="bg-green-300">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-green-100">
              {passwordArray.map((item) => (
                <tr key={item.id} className="border border-white">
                  <td className="text-center min-w-52 py-3">{item.site}</td>
                  <td className="text-center min-w-52 py-3">{item.username}</td>
                  <td className="text-center min-w-52 py-3">••••••••</td>

                  <td className="text-center min-w-52 py-3">
                    <div className="flex justify-center items-center">
                      <Actions
                        onEdit={() => onEditItem(item.id)}
                        onDelete={() => onDeleteItem(item.id)}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LogTable;
