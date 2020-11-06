<?php

session_start();

if (isset($_POST['content'])) {


    $msg = substr($_POST['content'], 0, 18);
    $msg_g = '';

    if ($msg == '>RegistrarMensaje ') {
        $msg_g = substr($_POST['content'], 18);

        if (!isset($_SESSION['content'])) {
            $_SESSION['content'] = array();
        }
        print($msg_g);
    } else {

        $msg = substr($_POST['content'], 0, 14);
        if ($msg == '>ListarMensaje') {


            print_r($_SESSION['content']);
        }
    }
    $_SESSION['content'][] = $msg_g;
}
