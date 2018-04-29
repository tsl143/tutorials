const getItem = browser.storage.local.get('mycolor');
getItem.then(response => {
    const myColor = response.mycolor;
    if(myColor) {
        document.getElementById('myButton').style.background = myColor;
    }
})

document.getElementById('myButton').addEventListener('click', function(){
    document.getElementById('myLabel').textContent = "YAY!";
})