export function player_state(){
  const player_state = document.getElementById("player_state");
  player_state.onchange = e => {
    window.playerState = e.target.value;
  }
}