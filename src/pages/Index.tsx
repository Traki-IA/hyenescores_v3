import BottomNav from "@/components/BottomNav";

const teams = [
  { pos: 1, name: "Milan AC", pts: 95, v: 30, n: 5, d: 18, bp: 116, bc: 97, diff: 49 },
  { pos: 2, name: "Stocky FC", pts: 86, v: 24, n: 14, d: 15, bp: 115, bc: 88, diff: 27 },
  { pos: 3, name: "BimBam", pts: 84, v: 25, n: 9, d: 19, bp: 119, bc: 96, diff: 23 },
  { pos: 4, name: "Dynamo Kev", pts: 82, v: 26, n: 4, d: 23, bp: 119, bc: 110, diff: 9 },
  { pos: 5, name: "Traknar FC", pts: 74, v: 21, n: 11, d: 21, bp: 111, bc: 106, diff: 6 },
  { pos: 6, name: "FC Grinta", pts: 74, v: 22, n: 8, d: 23, bp: 96, bc: 102, diff: -6 },
  { pos: 7, name: "Comardinho", pts: 71, v: 20, n: 11, d: 22, bp: 94, bc: 107, diff: -13 },
  { pos: 8, name: "Mamba Team", pts: 64, v: 18, n: 10, d: 25, bp: 96, bc: 110, diff: -14 },
  { pos: 9, name: "Warnaque", pts: 61, v: 17, n: 10, d: 26, bp: 94, bc: 110, diff: -16 },
  { pos: 10, name: "NopiGoal FC", pts: 61, v: 15, n: 12, d: 26, bp: 86, bc: 121, diff: -35 },
];

// Helper to get badge color class based on position
const getBadgeColor = (pos: number): string => {
  if (pos === 1) return "gold";
  if (pos <= 3) return "green";
  if (pos <= 7) return "cyan";
  if (pos <= 9) return "orange";
  return "red";
};

const Index = () => {
  const progressPercent = 74;
  const currentMatchday = 53;
  const totalMatchdays = 72;

  // Calculate stroke dasharray for circular progress
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="ds-page">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="100%" stopColor="#00ff88" />
          </linearGradient>
        </defs>
      </svg>

      {/* Title with glassmorphism + glow */}
      <div className="ds-page-title">
        <h1>Classement</h1>
      </div>

      {/* Filter Bar - Championship + Season */}
      <div className="ds-filter-bar">
        <button className="ds-filter-item active">
          <span className="icon">🏆</span>
          <span className="label">Ligue des Hyènes</span>
        </button>
        <button className="ds-filter-item">
          <span className="label">Saison 9</span>
          <span className="icon" style={{ fontSize: '10px' }}>▾</span>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="ds-progress">
        <div className="ds-progress-circle">
          <svg width="32" height="32" viewBox="0 0 36 36">
            <circle
              className="bg"
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="3"
            />
            <circle
              className="fill"
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="url(#gradient-progress)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 18 18)"
            />
          </svg>
          <span className="text">{progressPercent}%</span>
        </div>
        <span className="ds-progress-label">
          <strong>J.{currentMatchday}</strong> / {totalMatchdays} journées
        </span>
      </div>

      {/* Table Card */}
      <div className="ds-card">
        <table className="ds-table">
          <thead>
            <tr>
              <th style={{ width: "40px" }}>#</th>
              <th className="left">Équipe</th>
              <th style={{ width: "50px" }}>Pts</th>
              <th style={{ width: "70px" }}>V-N-D</th>
              <th style={{ width: "60px" }}>BP-BC</th>
              <th style={{ width: "45px" }}>+/-</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.pos}>
                <td>
                  <span className={`ds-badge ${getBadgeColor(team.pos)}`}>
                    {team.pos}
                  </span>
                </td>
                <td className="left">
                  <span className="ds-team-name">{team.name}</span>
                </td>
                <td>
                  <span className="ds-points">{team.pts}</span>
                </td>
                <td>
                  <span className="ds-stats">{team.v}-{team.n}-{team.d}</span>
                </td>
                <td>
                  <span className="ds-stats">{team.bp}-{team.bc}</span>
                </td>
                <td>
                  <span className={`ds-diff ${team.diff >= 0 ? "positive" : "negative"}`}>
                    {team.diff >= 0 ? `+${team.diff}` : team.diff}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Bar - Caviste */}
      <div className="ds-footer-bar">
        <span className="label">Caviste :</span>
        <span className="value">Gunners</span>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
