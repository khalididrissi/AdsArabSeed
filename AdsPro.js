function blockElementsByClassPrefix(classPrefix) {
    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
        var classes = elements[i].className.split(" ");
        for (var j = 0; j < classes.length; j++) {
            if (classes[j].startsWith(classPrefix)) {
                elements[i].parentNode.removeChild(elements[i]);
                break; // Exit the inner loop since the element has been removed
            }
        }
    }
}

// Call the function with the desired class prefixes
blockElementsByClassPrefix('container');
blockElementsByClassPrefix('div-gpt-ad-');
blockElementsByClassPrefix('pl-6f4f');
// 3isk Start 
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
blockElementsByClassPrefix('div-gpt-ad-1698946296176-0');
blockElementsByClassPrefix('div-gpt-ad-1698946361303-0');
blockElementsByClassPrefix('div-gpt-ad-8176806-1');
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
//END 3ISK
