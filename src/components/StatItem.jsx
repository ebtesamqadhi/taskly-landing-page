function StatItem({ number, suffix ,text}) {
    return(
        <div className="stat-item">
            <h2 className="mb-0">{number}{suffix}</h2>
            <p className="mb-0 px-2">{text}</p>
        </div>
    )
}

export default StatItem;
