// write a function that returns any items in an array that are duplicated

function duplicates(l) {
    var new_list = [];
    var duplicate_list = [];
    for (var i=0; i < l.length; i++) {
        if(new_list.indexOf(l[i]) == -1) {
            new_list.push(l[i]);
            console.log(new_list);
        }
        else if(new_list.indexOf(l[i]) != -1 && duplicate_list.indexOf(l[i]) == -1){
            duplicate_list.push(l[i]);
        }
    }
    return duplicate_list;
}



var list = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];

console.log(duplicates(list));