<h1>Summary of Learnings</h1>

<h3>Destructuring</h3>
You can use the below code to creat two variables called width and height using ES6:

```
const { offsetWidth: width, offsetHeight: height } = hero;
```
After the : is the name of the variables.

<h3>Create dynamic mousemove shadow on an element</h3>

```
const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((y / width * walk) - (walk / 2));
  
text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
```
Maths hard.
