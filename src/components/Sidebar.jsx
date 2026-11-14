import {
    LayoutDashboard, Bot,
    BarChart3,
    Users,
    Settings,
    LogOut
} from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/Sidebar.css'

export default function Sidebar() {

    const navigate = useNavigate()
    const { user, isAdmin, logout } = useAuth()
 
    //Calendar (Day, Month, Year)
    const today = new Date()

    const date = today.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
    // LogOut
    const handleLogout = async () => {
        // Xóa thông tin đăng nhập nếu có
        await logout()

        // Chuyển về trang đăng nhập
        navigate('/login')
    }

    return (
        <aside className="sidebar">
            <div className = "sidebar-logo">
                <h2>My Dashboard</h2>
            </div>

            <div className="sidebar-label">
                MENU
            </div>

            <nav className="sidebar-menu">
                <NavLink to='/' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                    <LayoutDashboard size={18}/>
                    <span>Trang chủ</span>
                </NavLink>

                <NavLink to='/qnu' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                    <Bot size={18}/>
                    <span>QNU AI</span>
                </NavLink>

                <NavLink to='/stats' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                    <BarChart3 size={18}/>
                    <span>Thống kê</span>
                </NavLink>

                {isAdmin && (
                    <NavLink to='/users' className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>
                        <Users size={18}/>
                        <span>Quản lý user</span>
                    </NavLink>
                )}

                <NavLink to='/settings' className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>
                    <Settings size={18} />
                    <span>Cài đặt</span>
                </NavLink>
            </nav>

            <div className="sidebar-bottom">
                <div className="user-profile">
                    {user?.avatarUrl ? (
                        <img className="user-avatar" src={user.avatarUrl} alt="" />
                    ) : (
                        <div className="user-avatar">{user?.name?.[0] || '?'}</div>
                    )}
                    <div>
                        <strong>{user?.name || 'Người dùng'}</strong>
                        <span>{isAdmin ? 'Quản trị viên' : 'Người dùng'}</span>
                    </div>
                    <button 
                        className="logout-button" 
                        onClick={handleLogout}
                        title="Đăng xuất">
                        <LogOut size={17} />
                    </button>
                </div>
            </div>
        </aside>
    );
}