<script lang="ts">
  import Key from "$lib/Key.svelte";
  import KeyboardRow from "$lib/KeyboardRow.svelte";
  import Challenge from "$lib/Challenge.svelte";
  import ChallengePreview from '$lib/ChallengePreview.svelte'
  import challenges from '$lib/challenges.json';
  import { key_display_mode, current_challenge, current_challenge_number, cursor, last_input } from "$lib/stores";
  import { read } from "$app/server";
  import { slide } from "svelte/transition";

  const challenge_list = challenges;

  function shuffleChallenges() {
    for (let i = challenge_list.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      const k = challenge_list[i];
      challenge_list[i] = challenge_list[j];
      challenge_list[j] = k;
    }
  }

  function nextChallenge() { // goes to the next challenge.
    $current_challenge = challenge_list[$current_challenge_number];
  }

  let shift_is_pressed = false;
  let read_from_left = false;
  function switchdisplay (e: KeyboardEvent) {
    console.log(e.key);
    if (e.key === 'Shift' && !shift_is_pressed) {
      shift_is_pressed = true;
      switch ($key_display_mode) {
        case 'all':
          $key_display_mode = 'needed';
          break;
        case 'needed':
          $key_display_mode = 'next';
          break;
        case 'next':
          $key_display_mode = 'all';
          break;
      }
    }
    else if (e.key === 'Escape') {
      $last_input = [...$last_input, 'esc'];
      console.log("NEXT")
    }
    else if (e.key === 'Tab') {
      e.preventDefault()
      read_from_left = !read_from_left;
    }
  }
  function keyup (e: KeyboardEvent) {
    if (e.key === 'Shift' && shift_is_pressed) {
      shift_is_pressed = false;
    }
  }

  shuffleChallenges() // shuffle once on load

  $: { // reaction is triggered by Challenge.svelte incrementing $current_challenge number, so we don't increment it here
    console.log("challenge completed! moving to number "+$current_challenge_number)
    if ($current_challenge_number >= challenges.length) {
      $current_challenge_number = 0;
      shuffleChallenges()
      console.log("shuffling challenges");
    }
    console.log(challenge_list);
    console.log(challenge_list[$current_challenge_number]);
    nextChallenge()
  }
</script>


<div class="w-100% h-full overflow-hidden min-h-lvh bg-zinc-900 flex flex-col justify-center items-center text-white">
  
  <div class="relative w-lvw my-16 flex justify-center overflow-hidden">

    <div class="flex justify-center w-max"
      class:flex-row={read_from_left}
      class:flex-row-reverse={!read_from_left}>

      {#key [$current_challenge_number, read_from_left]}
        <ChallengePreview
          previewed_challenge={challenge_list[$current_challenge_number+1] ? challenge_list[$current_challenge_number+1] : ["",""]} hidden={true} />
        <Challenge left={read_from_left} />
        <ChallengePreview
          previewed_challenge={challenge_list[$current_challenge_number+1] ? challenge_list[$current_challenge_number+1] : ["",""]} left={read_from_left} />
      {/key}
      
    </div>

    <div class="absolute top-0 right-0 w-lvw h-16 z-10" style="background: linear-gradient(90deg, #18181b, #18181b00 15%, #18181b00 85%, #18181b);" />
  </div>
  

  <KeyboardRow>
    <Key bpmf="ㄅ" key="1" finger=1 />
    <Key bpmf="ㄉ" key="2" finger=2 />
    <Key bpmf="ˇ" key="3" finger=3 />
    <Key bpmf="ˋ" key="4" finger=4 />
    <Key bpmf="ㄓ" key="5" finger=4 />
    <Key bpmf="ˊ" key="6" finger=5 />
    <Key bpmf="˙" key="7" finger=5 />
    <Key bpmf="ㄚ" key="8" finger=6 />
    <Key bpmf="ㄞ" key="9" finger=7 />
    <Key bpmf="ㄢ" key="0" finger=8 />
    <Key bpmf="ㄦ" key="-" finger=8 />
    <Key finger=0 />
  </KeyboardRow>
  <KeyboardRow>
    <Key bpmf="ㄆ" key="q" finger=1 />
    <Key bpmf="ㄊ" key="w" finger=2 />
    <Key bpmf="ㄍ" key="e" finger=3 />
    <Key bpmf="ㄐ" key="r" finger=4 />
    <Key bpmf="ㄔ" key="t" finger=4 />
    <Key bpmf="ㄗ" key="y" finger=5 />
    <Key bpmf="ㄧ" key="u" finger=5 />
    <Key bpmf="ㄛ" key="i" finger=6 />
    <Key bpmf="ㄟ" key="o" finger=7 />
    <Key bpmf="ㄣ" key="p" finger=8 />
    <Key finger=0 />
  </KeyboardRow>
  <KeyboardRow>
    <Key bpmf="ㄇ" key="a" finger=1 />
    <Key bpmf="ㄋ" key="s" finger=2 />
    <Key bpmf="ㄎ" key="d" finger=3 />
    <Key bpmf="ㄑ" key="f" finger=4 />
    <Key bpmf="ㄕ" key="g" finger=4 />
    <Key bpmf="ㄘ" key="h" finger=5 />
    <Key bpmf="ㄨ" key="j" finger=5 />
    <Key bpmf="ㄜ" key="k" finger=6 />
    <Key bpmf="ㄠ" key="l" finger=7 />
    <Key bpmf="ㄤ" key=";" finger=8 />
  </KeyboardRow>
  <KeyboardRow>
    <Key finger=0 />
    <Key bpmf="ㄈ" key="z" finger=1 />
    <Key bpmf="ㄌ" key="x" finger=2 />
    <Key bpmf="ㄏ" key="c" finger=3 />
    <Key bpmf="ㄒ" key="v" finger=4 />
    <Key bpmf="ㄖ" key="b" finger=4 />
    <Key bpmf="ㄙ" key="n" finger=5 />
    <Key bpmf="ㄩ" key="m" finger=5 />
    <Key bpmf="ㄝ" key="," finger=6 />
    <Key bpmf="ㄡ" key="." finger=7 />
    <Key bpmf="ㄥ" key="/" finger=8 />
  </KeyboardRow>
  <KeyboardRow>
    <Key bpmf=" " key="space" keyVisible={false} finger=9 />
  </KeyboardRow>

  <div class="mt-12 tracking-[.3rem] text-gray-500 text-sm sans text-center">
    <p>按 SHIFT 切換鍵盤顯示模式</p>
    <p class="my-2">按 ESC 跳過該行文字</p>
    <p>按 TAB 切換文字閲讀方向</p>
  </div>
</div>

<a href="https://github.com/hexakon/bpmf" target="_blank">
  <div class="fixed bottom-2 right-2 text-right text-gray-600 hover:text-gray-300 sans">
    © 六葉草 Hexakon 2024
    <br>
    Click here for GitHub repo
  </div>
</a>

<svelte:window on:keydown={switchdisplay} on:keyup={keyup} />