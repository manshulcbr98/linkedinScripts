var array = document.querySelectorAll('span');
var connectString = "Connect";
var connectionsString = "Connections";
for(var i = 0; i < 80; i = i + 1) { 
    var text1 = array[i].textContent;
    //console.log(text1);
    if ( text1.includes(connectString) && !text1.includes(connectionsString)){
        await new Promise(r => setTimeout(r, 2000)); array[i].click();;
        addNote();
    }
}

function addNote(){
    var searchString2 = "Add";
    var array2 = document.querySelectorAll('span');
    for(var j = 0; j < array2.length; j = j + 1) {
        var text2 = array2[j].textContent;
        
        //if ( text2.includes(searchString2)) {
            console.log(text2);
        //    await new Promise(r => setTimeout(r, 2000)); array2[j].click();;
        //}
    }
}
