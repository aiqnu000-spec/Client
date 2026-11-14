import UserForm from '../components/UserForm'
import UserTable from '../components/UserTable'

function UsersPage(props) {
  return (
    <div>
      <UserForm onAdd={props.onAdd} />
      <UserTable users={props.users} onDelete={props.onDelete} />
    </div>
  )
}

export default UsersPage