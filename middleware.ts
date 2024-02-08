//Exporting the deault object from next-auth/middleware
export { default } from "next-auth/middleware";

export const config = {
    // *: zero or more params
    // +: one or more params
    // ?: zero or one param
    matcher: ['/dashboard/:path*']
}