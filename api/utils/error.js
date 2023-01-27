//after creating this error everytime we can just write error code and message directly. 
//no need to write status(000) or message("....") like this
//we will call createError and directly write 200,"successfull" 
//example: return next(createError(400, "wrong password!"))

export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;

  return err;
};
