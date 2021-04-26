/**
 * @file music.ts
 * @description main code
 * @author Parthiv Mothipati <hi@parthiv.dev>
 * @license MIT
 */

console.log("hello");
console.log("initialising");
music.playTone(Note.C, music.beat());

for (let i = 1; i < 300; i++) {
  music.playTone(i + 440, 30);
}
