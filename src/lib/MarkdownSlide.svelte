<script lang="ts">
  import type { HTMLHtmlAttributes } from "svelte/elements"

  interface $$Props extends HTMLHtmlAttributes {}
</script>

<section data-markdown {...$$restProps}>
  <div data-template>
    <slot />
  </div>
</section>
