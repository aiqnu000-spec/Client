import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/LoginPage.css'

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID

export default function LoginPage() {
    const { loginWithGoogle, isAuthenticated } = useAuth()
    const navigate = useNavigate()
    const buttonRef = useRef(null)
    const [error, setError] = useState('')

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/', { replace: true })
        }
    }, [isAuthenticated, navigate])

    useEffect(() => {
        // Tải script Google Identity Services nếu chưa có
        if (!document.getElementById('google-identity-script')) {
            const script = document.createElement('script')
            script.src = 'https://accounts.google.com/gsi/client'
            script.id = 'google-identity-script'
            script.async = true
            script.defer = true
            script.onload = renderGoogleButton
            document.body.appendChild(script)
        } else {
            renderGoogleButton()
        }
    }, [])

    function renderGoogleButton() {
        if (!window.google || !buttonRef.current) return

        window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleResponse,
        })

        window.google.accounts.id.renderButton(buttonRef.current, {
            theme: 'outline',
            size: 'large',
            width: 320,
            text: 'signin_with',
        })
    }

    async function handleGoogleResponse(response) {
        setError('')
        try {
            await loginWithGoogle(response.credential)
            navigate('/', { replace: true })
        } catch (err) {
            setError(err.message || 'Đăng nhập thất bại, thử lại nhé.')
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>My Dashboard</h1>
                <p className="login-subtitle">Đăng nhập để tiếp tục</p>

                <div className="google-button-wrapper" ref={buttonRef}></div>

                {!GOOGLE_CLIENT_ID && (
                    <p className="login-error">
                        Chưa cấu hình VITE_GOOGLE_CLIENT_ID trong file .env của frontend.
                    </p>
                )}

                {error && <p className="login-error">{error}</p>}
            </div>
        </div>
    )
}
