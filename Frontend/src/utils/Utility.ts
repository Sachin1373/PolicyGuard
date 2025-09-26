import { jwtDecode } from "jwt-decode";

export interface jwtPayload {
    username: string;
    email: string;
    iat: number;
    exp: number;
}

export const userDetails = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        return null;
    }

    try {
        return jwtDecode<jwtPayload>(token);
    } catch {
        return null;
    }

}