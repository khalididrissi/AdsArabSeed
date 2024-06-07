// Function to block elements by class name prefix
function blockElementsByClassPrefix(prefix) {
    var allElements = document.getElementsByTagName('*');
    for (var i = allElements.length - 1; i >= 0; i--) {
        var classes = allElements[i].className.split(' ');
        classes.forEach(function(className) {
            if (className.startsWith(prefix)) {
                allElements[i].parentNode.removeChild(allElements[i]);
            }
        });
    }
}

// Function to remove elements by ID
function removeElementsById(elementIds) {
    elementIds.forEach(function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.parentNode.removeChild(element);
        }
    });
}

// Call the functions with the class name prefix and IDs you want to block
blockElementsByClassPrefix('container-6f4f5c3f5bfa5f56517'); // Adjust the prefix as needed
removeElementsById([
    'div-gpt-ad-1714577946689-0',
    'div-gpt-ad-1715073293748-0',
    'ps_ad_rotation_id_5446',
    'ad_unit',
    'fixedban2',
    'fixedban',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/video-ad2_0',
    'container-6f4f5c3f5bfa5f5651799c658cb3556b44923',
    'div-gpt-ad-1714577932847-0',
    'google_ads_iframe_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0__container__',
    'gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0',
    'id-custom_banner',
    'google_ads_iframe_/22654869840/apl_1__container__',
    'google_ads_iframe_/22893379435/apl_0__container__',
    'dontfoid',
    'gpt_unit_/7047,22643491855/apl/anchor/anchortop_0'
]);

// Additional code to block elements by class name
function blockElementsByClass(className) {
    var elements = document.getElementsByClassName(className);

    // Remove elements from the DOM
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Block elements by class name
// Call the function with the class name prefix you want to block
blockElementsByClassPrefix('container-6f4f5c3f');
blockElementsByClassPrefix('logo');
blockElementsByClassPrefix('header-items');
blockElementsByClassPrefix('aplvideo');
blockElementsByClassPrefix('main-container videoap-container');
blockElementsByClassPrefix('sm_box_1694957651544');
blockElementsByClassPrefix('header-wrapper');
blockElementsByClassPrefix('footer');
blockElementsByClassPrefix('row width_fix_300 my-20');
blockElementsByClassPrefix('row width_fix_300 watch-row-2 my-20');
blockElementsByClassPrefix('my-40');
blockElementsByClassPrefix('div-gpt-ad-');

blockElementsByClassPrefix('blog-post');
blockElementsByClassPrefix('comments-container');
blockElementsByClassPrefix('abs-head');
blockElementsByClassPrefix('modal fade');
blockElementsByClassPrefix('wrapper justify-content-between align-items-center');
blockElementsByClassPrefix('abs');
blockElementsByClassPrefix('end');
blockElementsByClassPrefix('aside-wrapper mt-5');
blockElementsByClassPrefix('mb-3 text-center');
blockElementsByClassPrefix('fade modal');
blockElementsByClassPrefix('d-flex justify-content-center my-3');
// 3isk End

// ArabSeed Start
blockElementsByClassPrefix('PageHeader');
blockElementsByClassPrefix('SlideMenu');
blockElementsByClassPrefix('relatedPosts');
blockElementsByClassPrefix('row');
blockElementsByClassPrefix('AboElSeed');
blockElementsByClassPrefix('ads-aa');

