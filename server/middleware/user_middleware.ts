export default defineEventHandler((event) => {
  const cookies = parseCookies(event);
  const authUser = cookies.authUserCookie;
  event.context.authUser = authUser;
})