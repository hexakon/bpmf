<script lang="ts">
  export let char: string;
  export let bpmf: string;
</script>

<style>
  .v {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  .tone5::before {
    content: "˙";
  }
</style>

<div class="flex flex-row items-center w-20">
  <div class="serif text-[2.5rem] mr-2">{char}</div>
  {#if /[ˇˋˊ]/.test(bpmf)}
    <div class="serif v text-lg/[.75] text-right tracking-tight flex justify-center">
      {bpmf.substring(0,bpmf.length-1)}
      <br>
      {bpmf.substring(bpmf.length-1)}
    </div>
  {:else if /[˙]/.test(bpmf)}
    <div class="serif v tone5 text-lg/[.75] text-right tracking-tight flex justify-center">
    {bpmf.substring(0,bpmf.length-1)}
    </div>
  {:else}
    <div class="serif v text-lg/[.75] text-right tracking-tight flex justify-center">
      {bpmf}
    </div>
  {/if}
</div>