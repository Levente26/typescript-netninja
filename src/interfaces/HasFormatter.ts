export interface HasFormatter {
    format(): string;
}

// interfaces
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void;
//     spend(a: number): number;
// };

// const me: IsPerson = {
//     name: 'Levi',
//     age: 21,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     },
// };
// console.log(me);

// const greetPerson = (person: IsPerson) => {
//     console.log('Hello', person.name);
// };

// greetPerson(me);