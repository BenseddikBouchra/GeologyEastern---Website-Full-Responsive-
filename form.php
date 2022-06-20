<?php

  if(isset($_POST['Envoyer']))
  {
  	if(isset($_POST['Nom']) AND isset($_POST['Adresse']) AND isset($_POST['Email']) AND isset($_POST['mot de passe']) AND isset($_POST['Téléphone']) AND isset($_POST['sujet']) AND isset($_POST['commentaire']))
  	{
  		if(!empty($_POST['Nom']) AND !empty($_POST['Adresse']) AND !empty($_POST['Email']) AND !empty($_POST['mot de passe']) AND !empty($_POST['Téléphone']) AND !empty($_POST['sujet']) AND !empty($_POST['commentaire']))
  		{
           $Nom=htmlspecialchars($_POST['Nom']);
           $Adresse=htmlspecialchars($_POST['Adresse']);
           $Email=htmlspecialchars($_POST['Email']);
           $mot_de_passe=htmlspecialchars($_POST['mot de passe']);
           $Téléphone=htmlspecialchars($_POST['Téléphone']);
           $sujet=htmlspecialchars($_POST['sujet']);
           $commentaire=htmlspecialchars($_POST['commentaire']);


 
             
             echo "<h2> Hello <mark><b> $Nom </b></mark> Thank you for your inscription, your  email:<mark><b> $Email </b></mark>,
              , your Adress: </br></br> $Adress </h2> your phone : $Téléphone , your service : $sujet your comment : $commentaire " ;
  		}
  	}
  }

?>