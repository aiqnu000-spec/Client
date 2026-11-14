import './css/StatCard.css'

function StatCard(props) {
    return (
        <div className = "stat-card">
            <p>{props.title}</p>
            <h2>{props.value}</h2>
        </div>
    )
}

export default StatCard