$(document).ready(function(){
	resizeTop();

	var altoWin = $(window).height();
	var anchWin = $(window).width();
	var altoFoot = $('.footer').outerHeight(true);
	var altoForm = $('.login').outerHeight(true);

	$('body').css({'width':anchWin,'height':altoWin});

	if(altoForm<(altoWin-altoFoot)) {
		$('.footer').css('position','absolute');
	} else {
		$('.footer').css('position','relative');
	}
	/* Configuración de evento Seleccionar usuario */
	$('#sel_usuario').change(function(){ 
		if ( $(this).val()==1 ) {
			$('#tipo_usuario').slideUp();
			$('#datos_login p').show();
			$('label#lbl_usuario').html('Ingresa tu número económico:');
			$('label#lbl_contrasena').html('Ingresa tu contraseña:');
			$('#datos_login').slideDown('fast',function(){
				resizeTop();
			});
		} else if ( $(this).val()==2 ) {
			$('#tipo_usuario').slideUp();
			$('#datos_login p').show();
			$('label#lbl_usuario').html('Ingresa tu correo:');
			$('label#lbl_contrasena').html('Ingresa tu contraseña:');
			$('#datos_login').slideDown('fast',function(){
				resizeTop();
			});
		} else if ( $(this).val()==3 ) {
			$('#tipo_usuario').slideUp();
			$('#datos_login p').hide();
			$('label#lbl_usuario').html('Ingresa tu número de empleado:');
			$('label#lbl_contrasena').html('Ingresa tu llave maestra:');
			$('#datos_login').slideDown('fast',function(){
				resizeTop();
			});
		}
	});
	/* Configuración de evento Atrás */
	$('#select_usuario').click(function(){
		$('#datos_login').slideUp();
		$('#sel_usuario').val('0');
		$('#tipo_usuario').slideDown('fast',function(){
			resizeTop();
		});
	});
	/* Configuración de evento Olvida contraseña */
	$('#olvido').click(function(){
		$('#datos_login').slideUp();
		$('#recupera_tu_contrasena').slideDown('fast',function(){
			resizeTop();
		});
	});
	/* Configuración de evento Cancelar Olvida contraseña*/
	$('#cancelar_1').click(function(){
		$('#recupera_tu_contrasena').slideUp();
		$('#datos_login').slideDown('fast',function(){
			resizeTop();
		});
	});
	/* Configuración de evento Cambia contraseña */
	$('#cambio').click(function(){
		$('#datos_login').slideUp();
		$('#cambia_tu_contrasena').slideDown('fast',function(){
			resizeTop();
		});
	});
	/* Configuración de evento Cancela cambio contraseña */
	$('#cancelar_2').click(function(){
		$('#cambia_tu_contrasena').slideUp();
		$('#datos_login').slideDown('fast',function(){
			resizeTop();
		});
	});
});

$(window).resize(function(){
	resizeTop();
	
	var altoWin = $(window).height();
	var anchWin = $(window).width();
	var altoFoot = $('.footer').outerHeight(true);
	var altoForm = $('.login').outerHeight(true);

	$('body').css({'width':anchWin,'height':altoWin});

	if(altoForm<(altoWin-altoFoot)) {
		$('.footer').css('position','absolute');
	} else {
		$('.footer').css('position','relative');
	}
});

function resizeTop(){
	var altoWin = $(window).height();
	var altoForm = $('.login').outerHeight(true);
	var topForm = ((altoWin - altoForm)/2)>=25 ? (altoWin - altoForm)/2 : 25; 

	$('.login').css({'top':topForm, 'margin-bottom':50});
}