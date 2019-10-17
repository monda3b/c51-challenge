$(document).ready(function() {

    $('#tbloffers').DataTable( {

        "ajax": {
            "url": "https://api.myjson.com/bins/i8z62",
            "dataSrc": "offers",
        },

		"columnDefs": [ 
            {
                "targets": 1,
                "data": "image_url",
                "render": function(data){
                    return '<img src="'+data+'">';
                }
		    },	

            {
                "targets": 2,
                "data": "cash_back",
                "render": function(data){
                    return '$ '+data;
                }
            }
        ],	

        "columns": [
			{ "data": "name" },
			{ "data": "image_url" },
            { "data": "cash_back" }
        ]
    } );
} );
