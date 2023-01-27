import User from "../models/User.js";

//create
export const createUser = async (req, res, next) => {
  //here User is our model, we taking datas from user = new User and creating data
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

//update
export const updateUser = async (req, res, next) => {
  try {
    //here set is mongodb method it takes  what thing we will update
    //findbyid andupdate takes parameter objects
    //new true will show update result in db.postman
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
  } catch (err) {
    next(err);
  }
};
//get User
export const getUser = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

//get all User
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
