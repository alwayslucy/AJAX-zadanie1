$(document).ready(function(){

    const btn = $('button');

    const newDiv = $('<div id="dane-programisty"></div>');
    btn.after(newDiv);

    btn.click(function(){

         $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            $('#dane-programisty').text(data);
        });
    });
    
});