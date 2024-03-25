<script lang="ts">
  import { last_input } from '$lib/stores';
  import { onMount } from 'svelte';
  import challenges from '$lib/challenges.json';
  import Character from '$lib/Character.svelte';

  export let challenge = challenges[0];

  let chars = challenge[0].split('');
  let bpmfs = challenge[1].split('  ');

  console.log(chars)
  console.log(bpmfs)

  
  $: if ($last_input !== '') { // do stuff upon receiving input
    console.log($last_input);
    $last_input = '';
  }

</script>


<div class="flex flex-row-reverse justify-center items-center my-20 gap-2">
  {#each chars as char, index}
    <Character char={char} bpmf={bpmfs[index]} />
  {/each}
</div>
