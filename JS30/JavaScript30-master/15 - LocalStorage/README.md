<h1>Summary of Learnings</h1>

<h3>Narrow down search in querySelector</h3>
In the code below, you are searching the this (which is a form in this case) for an attribute of name that = 'item'. This is helpful to narrow down your search if you have multiple forms on a page and you don't just want to globally select everything on the page with document.querySelector. Adding .value on the end lets you use the text inside the item for another purpose.

```
const text = (this.querySelector("[name=item]")).value;
```

<h3>How to create HMTL with an variable ID</h3>
The code inside the li tags is what's important here. Putting {i} in the data-index and id will mean each time a new item is added to this list it will have an individual id.
The for attribute matches the input to the label.

 
 ```
 function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type= "checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join("");
  }
  ```

<h3>localStorage</h3>
You can use 3 apis:
<li>getItem()</li>
<li>setItem()</li>
<li>removeItem()</li>
<br>
Using the code below will check the local storage for any items and turn the parse will convert them back into an object as we used stringify to turn them into a string previously OR || it will go back to an empty array.

```
const items = JSON.parse(localStorage.getItem("items")) || [];

localStorage.setItem("items", JSON.stringify(items));
```

<h3>Other notes</h3>
<li>Forms will automatically refresh the pagewhen you submit. Using e.preventDefault() in your function will stop that.</li>
<li>Using `done: false` in an object will make sure its original state is false and in this case, unchecked in the list. </li>
<li>Event delegation will help listen for event of elements that may not exist yet</li>
