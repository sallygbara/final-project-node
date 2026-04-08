import { User } from "../database/models.js";
import bcrypt from "bcryptjs";
import authService from "./auth.service.js";

class UsersService {
    async registerUser(data: any) {
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) throw new Error("Email already exists");

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        return User.create(data);
    }

    async login(data: any) {
        const user = await User.findOne({ email: data.email });
        if (!user) throw new Error("Invalid email or password");

        const isValid = await bcrypt.compare(
            data.password,
            (user as any).password
        );
        if (!isValid) throw new Error("Invalid email or password");

        return authService.generateToken(user);
    }

    async getAllUsers() {
        return User.find();
    }
    async getUserById(id: string) {
        return User.findById(id);
    }

    async updateUser(id: string, data: any) {
        return User.findByIdAndUpdate(id, data, { new: true });
    }

    async changeBusinessStatus(id: string) {
        const user = await User.findById(id);
        if (!user) return null;

        user.isBusiness = !user.isBusiness;
        return user.save();
    }

    async deleteUser(id: string) {
        return User.findByIdAndDelete(id);
    }
}

export default new UsersService();