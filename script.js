const elements = document.querySelectorAll("input, a, textarea, button");
console.log(elements); // all elements are stored in an array

elements.forEach((element) => {
  element.addEventListener("focus", (event) => {
    console.log("Element: " + event.target + " is focused");
    // one could have an announcer here with an aria-live attribute that announces the focused element
  });
});
