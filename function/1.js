// var str = { 'name': 'joyowo', 'age': 20 };
var str = [1, 2, 3, 4];


$.each(str, function(index, value) {
    console.log(value);
});


var elem = document.getElementsByTagName('div');

// 由于点击任何一个div事件时，i的值已经被赋值为5
// for (var i = 0; i < elem.length; i++) {
//     elem[i].onclick = function() {
//         alert(i);
//     }
// }



// 在绑定点击事件外部封装一个立即执行函数，并将i传入该函数
for (var i = 0; i < elem.length; i++) {
    (function(n) {
        elem[n].onclick = function() {
            alert(n);
        }
    })(i);
}


// 对象的深拷贝
// Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。可以避免修改源对象
var obj2 = {
    name: "xiaoming",
    age: 20
};

var newObj2 = Object.assign({}, obj2, { color: 'blue' });

newObj2.name = 'zhangsan';

console.log(obj2.name); //xiaoming
console.log(newObj2.name); //zhangsan
console.log(newObj2.color); //blue