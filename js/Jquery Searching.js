// search div by style attribute
$("div[style='']").text('');
//example ::
$("div[style='line-height:20px;']").text('new div text');

// Search element by hyperlink 
var res = $('a[href="http://npicx.blogspot.com/"]');
// example ::
$('a[href="http://npicx.blogspot.com/"]').css('display','none');
