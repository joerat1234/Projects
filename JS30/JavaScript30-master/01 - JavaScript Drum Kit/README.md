<h1>Summary of Learnings</h1>

<h3>Binding to keys using Keycodes</h3> 
Each key on the keyboard has an assigned number, this can be used with eventListeners to listen for a certain key being pressed. 

`function playSound(e){`
<br>
`  const audio = document.querySelector(``audio[data-key="${e.keyCode}"]``);`
<br>
`  const key = document.querySelector(``.key[data-key="${e.keyCode}"]``);`

Here is how to add an eventlistener to transitionend to make changes to css when the transition has finished:
<br>
`const keys = document.querySelectorAll(".key");`
<br>
`keys.forEach(key => key.addEventListener("transitionend", removeTransition));`
<br>
`window.addEventListener("keydown", playSound);`

<h3>Make audio start again on click</h3>
To prevent an audio file from needing to reach completion before the next time it can be replayed, simply change the start time of the audio to 0 

`audio.currentTime = 0;` 
<br>
`audio.play();`

