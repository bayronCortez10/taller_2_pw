<?php
session_start();

if (isset($_POST['content'])) {

    $msg = substr($_POST['content'], 0, 15);
    if ($msg == '>ListarMensaje ') {
        print_r($_SESSION['content']);
    } else {
        $msg = substr($_POST['content'], 0, 18);

        if ($msg == '>RegistrarMensaje ') {
            $msg_g = substr($_POST['content'], 18);
            $_POST['content'] = $msg_g;
            
            $_SESSION['content'] = array();
            print ($msg_g);
        }
    }










    //   SESSION_START();
    //    print_r($_SESSION['term']);
    //}
    //else if (!isset($_POST['registrarMensaje'])){
    //    
    //    $_SESSION['term']=array();

}
