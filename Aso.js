// Function to block elements by class name
function blockElementsByClass(className) {
    var elements = document.getElementsByClassName(className);

    // Remove elements from the DOM
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Function to remove elements with a changing class name by targeting a consistent style attribute
function removeElementByStyle(styleAttribute) {
    // Get all elements in the document
    var allElements = document.getElementsByTagName('*');

    // Iterate over all elements
    for (var i = 0; i < allElements.length; i++) {
        // If the element's style attribute matches what we're looking for, remove it
        if (allElements[i].getAttribute('style') === styleAttribute) {
            allElements[i].parentNode.removeChild(allElements[i]);
        }
    }
}

// Call the function with the specific style attribute of the element you want to remove
setInterval(() => {
    removeElementByStyle('position: fixed; inset: 0px; z-index: 2147483647; background: black; opacity: 0.01; height: 944px; width: 436px;');
}, 1000); // checks every 1000 milliseconds (1 second)

// Your existing code to block elements by class name
// 3isk Start
blockElementsByClass('logo');
blockElementsByClass('header-items');
blockElementsByClass('aplvideo');
blockElementsByClass('main-container videoap-container');
blockElementsByClass('sm_box_1694957651544');
blockElementsByClass('header-wrapper');
blockElementsByClass('footer');
blockElementsByClass('row width_fix_300 my-20');
blockElementsByClass('row width_fix_300 watch-row-2 my-20');
blockElementsByClass('my-40');
blockElementsByClass('div-gpt-ad-1698946296176-0');
blockElementsByClass('div-gpt-ad-1698946361303-0');
blockElementsByClass('div-gpt-ad-8176806-1');
blockElementsByClass('blog-post');
blockElementsByClass('comments-container');
blockElementsByClass('abs-head');
blockElementsByClass('modal fade');
blockElementsByClass('wrapper justify-content-between align-items-center');
blockElementsByClass('abs');
blockElementsByClass('end');
blockElementsByClass('aside-wrapper mt-5');
blockElementsByClass('mb-3 text-center');
blockElementsByClass('fade modal');
blockElementsByClass('d-flex justify-content-center my-3');
// 3isk End

// ArabSeed Start
blockElementsByClass('PageHeader');
blockElementsByClass('SlideMenu');
blockElementsByClass('relatedPosts');
blockElementsByClass('row');
blockElementsByClass('AboElSeed');
blockElementsByClass('ads-aa');
// ... (rest of your class names for ArabSeed)
// ArabSeed End

// Remove elements by ID
var elementsToRemoveById = [
    // ... (your element IDs)
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
