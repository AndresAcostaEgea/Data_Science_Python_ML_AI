$('#divOne').animate({'width':'800px','opacity':'1'},5000);
$('p').html("I'm being animated!");
$('#divTwo').animate({'height':'450px','opacity':'1'},5000);

$('#divOne').hover(function() {$(this).animate({
    'top':'450px',
    'left': '50px',
}),100000});

$('#divTwo').hover(function() {$(this).animate({
    'left':'750px',
    'bottom':'120px',
}),900000});

