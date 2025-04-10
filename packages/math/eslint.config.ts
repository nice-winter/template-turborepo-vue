import { eslintConfigTypescript } from 'eslint-config/typescript'

export default eslintConfigTypescript(
  // Add your custom rules here:
  {
    name: 'app/custom-rules',
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {}
  }
)
