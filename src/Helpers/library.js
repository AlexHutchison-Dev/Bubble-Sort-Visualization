// A Module to store genreal helper functions

/* A function that will not be called while it continues to be incvoked.
* @param {function} func - the function to be called after specified period of cessation of being invoked
* @param {int} ms - the required time of inactivity before calling function in milli-secconds 
*/
export function debounce(func, ms) {
  var timer;

  return function (...args) {
    const later = () => {
      clearTimeout((timer));
      func(...args);
    };


    clearTimeout(timer);
    timer = setTimeout(later, ms);
  };
}
