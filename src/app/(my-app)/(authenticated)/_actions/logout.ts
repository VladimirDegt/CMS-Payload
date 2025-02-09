"use server"

import { cookies } from "next/headers"

interface LogoutResponse {
    success: boolean;
    error?: string
}

export async function logout(): Promise<LogoutResponse> {
    try {
        const cookieStore = await cookies();
        cookieStore.delete("payload-token");
        return {success: true}

    } catch (error) {
        console.error("Logout error: ", error)
        return { success: false, error: "Logout is failed"}
    }
}