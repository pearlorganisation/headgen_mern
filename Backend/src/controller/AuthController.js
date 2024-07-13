// ----------------------------------------Imports---------------------------------------------------

import { authModel } from "../model/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { saveAccessTokenToCookie } from "../utils/index.js";
import { accessTokenValidity, refreshTokenValidity } from "../utils/index.js";

// ---------------------------------------------------------------------------------------------------
// @desc - to fetch the users data
// @route - GET /auth/login
// @access - PUBLIC
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await authModel.findOne({userName });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect UserName/Password" });
    }

    //matching password using bcrypt
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword)
      return res.status(401).json({ success: false, message: "Incorrect UserName/Password" });

    // accessToken - Generating Access Token
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: accessTokenValidity }
    );

    // Saving accessToken to the httpOnly Cookie
    saveAccessTokenToCookie(res, accessToken);
    
    return res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      user: {
        userName: user?.userName
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error ! ${error.message}`,
    });
  }
};

// @desc - to generate a new refresh token
// @route - POST /auth/refresh
// @access - PUBLIC

export const refreshToken = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email ID is required to generate Refresh Token",
      });
    }

    const user = await authModel.findOne({ email });
    const ownerUser = await shopOwner.findOne({ email });

    if (!user && !ownerUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email Does Not Exists" });
    }

    // clearing the existing cookie
    res.clearCookie("ACCESS_TOKEN");

    // refreshToken - generating a new refresh token with extended time
    const refreshToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: refreshTokenValidity }
    );

    // Saving refreshToken to the httpOnly Cookie
    saveAccessTokenToCookie(res, refreshToken);

    return res.status(200).json({
      success: true,
      message: "Refresh Token Generated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// @desc - to fetch the users data
// @route - POST /auth/logout
// @access - PUBLIC
export const logout = async (req, res) => {
  try {
    res.clearCookie("TFI_ACCESS_TOKEN");
    res.status(200).json({
      success: true,
      message: "Logged Out Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error! ${error.message}`,
    });
  }
};

// @desc - to update the users password
// @route - PUT /auth/resetPassword
// @access - PRIVATE
// export const resetPassword = async (req, res) => {
//   try {
//     const { email, password, confirmPassword } = req.body;

//     if (!email || !password || !confirmPassword) {
//       return res.status(400).json({
//         status: "FAILURE",
//         status: "Email Id, Password and Confirm Password are required",
//       });
//     }

//     const user = await authModel.findOne({ email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Email does not exists" });
//     }

//     if (password.length < 10 || confirmPassword.length < 10) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Password and Confirm Password must have length greater than or equal to 10",
//       });
//     }

//     if (password !== confirmPassword) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Password does not match" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await authModel.findOneAndUpdate(
//       { email },
//       { password: hashedPassword },
//       { $new: true }
//     );

//     return res
//       .status(200)
//       .json({ success: true, message: "Password Updated Successfully" });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: `Internal Server Error! ${error.message}`,
//     });
//   }
// };

// @desc -signup for client panel
// @route - POST /auth/signup
export const signup = async (req, res) => {
  try {
    const { password, userName } = req?.body;

    const isUserExists = await authModel.findOne({ userName });
    if (isUserExists)
      res.status(404).json({ status: false, message: "User already Exists" });

    const hashPassword = await bcrypt.hash(password, 10);

    const savedUser = await authModel.create({
      userName: userName,
      password: hashPassword,
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "User created successfully",
      data: savedUser,
    });
  } catch (e) {
    res.status(400).json({
      status: "FAILURE",
      message: e?.message || "Internal server error!!",
    });
  }
};

// @desc - to verify user email and update email verify key
// @route - PATCH /auth/emailVerify
// export const verifyEmail = async (req, res) => {
//   try {
//     const { token, id } = req?.params;

//     const isValidToken = await jwt.verify(
//       token,
//       process.env.VERIFY_EMAIL_SECRET
//     );

//     const isValidUserId = await authModel.findById(id);

//     if (!isValidToken || !isValidUserId) {
//       return res.status(400).json({
//         status: "FAILURE",
//         message: "Email not verified/Invalid token",
//       });
//     }
//     await authModel.findByIdAndUpdate(id, { emailVerified: true });
//     res.status(200).json({ status: "SUCCESS", message: "EMAIL VERIFIED" });
//   } catch (e) {
//     res.status(400).json({
//       status: "SUCCESS",
//       message: `${e?.message} -Invalid Email!!`,
//     });
//   }
// };
