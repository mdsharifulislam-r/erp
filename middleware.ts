import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const paths = ['/login','/register',"/verify/:path*",]
const dashPath = ["/dashboard/:path*"]
export async function middleware(Request:NextRequest) {
    try {
       const path = Request.nextUrl.pathname
       const auth = (await cookies()).get("token")?.value
   
    
       
       if(paths.includes(path) && auth){
        return NextResponse.redirect(new URL("/dasboard",Request.url))
       }

       if(path=='/' && !auth){
        return NextResponse.redirect(new URL("/login",Request.url))
       }
       else if(path=='/' && auth){
        return NextResponse.redirect(new URL("/dasboard",Request.url))
       }

       if(path.includes("dashboard")&&!auth){
        return NextResponse.redirect(new URL("/login",Request.url))
       }
 

       return NextResponse.next()
       
        
    } catch (error) {
        
    }
}

export const config = {
    matcher:['/login','/register',"/verify/:path*","/dashboard/:path*"]
}