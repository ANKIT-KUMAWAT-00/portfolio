import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
};
export default config;
// bug: missing src/app and src/components in content glob
