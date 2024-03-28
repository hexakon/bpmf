<script lang="ts">
  import Character from '$lib/Character.svelte';
  import { slide } from 'svelte/transition';

  export let previewed_challenge: string[];

  let chars: string[] = previewed_challenge[0].split('');
  let bpmfs: string[] = previewed_challenge[1].split('*');

  export let left = false;
  export let hidden = false;

</script>

<div
  out:slide={{axis: 'x', duration: 250}}
  in:slide={{axis: 'x', duration: 250}}
  class="flex justify-center items-center gap-2 scale-75"
  class:flex-row-reverse={!left}
  class:flex-row={left}
  class:opacity-0={hidden}
>
  {#each chars as char, index}
    <Character char={char} bpmf={bpmfs[index]} index={-99} />
  {/each}
</div>
