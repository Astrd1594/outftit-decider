function back(){
    window.location = 'index.html';
}
function randomwinter(){
    var number = Math.floor(Math.random() * 12);
    console.log(number);
    //code for skirt and tights:
    if(number >= 1 && number <= 7){
        console.log('Number is ' + number + ', outfit is skirt & tights');
        document.getElementById('randomdisplaywinter').innerHTML = 'Skirt and tights';
    }
    //code for pants:
    else if(number > 8 && number <= 12){
        console.log('Number is ' + number + ', outfit is pants');
        document.getElementById('randomdisplaywinter').innerHTML = 'Pants';
    }
}
function reset(){
    number = '...';
    document.getElementById('randomdisplaywinter').innerHTML = number;
}