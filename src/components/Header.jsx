import {
    CalendarDays, Bell,
    Moon,
    Sun,
} from 'lucide-react'

import { useState, useEffect } from 'react'

import './css/Header.css'

export default function Header() {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) return saved === 'dark'
        return document.documentElement.classList.contains('dark')
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [])

    const today = new Date()
    const weekdays = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
    const weekday = weekdays[today.getDay()]
    const date = today.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    const toggleDarkMode = () => {

        const newMode = !darkMode

        setDarkMode(newMode)

        document.documentElement.classList.toggle('dark', newMode)
        localStorage.setItem('theme', newMode ? 'dark' : 'light')
    }

    return (
        <header className="top-header">

            {/* LEFT */}
            <div className="header-left">

                <h1>
                    Dashboard
                </h1>

            </div>


            {/* RIGHT */}
            <div className="header-right">

                {/* DATE */}
                <div className="header-date">

                    <CalendarDays size={17} />

                    <span>
                        {weekday}, {date}
                    </span>

                </div>


                {/* DARK MODE */}
                <button
                    className="header-icon-button"
                    onClick={toggleDarkMode}
                    title={
                        darkMode
                            ? "Chế độ sáng"
                            : "Chế độ tối"
                    }
                >

                    {darkMode
                        ? <Sun size={19} />
                        : <Moon size={19} />
                    }

                </button>
                <button className="header-icon-button"
                    onClick={toggleDarkMode}
                    title="Thông báo"
                >
                    <Bell size={20} />
                </button>

            </div>

        </header>
    )
}