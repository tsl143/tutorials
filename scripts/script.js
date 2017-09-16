document.getElementById('notifiyMe').addEventListener('click', function(){
    browser.runtime.sendMessage({
        action:'notify'
    })
})