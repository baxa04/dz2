let  num1 =Number(prompt('Введите первое число!'))
let  mark = (prompt('Введите математических выражений !'))
let  num2 = Number(prompt('Введите второе число!'))
let calculate = function(){
    switch (mark) {
        case '+':
            alert(num1+num2)
            break
        case '-':
            alert(num1-num2)
            break
        case '*':
            alert(num1*num2)
            break
        case '/':
            if (num2 !== 0){
                alert(num1/num2)
            }else {
                alert('На ноль делить нельзя')
            }
            break
        default:
            break
    }
}
calculate()


////////////////////////////////////////////////////////////////
var  num1 =Number(prompt('Введите первое число!'))
var  num2 = Number(prompt('Введите второе число!'))

var sravnivanie = function () {
    if (num1 <= num2) {
        console.log(num1)
    } else if (num1 >= num2) {
        console.log(num2)
    } else {
        alert('введите цифрами а не буквами')
    }
}
sravnivanie()
//////////////////////////////////////////////////////

var name = prompt('введите слово')
var off = function (){
    console.log(name.length)
}
off()




