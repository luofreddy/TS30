// 基礎物件型別 Object 、 Array 、 Class and Class instance

// TS 擴充型別 Enum 、 Tuple

// function

let info = {
  name: 'freddy',
  age: 24,
  hasPet: true
}

//  將會直接辨識出物件內各個 key 的 type

let someone = {
  knows: undefined,
  identity: null
};

// nullable type 在 Object 中不會被定義成 any

info.name = false;

someone.knows = 'hello';
someone.identity = 'world';

// key 不能少
info = {
  name: 'OPA',
  age: 4
}

// key 不能多
someone = {
  ...someone,
  dinner: 'rice'
}

// 在 TS4 之前的版本操作 Object delete 是不會報錯的
delete info.hasPet

let nestedObject = {
  prop: 'Hello',
  child: {
    prop1: 123,
    prop2: false
  }
};

let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
  goodbye: 'Cruel World'
});

obj4.goodbye='1123';
obj4.hello = 111;

let justAnObject:object = {hello: 'test'};
justAnObject.test = 'eee';

// 當 type 定義成 object 不能進行部分覆寫
justAnObject.hello = '111';

// 可以完全覆寫
justAnObject = {who: 'is me'};

// 可以被 function 覆寫
justAnObject = function(){
  console.log(0);
}

// 可以被 array 覆寫
justAnObject = [1, 2, 3];

justAnObject = new Date();
justAnObject = new String('hello');

justAnObject = Object;
justAnObject = Array;

// object type 可以被所有不是原始型別的覆寫

