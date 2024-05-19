import { acceptHMRUpdate, defineStore } from 'pinia'
import { useAppFetch } from '~/api/useAppFetch'
import { apiRoutes } from '~/api/routes'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()

  const email = ref<string>('')
  const password = ref<string>('')
  const user = ref(localStorage.getItem('user'))

  const { post, data, error } = useAppFetch(apiRoutes.login, { immediate: false })

  const isAuth = computed(() => !!user.value)
  const token = computed(() => JSON.parse(user.value ?? '{}')?.access)

  async function login() {
    await post({ email: email.value, password: password.value }).execute()
    localStorage.setItem('user', data.value as string)
    user.value = data.value as string
    if (!error.value)
      router.push('/')
  }

  function logout() {
    localStorage.removeItem('user')
    user.value = null
  }

  return {
    login,
    email,
    password,
    isAuth,
    token,
    user,
    logout,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
