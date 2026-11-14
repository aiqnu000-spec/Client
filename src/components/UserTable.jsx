import './css/UserTable.css'

function UserTable(props) {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Email</th>
                    <th>Vai trò</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button onClick={() => props.onDelete(user.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable