
const getUser = (req, res) => {
  const { first_name, last_name, email, role, avatar } = req.user;
  const user = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    role: role,
    avatar: avatar
  };  
  res.render("pages/profile", { profile: user });
};
const getById = (req, res) => {};
const create = (req, res) => {};
const deleteById = (req, res) => {};
const deleteAll = (req, res) => {};
const updateById = (req, res) => {};
const renderRegister = (req, res) => {return res.render("pages/register");};
const renderLogin = (req, res) => { return res.render("pages/login");};

export default {
  getUser,
  getById,
  create,
  deleteById,
  deleteAll,
  updateById,
  renderLogin,
  renderRegister,
};
