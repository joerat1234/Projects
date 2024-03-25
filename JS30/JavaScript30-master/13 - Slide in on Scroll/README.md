<h1>Summary of Learnings</h1>

<h3>Debounce</h3>
Debounce function is to make sure that the function you are running will only run for a certain amount of time. In this case, we were tracking a scroll event, and if you scroll from the top to the bottom of the page, it tracked the scroll approximately 50 times, which could cause performance issues. Therefore, debounce was used so that the function only runs for once every 20ms.

```
window.addEventListener("scroll", debounce(checkSlide));
```
A debounce function was used above this, taken from the internet.

<h3>Other points</h3>

<li>window.scrollY + window.innerHeight will give you the number of pixels that
are currently on the page at the bottom of your window</li>
<li>offsetTop tells you how far something is from the top of the window</li>
<li>It can be hard to figure out the different variables but console logging them allows you to picture what is happening when you scroll down</li>
