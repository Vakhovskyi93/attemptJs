let availeble = [ 240, 720];
let allowed = [ 240,360, 1080];
let preferred = [240,360]


 
const ModuleSort = require('./moduls/request');
const search = require('./moduls/search');

const moduleSort = new ModuleSort();



function ettempt(avail, allow, preferr) {

    let allowcopy = allow;
    let preferrcopy = preferr;
    let anyItems = [];

    (function () {
        if (allowcopy.includes('any')) {
            findIndex(allowcopy, preferrcopy)
        }
        if (preferrcopy.includes('any')) {
            findIndex(preferrcopy, allowcopy)
        }

        function findIndex(arr, secondarr) {
            if (arr.indexOf('any') == 0) {
                anyItems = secondarr.filter(item => item < arr[1])
                anyItems.push(arr.pop());
                preferrcopy = anyItems;

            } else {
                anyItems = secondarr.filter(item => item > arr[0])
                anyItems.push(arr.shift())
                allowcopy = anyItems
            }
        }
    })();

    let availeble = moduleSort.sort(avail);
    let allowed = moduleSort.sort(allowcopy);
    let preferred = moduleSort.sort(preferrcopy);

    search(allowed, preferred, availeble);

}

ettempt(availeble, allowed, preferred);

