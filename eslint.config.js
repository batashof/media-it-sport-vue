// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    ignores: ['pnpm-lock.yaml', 'auto-imports.d.ts', 'components.d.ts', ''],
  },
)
