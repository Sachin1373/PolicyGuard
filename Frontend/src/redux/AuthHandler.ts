import axiosInstance from "../axiosInstance"

export const signup = async (username: string, email:string, password: string) => {
    try {
        console.log("Signing up user:", { username, email, password });
        const response = await axiosInstance.post('/auth/signup', {
            username,
            email,
            password
        });
        return response;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Signup error:", error.message);
        } else {
            console.error("Signup error:", error);
        }
        throw error;
    }
}

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/auth/login', {
            email,
            password
        });
        return response;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Signup error:", error.message);
        } else {
            console.error("Signup error:", error);
        }
        throw error;
    }
}
