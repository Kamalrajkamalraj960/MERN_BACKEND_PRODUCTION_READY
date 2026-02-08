export const login = async (req, res) => {
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "123456") {
    return res.json({
      message: "Login success",
      token: "dummy-jwt-token"
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
};

export const register = async (req, res) => {
  res.json({ message: "Register API working" });
};
