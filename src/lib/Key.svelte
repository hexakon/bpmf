<script lang="ts">
  import { key_display_mode, last_input, current_challenge, cursor } from "$lib/stores";
  export let key: string = '';  // qwerty keycap
  export let bpmf: string = ''; // actual bpmf input of the key
  export let finger: string;    // 1 for left pinky, then +1 until 8 for right pinky. 0 for layout spacing
  export let keyVisible = true; // true if the qwerty keycap should be visible (only used for space but reserved in case of other keys)

  let active = true; // false if the bpmf is inactive
  $: {
    switch ($key_display_mode) {
      case "all":
        active = true;
        break;
      case "needed":
        active = new RegExp(bpmf).test($current_challenge[1]);
        break;
      /*case "next":
        if (/[ˊˋˇ˙ ]/.test(bpmf)) {
          active = $current_challenge[1].split("*")[$cursor.char].includes(bpmf) && !$cursor.inputted.includes(bpmf) && $cursor.tone;
        } else {
          active = $current_challenge[1].split("*")[$cursor.char].includes(bpmf) && !$cursor.inputted.includes(bpmf);
        }
        break;*/
      case "next":
        active = $current_challenge[1].split("*")[$cursor.char].includes(bpmf) && !$cursor.inputted.includes(bpmf);
        break;
    }
  }

  let keypressed = false; // true when key is pressed, to prevent logging the keydown event multiple times
  function onkeydown (event: KeyboardEvent) {
    if (keypressed === true) return; // do nothing if key already pressed
    if (event.key === '/') event.preventDefault(); // why is this key bound to the same thing as ctrl+f on firefox?
    if (event.key === bpmf || event.key === key) {
      $last_input = [...$last_input, bpmf];
      //console.log($last_input)
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
  class:border-solid     ={finger!=="0"}           class:border-2       ={finger!=="0"}
  class:border-red-500   ={finger==="1" && active} class:text-red-500   ={finger==="1" && active}
  class:border-orange-500={finger==="2" && active} class:text-orange-500={finger==="2" && active}
  class:border-yellow-500={finger==="3" && active} class:text-yellow-500={finger==="3" && active}
  class:border-green-500 ={finger==="4" && active} class:text-green-500 ={finger==="4" && active}
  class:border-cyan-500  ={finger==="5" && active} class:text-cyan-500  ={finger==="5" && active}
  class:border-blue-500  ={finger==="6" && active} class:text-blue-500  ={finger==="6" && active}
  class:border-purple-500={finger==="7" && active} class:text-purple-500={finger==="7" && active}
  class:border-pink-500  ={finger==="8" && active} class:text-pink-500  ={finger==="8" && active}
  class:w-72={finger==="9"}

  class:scale-90={keypressed}     class:opacity-50={keypressed}
  class:border-gray-700={!active} class:text-gray-700={!active}
>
  {#if keyVisible}
    <span class="h-3 text-xs/none mb-1 uppercase" class:text-white={key==='j' || key==='f'}>{key}</span>
  {/if}
  <span class="md:text-lg/none">{bpmf}</span>
</div>