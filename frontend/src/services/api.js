const BASE_URL = "http://localhost:5000/api"; //backend url

//Sends email & password to backend
export const registerUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),  //converts js objects into string
  });

  if (!res.ok) throw new Error("Registration failed");
  return res.json();

};

//login api
export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");
  return res.json();
};

//gold price api
export const getGoldPrice = async (token) => {
  const res = await fetch(`${BASE_URL}/prices`, {
    headers: { Authorization: `Bearer ${token}` },       
  });

  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
};
