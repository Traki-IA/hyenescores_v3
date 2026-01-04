import { useState, useMemo } from "react";
import BottomNav from "@/components/BottomNav";

const CHAMPIONS_DATA = [
  { season: "1", championship: "laurier", team: "MILAN AC", points: 136 },
  { season: "2", championship: "laurier", team: "MILAN AC", points: 138 },
  { season: "3", championship: "laurier", team: "STOCKY FC", points: 121 },
  { season: "4", championship: "laurier", team: "MILAN AC", points: 132 },
  { season: "5", championship: "laurier", team: "MILAN AC", points: 129 },
  { season: "6", championship: "laurier", team: "BIMBAM", points: 125 },
  { season: "7", championship: "laurier", team: "MILAN AC", points: 134 },
  { season: "9", championship: "laurier", team: "TRAKNAR FC", points: 127 },
  { season: "1", championship: "france", team: "MILAN AC", points: 44 },
  { season: "2", championship: "france", team: "STOCKY FC", points: 42 },
  { season: "3", championship: "france", team: "BIMBAM", points: 40 },
  { season: "4", championship: "france", team: "BIMBAM", points: 43 },
  { season: "5", championship: "france", team: "MILAN AC", points: 41 },
  { season: "6", championship: "france", team: "DYNAMO KEV", points: 39 },
  { season: "7", championship: "france", team: "TRAKNAR FC", points: 44 },
  { season: "9", championship: "france", team: "FC GRINTA", points: 42 },
  { season: "1", championship: "espagne", team: "MILAN AC", points: 42 },
  { season: "2", championship: "espagne", team: "MILAN AC", points: 41 },
  { season: "3", championship: "espagne", team: "STOCKY FC", points: 38 },
  { season: "4", championship: "espagne", team: "BIMBAM", points: 40 },
  { season: "5", championship: "espagne", team: "COMARDINHO", points: 39 },
  { season: "6", championship: "espagne", team: "MAMBA TEAM", points: 37 },
  { season: "7", championship: "espagne", team: "MILAN AC", points: 43 },
  { season: "9", championship: "espagne", team: "WARNAQUE", points: 40 },
  { season: "1", championship: "italie", team: "MILAN AC", points: 43 },
  { season: "2", championship: "italie", team: "MILAN AC", points: 44 },
  { season: "3", championship: "italie", team: "STOCKY FC", points: 41 },
  { season: "4", championship: "italie", team: "NOPIGOAL FC", points: 42 },
  { season: "5", championship: "italie", team: "MILAN AC", points: 40 },
  { season: "6", championship: "italie", team: "BIMBAM", points: 38 },
  { season: "7", championship: "italie", team: "GUNNERS", points: 41 },
  { season: "9", championship: "italie", team: "TRAKNAR FC", points: 43 },
  { season: "1", championship: "angleterre", team: "STOCKY FC", points: 41 },
  { season: "2", championship: "angleterre", team: "MILAN AC", points: 43 },
  { season: "3", championship: "angleterre", team: "BIMBAM", points: 40 },
  { season: "4", championship: "angleterre", team: "MILAN AC", points: 42 },
  { season: "5", championship: "angleterre", team: "DYNAMO KEV", points: 39 },
  { season: "6", championship: "angleterre", team: "FC GRINTA", points: 41 },
  { season: "7", championship: "angleterre", team: "COMARDINHO", points: 40 },
  { season: "9", championship: "angleterre", team: "MAMBA TEAM", points: 42 },
];

const CHAMPIONSHIPS = [
  { id: "laurier", flag: "🏆" },
  { id: "france", flag: "🇫🇷" },
  { id: "espagne", flag: "🇪🇸" },
  { id: "italie", flag: "🇮🇹" },
  { id: "angleterre", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
];

const Palmares = () => {
  const [activeChampionship, setActiveChampionship] = useState("laurier");

  const filteredChampions = useMemo(() => {
    return CHAMPIONS_DATA
      .filter((c) => c.championship === activeChampionship)
      .sort((a, b) => parseInt(b.season) - parseInt(a.season));
  }, [activeChampionship]);

  return (
    <div className="palmares-page">
      <header className="palmares-header">
        <div className="palmares-title-glass">
          <h1 className="palmares-page-title">PALMARÈS</h1>
        </div>
        
        <div className="palmares-filter-bar">
          {CHAMPIONSHIPS.map((champ, index) => (
            <button
              key={champ.id}
              className={`palmares-filter-item ${activeChampionship === champ.id ? "active" : ""}`}
              onClick={() => setActiveChampionship(champ.id)}
            >
              {champ.flag}
            </button>
          ))}
        </div>
      </header>

      <div className="palmares-table-card">
        <div className="palmares-table-header">
          <span>Saison</span>
          <span>Champion</span>
          <span>Points</span>
        </div>
        
        <div className="palmares-table-body">
          {filteredChampions.map((champion) => (
            <div key={`${champion.championship}-${champion.season}`} className="palmares-row">
              <div className="season-col">
                <span className="season-badge">{champion.season}</span>
              </div>
              <div className="champion-col">
                <span className="champion-name">{champion.team}</span>
              </div>
              <div className="points-col">
                <span className="points-value">{champion.points}</span>
                <span className="points-label">pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Palmares;