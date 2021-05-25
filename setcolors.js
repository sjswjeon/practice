var Links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
        }
    }
}
var target = document.querySelector('body')
var Body = {
    setColor:function(color){
    document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
    }
}
function dayNightHandler(self){
    if(self.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';

    Links.setColor('powderblue');
    } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night'; 

    Links.setColor('blue');
    }
}