$('#redes').on('mouseenter',function(){
	console.log('entra');
	$('#redes .links').show();
});
$('#redes').on('mouseleave',function(){
	console.log('sale');
	$('#redes .links').hide();
})