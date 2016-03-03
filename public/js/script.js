//this for search request
var searchFor = $(".searchBox").attr("action");
//alert(searchFor);

$("#searchBox").keypress(function(e){
	if( e.keyCode == 13 ){
		searchFor += $(this).val();
	}
});

$(".searchBox").submit(function(e){
	//e.preventDefault();
	
	$(".searchBox").attr("action", searchFor);

	//alert($(".searchBox").attr("method"));
});




// this is for delete a specific book

var deleteButtonF = $(".deleteButtonF").attr("action");
//alert(deleteButtonF);


var list = $(".booksList > form > input[type='submit']").click(function(e){
	//e.preventDefault();


	var bookName = $(this).parent().parent().children("p.title").text();
	//alert(deleteButtonF);
	deleteButtonF += "/" + bookName;
	//alert(deleteButtonF);
	$(".deleteButtonF").attr("action",deleteButtonF);
	//alert($(".deleteButtonF").attr("action"));

})