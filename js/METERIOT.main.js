var loadingWrapperDeleted;
loadingWrapperDeleted=false;

document.onreadystatechange = completeLoading;


	var prompttime = 0;
	var promptx = [];
	var prompty = [];
	var promptdraging = [];
    var browser = function () {   
    var agent = navigator.userAgent.toLowerCase(),  
    opera = window.opera,  
    browser = {  
        //��⵱ǰ������Ƿ�ΪIE  
        ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent), 
 
        //��⵱ǰ������Ƿ�ΪOpera  
        opera: (!!opera && opera.version), 
        //��⵱ǰ������Ƿ���webkit�ں˵������  
        webkit: (agent.indexOf(' applewebkit/') > -1), 
        //��⵱ǰ������Ƿ���������macƽ̨��  
        mac: (agent.indexOf('macintosh') > -1), 
        //��⵱ǰ������Ƿ��ڡ�����ģʽ����  
        quirks: (document.compatMode == 'BackCompat')  
    }; 
    //��⵱ǰ������ں��Ƿ���gecko�ں�  
    browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie); 
    var version = 0; 
    // Internet Explorer 6.0+  
    if (browser.ie) {  
        var v1 = agent.match(/(?:msie\s([\w.]+))/);  
        var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);  
        if (v1 && v2 && v1[1] && v2[1]) {  
            version = Math.max(v1[1] * 1, v2[1] * 1);  
        } else if (v1 && v1[1]) {  
            version = v1[1] * 1;  
        } else if (v2 && v2[1]) {  
            version = v2[1] * 1;  
        } else {  
            version = 0;  
        } 
        //��������ģʽ�Ƿ�Ϊ IE11 ����ģʽ  
        browser.ie11Compat = document.documentMode == 11; 
        //��������ģʽ�Ƿ�Ϊ IE9 ����ģʽ  
        browser.ie9Compat = document.documentMode == 9; 
        //��������ģʽ�Ƿ�Ϊ IE10 ����ģʽ  
        browser.ie10Compat = document.documentMode == 10; 
        //���������Ƿ���IE8�����  
        browser.ie8 = !!document.documentMode; 
        //��������ģʽ�Ƿ�Ϊ IE8 ����ģʽ  
        browser.ie8Compat = document.documentMode == 8; 
        //��������ģʽ�Ƿ�Ϊ IE7 ����ģʽ  
        browser.ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7); 
        //��������ģʽ�Ƿ�Ϊ IE6 ģʽ ���߹���ģʽ  
        browser.ie6Compat = (version < 7 || browser.quirks); 
        browser.ie9above = version > 8; 
        browser.ie9below = version < 9;  
    } 
    // Gecko.  
    if (browser.gecko) {  
        var geckoRelease = agent.match(/rv:([\d\.]+)/);  
        if (geckoRelease) {  
            geckoRelease = geckoRelease[1].split('.');  
            version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;  
        }  
    } 
    //��⵱ǰ������Ƿ�ΪChrome, ����ǣ��򷵻�Chrome�Ĵ�汾��  
    if (/chrome\/(\d+\.\d)/i.test(agent)) {  
        browser.chrome = +RegExp['\x241'];  
    } 
    //��⵱ǰ������Ƿ�ΪSafari, ����ǣ��򷵻�Safari�Ĵ�汾��  
    if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {  
        browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
    } 
    // Opera 9.50+  
    if (browser.opera){ 
        version = parseFloat(opera.version()); 
	}
    // WebKit 522+ (Safari 3+)  
    if (browser.webkit){
        version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]); 
	}
    //��⵱ǰ������汾��  
    browser.version = version; 
    return browser;  
}();
$(window).ready(
function(e){
	"use strict";
	var ScreenWidth = parseInt(GetWindowWidth());
	var ScreenHeight = parseInt(GetWindowHeight());
	if(loadingWrapperDeleted==false){
		$("body").append('<div id="loadingWrapper" class="cover bg-white" style="position:fixed;top:0px;left:0px;width:100vw;height:100vw;z-index:9999;display:table;vertical-align:middle;"><div class="inner" style="display:table-cell"><!-- [if gt IE 8]><p align="center"><div class="boost-animate-spinner"></div></p><p align="center">Powered by Boost Framework</p><![endif]--><!--[if lt IE 9]><p>��ǰ��ҳ<b>��֧��</b>������ʹ�õ������. Ϊ�������ķ���,���������������</p><p>Sorry, this page does not support your current browser, to change this situation, you will need to update your browser</p><![endif]--></div></div>')
	}
	if(ScreenWidth<1201){
		//Phone or tablet
		$(".navbar-links").hide();
	}
	$("navicon").click(
	function(e){
		var MyContainer = $(e.target).parent(".container");
		var MyLinks = MyContainer.children(".navbar-links");
		MyLinks.toggle();
	}
	);
}
);
$(window).resize(
function(e){
	"use strict";
	var ScreenWidth = parseInt(GetWindowWidth());
	var ScreenHeight = parseInt(GetWindowHeight());
	if(ScreenWidth<1201){
		//Phone or tablet
		$(".navbar-links").hide();
	}else{
		$(".navbar-links").show();
	}
}
);

function GetWindowWidth(){
	"use strict";
	return $(window).width();
}
function GetWindowHeight(){
	"use strict";
	return $(window).height();
}
function completeLoading(){
	if(document.readyState == "complete"){
		loadingWrapperDeleted=true;
		//����������
		$("#LoadingWrapper").hide();
		$("#LoadingWrapper").remove();
	}
}

if(browser.ie9below === true){
		//�����������Ҫ��(��Ϊ��֧�ָð汾Jquery)
		//��ʾ, ����Ҫ����GFW��������
		document.write(
			'<div class="cover bg-white" style="width:100%;height:100%;width:100vw;height:100vh;position:fixed;top:0px;left:0px;text-align:center;z-index:9999;"><h1>�Բ���, �����������֧�ִ���ҳ</h1><p>Sorry, your browser does not support this page</p><p>Powered by Boost Framework</p></div>';
		)
}
