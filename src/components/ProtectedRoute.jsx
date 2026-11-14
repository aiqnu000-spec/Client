import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// adminOnly: nếu true, chỉ role admin mới vào được, còn lại đá về trang chủ
export default function ProtectedRoute({ children, adminOnly = false }) {
    const { isAuthenticated, isAdmin, loading } = useAuth()

    if (loading) {
        return <div className="auth-loading">Đang kiểm tra đăng nhập...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    if (adminOnly && !isAdmin) {
        return <Navigate to="/" replace />
    }

    return children
}
