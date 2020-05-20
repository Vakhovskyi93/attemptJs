let availeble = [ 240, 720];
let allowed = [ 240,360, 1080];
let preferred = [240,360]

class Task {
    constructor (){
        this.sort; 
        this.deleteRepl;
        
    }
    sort(arr){
      return arr.sort((prev, next) => prev - next)
    
    }
   

     
}
 

function ettempt(avail, allow, preferr) {
    
    let allowcopy = allow;
    let preferrcopy = preferr;
    const task = new Task();
    let anyItems = [];
   
    ( function() { 
        if( allowcopy.includes( 'any' )) { findIndex(allowcopy ,  preferrcopy )}
        if( preferrcopy.includes( 'any' )) { findIndex( preferrcopy, allowcopy )}
        function findIndex( arr, secondarr ) {
            if( arr.indexOf( 'any' ) == 0 ) {
            anyItems = secondarr.filter( item => item < arr[1] )
                anyItems.push( arr.pop() );
                preferrcopy=anyItems;
                 
             } else {
                anyItems = secondarr.filter( item => item > arr[0] )
                anyItems.push( arr.shift() )
                allowcopy = anyItems
                }
        }
 })()
   
let availeble = task.sort( avail );
let allowed = task.sort( allowcopy );
let preferred = task.sort( preferrcopy );
   
function search ( allowed, preferred ) {
    let newArr = [];
    let notFinded = [];
    preferred.map( item => {

        if (!allowed.includes( item )) {
            notFinded.push( item );
        } else {
            if ( availeble.includes( item )) { newArr.push( item )
            } else {
                notFinded.push( item )
                
                }
            }
      });
    let arr = [];
    let nextItemAfternotFinded ;
   
    notFinded.map(item => {
         
        let i =  allowed.find( e => e > item  )
        if( i ) {
                
                if (availeble.find( e => e == i  ) !== undefined ) {
                    newArr.push( i )
                    }
                else  {
                    console.log( )
                }    
            }

            
            if( nextItemAfternotFinded == undefined ) {
               
                let y =  allowed.reverse().find( e => e < item )
                if(y){
                    if( availeble.find( e => e == y ) == undefined ) {
                    } else { nextItemAfternotFinded = availeble.find( e => e == y )}
                }
                 
            }
            

            if ( nextItemAfternotFinded !== undefined ){
                newArr.push( nextItemAfternotFinded );
                arr.push( nextItemAfternotFinded );
                test( arr );
            } else {
                test( arr ); 
            }
            
    });
    
    delRepl(newArr);
    
     
    function test ( arr ){
        let test =[];
        arr.map( item => {
         if ( allowed.includes( item )) { 
                if ( availeble.includes( item ) ) { test.push( item )}
                }
            if ( !allowed.includes( item ) ) { console.log( 'allow ',item ) }
        });
       
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
    function beterChoice( arr ){
        if ( arr ) { newArr = arr }
        else { newArr = Math.max.apply(  null, arr ) }
    }
console.log('Result ==>', newArr)
}
search( allowed, preferred)
}
ettempt(availeble, allowed, preferred)