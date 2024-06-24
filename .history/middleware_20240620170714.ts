import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/',
]);

export default clerkMiddleware((auth, req) => {
  const { has, redirectToSignIn } = auth()
  // Restrict admin routes to users with specific permissions
  if (isProtectedRoute(req) &&
    !has({ permission: 'org:sys_memberships:manage' }) ||
    !has({ permission: 'org:sys_domains_manage' })
  ){

    // Add logic to run if the user does not have the required permissions

    return redirectToSignIn();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};