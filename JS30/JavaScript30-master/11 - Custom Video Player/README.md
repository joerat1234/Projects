<h1>Summary of Learnings</h1>

<h3>Simple togglePlay() function</h3>

```
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

video.addEventListener("click", togglePlay);
```
Paused is already a property within the video but there is no playing property.

<h3>Use of [ ] for attribute selecting</h3>

`const skipButtons = player.querySelectorAll("[data-skip]");`
In this code, there was no class or ID to select the "data-skip" attribute from the HTML doc, so you can use [] to search for any attricbute with "data-skip" in it.

<h3>parseFloat</h3>

```
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}
```
The code after parsefloat (this.dataset.skip) pulls a string of 25 or -10. Using the parseFloat function turns this code into an integer instead.

<h3>Computed property access</h3>

```
function handleRangeUpdate(){
    video[this.name] = this.value;
}
```
Here, the [] are used to access the property (in this case "volume" or "playbackRate") of an object (video) as it will vary depending on which slider on the page you click on. 

<h3>Adding eventListeners to multiple elements</h3>

```
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
```
Usually, to add an eventlistener to something, you just do something like video.addEventlistener(...). When you have multiple elements, like in this case there are two ranges, you need to run a forEach() loop like above.

<h3>How to make video scrub</h3>

```
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
```
We start by making sure that the mousedown is false. But then we make an eventListener for mousedown so that when we click on the progress bar, it becomes true and when they mouseup, it becomes false again. We then want to change the mousemove event listener so that when the mousemoves, we use the scrub option. However, if we left it like that, it would change the time everytime you move the mouse over the progress div. Therefore, when the mousemoves, we want to check if mousedown is true, and if so, then we use the scrub function. (e) is needed in this code as it is needed in the intial scrub function.

<h5>Other points</h5>
<ul>
    Use flexBasis to work out how far along the flex box you are, and use that percentage to show how far through the video you are.
    
</ul>

