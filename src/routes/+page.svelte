<script>
  import Key from "$lib/Key.svelte";
  import KeyboardRow from "$lib/KeyboardRow.svelte";
  import Challenge from "$lib/Challenge.svelte";
</script>


<div class="w-100% h-full min-h-lvh bg-zinc-900 flex flex-col justify-center items-center text-white">
  
  <Challenge />

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

  <div class="mt-12 tracking-[.25rem] text-gray-500 text-sm ">
    按 TAB 切換鍵盤顯示模式
  </div>
</div>

<!-- <svelte:window on:keydown={(e) => {console.log(e.key)}} /> -->