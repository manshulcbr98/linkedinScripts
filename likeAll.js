var array = document.getElementsByClassName('feed-shared-social-actions feed-shared-social-action-bar social-detail-base-social-actions feed-shared-social-action-bar--full-width feed-shared-social-action-bar--has-social-counts');
var searchString = "Like";
for(var i = 0; i < array.length; i = i + 1) {
    var array2 = array[i].querySelectorAll('span');
    await new Promise(r => setTimeout(r, 2000)); array2[1].click();;
    if ( text1.includes(searchString)){
        await new Promise(r => setTimeout(r, 2000)); array[i].click();;
    }
}
