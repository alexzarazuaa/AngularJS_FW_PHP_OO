<?php
define('PROJECT', '/SPORT_V1.7/');

//SITE_ROOT
define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT);

//SITE_PATH
define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT);



//PATHS

//CSS
define('CSS_PATH', SITE_PATH . 'frontend/assets/css/');

//VIEW_PATH_LANG
define('LANG_PATH', SITE_PATH . 'frontend/assets/Lang/');

//JS
define('JS_PATH', SITE_PATH . 'frontend/assets/js/');

//JQUERY
define('JQUERY_PATH', SITE_PATH . 'frontend/assets/jquery/');

//ACTIVITY
define('ACTIVITY_PATH', SITE_PATH . 'frontend/assets/js/Activiti/');


//TOASTR
define('TOASTR_PATH', SITE_PATH . 'frontend/assets/js/toastr/');
//IMG
define('IMG_PATH', SITE_PATH . 'frontend/assets/img/');

//IMAGES 
define('IMGAGES_PATH', SITE_PATH . 'frontend/assets/images/');




//PRODUCTION
define('PRODUCTION', true);

//ROOT


//MODEL
define('MODEL_PATH', SITE_ROOT . 'backend/model/');

//MODULES
define('MODULES_PATH', SITE_ROOT . 'backend/modules/');

//VIEW_INC
define('VIEW_PATH_INC', SITE_ROOT . 'frontend/assets/inc/');

//RESOURCES
define('RESOURCES', SITE_ROOT . 'backend/resources/');

//ROUTER
define('ROUTER', SITE_ROOT . 'backend/router/');

//MEDIA
define('MEDIA_PATH', SITE_ROOT . 'backend/media/');

//UTILS
define('UTILS', SITE_ROOT . 'backend/utils/');
//FSSEARCH
define('FSEACRH_PATH', SITE_ROOT . 'frontend/assets/js/');


//MODEL_CONTACT
define('UTILS_CONTACT', SITE_ROOT . 'backend/modules/contact/utils/');
define('MODEL_CONTACT', SITE_ROOT . 'backend/modules/contact/model/');
define('DAO_CONTACT', SITE_ROOT . 'backend/modules/contact/model/DAO/');
define('BLL_CONTACT', SITE_ROOT . 'backend/modules/contact/model/BLL/');



//MODEL HOME
define('MODEL_PATH_HOME', SITE_ROOT . 'backend/modules/home/model/');
define('DAO_HOME', SITE_ROOT . 'backend/modules/home/model/DAO/');
define('BLL_HOME', SITE_ROOT . 'backend/modules/home/model/BLL/');
define('MODEL_HOME', SITE_ROOT . 'backend/modules/home/model/model/');



//MODEL SHOP
define('MODEL_PATH_SHOP', SITE_ROOT . 'backend/modules/shop/model/');
define('DAO_SHOP', SITE_ROOT . 'backend/modules/shop/model/DAO/');
define('BLL_SHOP', SITE_ROOT . 'backend/modules/shop/model/BLL/');
define('MODEL_SHOP', SITE_ROOT . 'backend/modules/shop/model/model/');



//MODEL CART
define('MODEL_PATH_CART', SITE_ROOT . 'backend/modules/cart/model/');
define('DAO_CART', SITE_ROOT . 'backend/modules/cart/model/DAO/');
define('BLL_CART', SITE_ROOT . 'backend/modules/cart/model/BLL/');
define('MODEL_CART', SITE_ROOT . 'backend/modules/cart/model/model/');





//MODEL LOGIN
define('MODEL_PATH_LOGIN', SITE_ROOT . 'backend/modules/login/model/');
define('DAO_LOGIN', SITE_ROOT . 'backend/modules/login/model/DAO/');
define('BLL_LOGIN', SITE_ROOT . 'backend/modules/login/model/BLL/');
define('MODEL_LOGIN', SITE_ROOT . 'backend/modules/login/model/model/');



//TERMINAR DE CAMBIAR RUTAS DEL FSEARCH

//MODEL SEARCH
define('MODEL_PATH_SEARCH', SITE_ROOT . 'view/js/search/model/');
define('DAO_SEARCH', SITE_ROOT . 'view/js/search/model/DAO/');
define('BLL_SEARCH', SITE_ROOT . 'view/js/search/model/BLL/');
define('MODEL_SEARCH', SITE_ROOT . 'view/js/search/model/model/');




//amigables
define('URL_AMIGABLES', TRUE);
