const _ = require('lodash');

const arr = [{ num: 5 },{ num: 1 },{ num: 1 },{ num: 3 }]
// console.log(_.filter(arr, { 'num': 1 }));
// console.log(_.orderBy(arr, 'num', 'desc'));
// console.log(_.cloneDeepWith(arr, value => {
//     if (value instanceof ObjectId) {
//         return value.toString();
//     }
// }))
// const merging = objVal => objVal
// console.log(_.mergeWith(arr[0], arr[2], merging));
// console.log(_.uniqBy(arr, 'num'))
// console.log(_.pick({a:1,b:2,c:3}, ['a', 'b']));
// const uniqFoundUsers = _.uniqBy(arr, _.property('s'));
// console.log(uniqFoundUsers);
// console.log(_.sortBy(arr, "id"))
// console.log(_.max([new Date(), new Date(0)]))
// console.log(_.head([]))
// const vars = [{ key: 'unencrypted', value: 'notitisnt' }, {
//     key: 'encrypted',
//     value: 'yesitis',
    // encrypted: true
// }]
// var encryptedVar = _.find(vars, 'key', 'unencrypted');
// console.log(encryptedVar);
// _.each(vars, v => console.log(v))
// const obj = _.merge({}, { name: "smull", filter: "haim" });
// const obj = _.clone( { name: "smull", filter: "haim" });
// console.log(obj);
// console.log(_.head(({ key: 'value' })))
// console.log(_.range(1, 1));

module.exports = () => console.log('hello world!')
