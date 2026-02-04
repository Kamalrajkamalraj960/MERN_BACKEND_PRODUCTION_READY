export const getTasks = (req, res) => {
  res.json({
    message: "Protected tasks accessed",
    userId: req.user
  });
};
