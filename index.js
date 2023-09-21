function receivesAFunction(callback) {
    // Check if the callback is indeed a function
    if (typeof callback === 'function') {
      // Call the callback function
      callback();
    } else {
      console.error('The argument is not a valid callback function.');
    }
  }
  
  // Example usage:
  function myCallback() {
    console.log('Callback function called!');
  }
  
  receivesAFunction(myCallback);



  function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
      //  the function body of the named function
      console.log('Named function called!');
    }
    
    return namedFunction;
  }
  
  // Call the function to get the named function
  const myNamedFunction = returnsANamedFunction();
  
  // use the named function
  myNamedFunction(); 



  function returnsAnAnonymousFunction() {
    return function() {
      //  an anonymous function
      console.log('Anonymous function called!');
    };
  }
  
  // Call the function to get the anonymous function
  const myAnonymousFunction = returnsAnAnonymousFunction();
  
  //  use the anonymous function
  myAnonymousFunction(); 
  
  
  