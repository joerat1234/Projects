<h1>Summary of Learning</h1>

<h3>Grouping in console</h3>

`console.group` will group items from an array and display them nicely if you use the code in the following format:

`dogs.forEach(dogs => {`<br>
      `console.group(``${dogs.name}``);`<br>
      `console.log(``${dogs.name} is ${dogs.age} years old``);` <br>
      `console.log(``${dogs.name} is ${dogs.age * 7} in dog years``);` <br>
      `console.groupEnd(``${dogs.name}``);` <br>
     ` });`
Note that you write group with the same information, in this case dogs.name, and then input the same information in the group end to close the group.

You can also make the group start collapsed as standard by using the `console.groupCollapsed()` function.
