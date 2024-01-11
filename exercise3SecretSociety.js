// Secret Society

/**
Find the name of a secret society based on the first letter of each member's name.

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
 */

const secretName = arrayNames => {
    let res = '';
    arrayNames.forEach( name => {
        res += name[0];
    });
    return res;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]))
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']))
console.log(secretName(['Harry', 'Ron', 'Hermione']))