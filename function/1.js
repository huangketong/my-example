// var str = { 'name': 'joyowo', 'age': 20 };
var str = [1, 2, 3, 4];


$.each(str, function(index, value) {
    console.log(value);
});


var elem = document.getElementsByTagName('div');

// for (var i = 0; i < elem.length; i++) {
//     elem[i].onclick = function() {
//         alert(i);
//     }
// }

for (var i = 0; i < elem.length; i++) {
    (function(i) {
        elem[i].onclick = function() {
            alert(i);
        }
    })(i);
}