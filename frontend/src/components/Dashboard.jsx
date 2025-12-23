import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGoldPrice } from "../services/api";

function Dashboard() {
  const [price, setPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    //fetch gold price
    getGoldPrice(token)
      .then((data) => setPrice(data.price)) //api call success
      .catch(() => navigate("/"));          //something goes wrong
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Gold Price Tracker</h1>
        <button onClick={logout}>Logout</button>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="price-card">
          <p className="label">Current Gold Price (XAU)</p>
          {price ? (
            <h2>${price}</h2>
          ) : (
            <p className="loading">Fetching latest price...</p>
          )}
          <span className="currency">USD</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
