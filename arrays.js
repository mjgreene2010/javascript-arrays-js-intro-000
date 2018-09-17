
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
        return [element, ...array]
}

/*function addElemenToBeginningOfArray(array, element) { var arr = ['array']
return ['element', ...arr];
} */

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
return array
}

/*function destructivelyAddElementToBeginningofArray(array, element){
   var arr = ['array']
return ['element', ...arr];
  }*/

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){ array.push(element)
return array
  }

/*when to use ...adcd, and abcd..., versus 
  when to use unshift and push */
  
  function accessElementInArray(array, index){
    return array[index]
  }
  //why did it require the second element
  
  function  destructivelyRemoveElementFromBeginningOfArray(array){ 
    array.shift()
    return array
    
  }

/*As with unshift, this method is destructive; it mutates the underlying array*/

function removeElementFromBeginningOfArray(array){ return array.slice(1)
  
}

function destructivelyRemoveElementFromEndOfArray(array){ 
    array.pop()
    return array
  
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
  
}


