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

