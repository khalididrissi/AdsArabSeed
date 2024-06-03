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