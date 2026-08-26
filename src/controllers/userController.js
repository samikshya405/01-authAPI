const getAllusers = (req, res) => {
  res.json({
    message: "all users retrived",
  });
};

const createNewUsers = (req, res) => {
  const userDetails = req.body;

  res.json({
    message: "user created succefully",
    userDetails,
  });
};
export { getAllusers, createNewUsers };
