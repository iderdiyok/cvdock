export default function BarChart({ name, level }) {
  const width = `${level}%`;
  return (
    <div className="chart">
      <span>{name}</span>
      <div className="bar">
        <div className="percent" style={{ width }}></div>
      </div>
    </div>
  );
}
