/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 */
;(() => {
    function main() {
      window.requestAnimationFrame(main);
      executeMain();
    }
    main(); 
})();

function executeMain(){
    draw(gameObject)
    userInput = acceptInput();
    gameObject = calculate(userInput);
}
