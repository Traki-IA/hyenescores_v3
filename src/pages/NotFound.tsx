import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-cyan">404</h1>
        <p className="mb-4 text-xl text-white/70">Page non trouvée</p>
        <a href="/" className="text-cyan underline hover:text-cyan/80">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;