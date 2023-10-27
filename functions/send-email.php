<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet">
    <title>Warsaw Negotiation Round</title>
    <style>
        * {
            font-family: 'Lato', sans-serif;
            margin: 0;
            color: white;
        }
        #logo {
            width: 300px;
            padding-bottom: 20px;
        }
        header {
            display: flex;
            flex-direction: column;
            padding: 20px;
        }
        h1 {
            color: white;
            padding-bottom: 20px;
        }
        body {
            background-color: #151641;
        }
        div {
            padding: 20px;
        }
        a {
            color: white;
        }
        p {
            padding: 10px 0px; 
        }
    </style>
</head>
<body>

</body>
</html>


<?php

    $name = $_POST["contact__form__table__name"];
    $email = $_POST["contact__form__table__email"];
    $comment = $_POST["contact__form__table__comment"];

    $subject = "Nowe zapytanie";
    $message = "
    <h1>Masz nową wiadomość</h1>

    <h2>Dane do kontaktu: </h2>
    <p>Imię i nazwisko: $name</p> 
    <p>E-mail: $email </p> 

    <h2>Informacje</h2>
    <p>$comment</p>
    ";


    // PHPMailer classes into the global namespace
    use PHPMailer\PHPMailer\PHPMailer; 
    use PHPMailer\PHPMailer\Exception;
    // Base files 
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    // create object of PHPMailer class with boolean parameter which sets/unsets exception.
    $mail = new PHPMailer(true);                              
    try {
        $mail->isSMTP(); // using SMTP protocol                                     
        $mail->Host = 'smtp.gmail.com'; // SMTP host as gmail 
        $mail->SMTPAuth = true;  // enable smtp authentication                             
        $mail->Username = 'djpatryk.djtomek@gmail.com';  // sender gmail host              
        $mail->Password = 'ulvbxcoxpktrmmih'; // sender gmail host password                          
        $mail->SMTPSecure = 'tls';  // for encrypted connection                           
        $mail->Port = 587;   // port for SMTP     
        $mail->CharSet = 'UTF-8';

        $mail->setFrom($email, 'djpatrykdjtomek'); // sender's email and name
        $mail->AddReplyTo($email, $name);
        $mail->addAddress('kontakt@djpatrykdjtomek.pl', "Zapytanie");  // receiver's email and name
        $mail->isHTML(true);

        $mail->Subject = $subject;
        $mail->Body    = $message;
    
        $mail->send();
        echo "
        <div>
            <h1>Dziękujemy, że wysłałeś nam zapytanie.</h1>
            <p>Skontaktujemy się w ciągu 24 godzin w celu ustalenia szczegółów.</p>
            <p>Jeśli nie dostaniesz żadnej informacji w tym czasie proszę skontaktuj się z nami.</p>
            <h2>Podane dane kontaktowe:</h2>
            <p>Imię i nazwisko: $name</p> 
            <p>Telefon: $phone </p> 
            <p>E-mail: $email </p> 
        </div>
            ";
        
    } catch (Exception $e) { // handle error.
        echo 'Wiadomość nie mogła zostać wysłana.', $mail->ErrorInfo;
    }

?>