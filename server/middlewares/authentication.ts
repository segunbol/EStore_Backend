import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../utils/types';

declare module 'express' {
  interface Request {
    user?: any;
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_KEY!, (err, decode) => {
      if (err) {
        res.status(403).send({ success: false, message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(403).send({ success: false, message: 'No Token' });
  }
};

export const verifyAccess = async (
  req: Request,
  access: string[]
): Promise<Boolean> => {
  if (req.user) {
    // allow access if user is a super admin
    // allow access if user trying to perform the action is not an admin but is a company
    if (req.user.isAdmin || req.user.isCompanyAdmin) {
      return true;
    }
    // Allow riders to view, start and stop adhocs
    if (req.user.userType.toLowerCase() === "rider") {
      const adhocsArray = ['view_adhocs', 'start_adhocs', 'end_adhocs'];
      return adhocsArray.some(item => access.includes(item));
    }

    const { role_id } = req.user!;
    if (role_id) {
      const { isAdmin } = role_id as IUser;
      if (isAdmin) {
        return access.some((key) => isAdmin);
      }
    }
  }

  return false;
};

