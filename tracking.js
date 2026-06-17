// Set this to true to re-enable Cookiebot, Google Analytics, and Google Ads tracking.
window.VERDIT_TRACKING_ENABLED = false;

if (window.VERDIT_TRACKING_ENABLED) {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	window.gtag = window.gtag || gtag;

	window.gtag('consent', 'default', {
		ad_storage: 'denied',
		ad_user_data: 'denied',
		ad_personalization: 'denied',
		analytics_storage: 'denied',
		functionality_storage: 'granted',
		personalization_storage: 'denied',
		security_storage: 'granted',
		wait_for_update: 2000
	});

	var googleTagScript = document.createElement('script');
	googleTagScript.async = true;
	googleTagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4BFEK93YCL';
	document.head.appendChild(googleTagScript);

	window.gtag('js', new Date());
	window.gtag('config', 'G-4BFEK93YCL', { send_page_view: false });
	window.gtag('config', 'AW-18056474257');

	(function () {
		function updateGoogleConsent() {
			var consent = window.Cookiebot && window.Cookiebot.consent;
			var analyticsGranted = !!(consent && consent.statistics);
			var adsGranted = !!(consent && consent.marketing);
			var preferencesGranted = !!(consent && consent.preferences);

			window.gtag('consent', 'update', {
				ad_storage: adsGranted ? 'granted' : 'denied',
				ad_user_data: adsGranted ? 'granted' : 'denied',
				ad_personalization: adsGranted ? 'granted' : 'denied',
				analytics_storage: analyticsGranted ? 'granted' : 'denied',
				functionality_storage: 'granted',
				personalization_storage: preferencesGranted ? 'granted' : 'denied',
				security_storage: 'granted'
			});
		}

		window.addEventListener('CookiebotOnConsentReady', updateGoogleConsent);
		window.addEventListener('CookiebotOnAccept', updateGoogleConsent);
		window.addEventListener('CookiebotOnDecline', updateGoogleConsent);
	}());

	var cookiebotScript = document.createElement('script');
	cookiebotScript.id = 'Cookiebot';
	cookiebotScript.src = 'https://consent.cookiebot.com/uc.js';
	cookiebotScript.dataset.cbid = 'fbd51aaa-acb1-4eb8-b2c1-736b5b75cb34';
	cookiebotScript.dataset.blockingmode = 'auto';
	cookiebotScript.type = 'text/javascript';
	document.head.appendChild(cookiebotScript);
}
