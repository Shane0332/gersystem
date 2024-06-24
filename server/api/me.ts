export default defineEventHandler((event) => {
  console.log(event.context.authUser)
  return event.context.authUser;
})