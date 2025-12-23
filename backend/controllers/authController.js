import bcrypt from "bcryptjs"; //use hash passwords
import jwt from "jsonwebtoken"; //create jwt tokens
import users from "../data/users.js";

//handles user registration
//creates new user
export const register = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body missing" });
  }

  const { email, password } = req.body;

  //ensures email and pass present
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  //if user already exist
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ email, password: hashedPassword });

  res.json({ message: "User registered successfully" });
};

//handles user logins
//verify user and issue JWT
export const login = async (req, res) => {
  const { email, password } = req.body;

  //find user
  const user = users.find((u) => u.email === email);
  //if user dosnet exist
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  //compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  //generate jwt token
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};
