<script lang="ts">
  import { last_input, current_challenge, current_challenge_number, cursor } from '$lib/stores';
  import Character from '$lib/Character.svelte';
  import { slide } from 'svelte/transition';

  let chars: string[] = $current_challenge[0].split('');
  let bpmfs: string[] = $current_challenge[1].split('*');

  export let left = false;

  $: if ($last_input.length > 0) { // do stuff upon receiving input

    for (const bpmfInput of $last_input) { // for each input (possibly redundant since only 1 input gets sent at a time)

      if (bpmfs[$cursor.char].includes(bpmfInput) && !$cursor.inputted.includes(bpmfInput)) {

        if (/[ˊˇˋ˙ ]/.test(bpmfInput) && $cursor.tone) { // if input is tone (final bpmf)
          $cursor.inputted = [];
          $cursor.char++;
          $cursor.tone = false;
          // next character
        } else if (!/[ˊˇˋ˙ ]/.test(bpmfInput)) { // input is normal bpmf (NOT a tone)
          $cursor.inputted = [...$cursor.inputted, bpmfInput];
          if ($cursor.inputted.length === bpmfs[$cursor.char].length-1) {
            $cursor.tone = true;
          }
        }

      }

    }
    if ($cursor.char >= bpmfs.length || $last_input[0] === 'esc') { // if the entire challenge is completed
      $cursor = {
        "inputted": [],
        "char": 0,
        "tone": false
      },
      $current_challenge_number++;
    }
    $last_input = []; // remove items
  }

  



</script>

<div
  out:slide={{axis: 'x', duration: 250}}
  in:slide={{axis: 'x', duration: 250}}
  class="flex justify-center items-center"
  class:flex-row-reverse={!left}
  class:flex-row={left}
>
  {#each chars as char, index}
    <Character char={char} bpmf={bpmfs[index]} index={index} />
  {/each}
</div>
