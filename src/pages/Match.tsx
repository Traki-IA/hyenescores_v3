import BottomNav from "@/components/BottomNav";

const Match = () => {
  return (
    <div className="phone-screen">
      <div className="content-container">
        <div className="match-title-glass">
          <h1 className="match-page-title">MATCH</h1>
        </div>
        
        <div className="glass-card p-4 text-center text-white/70">
          <p>Page Match en construction...</p>
          <p className="text-sm mt-2">Saisie des résultats à venir</p>
        </div>

        <div className="h-20" />
      </div>
      <BottomNav />
    </div>
  );
};

export default Match;