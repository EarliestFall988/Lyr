import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/WorkPC/Documents/Web Development/Lyr/Lyr/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}