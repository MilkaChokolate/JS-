
testFunction = (num) =>{
    let a = Math.trunc(num / 100);
    let b = Math.trunc(num % 100 / 10);
    let c = num % 10;
    return a + ' сотен '  + b + " десятков " + c + ' единиц';
}
console.log(testFunction(295));
//Напишите псевдокод по задаче:
// “В функции вывести в консоль лог единицы трехзначного числа, поданного в параметры функции.
// Например, 125 => 1 сот; 2 дес; 5 ед”



testArray = (arr, element) =>{
    return arr.indexOf(element);
}
console.log(testArray([1,2,3,4,5], 4));
//Напишите функцию, которая вернет первый номер элемента, которого нужно проверить есть ли он в массиве ?



function testElement(arr) {
   return arr.every(value => value % 2 === 0);
}
console.log(testElement([2,4,6]));
///Напишите функцию, которая вернет true, если все элементы соответствуют условию?



function uniqueArray(arr) {
    let result = [];
    for (let value of arr) {
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
console.log(uniqueArray([1,2,2,3,4,7,7,9]));
//Напишите функцию, которая вернет отсортированный массив уникальных значений


function sortArray(arr, param){
    if (param === 'desc'){
        arr.sort(function(a, b) { return a - b; });
        return arr;
    } else {
        arr.sort(function(a, b) { return b - a; });
        return arr;
    }
}
console.log(sortArray([3,4,5,1], 'asc'));
//Отсортировать коллекцию по конкретному свойству объекта и переданным параметром (asc, desc)

filterArray = (arr1, arr2) =>{
    for (let i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i])){

        } else {
            arr1.push(arr2[i]);
        }
    }
    return arr1;
}
console.log(filterArray([1,2,3,4], [1,4,6]));

function randomNumberFunction(num){
    let newArr = [];
    for (let i=0; i < num; i++){
        let result = Math.floor(1 + Math.random() * (10000 - 1));
        result = result + (result % 2);
        newArr.push(result)
    }
    return newArr;
}
console.log(randomNumberFunction(6));


let collection = [
    {name: 'width',
     value: 300},
    {name: 'height',
     value: 100}
]
function objectToObject(collection){
    let obj = {};
    for (let i = 0; i < collection.length; i++){
        obj[collection[i].name] = collection[i].value
    }
    return obj;
}
console.log(objectToObject(collection));
//Напишите функцию, которая преобразует массив вида let arr = [{name: ‘width’, value: 300}, {name: ‘height’, value: 100}];
//в объект let obj = {width:300, height: 100}; Количество объектов в массиве неограниченно.