export default defineNuxtRouteMiddleware(() => {
  const auth = useCookie<{ token: string }>('auth')

  if (!auth.value.token) {
    return navigateTo({ name: 'auth' })
  }
})
