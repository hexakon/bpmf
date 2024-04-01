<script lang="ts">
  import { cursor } from "$lib/stores";
  import color from "$lib/keycolors.json";

  export let charIndex: any; // seems to complain number/string mismatch if i set it to number. wtf??
  export let bpmf: any;

  charIndex = parseInt(charIndex, 10); // very hacky fix. idfk why this is even necessary, it shouldnt be

  let state = charIndex === 0 ? "now" : "wait"; // if it's the first character, start off as "now"

  $: {
    if ($cursor.char === charIndex) {      // we are currently on this character
      if (!$cursor.inputted.includes(bpmf)) {
        state = "now";  // this bpmf has not been inputted yet
      } else {
        state = "done"; // this bpmf has been inputted
      }
    } else if ($cursor.char > charIndex) { 
      state = "done"; // we've passed this character
    } else {
      state = "wait"; // we have not reached this character yet
    }
  }

</script>

<span class="transition-colors"
class:text-gray-600  ={state==="done"}
class:text-red-500   ={color[bpmf]==="1" && state === "now"}
class:text-orange-500={color[bpmf]==="2" && state === "now"}
class:text-yellow-500={color[bpmf]==="3" && state === "now"}
class:text-green-500 ={color[bpmf]==="4" && state === "now"}
class:text-cyan-500  ={color[bpmf]==="5" && state === "now"}
class:text-blue-500  ={color[bpmf]==="6" && state === "now"}
class:text-purple-500={color[bpmf]==="7" && state === "now"}
class:text-pink-500  ={color[bpmf]==="8" && state === "now"}
class:scale-130      ={state==="now"}
>{bpmf}</span>