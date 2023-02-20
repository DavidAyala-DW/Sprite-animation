import {
  spriteWidht,
  spriteHeight
} from "./canvas_settings";

export const spriteAnimations = [];
export const animationStates = [
  {
    name: "idle",
    frames: 7
  },
  {
    name: "jump",
    frames: 7
  },
  {
    name: "fall",
    frames: 7
  },
  {
    name: "run",
    frames: 9
  },
  {
    name: "dizzy",
    frames: 11
  },
  {
    name: "sit",
    frames: 5
  },
  {
    name: "roll",
    frames: 7
  },
  {
    name: "bite",
    frames: 7
  },
  {
    name: "ko",
    frames: 12
  },
  {
    name: "getHit",
    frames: 4
  }
];

animationStates.forEach( (state, index) => {

  let frames = {
    loc: [],
    frames: state.frames
  }

  for( let i = 0; i < state.frames; i++ ){
    let positionX = i * spriteWidht;
    let positionY = index * spriteHeight;
    frames.loc.push({x: positionX, y: positionY});
  }

  spriteAnimations[state.name] = frames;

})  