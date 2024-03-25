<h1>Summary of Learnings</h1>

<h3>.join</h3>
Using .join("") after an array will cause all of the contents of the array to be made into a string

```
if (pressed.join("").includes(secretCode)){
        console.log("WOWOWOWOWOWOW");
        cornify_add();
    };
```

<h3>Searching for code of a specific length</h3>

```
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```
Couldn't really follow the maths here but this was used to so you only search for the last 8 digits (as the secret code was 8 digits) that have been typed into the window.
