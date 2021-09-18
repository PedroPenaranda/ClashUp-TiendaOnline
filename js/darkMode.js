$(".btnCheckbox").click(function(){
    if($('input.btnCheckbox').is(':checked')){
        $('.mode').attr('href', './CSS/darkMode.css');
    }else{
        $('.mode').attr('href', './CSS/estilo.css');
    }
});

$(".btnCheckbox1").click(function(){
    if($('input.btnCheckbox1').is(':checked')){
        $('.mode').attr('href', './CSS/gamerMode.css');
    }else{
        $('.mode').attr('href', './CSS/estilo.css');
    }
});

$(".btnCheckbox2").click(function(){
    if($('input.btnCheckbox2').is(':checked')){
        $('.mode').attr('href', './CSS/matrixMode.css');
    }else{
        $('.mode').attr('href', './CSS/estilo.css');
    }
});