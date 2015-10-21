var nyc = ['nyc', 'new york', 'new york city'];
var sf = ['sf', 'san francisco','frisco'];
var sydney = ['sydney'];
var austin = ['austin'];
var la = ['la', 'los angeles'];

var cityAliases = [nyc, la, sf, sydney, austin];

var temp = [];
var x = ' ';

$("#submit-btn").click(function(){
	event.preventDefault();

	x = $('#city-type').val().toLowerCase().trim();
	$('#city-type').val(" ");

	for (i=0; i<cityAliases.length; i++){
		
		temp = cityAliases[i];

		for (j=0; j<temp.length; j++){
				if (x == temp[j]){
				$('body').attr('class', temp[0]);
			}	
		}
		
	}

}

);

/*

$("#submit-btn").keypress(function(e){

	if(e.which == 13) {
		var x = $('#city-type').val();
		x = x.toLowerCase().trim();

		$(body).css("background-image","x")

        
    }

}

);
*/
