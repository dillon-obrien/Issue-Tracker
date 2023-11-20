export { default } from "next-auth/middleware";

//specify which routes to apply middleware
export const config = {
  matcher: ["/issues/new/", "/issues/:id/edit"],
};
