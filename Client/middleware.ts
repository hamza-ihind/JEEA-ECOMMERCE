import { authMiddleware } from "@clerk/nextjs";



export default authMiddleware({
  publicRoutes: ["/","/home", "/signin", "/signup"],
});


export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

