'use server'
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function LogOut() {
    try {
        (await cookies()).delete("token");
        return NextResponse.redirect(new URL("/login"));
    } catch (error) {
        
    }
}