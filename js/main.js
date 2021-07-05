$(document).ready(function(){

    const btn = $('button');

    const newDiv = $('<div id="dane-programisty"></div>');
    btn.after(newDiv);

    btn.click(function(){

         $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {

            let imieProgramisty = $('<p></p>').text(`Imie: ${data.imie}`);
            let nazwiskoProgramisty = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
            let zawodProgramisty = $('<p></p>').text(`Zawod: ${data.zawod}`);
            let firmaProgramisty = $('<p></p>').text(`Firma: ${data.firma}`);

            $(newDiv).append(imieProgramisty);
            $(newDiv).append(nazwiskoProgramisty);
            $(newDiv).append(zawodProgramisty);
            $(newDiv).append(firmaProgramisty);
        });
    });
    
});