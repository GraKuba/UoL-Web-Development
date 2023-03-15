
// a script which filters through specific categories on the page

// grabbing elements from the dropdown button / show all button
var p = document.getElementById('push');
var c = document.getElementById('pull');
var hp = document.getElementById('legs'); 
var d = document.getElementById('set-default-button');   

// grabbing articles
var r = document.getElementById('article1')
var t = document.getElementById('article2')
var y = document.getElementById('article3')     

// adding functionality to each button
function pw() {
    
    r.style.display = 'block'
    t.style.display = 'none'
    y.style.display = 'none'
}


function ct() {
    r.style.display = 'none'
    t.style.display = 'block'
    y.style.display = 'none'
}


function hip() {
    r.style.display = 'none'
    t.style.display = 'none'
    y.style.display = 'block'
}


function all() {
    r.style.display = 'block'
    t.style.display = 'block'
    y.style.display = 'block'
}

//adding event listeners to dropdown button elements 
p.addEventListener('click', pw)
c.addEventListener('click', ct)
hp.addEventListener('click', hip)
d.addEventListener('click', all)
