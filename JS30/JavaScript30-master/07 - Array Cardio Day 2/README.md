<h1>Summary of learning</h1>
(APOLOGIES, BACKTICKS NOT WORKING)

<h3>Different array functions</h3>

- .some()- check if anything in the array meets your criteria
- .every()- Check if all of the data in the array meet your criteria
- .find()- will return the first item in the array that it finds
- .findIndex()- will find where something is inside of the array


<h3>Current year variable</h3>
To make a variable of the current year:

`const currentYear = (new Date()).getFullYear();`

<h3>{} in console log</h3>
Using console.log({}) will also show the name of the variable as well as its value.

`console.log({isAdult});`
<br>
will lead to the output: 
<br>
`{isAdult: true}`

<h3>Deleting from an array</h3>
There a 2 ways to do this. First, you can remove the data from the current array:

`const index = comments.findIndex(comment => comment.id === 823423);`
<br>
`comments.splice(index, 1);` <br>
here you start at index then splice the data at array location 1.

Second, you can make a new array without the data you didn't want:

`const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];`
Here, if you do not spread the data (...) you will return arrays within an array, instead of pushing the old comments into the new array.

