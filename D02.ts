// 型別推論

let s1 = 'hello';
s1 = 10;

// 型別備註

let s2:string;
s2 = 10;

// Nullable Types

let n1 = null;
n1 = 'hello'
n1 = 123;

let un1 = undefined;
un1 = 'hello'
un1 = 123

let n2:null = null
n2 = 'hello'


export {}
// 在 TS 沒有被 export 的檔案都會被當作再同一個 scope 裡面
