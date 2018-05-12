
# what is the differnce between `undefined` and `null`


the first difference, is the type of both values:

```javascript

let x1=undefined;
let x2=null;

console.log(typeof(x1));   //--> undefined
console.log(typeof(x2));   //--> object
```

## undefined is for:
* for every variable that is not init in the decleration


```typescript
let x:number;
alert(x);  //--> will show undefined

```


* the returned value for every function that returns void 

```typescript
alert(testFunc());   //--> will show undefined


function testFunc():void{
   console.log("hello from test function");
}
```


## null is for:
* deleting a ref from the stack to the heap
```javascript

let x1=[1,2,3];  //--> x1 is in the stack - and holds a ref to [1,2,3] in the heap

x1=null;  //--> x1 stops to ref [1,2,3] 
```
