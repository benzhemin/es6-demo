

let nums = [1, 2, 3, 4]
let even = [];
nums.forEach((val) => {
    if (val%2 == 0){
        even.push(val);
    }
})
even.forEach((val) => {
    console.log(`${val}, `);
})

function f (x, y=7, z=42){
    return x + y + z
}
console.log(f(1)===50)

function f1 (x, y, ...a){
    return (x+y) * a.length
}
console.log(f1(1, 2, 3, 4) === 6)

let param = ["hello", true, 8]
let other = [1, 2, ...param]

function f (x, y, ...a){
    return (x+y) * a.length
}
console.log(param) 
console.log(other)

let str = "foo"
let chars = [...str]
console.log(chars)

let customer = { name : "Foo"}
let card = { amount: 8, product: "bar", unitprice:42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product}`
console.log(message);

let report = (match) => {
    console.log(JSON.stringify(match))
}

let parser = (input, match) => {
    for(let pos=0, lastPos=input.length; pos<lastPos; pos++){
        for(let i=0; i<match.length; i++){
            match[i].pattern.lastIndex = pos;
            let found = match[i].pattern.exec(input)
            if (found !== null) {
                match[i].action(found)
                pos = match[i].pattern.lastIndex
                break
            }
        }
    }
}

parser("Foo 1 Bar 7 Baz 42", [
    {pattern: /^Foo\s+(\d+)/y, action: (match) => report(match)},
    { pattern: /^Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^\s*/y,         action: (match) => {}            }
])

let x = 'aaa'
let objx = {x};
console.log(objx.x);

let objf = {
    foo(a, b){ console.log()}
}

let list = [1, 2, 3]
let [m, ,n] = list
console.log(`m:${m} n:${n}`)

function fo([name, val]){
    console.log(name, val)
}

function go({name:n, val:v}){
    console.log(n, v)
}

function ho({name, val}){
    console.log(name, val)
}

fo(["bar", 42])
go({name:"foo", val:8})
ho({name:"bar", val:44})

import * as add from "./math.js"

let res = add.sum(3, 5)
console.log(`res ${res}`)





