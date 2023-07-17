import { Request, Response } from "express";
import User from "../models/user";
import {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema,
  makeAdminSchema,
} from "../validators/userValidator";
import mongoose from "mongoose";

// Create user
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { error, value } = createUserSchema.body.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    const {
      first_name,
      last_name,
      email,
      passwordHash,
      phone,
      isAdmin,
      apartment,
      street,
      zip,
      city,
      country,
    } = value;

    // create feedback
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      passwordHash,
      phone,
      isAdmin,
      apartment,
      street,
      zip,
      city,
      country,
    });

    //TODO send email notification to User

    return res.status(200).json({
      success: true,
      newUser,
      message: "Welcome on board",
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const { store_id } = req.user!;

    const users = await User.find();

    if (!users) {
      return res.status(404).json({
        success: false,
        message: "Could not get Users",
      });
    }

    const response = {
      success: true,
      message: "Got Users Successfully",
      data: users,
    };
    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const { company_id } = req.user!;

    const { error, value } = getUserSchema.params.validate(req.params);
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    const { userId } = value;
    const user = await User.findById(userId);
    console.log(`${user} this is user`);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }

    const response = {
      success: true,
      message: "Get User successful",
      data: user,
    };
    return res.status(200).json(response);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // const { _id, company_id, userType } = req.user!;
    const { error: errorParams, value: valueParams } =
      updateUserSchema.params.validate(req.params);
    const { error: errorBody, value: valueBody } =
      updateUserSchema.body.validate(req.body);
    if (errorParams || errorBody)
      return res.status(400).json({
        success: false,
        message: errorParams
          ? errorParams.details[0].message
          : errorBody!.details[0].message,
      });

    const { UserID } = valueParams;
    const {
      first_name,
      last_name,
      email,
      passwordHash,
      phone,
      isAdmin,
      apartment,
      street,
      zip,
      city,
      country,
    } = valueBody;

    //check previleges
    //   const validAccess = await verifyAccess(req, ['update_feedback']);
    //   if (!validAccess) return res.status(403).json({ success: false, message: 'Access denied' });

    //get feedback
    //   const selector: { deletedAt: null; company_id: ObjectId } = {
    //     deletedAt: null,
    //     company_id: company_id
    //   };

    //   Object.assign(selector, { _id: feedbackID });
    const user = await User.findOne(UserID);
    //   const feedback = await Feedback.findOne(selector);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    // first_name, last_name, email, passwordHash, phone, isAdmin, apartment, street, zip, city,country,
    //make sure its the user that created the feedback is the one updating the feedback
    //   if(userType === 'manager' && (_id.toString() !== feedback.createdBy.toString())) return res.status(404).json({ success: false, message: 'Feedback not Found' });

    if (first_name && user.first_name !== first_name)
      user.first_name = first_name;
    if (last_name && user.last_name !== last_name) user.last_name = last_name;
    if (email && user.email !== email) user.email = email;
    if (passwordHash && user.passwordHash !== passwordHash)
      user.passwordHash = passwordHash;
    if (phone && user.phone !== phone) user.phone = phone;
    if (apartment && user.apartment !== apartment) user.apartment = apartment;
    if (street && user.street !== street) user.street = street;
    if (zip && user.zip !== zip) user.zip = zip;
    if (city && user.city !== city) user.city = city;
    if (zip && user.country !== country) user.country = country;

    // Check if any changes were made
    const isModified =
      user.last_name !== last_name ||
      user.first_name !== first_name ||
      user.email !== email ||
      user.passwordHash !== passwordHash ||
      user.phone !== phone ||
      user.apartment !== apartment ||
      user.street !== street ||
      user.zip !== zip ||
      user.city !== city ||
      user.country !== country;

    if (isModified) {
      await user.save();
      //TODO send notification to Manager and employee (userID & createdBy) if there was any modification && if userType is hr
      //TODO send notification to employee (userID) if userType is manager
      //TODO send notification to HR (approvedBy) if the feedback has approvedBy && if userType is manager
      return res.status(201).json({
        success: true,
        message: "User updated successfully",
        data: user,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "No changes were made to the User.",
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// export const makeAdmin = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   try {
//     const { error: errorBody, value: valueBody } =
//       updateUserSchema.body.validate(req.body);
//     if (errorBody)
//       return res.status(400).json({
//         success: false,
//         message: errorBody!.details.map((error) => error.message),
//       });

//     const {
//       adminUserId,
//       first_name,
//       last_name,
//       email,
//       passwordHash,
//       phone,
//       isAdmin,
//       apartment,
//       street,
//       zip,
//       city,
//       country,
//     } = valueBody;

//     const { userId } = req.params;

//     const requestingUser = await User.findById( adminUserId );

//     if (!requestingUser || !requestingUser.isAdmin ) {
//       return res.status(403).json({
//         success: false,
//         message: "Only admin users can make another user an admin.",
//       });
//     }

//     const user = await User.findById( userId );
//     console.log(user)
//     if (!user)
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });

//     if (first_name && user.first_name !== first_name)
//       user.first_name = first_name;
//     if (last_name && user.last_name !== last_name) user.last_name = last_name;
//     if (email && user.email !== email) user.email = email;
//     if (isAdmin !== undefined && user.isAdmin !== isAdmin)
//       user.isAdmin = isAdmin;
//     if (phone && user.phone !== phone) user.phone = phone;
//     if (apartment && user.apartment !== apartment) user.apartment = apartment;
//     if (street && user.street !== street) user.street = street;
//     if (zip && user.zip !== zip) user.zip = zip;
//     if (city && user.city !== city) user.city = city;
//     if (zip && user.country !== country) user.country = country;
//     if (user.isAdmin === false){
//       user.isAdmin = true
//       await user.save();
//       const again = await User.findById(userId)
//       return res.status(201).json({
//         success: true,
//         message: "User updated successfully",
//         data: again,
//       });
//     }
//      else {
//       return res.status(200).json({
//         success: true,
//         message: "User Already Admin.",
//         data: user,
//       });
//     }
//   } catch (err: any) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
export const makeAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { error: errorBody, value: valueBody } =
      makeAdminSchema.body.validate(req.body);
    if (errorBody)
      return res.status(400).json({
        success: false,
        message: errorBody!.details.map((error) => error.message),
      });

    const { adminUserId, isAdmin } = valueBody;

    const { error: errorParams, value: valueParams } =
      makeAdminSchema.params.validate(req.params);
    if (errorParams)
      return res.status(400).json({
        success: false,
        message: errorParams!.details.map((error) => error.message),
      });

    const { userId } = valueParams;

    const requestingUser = await User.findById(adminUserId);

    if (!requestingUser || !requestingUser.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Only admin users can make another user an admin.",
      });
    }

    const user = await User.findById(userId);
    console.log(user);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    // if (isAdmin !== undefined && user.isAdmin !== isAdmin)
    //   user.isAdmin = isAdmin;

    if (user.isAdmin === false && isAdmin === true) {
      user.isAdmin = true;
      await user.save();
      const again = await User.findById(userId);
      return res.status(201).json({
        success: true,
        message: "User made admin successfully",
        data: again,
      });
    } 
    if (user.isAdmin === true && isAdmin === false) {
      user.isAdmin = false;
      await user.save();
      const again = await User.findById(userId);
      return res.status(201).json({
        success: true,
        message: "User removed from Admin successfully",
        data: again,
      });
    }
    else {
      return res.status(200).json({
        success: true,
        message: "Either User is already Admin or you are removing a non-admin from admin.",
        data: user,
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
