/* Выполнить следующие пункты внутри функции fn (см. заготовку: 7-objects.js)
Создайте объект с одним полем name и присвойте его в константу.
Создайте объект с одним полем name и присвойте его в переменную.
Попробуйте поменять поле name у обоих объектов.
Попробуйте присвоить другой объект в оба идентификатора.
Объясните поведение кода и оставьте только рабочий код.
Реализуйте функцию createUser с сигнатурой createUser(name: string, city: string): object. Пример вызова: createUser('Marcus Aurelius', 'Roma') функция должна вернуть объект { name: 'Marcus Aurelius', city: 'Roma' } */
function fn() {
    const obj = { name: 'Alice' };
    let obj1 = { name: 'Bob'}; 
        obj.name = 'Charlie'; 
        obj1.name = 'Dave';
        console.log(obj);
        console.log(obj1);
        obj1 = { name: 'Frank' };
        console.log(obj);
        console.log(obj1);
    };
    fn();
    function createUser(name, city) {
        return { name: name, city: city }}
        console.log(createUser('Marcus Aurelius', 'Roma'));