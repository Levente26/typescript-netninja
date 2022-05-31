import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// DOM Elements
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form);
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
;
// const docThree: Resource<object>= {
//     uid: 1,
//     resourceName: 'person',
//     data: {
//         name: 'Levi',
//     }
// };
// const docFour: Resource<string>= {
//     uid: 1,
//     resourceName: 'person',
//     data: 'some data'
// }
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const doc1 = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: {
        name: 'Levi',
    }
};
const doc2 = {
    uid: 10,
    resourceType: ResourceType.BOOK,
    data: {
        title: 'name of the wind css lib'
    }
};
// TUPLES
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, false];
tup[0] = 'ken';
tup[1] = 30;
let student;
student = ['chun-li', 2234];
