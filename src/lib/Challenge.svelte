<script lang="ts">
  import { last_input, current_challenge, current_challenge_number, cursor } from '$lib/stores';
  import Character from '$lib/Character.svelte';
  import { fade, fly, slide } from 'svelte/transition';

  let chars  = $current_challenge[0].split('');
  let bpmfs  = $current_challenge[1].split('*');
  let inputs = $current_challenge[1]

  export let left = false;


  $: if ($last_input !== '') { // do stuff upon receiving input
    if ($last_input === inputs[$cursor.all]) {
      $cursor.all++;
      $cursor.bpmf++;
      console.log("correct input");
      if (inputs[$cursor.all] === "*") {
        $cursor.all++;
        $cursor.char++;
        $cursor.bpmf = 0;
        console.log("next character");
      }
    }
    $last_input = ''; // reset feed

    if ($cursor.all >= $current_challenge[1].length) { // if the entire challenge is completed
      $cursor = {
        "all": 0,
        "char": 0,
        "bpmf": 0
      },
      $current_challenge_number++;
    }
  }

  



</script>

<div
  out:slide={{axis: 'x', duration: 250}}
  in:slide={{axis: 'x', duration: 250}}
  class="flex justify-center items-center gap-2"
  class:flex-row-reverse={!left}
  class:flex-row={left}
>
  {#each chars as char, index}
    <Character char={char} bpmf={bpmfs[index]} index={index} />
  {/each}
</div>
