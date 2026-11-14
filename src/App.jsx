import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'



import Layout from './components/Layout'

import Header from './components/Header'
import RevenueChart from './components/RevenueChart'
import ProtectedRoute from './components/ProtectedRoute'

import HomePage from './pages/HomePage'
import AI from './pages/AiPage'
import UsersPage from './pages/UserPage'
import StatsPage from './pages/StatsPage'
import SettingsPage from './pages/SettingPage'
import LoginPage from './pages/LoginPage'


const revenueData = [
  { month: "T1", revenue: 400000},
  { month: "T2", revenue: 5200000 },
  { month: "T3", revenue: 3800000 },
  { month: "T4", revenue: 6100000 },
  { month: "T5", revenue: 7300000 },
  { month: "T6", revenue: 8500000 },
]

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", role: "Admin" },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "User" },
    { id: 3, name: "Lê Văn C", email: "c@gmail.com", role: "User" },
  ])

  function handleDelete(id) {
    setUsers(users.filter((user) => user.id !== id))
  }

  function handleAdd(newUser) {
    setUsers([...users, newUser])
  }

  return (
    <Routes>

        {/* LOGIN */}
        <Route
            path="/login"
            element={<LoginPage />}
        />

        {/* LAYOUT CHÍNH */}
        <Route
            element={
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            }
        >

            {/* Trang chủ */}
            <Route
                path="/"
                element={
                    <HomePage
                        users={users}
                        revenueData={revenueData}
                    />
                }
            />

            <Route
                path="/qnu"
                element={
                    <AI/>
                }
            />

            {/* Quản lý user - chỉ Admin */}
            <Route
                path="/users"
                element={
                    <ProtectedRoute adminOnly>
                        <UsersPage
                            user={users}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                        />
                    </ProtectedRoute>
                }
            />

            {/* Thống kê */}
            <Route
                path="/stats"
                element={
                    <StatsPage data={revenueData} />
                }
            />

            {/* Cài đặt */}
            <Route
                path="/settings"
                element={
                    <SettingsPage />
                }
            />

        </Route>

    </Routes>
)
}


