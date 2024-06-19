import UserList from "../components/UsersList.tsx"

const Users = () => {
  const USERS = [{ id: 'u1', name: 'dwi dharma', image: 'https://picsum.photos/200/300', placse: 3 }]

  return <UserList items={USERS} />
}

export default Users