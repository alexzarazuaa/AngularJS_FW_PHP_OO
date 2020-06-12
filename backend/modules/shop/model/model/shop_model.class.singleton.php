<?php

class shop_model
{

    private $bll;
    static $_instance;


    private function __construct()
    {
        $this->bll = shop_bll::getInstance();
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function data_products()
    {
       
        return $this->bll->obtain_data_products_bll();
        //return $arrArgument;
    }

    public function brands_model (){
        return $this->bll->obtain_brands_bll();
    }

    public function data_one_product_model($idprod)
    {
       
        return $this->bll->obtain_data_product_bll($idprod);
        //return $arrArgument;
    }

    public function obtain_products_categoria($cat)
    {
        return $this->bll->obtain_categoria_bll($cat);
    }

    public function obtain_filters($filters)
    {
        return $this->bll->obtain_filters_bll($filters);
    }

    public function obtain_search($btnsearch)
    {
        return $this->bll->obtain_search_bll($btnsearch);
    }

    public function obtain_gmaps()
    {
        return $this->bll->obtain_gmaps_bll();
    }


    public function obtain_geomaps()
    {
        return $this->bll->obtain_geomaps_bll();
    }


    public function obtain_geomaps_desc($latitud, $longitud)
    {
        return $this->bll->obtain_geomaps_desc_bll($latitud, $longitud);
        
    }

    public function obtain_countpages_model()
    {
        return $this->bll->obtain_countpages_bll();
        
    }


    public function insert_like_model($nickname, $idprod)
    {
        return $this->bll->insert_likes_bll($nickname, $idprod);
    }

    
    public function unlike_model($nickname, $idprod)
    {
        return $this->bll->unlike_bll($nickname, $idprod);
    }

      
    public function paint_likes_model($nickname)
    {
        return $this->bll->paint_likes_bll($nickname);
    }



}
