function isString(names){
    return names.reduce((result, element) => {return result && typeof element === "string"}, true);
    }

const codewars = {
    likes: (names)=>{
        if(names.length === 0)
        return `no one likes this`;
        else if(names.length === 1){
            return names.reduce((statement, name) => {return `${statement}${name} likes this`}, '');
        }
        else if(names.length === 2){
            return `${names[0]} and ${names[1]} like this`;
        }
        else  if (names.length === 3 ){
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        }
        else if(names.length >= 4){
            const others = names.length - 2;
            return `${names[0]}, ${names[1]} and ${others} others like this`;
        }
    }
}

// const codewars = {
//     likes: (names) => {
//         return names.reduce((statement, name) => {
//             return statement;
//         }, '');
//     }
// }

module.exports = codewars;