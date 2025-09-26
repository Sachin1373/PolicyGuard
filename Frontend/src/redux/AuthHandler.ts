import axiosInstance from "../axiosInstance"

export const signup = async (username: string, email:string, password: string) => {
    try {
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

export const logout = async () => {
    try {
        localStorage.removeItem('accessToken');
        const response = await axiosInstance.post('/auth/logout');
        return response;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Logout error:", error.message);
        } else {
            console.error("Logout error:", error);
        }
        throw error;
    }
}
