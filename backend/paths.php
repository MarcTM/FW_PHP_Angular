<?php
    define('PROJECT', '/FW_PHP_Angular_Marc/backend/');

    //SITE_ROOT
    define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT);
    
    //SITE_PATH
    define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT);

    //CSS
    // define('CSS_PATH', SITE_PATH . 'view/css/');
    
    //JS
    define('JS_PATH', SITE_PATH . 'view/js/');
    
    //IMG
    define('IMG_PATH', SITE_PATH . 'view/img/');
    
    //PRODUCTION
    define('PRODUCTION', true);
    
    //MODEL
    define('MODEL_PATH', SITE_ROOT . 'model/');
    
    //MODULES
    define('MODULES_PATH', SITE_ROOT . 'modules/');
    
    //RESOURCES
    define('RESOURCES', SITE_ROOT . 'resources/');
    
    //MEDIA
    define('MEDIA_PATH',SITE_ROOT . '/media/');
    
    //UTILS
    define('UTILS', SITE_ROOT . 'utils/');
    
    //MODEL_HOME
    define('UTILS_HOME', SITE_ROOT . 'modules/home/utils/');
    define('MODEL_PATH_HOME', SITE_ROOT . 'modules/home/model/');
    define('DAO_HOME', SITE_ROOT . 'modules/home/model/DAO/');
    define('BLL_HOME', SITE_ROOT . 'modules/home/model/BLL/');
    define('MODEL_HOME', SITE_ROOT . 'modules/home/model/model/');
    // define('JS_VIEW_HOME', SITE_PATH . 'modules/home/view/js/');
    
    // MODEL FAVORITES
    define('UTILS_FAVORITES', SITE_ROOT . 'modules/favorites/utils/');
    define('MODEL_PATH_FAVORITES', SITE_ROOT . 'modules/favorites/model/');
    define('DAO_FAVORITES', SITE_ROOT . 'modules/favorites/model/DAO/');
    define('BLL_FAVORITES', SITE_ROOT . 'modules/favorites/model/BLL/');
    define('MODEL_FAVORITES', SITE_ROOT . 'modules/favorites/model/model/');

    // MODEL DETAILS
    define('UTILS_DETAILS', SITE_ROOT . 'modules/details/utils/');
    define('MODEL_PATH_DETAILS', SITE_ROOT . 'modules/details/model/');
    define('DAO_DETAILS', SITE_ROOT . 'modules/details/model/DAO/');
    define('BLL_DETAILS', SITE_ROOT . 'modules/details/model/BLL/');
    define('MODEL_DETAILS', SITE_ROOT . 'modules/details/model/model/');

    // MODEL SHOP
    define('UTILS_SHOP', SITE_ROOT . 'modules/shop/utils/');
    define('MODEL_PATH_SHOP', SITE_ROOT . 'modules/shop/model/');
    define('DAO_SHOP', SITE_ROOT . 'modules/shop/model/DAO/');
    define('BLL_SHOP', SITE_ROOT . 'modules/shop/model/BLL/');
    define('MODEL_SHOP', SITE_ROOT . 'modules/shop/model/model/');

    // MODEL SEARCH
    define('UTILS_SEARCH', SITE_ROOT . 'modules/search/utils/');
    define('MODEL_PATH_SEARCH', SITE_ROOT . 'modules/search/model/');
    define('DAO_SEARCH', SITE_ROOT . 'modules/search/model/DAO/');
    define('BLL_SEARCH', SITE_ROOT . 'modules/search/model/BLL/');
    define('MODEL_SEARCH', SITE_ROOT . 'modules/search/model/model/');
    
    //MODEL_CONTACT
    define('UTILS_CONTACT', SITE_ROOT . 'modules/contact/utils/');
    define('MODEL_PATH_CONTACT', SITE_ROOT . 'modules/contact/model/');
    define('DAO_CONTACT', SITE_ROOT . 'modules/contact/model/DAO/');
    define('BLL_CONTACT', SITE_ROOT . 'modules/contact/model/BLL/');
    define('MODEL_CONTACT', SITE_ROOT . 'modules/contact/model/model/');

    //MODEL_CART
    define('UTILS_CART', SITE_ROOT . 'modules/cart/utils/');
    define('MODEL_PATH_CART', SITE_ROOT . 'modules/cart/model/');
    define('DAO_CART', SITE_ROOT . 'modules/cart/model/DAO/');
    define('BLL_CART', SITE_ROOT . 'modules/cart/model/BLL/');
    define('MODEL_CART', SITE_ROOT . 'modules/cart/model/model/');
    
    //MODEL_LOGIN
    define('UTILS_LOGIN', SITE_ROOT . 'modules/login/utils/');
    define('MODEL_PATH_LOGIN', SITE_ROOT . 'modules/login/model/');
    define('DAO_LOGIN', SITE_ROOT . 'modules/login/model/DAO/');
    define('BLL_LOGIN', SITE_ROOT . 'modules/login/model/BLL/');
    define('MODEL_LOGIN', SITE_ROOT . 'modules/login/model/model/');
    
    //AMIGABLES
    define('URL_AMIGABLES', FALSE);
