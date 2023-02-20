import {
  ctx,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  playerImage,
  spriteWidht,
  spriteHeight
} from "./canvas_settings";

import {spriteAnimations} from "./animations";
import {player_state} from "./events";

let gameFrame = 0;
const staggerFrames = 4;
window.playerState = "idle";

function animate(){

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position = Math.floor( gameFrame / staggerFrames ) % spriteAnimations[playerState].frames;
  let frameX = spriteWidht * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  
  ctx.drawImage(playerImage, frameX, frameY, spriteWidht, spriteHeight,
   0, 0, spriteWidht, spriteHeight);

  gameFrame++;
  requestAnimationFrame(animate);

};

animate();
player_state();