import httpRequest from "~/utils/httpRequest";

const REQUEST = "/auth";

export const register = async (data) => {
    httpRequest.post(REQUEST + "/register", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });


}


export const login = async (data) => {
    httpRequest.post(`${REQUEST}/login`, data, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}


export const verifyEmail = async (data) => {
    httpRequest.put(`${REQUEST}/forget-password?email=${data.email}`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

}

export const forgotPass = async (data) => {
    httpRequest.get(
        `${REQUEST}/forget-password/verify?token=${data.token}&password=${data.password}`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

}
export const resetPass = async (data) => {
    httpRequest.put(`${REQUEST}/resetPass`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

}


export const logout = async (data) => {
    httpRequest.post(`${REQUEST}/logout`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

}





