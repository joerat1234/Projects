<h1>Summary of Learning</h1>

<h3>Stripping function</h3>

```
function strip(bandName) {
 return bandName.replace(/^(a |an |the )/i, "").trim();
}
```
Here, you are checking to see if the word has a, an or the in it. Using a space after each word ensures that you will not include any wordes hat start with an or the i.e. Anarchy. 
The 'i' represents insensensitve, meaning the band could be AN, tHe etc and if would still replace them.
The "" at the end is saying that we are replacing the words with nothing.  You would then use the strip function as below:

```
const sortedBands = bands.sort(function (a, b) {
  if (strip(a) > strip(b)){
    return 1
  } else {
    return -1;
  }
});
console.table(sortedBands);
```
As the strip function is within the function, it will not effect what is actually in the array. This means it will remove the "an" and "the" for the sake of the function but then the array will still show the original band name.

<h3>Turn this into a list</h3>

```
document.querySelector("#bands").innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join("");
```
Here you are changing the innterHMTL of the list with the ID of bands in to each of the sortedBands and we used the .map() function. 
The join("") function turns the array into a string to ensure that you do not get each comma in the array included in the list.
