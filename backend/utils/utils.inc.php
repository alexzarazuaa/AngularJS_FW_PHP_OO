<?php
    function amigable($url, $return = false) {//pretty php
        //print_r(" entrando");
        $amigableson = URL_AMIGABLES;
        $link = "";
  
        if ($amigableson) {
            $url = explode("&", str_replace("?", "", $url));
            //
            $cont=0;
            foreach ($url as $key => $value) {
              $cont = $cont + 1;
            }
            //
            $cont1=0;
            foreach ($url as $key => $value) {
                $cont1= $cont1 + 1;
                $aux = explode("=", $value);
                //
                if($cont1==$cont){
                    $link .=  $aux[1];
                }else{
                    $link .=  $aux[1] . "/";
                }
              
            }//end_foreach
        } else {
            $link = "index.php?" . $url;
        }
        if ($return) {
            return SITE_PATH . $link;
        }
        echo SITE_PATH . $link;
    }


    function generate_Token_secure($longitud){
        if ($longitud < 4) {
            $longitud = 4;
        }
        return bin2hex(openssl_random_pseudo_bytes(($longitud - ($longitud % 2)) / 2));
    }


    function generate_token_JWT($iduser){
        $header = '{"typ":"JWT", "alg":"HS256"}';
        $secret = generate_Token_secure(20);
    
        $arrayPayload =array(
            'iat' => time(),
            'exp'=> time() + (15 * 60),
            'name'=> $iduser
           );
           $payload = json_encode($arrayPayload);
    
        $JWT = new JWT;
        return $JWT->encode($header, $payload, $secret);
      
    }


    function decode_token($token){
        $secret = generate_Token_secure(20);
        $JWT = new JWT;
        $json = $JWT->decode($token, $secret);
        return $json;
    }
