/**
 * Intersection Types
 *
 * And
 */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: 'John',
    age: 30,
    phone: '1234567890',
    address: '123 Main St',
};

type NumberAndString = number & string; // Error: Type 'number' is not assignable to type 'string'.

// let numberAndString: NumberAndString = undefined;
