import { createFetch } from '@vueuse/core'
import nProgress from 'nprogress'
import { apiRoutes } from '~/api/routes'

export const useAppFetch = createFetch({
  baseUrl: '/api/v1',
  options: {
    async beforeFetch({ options, cancel, url }) {
      url = `${url}?utcOffset=180`
      nProgress.start()
      if (url.includes(apiRoutes.login))
        return { options, url }

      const { token } = useUserStore()

      if (!token)
        cancel()

      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      }
      return { options, url }
    },
    afterFetch(ctx) {
      nProgress.done()
      return ctx
    },
    onFetchError(ctx) {
      if (!ctx.response?.ok && ctx.response?.status === 401) {
        localStorage.removeItem('user')
        window.location.href = `${window.location.origin}/login`
      }
      return ctx
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})
