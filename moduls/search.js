const test = require ('./test');
const beterChoice = require ('./beterChoice')
module.exports = function search ( allowed, preferred, availeble ) {
    let newArr = [];
    let notFinded = [];
    preferred.map(item => {

        if (!allowed.includes(item)) {
            notFinded.push(item);
        } else {
            if (availeble.includes(item)) {
                newArr.push(item)
            } else {
                notFinded.push(item)

            }
        }
    });
    let arr = [];
    let nextItemAfternotFinded;

    notFinded.map(item => {

        let i = allowed.find(e => e > item)
        if (i) {

            if (availeble.find(e => e == i) !== undefined) {
                newArr.push(i)
            } else {
                console.log()
            }
        }


        if (nextItemAfternotFinded == undefined) {

            let y = allowed.reverse().find(e => e < item)
            if (y) {
                if (availeble.find(e => e == y) == undefined) {
                } else {
                    nextItemAfternotFinded = availeble.find(e => e == y)
                }
            }

        }


        if (nextItemAfternotFinded !== undefined) {
            newArr.push(nextItemAfternotFinded);
            arr.push(nextItemAfternotFinded);
            test(arr, availeble, allowed);
        } else {
            test(arr, availeble, allowed);
        }

        function delRepl( arr ) {
            let readyTo = [];
            arr.filter( function( item, pos ) {

                if( arr.indexOf(item) == pos ) {
                    readyTo.push( item );
                }
            })
            newArr = readyTo;
            beterChoice(newArr);
        }
        delRepl(newArr);


    })
}


