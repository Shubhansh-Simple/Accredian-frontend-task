/*
 * For just practicing the react component
 */

// Local
import users from '../sampleUsers';

const PracticeScreen = () => {

  const ListUser = users.map( user => 
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
    </tr>
  );

  return (
    <>
      {/* In order to run a logic in UI */}
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        {ListUser}
      </table>
    </>
  );
};

export default PracticeScreen;

