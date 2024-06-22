// Block elements by class name
function blockElementsByClass(className) {
    var elements = document.getElementsByClassName(className);

    // Remove elements from the DOM
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Block elements by selector
function blockElementsBySelector(selector) {
    var elements = document.querySelectorAll(selector);

    // Remove elements from the DOM
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
}


// Block common ad selectors
blockElementsBySelector('iframe[src*=".doubleclick.net"]');
blockElementsBySelector('iframe[src*=".googleadservices.com"]');
blockElementsBySelector('div[id*="google_ads_iframe"]');
blockElementsBySelector('div[id*="div-gpt-ad"]');
blockElementsBySelector('ins.adsbygoogle');
blockElementsBySelector('gpt_unit');
blockElementsBySelector('div.ad-unit');
blockElementsBySelector('div.ad-banner');
blockElementsBySelector('div.interstitial-ad');
blockElementsBySelector('ins[id^="gpt_unit"]');
blockElementsBySelector('div.banner-ad');
blockElementsBySelector('div[id*="ad"]');
blockElementsBySelector('div[class*="ad"]');
blockElementsBySelector('div[id*="banner"]');
blockElementsBySelector('div[class*="banner"]');

// Block Google Topics iframe
blockElementsBySelector('iframe[name="goog_topics_frame"]');



// 3isk Start
blockElementsByClass('navbar-brand ms-0');
blockElementsByClass('alert alert-danger');
blockElementsByClass('card my-4');

blockElementsByClass('py-1 bg-dark');


// 3isk End

//ArabSeed Start


// Remove elements by ID
var elementsToRemoveById = [
    'div-gpt-ad-1714577946689-0'
];

elementsToRemoveById.forEach(function(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
});

// Remove additional aplvideo elements by class name
var aplvideoDivs = document.getElementsByClassName('aplvideo');
while (aplvideoDivs.length > 0) {
    aplvideoDivs[0].remove();
}