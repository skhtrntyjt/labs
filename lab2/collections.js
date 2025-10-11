/* Реализуйте телефонную книгу на массиве объектов.
Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги. Пример объекта: { name: 'Marcus Aurelius', phone: '+380445554433' } и добавьте несколько объектов в массив, чтоб было на чем проверять.
Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string. При вызове функция должна находить объект, где поле name равно аргументу name и возвращать номер телефона из объекта. Для поиска воспользуйтесь циклом for. A. Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
Задайте справочник (объект) с ключами равными значениям поля name (из предыдущего примера) и значениями равными полю phone.
Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string которая находит телефон в хеше по имени и возвращает номер телефона. Используйте hash[key] для поиска телефона. */
const phoneBook = [ { name: 'Marcus Aurelius', phone: '+380445554433' }, { name: 'Ivan Petrov', phone: '+380667778899' }, { name: 'John Smith', phone: '+380991112233' } ];
function findPhoneByName(name) {
    for (const person of phoneBook) {
        if (person.name === name) {
            return person.phone; }
        }
    }
console.log(findPhoneByName('Ivan Petrov'));
const phoneBookHash = { 'Marcus Aurelius': '+380445554433', 'Ivan Petrov': '+380667778899', 'John Smith': '+380991112233' };
function findPhoneByNameHash(name) {
    return phoneBookHash[name];
} 
console.log(findPhoneByNameHash('John Smith'));