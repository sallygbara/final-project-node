import jwt from "jsonwebtoken";

class AuthService {
    generateToken(user: any) {
        return jwt.sign(
            {
                _id: user._id,
                isBusiness: user.isBusiness,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET!,
            { expiresIn: "1d" }
        );
    }
}

export default new AuthService();