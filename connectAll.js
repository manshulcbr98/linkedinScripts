// Go to connections tab and run the script.
// Will send connection request to all visible recommendations

var array = document.querySelectorAll('span');
var searchString = “Connect”;
for(var i = 0; i < array.length; i = i + 1) { 
    var text1 = array[i].textContent; 
    if ( text1.includes(searchString)){
        await new Promise(r => setTimeout(r, 2000)); array[i].click();;
    }
}
