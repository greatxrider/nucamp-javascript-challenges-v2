// try {
//     console.log("start of try runs");
//     nucamp;
//     console.log("end of try (never reached)");
// } catch (err) {
//     console.log(`Error has occurred ${err.name}: ${err.message}`);
// } finally {
//     console.log("this is the finally block");
// }

// try {
//     let userData = '{ "age":30 }';
//     let user = JSON.parse(userData);

//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }

//     console.log(user.name);
    
// } catch (e) {
//     console.log("jsonErr " + e.message);
//     console.log(e.name);
//     console.log(e);
// }

function printVar() {
    // Try to do something with a variable that doesn't exist
    try {
      console.log(hero);
    } catch (error) {
      alert(error.message);
    } finally {
      console.log("The process is now postponed");
    }
    // Catch it and alert an error message
    // Add a "finally" block that alerts the test is complete
  }

printVar();
  
  



