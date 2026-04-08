import jwt from "jsonwebtoken";
import env from "../config";

class AuthService {
    generateToken(user: any) {
        return jwt.sign(
            {
                _id: user._id,
                email: user.email,
                isBusiness: user.isBusiness,
                isAdmin: user.isAdmin,
            },
            env.JWT_SECRET,
            { expiresIn: "1d" }
        );
    }

    verifyJWT(token: string): any {
        return jwt.verify(token, env.JWT_SECRET);
    }
}

export default new AuthService();