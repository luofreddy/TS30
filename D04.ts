let f1 = function(){
  console.log(123)
};

// ts 需要知道輸入型別才能推論出輸出型別( Implicit Any)
const addition = function (param1, param2) {
  return param1 + param2;
};

let add = function (param1: number, param2:number) {
  return param1 + param2;
};


let stringAdd: string = add('hello', 'world');

add = function(){
  return 'hello'
}

let test1 = function(){
  return undefined
}

let test2 = function():undefined{
  return undefined
}

let test3 = function():undefined{
}

let test4 = function():void{
  return undefined
}