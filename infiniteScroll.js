setInterval(myTimer, 1000);
setTimeout(clrTimer, 4000);
function clrTimer() {
    clearInterval(myTimer);
}
var searchString = "Feed Updates";
function myTimer() {
	var array = document.querySelectorAll('span');
	for(var i = 0; i < array.length; i = i + 1) { 
    var text1 = array[i].textContent; 
    if ( text1.includes(searchString)){
        //console.log(text1);
        new Promise(r => setTimeout(r, 2000)); array[i].click();
    	//array[i].scrollIntoView();
    }
	}
}

// need to test the stopping process, not bullet proof.
