<script lang="ts">
  import { cursor } from "$lib/stores";
  import CharBpmf from "./CharBpmf.svelte";

  export let char: string;
  export let bpmf: string;
  export let index: number;

  let state = "wait"
  //let tone5final = false;
  $: state = $cursor.char < index ? "wait" : $cursor.char === index ? "now" : "done"
  //$: tone5final = $cursor.bpmf === bpmf.length-1
</script>

<style>
  .v {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  .tone5::before {
    content: "˙";
    position: absolute;
    top: -.6rem;
  }
  .tone5last::before {
    color: #06b6d4; /* cyan-500 */
  }
</style>

<div class="flex flex-row items-center w-20 transition-all"
     class:scale-110={state === "now"}
     class:text-gray-600={state === "done"}>

  <div class="serif text-[2.5rem] mr-2">{char}</div>


  {#if /[ˇˋˊ]/.test(bpmf)}
    <div class="serif v text-lg/[.75] text-right tracking-tight">
      {#each bpmf.substring(0,bpmf.length-1) as thisbpmf, thisindex}
        <CharBpmf charIndex={index}, myIndex={thisindex} bpmf={thisbpmf} />
      {/each}
      <br>
      <CharBpmf charIndex={index}, myIndex={bpmf.length-1} bpmf={bpmf.substring(bpmf.length-1)} />
    </div>


  {:else if /[˙]/.test(bpmf)}
    <div class="serif v tone5 text-lg/[.75] text-right tracking-tight relative" class:tone5last={$cursor.char === index && $cursor.bpmf === bpmf.length-1}>
      {#each bpmf.substring(0,bpmf.length-1) as thisbpmf, thisindex}
        <CharBpmf charIndex={index}, myIndex={thisindex} bpmf={thisbpmf} />
      {/each}
    </div>


  {:else}
    <div class="serif v text-lg/[.75] text-right tracking-tight">
      {#each bpmf as thisbpmf, thisindex}
        <CharBpmf charIndex={index}, myIndex={thisindex} bpmf={thisbpmf} />
      {/each}
    </div>


  {/if}
</div>