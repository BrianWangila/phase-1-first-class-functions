function receivesAFunction(cb){
  return cb()
}
receivesAFunction(function (cb){
  return "I am eating"
})

function returnsANamedFunction (){
  let name = returnsANamedFunction
  return name;
  

}
returnsANamedFunction();

function returnsAnAnonymousFunction (){
  return function(name){
    return "Brian"
  }
}