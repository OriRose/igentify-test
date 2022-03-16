const ITEMS = [];

function createItems(){
    for(var i=0;i<100;i++){
        let item = {id:'i'+i,name:'item'+i}
        ITEMS.push(item);
    }
}

createItems();

export function getItems(page,size){
    return ITEMS.slice((page-1)*size,page*size);
}