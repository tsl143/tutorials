document.getElementById('myChoice').addEventListener('click', function(){
    //alert(document.getElementById('myColor').value)
    browser.storage.local.set({mycolor: document.getElementById('myColor').value})
})