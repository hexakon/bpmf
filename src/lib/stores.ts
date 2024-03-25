import { writable } from "svelte/store";

export const active_bpmf = writable([
  "ㄅ","ㄆ","ㄇ","ㄈ","ㄉ","ㄊ","ㄋ","ㄌ","ㄍ","ㄎ","ㄏ","ㄐ","ㄑ","ㄒ","ㄓ","ㄔ","ㄕ","ㄖ","ㄗ","ㄘ","ㄙ","ㄚ","ㄛ","ㄜ","ㄝ","ㄞ","ㄟ","ㄠ","ㄡ","ㄢ","ㄣ","ㄤ","ㄥ","ㄦ","ㄧ","ㄨ","ㄩ","ˇ","ˋ","ˊ","˙"," "
]);

export const last_input = writable('')
// written to by the key component's onkeydown event,
// reset to empty string (consumed) by the challenge component

export const is_toggling = writable(false);
// true when in the state of toggling active_bpmf
// currently unused. too much work having to filter challenges, maybe revisit later

export const key_display_mode = writable("all")
// cycle thru options with tab
// "all" - all keys are lit up
// "needed" - all keys found in the current challenge are lit up
// "next" - only the next key in the sequence is lit up