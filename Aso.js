// Function to block elements by class name prefix
function blockElementsByClassPrefix(prefix) {
    // Get all elements in the document
    var allElements = document.getElementsByTagName('*');
    console.log('Blocking elements with prefix:', prefix);

    // Iterate over all elements
    for (var i = allElements.length - 1; i >= 0; i--) {
        // If the element's class name starts with the prefix, remove it
        var classes = allElements[i].className.split(' ');
        classes.forEach(function(className) {
            if (className.startsWith(prefix)) {
                console.log('Removing:', allElements[i]);
                allElements[i].parentNode.removeChild(allElements[i]);
            }
        });
    }
}

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
