(function () {
    function fruitsIterator(array) {
      let indexPosition = 0;
      return {
        next: function next() {
          if (indexPosition < array.length) {
            return {
              value: array[indexPosition++],
              done : false
            }
          } else {
            return {
              value: null,
              done : true
            }
          }
        }
      }
    }
  
    let fruitIter = fruitsIterator(['Apple', 'Mango', 'Grapes', 'Banana']);
    console.log(fruitIter.next());
    console.log(fruitIter.next());
    console.log(fruitIter.next());
    console.log(fruitIter.next());
    console.log(fruitIter.next());
  }());
  