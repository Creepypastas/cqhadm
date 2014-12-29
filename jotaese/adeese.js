var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
	admobid = {
	    banner: 'ca-app-pub-4052984890763114/9754796058',
	    interstitial: 'ca-app-pub-4052984890763114/6801329653'
	};

	document.addEventListener("DOMContentLoaded", function(event) {
		if(typeof AdMob != "undefined") AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
		if(typeof AdMob != "undefined") AdMob.showInterstitial();
	});
}

