// Write your solution here!
 const cats =["Milo", "Otis", "Garfield"]
 
function destructivelyAppendCat(name){
    return cats.push(name)

}
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    return cats.pop(name)
}


function destructivelyRemoveFirstCat(){
    return cats.shift(name)

}
 
function appendCat(newCat) {
    newCat = [...cats, "Broom"];
    return newCat;
  }
  function prependCat(addCat) {
    addCat= ["Arnold", ...cats];
    return addCat;
  }
  

  function removeLastCat() {
    let lastcatRemove= cats.slice(0, 2);
    return lastcatRemove;
  }
  
function removeFirstCat(){
    let firstCatRemove = cats.slice(1)
    return firstCatRemove ;

}




