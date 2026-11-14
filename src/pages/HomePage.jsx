import { useState } from 'react'
import { 
    ArrowUpRight, UserPlus,
    ShoppingBag,
} from 'lucide-react'


import StatCard from '../components/StatCard'
import RevenueChart from '../components/RevenueChart'

export default function HomePage(props) {
    return (
        <main className="dashboard-page">
            <section className="stats-grid">
                
                <StatCard 
                    title="Tổng người dùng" 
                    value="120" 
                    description="12 người dùng mới trong tháng"
                    type="users"
                    trend="+12.5%"
                />
                <StatCard
                    title="Đơn hàng"
                    value="45"
                    description="8 đơn hàng mới hôm nay"
                    type="orders"
                    trend="+8.2%"
                />               
                <StatCard
                    title="Doanh thu"
                    value="8.500.000đ"
                    description="Doanh thu tháng này"
                    type="revenue"
                    trend="+18.4%"
                />
                <StatCard
                    title="Tăng trưởng"
                    value="24.8%"
                    description="So với tháng trước"
                    type="growth"
                    trend="+5.7%"
                />
            </section>
            <section className="dashboard-grid">

                <RevenueChart data={props.revenueData} />
                <div className="activity-card">

                    <div className="section-title">
                        <div>
                        <h2>Hoạt động gần đây</h2>
                        <p>Những hoạt động mới nhất</p>
                    </div>

                    <button className="icon-button">
                        <ArrowUpRight size={18} />
                    </button>
                    </div>


                <div className="activity-list">

                    <div className="activity-item">
                        <div className="activity-avatar purple">
                            <UserPlus size={18} />
                        </div>

                        <div className="activity-content">
                            <strong>Người dùng mới</strong>
                            <span>Nguyễn Văn A vừa đăng ký</span>
                        </div>

                        <time>5 phút</time>
                    </div>


                    <div className="activity-item">
                        <div className="activity-avatar blue">
                            <ShoppingBag size={18} />
                        </div>

                        <div className="activity-content">
                            <strong>Đơn hàng mới</strong>
                            <span>Đơn hàng #DH1024</span>
                        </div>

                        <time>15 phút</time>
                    </div>


                    <div className="activity-item">
                        <div className="activity-avatar green">
                            <ShoppingBag size={18} />
                        </div>

                        <div className="activity-content">
                            <strong>Thanh toán thành công</strong>
                            <span>Đơn hàng #DH1021</span>
                        </div>

                        <time>32 phút</time>
                    </div>


                    <div className="activity-item">
                        <div className="activity-avatar orange">
                            <UserPlus size={18} />
                        </div>

                        <div className="activity-content">
                            <strong>Tài khoản mới</strong>
                            <span>Trần Minh vừa đăng ký</span>
                        </div>

                        <time>1 giờ</time>
                    </div>

                </div>

                </div>

            </section>
            
        </main>
    )
}