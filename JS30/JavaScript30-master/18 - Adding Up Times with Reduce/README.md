<h1>Summary of Learnings</h1>

<h3>Key points</h3>
<li>Array.from()  -  use to turn a nodelist into an array</li>
<li>.map() runs a function over each array item and creates a new array from this </li>
<li>.reduce() is used to make a total of all the time each video is.
  
  `.reduce((total, vidSeconds) => total + vidSeconds);` 
</li>
<li>Math.floor() will round down the number you pass into it</li>

<h3>Deconstruction ES6</h3>

```
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(":").map(parseFloat);
      return (mins * 60) + secs;
    })
```
In the code above, we were returned a string of the length of the video i.e "6:10". Using ES6 deconstruction, we can make 2 variables [mins, secs] that will be split by the : in the string.
This function then maps over each item in the array and uses parse float to turn each number string you have been given, into a number.

<h3>Tallying time left</h3>

```
let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);
```
Math.floor is used to find out how many hours are left. If you console logged the const hours you would get 4 instead of the 4.98880894 you would get without using floor.
Modulo operation is then used to work out the remaining seconds left after the 4 hours are gone. 
With those seconds left, you can then do the same thing to work out how many minutes remain in the total secondsLeft variable. 
Finally, secondsLeft can stay as it is as it does what it's name says.
