var DIRECT = 'DIRECT;';
var DENINE = 'PROXY localhost:0;';
var SOCKS = 'SOCKS localhost:1080;' + DIRECT;
var PROXY = 'PROXY 123.30.238.16:3128;';

//SOCKS = DIRECT; 
//PROXY = DIRECT;

var WHITE_LIST_SOCKS = ['.googlevideo.com','.hdonline.vn','.ytimg.com', 'img.hayhaytv.vn'];
var WHITE_LIST_PROXY = ['hdonline.vn', 'youtube.com', 'youtu.be','www.hayhaytv.vn', 'hdviet.com'];

var IsURLAlowed = function(host, white_list) {
  return white_list.some(function(element) {
    return dnsDomainIs(host, element);
  });
}

var FindProxyForURL = function(url, host) {
  if (dnsResolve(host)) {
    if (IsURLAlowed(host, WHITE_LIST_SOCKS)) {
      return SOCKS;
    } else if (IsURLAlowed(host, WHITE_LIST_PROXY)) {
      return PROXY;
    }
  }
  return DENINE;
}