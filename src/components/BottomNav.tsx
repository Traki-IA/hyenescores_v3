import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: "🏆", label: "Classement", path: "/" },
  { icon: "📅", label: "Match", path: "/match" },
  { icon: "🎯", label: "Palmares", path: "/palmares" },
  { icon: "🏅", label: "Panthéon", path: "/pantheon" },
  { icon: "📊", label: "Stats", path: "/stats" },
  { icon: "⚙️", label: "Réglages", path: "/reglages" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.label}
          className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => navigate(item.path)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
