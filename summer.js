function back(){
    window.location = 'index.html';
}
function randomsummer(){
    var number = Math.floor(Math.random() * 11);
    console.log(number);
    //code for dress:
    if(number >= 1 && number <= 8){
        console.log('Number is ' + number + ', outfit is dress');
        document.getElementById("randomdisplaysummer").innerHTML = 'Dress';
    }
    //code for shirt and shorts:
    else if(number == 10 || number == 11){
        console.log('Number is ' + number + ', outfit is shirt and shorts');
        document.getElementById("randomdisplaysummer").innerHTML = 'Shirt and shorts';
    }
}
function reset(){
    number = "...";
    document.getElementById('randomdisplaysummer').innerHTML = number;
}