<script lang="ts">
  import "reveal.js/dist/reveal.css"
  import "reveal.js/dist/theme/black.css"
  import "reveal.js/plugin/highlight/monokai.css"

  import { onMount } from "svelte"
  import Reveal from "reveal.js"
  import Highlight from "reveal.js/plugin/highlight/highlight"
  import Markdown from "reveal.js/plugin/markdown/markdown"
  import Notes from "reveal.js/plugin/notes/notes"

  import Counter from "./lib/Counter.svelte"
  import MarkdownSlide from "./lib/MarkdownSlide.svelte"
  import TitleSlide from "./lib/slides/01-title.svelte"

  onMount(() => {
    const deck = new Reveal({
      plugins: [Highlight, Markdown, Notes],
    })

    deck.initialize({
      history: true,
    })
  })
</script>

<div class="reveal">
  <div class="slides">
    <TitleSlide />

    <MarkdownSlide data-background-color="aquamarine">
      {`
      ## Title Slide

      A paragraph with some text and a [link](https://hakim.se).

      \`\`\`ts
      const foo = "bar"
      console.log(foo)
      \`\`\`
      `}
    </MarkdownSlide>

    <section data-background-color="rgb(70, 70, 255)">
      Slide 1
      <pre><code data-trim data-noescape data-line-numbers="3,4|1|5">
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
      </code></pre>
    </section>
    <section>
      <section>Slide 2.1</section>
      <section>Slide 2.2</section>
      <section>Slide 2.3</section>
    </section>
    <section>
      <p class="fragment">Fade in</p>
      <p class="fragment fade-out">Fade out</p>
      <p class="fragment highlight-red">Highlight red</p>
      <p class="fragment fade-in-then-out">Fade in, then out</p>
      <p class="fragment fade-up">Slide up while fading in</p>
    </section>
    <section>
      <h2 class="r-fit-text">Fit Text</h2>
      <h2 class="r-fit-text">Can be used for multiple headlines</h2>
    </section>
    <section>
      <h2>Slide 5</h2>
      <p>Has custom components!</p>
      <Counter />

      <aside class="notes">
        Shhh, these are your private notes 📝
      </aside>
    </section>
    <section>Slide 6</section>
    <section>Slide 7</section>
  </div>
</div>
