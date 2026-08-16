const userModel = require("../models/user");

async function handleUserSignup(req, res) {
  const { fullName, email, password } = req.body;
  const userExists = await userModel.findOne({ email });

  if (userExists)
    return res.status(400).json({ message: "user already exists" });

  try {
    const user = new userModel({
      fullName,
      email,
      password,
    });

    await user.save();
    console.log("user received: ", user);
    return res
      .status(201)
      .json({ success: true, message: "user registered successfully" });
  } catch (error) {
    console.log(`error is `, error);
    return res.status(500).json({ 
            success: false, 
            message: "Database insertion failed", 
            error: error.message 
        });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const token = await userModel.matchPasswordAndGenerateToken(email,password);
    console.log(`token: ${token}`);
    return res.cookie("token", token,{
    httpOnly: true, 
    secure: false, //set to True only in production
    sameSite: 'lax' // Required for cross-origin local development
    }).json({message:"Login successful!", token}); // It is usually better to pass an object {} inside .json() rather than a plain string.
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Incorrect Email or Password" });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
