    for (var caunt = 20; caunt > 0; caunt = caunt - 1){
        console.log(caunt)
    }


    let arr = [10,20,30,50,235,3000];
    console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));


    
    var svetovor = prompt('Жол чырактын бир онун танда!').trim().toLocaleLowerCase()
    var red = ['Токто']
    var orange = ['Даярдан']
    var green = ['Ото бер']
    switch (svetovor) {
        case 'red':
            alert(red)
            break
        case 'orange':
            alert(orange)
            break
        case 'green':
            alert(green)
            break
        default:
            alert('Ката')
            break
    }