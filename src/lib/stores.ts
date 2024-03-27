import { writable } from "svelte/store";
import challenges from "$lib/challenges.json";

const empty_string_array: string[] = []; // this is stupid. fuck ts
export const last_input = writable(empty_string_array);
// pushed to by the key component's onkeydown event,
// reset to empty array by the challenge component

/* it's an array just in case the user presses two keys at the same time, but since each key
   pushes and updates the array by themselves and the Challenge component reacts instantly
   upon any change, this will literally never happen.
   */


export const current_challenge = writable(challenges[0]);
export const current_challenge_number = writable(0);


export const cursor = writable({
  "inputted": empty_string_array, // emptied on each new char, added for each correct char inputted
  "char": 0, // index that matches the index of individual Character components
  "tone": false // true when the tone is the final bpmf left to input
});

export const key_display_mode = writable("all");
// cycle thru options with tab
// "all" - all keys are lit up
// "needed" - all keys found in the current challenge are lit up
// "next" - only the next key in the sequence is lit up