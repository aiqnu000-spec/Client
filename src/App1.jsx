import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


import Sidebar from './components/Sidebar'
import Header from './components/Header'
import RevenueChart from './components/RevenueChart'

import HomePage from './pages/HomePage'
import UsersPage from './pages/UserPage'
import StatsPage from './pages/StatsPage'
import SettingsPage from './pages/SettingPage'
import LoginPage from './pages/LoginPage'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

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
      {/* Trang login đứng riêng, không có Sidebar/Header */}
            <Route path="/login" element={<LoginPage />} />
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="page-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage users={users} revenueData={revenueData} />}
            />
            <Route
              path="/users"
              element={
                <UsersPage user={users} onAdd={handleAdd} onDelete={handleDelete} />
              }
            />
            <Route
              path="/stats"
              element={<StatsPage data={revenueData} />} 
            />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </main>
    </div>
    </Routes>
  )
}