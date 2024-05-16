// Function to block elements by class
function blockElementsByClass(className) {
    var elements = document.getElementsByClassName(className);

    // Remove elements from the DOM
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// List of classes to block
var classesToBlock = [
    'PageHeader', 'SlideMenu', 'relatedPosts', 'row', 'AboElSeed', 'ads-aa',
    'pl-6f4f5c3f5bfa5f5651799c658cb3556b__wrap', 'container-6f4f5c3f5bfa5f5651799c658cb3556b40743',
    'sey', 'MainMenuOverlay', 'mys-wrapper', 'GoogleActiveViewInnerContainer', 'div-over', 'WatcherArea',
    'videoAdUi', 'container-6f4f5c3f5bfa5f5651799c658cb3556b32535', 'container-6f4f5c3f5bfa5f5651799c658cb3556b62840',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b9969', 'container-6f4f5c3f5bfa5f5651799c658cb3556b8124',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b12185', 'container-6f4f5c3f5bfa5f5651799c658cb3556b41932',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b71401'
];

// Block elements for each class in the list
classesToBlock.forEach(blockElementsByClass);

// Function to block elements by ID
function blockElementsById(id) {
    var element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

// List of IDs to block
var idsToBlock = [
    'div-gpt-ad-1714577946689-0', 'div-gpt-ad-1715073293748-0', 'ps_ad_rotation_id_5446',
    'ad_unit', 'fixedban2', 'fixedban', 'gpt_unit_/21727820151,22953604694/Gametech_HM/video-ad2_0',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b44923', 'div-gpt-ad-1714577932847-0',
    'google_ads_iframe_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0__container__',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0'
];

// Block elements for each ID in the list
idsToBlock.forEach(blockElementsById);

// Block pop-ups
window.open = function() {
    console.log("Blocked a popup");
    return null;
};

// Block notifications
window.Notification = function() {
    console.log("Blocked a notification");
    return null;
};
