// 1. 
$(function (){
    console.log('Lets get ready to party with jQuery')

// 2. 
$('article img').addClass('image-center')

// 3. 
$('article p:last-child').remove()

// 4
$('#title').css("font-size",Math.random()*100) 

// 5.
$('ol').append($("<li>", {text: 'Colby is my cat'}))

// 6. 
$("aside").empty().append($('<p>',{text:'I am very sorry for that goofy list'}))

// 7. 
$('.form-control').on('keyup blur change', function () {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css("background-color",
    "rgb(" + red + "," + green + "," + blue + ")")
})

// 8. 
$('img').on('click', function(e){
    $(e.target).remove()
})
})