var telMX = '01 800 4825452';
var telGT = '1 801 0006686';
var telHN = '80027919392';
var telPE = '0800 77631';

/* Call center México */
$('span#mx').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#mx').addClass('actual');
	$('div#tel_call_center table').css('visibility','visible');
	$('p#tel').html(telMX);
	$('a#cotizador').css('visibility','visible');
});
/* Call center Panama */
$('span#pa').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#pa').addClass('actual');
	$('div#tel_call_center table').css('visibility','hidden');
	$('a#cotizador').css('visibility','hidden');
});
/* Call center Guatemala */
$('span#gt').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#gt').addClass('actual');
	$('div#tel_call_center table').css('visibility','visible');
	$('p#tel').html(telGT);
	$('a#cotizador').css('visibility','hidden');
});
/* Call center Brazil */
$('span#br').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#br').addClass('actual');
	$('div#tel_call_center table').css('visibility','hidden');
	$('a#cotizador').css('visibility','hidden');
});
/* Call center Honduras */
$('span#hn').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#hn').addClass('actual');
	$('div#tel_call_center table').css('visibility','visible');
	$('p#tel').html(telHN);
	$('a#cotizador').css('visibility','hidden');
});
/* Call center Perú */
$('span#pe').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#pe').addClass('actual');
	$('div#tel_call_center table').css('visibility','visible');
	$('p#tel').html(telPE);
	$('a#cotizador').css('visibility','hidden');
});
/* Call center Brazil */
$('span#cr').click(function(){
	$('ul.paises li').each(function(){
		$('ul.paises li span').removeClass('actual');
	});
	$('span#cr').addClass('actual');
	$('div#tel_call_center table').css('visibility','hidden');
	$('a#cotizador').css('visibility','hidden');
});