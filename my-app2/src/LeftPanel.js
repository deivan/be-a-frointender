import { useQuery } from '@tanstack/react-query';

const API_USER = 'https://jsonplaceholder.typicode.com/users';

function LeftPanel() {

    const data = useQuery({
        queryFn: () =>
            fetch(API_USER).then(
                (res) => res.json()
            ),
        queryKey: ['users'],
    });
    let users = data.data;
    return (
        <div>
          {users.map((user) => (
            <p key={user.id} className="users">
              <strong>{user.name}</strong>, email: <em>{user.email}</em>
              <br></br>
              <button>Get User Info</button>
            </p>
          ))}
        </div>
      );
}

export default LeftPanel;