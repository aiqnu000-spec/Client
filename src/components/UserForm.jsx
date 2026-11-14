import { useState } from 'react'
import './css/UserForm.css'

function UserFrom(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState ("User")
    
    function handleSubmit(e) {
        e.preventDefault() // Chặn

        if (name === "" || email === "") {
            alert("Vui lòng nhập đủ tên và email")
            return
        }

        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            role: role,
        }

        props.onAdd(newUser)

        setName("")
        setEmail("")
        setRole("User")
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Họ tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
            <button type="submit">Thêm người dùng</button>
        </form>
    )
}

export default UserFrom