import { jwtDecode } from "jwt-decode";

export interface jwtPayload {
    username: string;
    email: string;
    iat: number;
    exp: number;
}

export const userDetails = () => {
    const token = localStorage.getItem("accessToken");
    const details = token ? jwtDecode<jwtPayload>(token) : null;
    return details;
}