var cnt =0;
var searchString = "Feed Updates";
var intId = setInterval( function() {
	var array = document.querySelectorAll('span');
	for(var i = 0; i < array.length; i = i + 1) { 
    		var text1 = array[i].textContent; 
    		if ( text1.includes(searchString)){
        		//console.log(text1);
        		new Promise(r => setTimeout(r, 2000)); array[i].click();
    			//array[i].scrollIntoView();
    		}
	}
	
	if (++cnt === 2) {
       window.clearInterval(intId);
   }
}, 2000);




// need to test the stopping process, not bullet proof.
