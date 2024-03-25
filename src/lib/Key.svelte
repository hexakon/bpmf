<script lang="ts">
  import { active_bpmf, key_display_mode, last_input } from "$lib/stores";
  export let key: string = '';  // qwerty keycap
  export let bpmf: string = ''; // actual bpmf input of the key
  export let finger: string;    // 1 for left pinky, then +1 until 8 for right pinky. 0 for layout spacing
  export let keyVisible = true; // true if the qwerty keycap should be visible

  let inactive = false; // true if the bpmf is inactive
  $: inactive = !$active_bpmf.includes(bpmf);

  let keypressed = false; // true when key is 

  function onkeydown (event: any) {
    if (keypressed === true) return; // do nothing if key already pressed
    if (event.key === bpmf || event.key === key) {
      $last_input = bpmf;
      keypressed = true;
    }
  }
  function onkeyup (event: any) {
    if (keypressed === false) return; // do nothing if key not pressed
    if (event.key === bpmf || event.key === key) {
      keypressed = false;
    }
  }
</script>

<svelte:window on:keydown={onkeydown} on:keyup={onkeyup} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="rounded p-1
            h-12 w-12
            flex flex-col justify-center items-center
            transition-all duration-75 sans"
  class:border-solid     ={finger!=="0"} class:border-2       ={finger!=="0"}
  class:border-red-500   ={finger==="1"} class:text-red-500   ={finger==="1"}
  class:border-orange-500={finger==="2"} class:text-orange-500={finger==="2"}
  class:border-yellow-500={finger==="3"} class:text-yellow-500={finger==="3"}
  class:border-green-500 ={finger==="4"} class:text-green-500 ={finger==="4"}
  class:border-cyan-500  ={finger==="5"} class:text-cyan-500  ={finger==="5"}
  class:border-blue-500  ={finger==="6"} class:text-blue-500  ={finger==="6"}
  class:border-purple-500={finger==="7"} class:text-purple-500={finger==="7"}
  class:border-rose-500  ={finger==="8"} class:text-rose-500  ={finger==="8"}
  class:w-72={finger==="9"}

  class:scale-90={keypressed} class:opacity-50={keypressed}
  class:border-gray-700={inactive} class:text-gray-700={inactive}
>
  {#if keyVisible}
    <span class="h-3 text-xs/none mb-1 uppercase" class:text-white={key==='j' || key==='f'}>{key}</span>
  {/if}
  <span class="md:text-lg/none">{bpmf}</span>
</div>