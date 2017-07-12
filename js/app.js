var showTracks = function() {

	var template = Handlebars.compile($('#track-template').html());
	var accessToken = $('#intoken').val();

$.ajax({
    url: 'https://api.spotify.com/v1/search?q=' + $('#in').val()+'&type=track',
    dataType: "json",
    type: 'GET',
    headers: {
       'Authorization': 'Bearer ' + accessToken 
   },
   success: function (data){
        $('#resultados2').replaceWith(template({ tracks: data }));
        console.log(data);
        
    },
});

};

$('#in').keypress(function(e) {
	
   if(e.which == 13) {	
   		
        showTracks();
        
        $('#in').val('');
        $('#intoken').val('');
    }    
});

$('#intoken').keypress(function(e) {
	
   if(e.which == 13) {	
   		
        showTracks();
        
        $('#in').val('');
        $('#intoken').val('');
    }    
});
