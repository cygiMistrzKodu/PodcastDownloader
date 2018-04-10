// var links =  document.getElementsByClassName("buttons__download__link");

// links[0].href


function downloadPodcastWhereNoQualityChoose() {

   var podcastlinks =  document.getElementsByClassName("buttons__download__link");
   var linksLength = document.getElementsByClassName("buttons__download__link").length;

   for (i = 0; i < linksLength; i++){
  
  if (podcastlinks[i].href != null ) {

       window.open(podcastlinks[i].href, '_blank'); 
  
  }

 }

}

// ------

// document.getElementById('br-linkinvert buttons__download__link')[0].click();
// document.getElementsByClassName('br-linkinvert buttons__download__link');
// document.getElementsByClassName('br-linkinvert buttons__download__link')[0].click();



function howManyDownloads() {
  return	document.getElementsByClassName('br-linkinvert buttons__download__link').length;
}


function clicksOnAllLinks() {

var clicksNumber =  document.getElementsByClassName('br-linkinvert buttons__download__link').length;
var allPopups = document.getElementsByClassName('br-linkinvert buttons__download__link');

for (i = 0; i < clicksNumber; i++){
 
   allPopups[i].click();

}

}


// var download128link =  document.querySelector("a.link-complex"); 
// var download128link =  document.querySelector("a.link-complex").textContent
// var download128And64links =  document.querySelectorAll("a.link-complex")

// document.getElementsByTagName("a.link-complex");
// document.getElementsByTagName("a.link-complex").textContent


function startDownloadOnly128QualityPodcast() {  // tej funkcji uzywam do sciagania podcastow z bbc z jednej strony (opcja jak wyskakuje
	// mozliwos wyboru miedzy 64 kb/s jakosc a 128 kb/s ) zasanie podcastow masowe z bbc
 
var quality128And64links =  document.querySelectorAll("a.link-complex");  // tutaj zbieram wszystkie linki 128 i 64 mp3
var quality128And64Number = document.querySelectorAll("a.link-complex").length;
 
for (i = 0; i < quality128And64Number; i++){
  
  if (quality128And64links[i].textContent === " Higher quality (128kbps) " ) {

       window.open(quality128And64links[i].href, '_blank'); // to otwiera okienko wyskakujace w przegladarce i otwera sie okno sciagania
  
  }

 }

}


function startDownloadJustOnePodcastToEasierUnblockBrowserBlocking() {  
 
var quality128And64links =  document.querySelectorAll("a.link-complex");  
var quality128And64Number = document.querySelectorAll("a.link-complex").length;


    for (i = 0; i < quality128And64Number; i++){
  
       if (quality128And64links[i].textContent === " Higher quality (128kbps) " ) {

       window.open(quality128And64links[i].href, '_blank');

       return;
  
  }

 }


  
}



// var oneMp3Link = "http://open.live.bbc.co.uk/mediaselector/5/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p062qldf.mp3";


// function downloadURI(uri, name) {
//   var link = document.createElement("a");
//   link.download = name;
//   link.href = uri;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   delete link;
// }


// // Construct the <a> element
//   var link = document.createElement("a");
//   link.download = thefilename;
//   // Construct the uri
//   var uri = 'data:text/csv;charset=utf-8;base64,' + someb64data
//   link.href = uri;
//   document.body.appendChild(link);
//   link.click();
//   // Cleanup the DOM
//   document.body.removeChild(link);