export const useAuthStore = defineStore(
  'auth',
  () => {
    const API_URL = useAPI()

    const token = ref<string | undefined>()

    async function login(email: string, password: string): Promise<void> {
      const data = await $fetch<{ token: string; user: UserInterface }>(
        API_URL + '/auth/login',
        {
          method: 'POST',
          body: { email, password }
        }
      )

      token.value = data.token
    }

    function clearToken(): void {
      token.value = undefined
    }

    return { token, login, clearToken }
  },
  { persist: true }
)
