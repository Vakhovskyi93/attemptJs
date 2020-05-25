module.exports = function test ( arr, availeble, allowed ){
    let test =[];
    arr.map( item => {
        if ( allowed.includes( item )) {
            if ( availeble.includes( item ) ) { test.push( item )}
        }
        if ( !allowed.includes( item ) ) { console.log( 'allow ',item ) }
    });
    return test;

}
