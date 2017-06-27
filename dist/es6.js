"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _math = require("./math.js");

var add = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var nums = [1, 2, 3, 4];
var even = [];
nums.forEach(function (val) {
    if (val % 2 == 0) {
        even.push(val);
    }
});
even.forEach(function (val) {
    console.log(val + ", ");
});

function f(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;

    return x + y + z;
}
console.log(f(1) === 50);

function f1(x, y) {
    return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
}
console.log(f1(1, 2, 3, 4) === 6);

var param = ["hello", true, 8];
var other = [1, 2].concat(param);

function f(x, y) {
    return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
}
console.log(param);
console.log(other);

var str = "foo";
var chars = [].concat(_toConsumableArray(str));
console.log(chars);

var customer = { name: "Foo" };
var card = { amount: 8, product: "bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\nwant to buy " + card.amount + " " + card.product;
console.log(message);

var report = function report(match) {
    console.log(JSON.stringify(match));
};

var parser = function parser(input, match) {
    for (var pos = 0, lastPos = input.length; pos < lastPos; pos++) {
        for (var i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos;
            var found = match[i].pattern.exec(input);
            if (found !== null) {
                match[i].action(found);
                pos = match[i].pattern.lastIndex;
                break;
            }
        }
    }
};

parser("Foo 1 Bar 7 Baz 42", [{ pattern: new RegExp("^Foo\\s+(\\d+)", "y"), action: function action(match) {
        return report(match);
    } }, { pattern: new RegExp("^Bar\\s+(\\d+)", "y"), action: function action(match) {
        return report(match);
    } }, { pattern: new RegExp("^Baz\\s+(\\d+)", "y"), action: function action(match) {
        return report(match);
    } }, { pattern: new RegExp("^\\s*", "y"), action: function action(match) {} }]);

var x = 'aaa';
var objx = { x: x };
console.log(objx.x);

var objf = {
    foo: function foo(a, b) {
        console.log();
    }
};

var list = [1, 2, 3];
var m = list[0],
    n = list[2];

console.log("m:" + m + " n:" + n);

function fo(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        val = _ref2[1];

    console.log(name, val);
}

function go(_ref3) {
    var n = _ref3.name,
        v = _ref3.val;

    console.log(n, v);
}

function ho(_ref4) {
    var name = _ref4.name,
        val = _ref4.val;

    console.log(name, val);
}

fo(["bar", 42]);
go({ name: "foo", val: 8 });
ho({ name: "bar", val: 44 });

var res = add.sum(3, 5);
console.log("res " + res);