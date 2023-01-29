import Hotel from "../models/Hotel.js";

//create
export const createHotel = async (req, res, next) => {
  //here Hotel is our model, we taking datas from user = new Hotel and creating data
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
//update
export const updateHotel = async (req, res, next) => {
  try {
    //here set is mongodb method it takes  what thing we will update
    //findbyid andupdate takes parameter objects
    //new true will show update result in db.postman
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted");
  } catch (err) {
    next(err);
  }
};
//get hotel
export const getHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.findById(req.params.id);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

//get all hotel
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
