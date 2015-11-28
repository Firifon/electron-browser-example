var $ = require("jquery");

$("body").on("click", ".tab", function() {	
			
	$('.tab, .view').removeClass('active');		
	
	var index = $(this).index() - 1;		
	var url = $('.tab').eq(index).text().trim();	
	$('#urlinput').val(url);		
	
	$('.tab').eq(index).addClass('active');
	$('.view').eq(index).addClass('active');			
});

$('#visit').click(function() {
	
	var url = $('#urlinput').val();
		
	$('.tab.active').text(url);
	$('.view.active').attr('src', url);
				
});

$('#newtab').click(function() {
	
	var url = $('#urlinput').val();
	
	$('.tab, .view').removeClass('active');
							
	$('#tabbar').append('<span class="nav-group-item tab active">' + url + '</span>');	
	$('#views').append('<webview class="view active" src="'+ url +'" nodeintegration></webview>');
});

$("#boton").click(function() {
	
	var webview = $('#foo')[0];			
	webview.openDevTools();					
	var code =	
		"const ipcRenderer = require('electron').ipcRenderer;"+
		//"console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));"+
		"ipcRenderer.on('asynchronous-reply', function(event, arg) {"+
  			"console.log(arg);"+
		"});"+
		"ipcRenderer.send('asynchronous-message', 'ping');";		
	
	webview.executeJavaScript(code, false);		
});