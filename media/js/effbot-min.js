var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


function effbot_download(div){function platform(cx){var els=div.getElementsByTagName('div');for(var i=0;i<els.length;i++){var e=els[i];var c=e.getAttribute("class")||e.getAttribute("className");if(c===cx){e.setAttribute("class",cx+" highlight");e.setAttribute("className",cx+" highlight");if(i!==0)
div.insertBefore(div.removeChild(e),els[0]);return;}}
if(cx!=="source")
platform("source");}
var p=navigator.platform;if(p.indexOf("Win")!==-1)
platform("windows");else if(p.indexOf("Mac")!==-1)
platform("mac");else if(p.indexOf("Linux")!==-1)
platform("linux");else
platform("source");}
window.onload=function()
{var div=document.getElementById('effbot_download');if(div)
effbot_download(div);}
document.onkeypress=function(e)
{if(document.body.getAttribute("data-page-id")!==undefined){var event=window.event?window.event:e;var code=event.keyCode?event.keyCode:event.charCode;if(event.ctrlKey&&(event.charCode===69||event.keyCode===5))
document.location.href="/edit/"+effbot_page_id;}}

}
/*
     FILE ARCHIVED ON 22:21:03 Nov 10, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:23:48 May 02, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.024
  exclusion.robots: 0.356
  RedisCDXSource: 1.809
  exclusion.robots.policy: 0.332
  captures_list: 192.963
  PetaboxLoader3.resolve: 121.739 (3)
  load_resource: 151.252 (2)
  LoadShardBlock: 133.831 (3)
  PetaboxLoader3.datanode: 125.602 (5)
  CDXLines.iter: 37.038 (3)
*/