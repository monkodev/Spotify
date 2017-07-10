var showTracks = function() {
	var template = Handlebars.compile($('#track-template').html());
	var accessToken = "BQBJ2GuWvEHCBDxoZHU2rQu5YyhW545h2ZGLn6v3-m-6DjkPCtMLa24b480FiVQAnAdL6GjnAGVwW7wmAiecV0ykvVk1m0lIoE9Ocb-HUJ8UE7nleZWwZQtxgWvZt7qL8S_-zEkm";
	var refresh_token='';
	var client_id= "8e8f737bf9354f81a69f0d43724a9c64";
	var client_secret= "92772bee217f40b98a5db9cdea602a0e";
$.ajax({
    url: 'https://api.spotify.com/v1/search?q=Muse&type=track',
    dataType: "json",
    type: 'GET',
    headers: {
       'Authorization': 'Bearer ' + accessToken 
   },
   success: function (data){
        $('#resultados').replaceWith(template({ tracks: data }));
        console.log(data);
        
    },
});

};

var get_refreshtokens = function() {


	$.ajax({
		url: 'https://accounts.spotify.com/api/token',
		dataType: "json",
    	type: 'POST',
	});
};



$('#in').keypress(function(e) {
   if(e.which == 13) {
        showTracks();
        $('#in').val('');
    }    
});