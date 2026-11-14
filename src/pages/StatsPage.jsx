import RevenueChart from '../components/RevenueChart'

function StatsPage(props) {
  return (
    <div>
      <h2>Thống kê chi tiết</h2>
      <RevenueChart data={props.revenueData} />
    </div>
  )
}

export default StatsPage