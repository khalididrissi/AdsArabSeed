 function blockElementsByClass(className) {
            var elements = document.getElementsByClassName(className);

            // Remove elements from the DOM
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }




blockElementsByClass('div-gpt-ad-');
blockElementsByClass('pl-6f4f');
blockElementsByClass('PageHeader');
blockElementsByClass('SlideMenu');
blockElementsByClass('relatedPosts');
blockElementsByClass('row');
blockElementsByClass('AboElSeed');
blockElementsByClass('ads-');
blockElementsByClass('banner-container');

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
//END 3ISK
blockElementsByClass('banner');
blockElementsByClass('fixedban');
blockElementsByClass('ps_ad');
blockElementsByClass('live-ad');
blockElementsByClass('sarhne--banr');
blockElementsByClass('live-ad-container');









        // Remove elements by ID
        var elementsToRemoveById = [
            'div-gpt-ad-1714577946689-0',
            'div-gpt-ad-1715073293748-0',
            'ps_ad_rotation_id_5446',
            'ad_unit',
            'fixedban2',
            'fixedban',
            'banner-container',
            'ad_position_box',
            'gpt_unit_/21727820151,22953604694/Gametech_HM/video-ad2_0',
            'container-6f4f5c3f5bfa5f5651799c658cb3556b44923',
            'div-gpt-ad-1714577932847-0',
            'google_ads_iframe_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0__container__',
            'gpt_unit_/21727820151,22953604694/Gametech_HM/Interstitial-gameland_0',
            'ps_ad_rotation_id_5200',
            'banner1',
            'banner2',
            'fixedban5',


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