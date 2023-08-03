import httpRequest from "~/utils/httpRequest";
const REQUEST = "/auth";

export const register = async (data) =>
    httpRequest.post(REQUEST+"/register", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

export const login = async (data) =>
    httpRequest.post(REQUEST+"/login", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

export const verifyEmail = async (data) =>
    httpRequest.post(REQUEST+"/login", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

export const resetPass = async (data) =>
    httpRequest.post(REQUEST+"/login", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

export const logout = async (data) =>
    httpRequest.post(REQUEST+"/login", data, {
        headers: {
            "Content-Type": "application/json",
        },
    });




