import type { App, Component } from 'vue'
// Resolves to the local ../sqrcz-flowbite-vue checkout via `file:` in package.json,
// through the package's own `exports` map, exactly as a consumer would import it.
import * as FlowBite from 'flowbite-vue'

// Register every exported component (Fwb*, FlowbiteThemable*) so new components
// show up without editing a hand-maintained list. Composables like useToast are skipped.
const isComponentName = (name: string) => /^(Fwb|FlowbiteThemable)/.test(name)

const flowBiteComponents: Component[] = Object.entries(FlowBite)
  .filter(([name]) => isComponentName(name))
  .map(([, component]) => component as Component)

const flowbiteVuePlugin = (app: App) => {
  Object.entries(FlowBite)
    .filter(([name]) => isComponentName(name))
    .forEach(([name, component]) => app.component(name, component as Component))
}

export {
  flowbiteVuePlugin,
  flowBiteComponents,
}
