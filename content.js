// content.js

//var firstHref= $("a[href^='http']").eq(0).attr("href");
//console.log(firstHref);
// content.js
/*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      chrome.runtime.sendMessage({"message":"open_new_tab","url":firstHref});
    }
  }
);*/

var video_id = window.location.search.split('v=')[1];
//alert(window.location.href)
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
  video_id = video_id.substring(0, ampersandPosition);
}
alert("Video ID is " + video_id)