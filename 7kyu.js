const codewars = {

    //Exes and Ohs
    XO: (str) => {
        let x = 0;
        let o = 0;
        const newString = str.toLowerCase();
        newString.split('').forEach(element => {
            if(element === 'x')
                x+=1;
            else if(element === 'o')
                o+=1;
            else
            return true;
        });

        return x === o;
    },

}

module.exports = codewars;