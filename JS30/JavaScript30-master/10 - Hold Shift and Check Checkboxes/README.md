<h1>Summary of Learning</h1>

<h3>Selecting input using querySelector</h3>
In this example, all of the input boxes have a type of "checkbox" but no class to select them. A way to use querySelector to grab them is: <br>

`const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]')`
This will only work with the [] right after the word input.

<h3>Explanation of method</h3>
Look at the code if you need to here. If my understanding is right, the handleCheck(e) function works this way. You start with the inbetween variable being false as that is the starting value. You then check if your the shift key is pressed and the list item that you have clicked is checked. If so, each checkbox is looked at to see if it is checked or it is the last box to be checked. If it is, change the value of the box to be not true if it is checked and another has already been checked. Then, all of the boxes inBetween are looked at to see if they are inbetween 2 checked boxes and the shift key is down, then their value is changed to checked.
