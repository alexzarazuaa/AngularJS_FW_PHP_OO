<?php

class home_dao
{
    static $_instance;

    private function __construct()
    {
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }


 

    public function select_img_carousel($db)
    { //imagenes carousel
        $sql = "SELECT * FROM images ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }


    public function select_categories($db)
    { //data img categories
     
        $sql = " SELECT * from categories order by cont_viewed desc limit 8 ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }
    public function countval($db,$categoria)
    { //update del count del click en categorias
         
         $sql = "UPDATE categories set cont_viewed = (cont_viewed + 1) where categoria = '$categoria' ";
         return $db->ejecutar($sql);
    }

    public function active_user($db,$data) {//activar el usuario cuando entra en el enlace del mail

        $sql="UPDATE user SET activate=true where token='$data'";
        return $db->ejecutar($sql);
    }
  

    
}
