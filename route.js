const express =require('express');
const app = express();

app.get('/:createArray', function (req, res) {
        let newArr = [];
        for (let i = 0; i < req.params.num; i++) {
            let result = Math.floor(1 + Math.random() * (10000 - 1));
            result = result + (result % 2);
            newArr.push(result)
        }
    res.send(newArr)
})

app.listen(3012, function () {
    console.log('Сервер запущен');
})//Создать роут на сервере, который получит количество нужных значений и вернет массив рандомных числовых значений в
// любом диапазоне, но обязательно всех четных. Например, count: 3 => result: [2, 16, 48]