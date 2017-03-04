//https://tinyurl.com/jsea24q
//https://goo.gl/MkoXYZ
var DIRECT = 'DIRECT;';
var DENINE = 'PROXY localhost:0;';

var WHITE_LIST = [
  'hdonline.vn'       ,
  'youtube.com'       ,
  'youtu.be'          ,
  'hayhaytv.vn'       ,
  'fptplay.net'       ,
  '.googlevideo.com'  ,
  '.ytimg.com'
];

var IsURLAlowed = function(host, white_list) {
  return white_list.some(function(element) {
    return dnsDomainIs(host, element);
  });
}

var FindProxyForURL = function(url, host) {
  if (dnsResolve(host)) {
    if (IsURLAlowed(host, WHITE_LIST)) {
      return DIRECT;
    }
  }
  return DENINE;
}