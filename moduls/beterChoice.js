module.exports = function beterChoice( arr ){
    let newArr = [];
    if ( arr ) { newArr = arr }
    else { newArr = Math.max.apply(  null, arr ) }
    console.log('Result ==>', newArr)
}