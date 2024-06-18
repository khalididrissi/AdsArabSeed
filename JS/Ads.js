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




// 3isk Start
blockElementsByClass('navbar-brand ms-0');
blockElementsByClass('alert alert-danger');
blockElementsByClass('card my-4');
blockElementsByClass('card');
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
