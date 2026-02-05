import { users } from "../models/User.model.js";

// REGISTER
export const register = (req, res) => {
  const { name, email, password } = req.body;

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(409).json({
      success: false,
      message: "User already exists"
    });
  }

  const newUser = { name, email, password };
  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser
  });
};

// LOGIN
export const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  res.json({
    success: true,
    message: "Login successful"
  });
};
