    var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android
        admobid = {
            banner: 'ca-app-pub-4052984890763114/9754796058', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-4052984890763114/6801329653'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    } else { // for windows phone
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    }


	if(typeof AdMob != "undefined") AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );

	if(typeof AdMob != "undefined") AdMob.showInterstitial();
