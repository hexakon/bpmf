import { writable } from "svelte/store";
import challenges from "$lib/challenges.json";


export const last_input = writable('');
// written to by the key component's onkeydown event,
// reset to empty string (consumed) by the challenge component

export const current_challenge = writable(challenges[0]);
export const current_challenge_number = writable(0);


export const cursor = writable({
  "all": 0,  // index in the original string
  "char": 0, // index that matches the index of individual Character components
  "bpmf": 0
});

export const key_display_mode = writable("all");
// cycle thru options with tab
// "all" - all keys are lit up
// "needed" - all keys found in the current challenge are lit up
// "next" - only the next key in the sequence is lit up