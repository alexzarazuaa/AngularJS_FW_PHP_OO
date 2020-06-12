<?php


class cart_model {
    
    private $bll;
    static $_instance;
    

    private function __construct() {
        $this->bll = cart_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function show_cart_model($db,$id){
         
        return $this->bll->show_cart_bll($db,$id);
       
    }


}