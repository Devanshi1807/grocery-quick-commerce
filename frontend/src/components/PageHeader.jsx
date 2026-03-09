import { useNavigate } from "react-router-dom";

function PageHeader({ title }) {

  const navigate = useNavigate();

  return (
    <div className="page-header">

      <button 
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h2>{title}</h2>

      <button 
        className="home-btn"
        onClick={() => navigate("/")}
      >
        Home
      </button>

    </div>
  );
}

export default PageHeader;