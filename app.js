jQuery(document).ready(function($) {
	$('#smart').on('keyup', function(evt){
		var text = $(this).val()
		$('#dumb').text(translateText(text))
	})

	function translateText(text){
		text =  text.replace(/([aoiue])/g,'er')
		text =  text.replace(/y/g,'ah')
		text =  text.replace(/op/g,'fag')
		return text
	}
})	