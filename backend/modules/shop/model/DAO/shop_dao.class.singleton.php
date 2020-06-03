<?php
class shop_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }


    public function get_maps($db) {
        $sql = "SELECT * FROM shops";
        $stmt = $db->ejecutar($sql);
        return $db->listar_arr($stmt);
    }

    public function select_all_product($db) {
        $sql = "SELECT * FROM products ORDER BY views DESC";
        $stmt = $db->ejecutar($sql);
        return $db->listar_arr($stmt);
    }

    public function select_car($db, $car) {
        if($car==='bcaas'){
            $sql = "SELECT * FROM products WHERE product='Bcaa' ORDER BY views DESC";
        }else if($car==='packs'){
            $sql = "SELECT * FROM products WHERE product='Vitamin' ORDER BY views DESC";
        }else if($car==='liquidacion'){
            $sql = "SELECT * FROM products WHERE product='Mass_gainer' ORDER BY views DESC";
        }else if($car==='dto'){
            $sql = "SELECT * FROM products WHERE product='Creatine' ORDER BY views DESC";
        }

        $stmt = $db->ejecutar($sql);
        return $db->listar_arr($stmt);
    }

    public function select_cat($db, $cat) {
        $sql = "SELECT * FROM products WHERE product='$cat' ORDER BY views DESC";
        $stmt = $db->ejecutar($sql);
        return $db->listar_arr($stmt);
    }

    public function select_search($db, $province, $shop, $product, $offset) {
        $sql = "SELECT p.* FROM products p, shops s WHERE p.cod_shop = s.cod_shop AND s.city = '$province' AND s.name = '$shop' AND p.product = '$product' LIMIT 4 OFFSET $offset";
        $stmt = $db->ejecutar($sql);
        return $db->listar_arr($stmt);
    }

    public function filter($db, $checks, $count) {
        if ($count === '0'){
            $sql = "SELECT * FROM products";
        }else{
            $sql = "SELECT * FROM products WHERE 0 $checks";
        }

        $stmt = $db->ejecutar($sql);
        return $db->listar_arr($stmt);
    }


}
