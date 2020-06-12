<?php
// print_r ("entra dai ");
// die();
class cart_dao
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


    public function show_cart($db, $id)
    { 
        $sql = "SELECT * FROM products where idprod in (SELECT id_prod FROM cart where id='$id')";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
       
    }

  


}
