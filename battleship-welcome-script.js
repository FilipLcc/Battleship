
function openSetup() {


    //let p1_name = document.getElementById("p1_username");
   

   // if(p1_name.value!="") {
    ///alert("uspelo");
   // }

   let p1_name=document.entry.p1.value; 
   let p2_name=document.entry.p2.value;


   // trazi ovaj deo koda da bi radio ovo dole, zasto, ne znam
 


   if (p1_name=="" && p2_name=="") {
       //alert("Both players didn't enter their usernames properly");
       document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>';
       document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>';
   }
   else{
    if(p1_name=="") {
       
       //alert("Player 1 didn't enter a username!");
       document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>';
       
       //return; 
    } 
    
    if(p2_name=="") {
       
      //alert("Player 2 didn't enter a username!");
       document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>'; 
       
       //return;
    } 
      //zeza, nece da se vrati sa return nego odradi do kraja

    let regex=/^\w{3,15}$/;
    let bool1=false;
    let bool2=false;
   if(regex.test(p1_name)) {
    bool1=true;
    document.getElementById('error1').innerHTML="";
    localStorage.setItem("p1",p1_name);
   }
       
    if(regex.test(p2_name)) {
        bool2=true;
        document.getElementById('error2').innerHTML="";
        localStorage.setItem("p2",p2_name);
    }
    if(bool1&&bool2) 
    var setup=window.open("battleship-setup.html");
 

   if(!bool1) {
       if(bool2) {
           //alert("Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters,"+
       //"and can include uppercase and lowercase letters, numbers and _ symbol."); 
       document.getElementById('error1').innerHTML="<font size=\'2\' color = \'red\'> Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
       "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
       if(p1_name=="") {
        document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>'; 
       
        
       }
       }
       else {
       // alert("Both players didn't format their usernames. Username size must be betwwen 3 and 15 characters,"+
       // "and can include uppercase and lowercase letters, numbers and _ symbol.");
       document.getElementById('error1').innerHTML="<font size=\'2\' color = \'red\'> Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
       "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
       document.getElementById('error2').innerHTML="<font size=\'2\' color = \'red\'> Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
       "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
       ///////////////////////////////////////////
       if(p1_name=="") {
        document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>'; 
         
       }
       if(p2_name=="") {
        document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>';       
        
       }
       
       }

   }


   if(!bool2) {
    if(bool1) {
       // alert("Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters,"+
    //"and can include uppercase and lowercase letters, numbers and _ symbol."); 
    document.getElementById('error2').innerHTML="<font size=\'2\' color = \'red\'> Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
    "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
    if(p2_name=="") {
        document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>'; 
       
        
       }
    }
    else {
    // alert("Both players didn't format their usernames. Username size must be betwwen 3 and 15 characters,"+
    // "and can include uppercase and lowercase letters, numbers and _ symbol.");
    document.getElementById('error1').innerHTML="<font size=\'2\' color = \'red\'> Player 1 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
    "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
    document.getElementById('error2').innerHTML="<font size=\'2\' color = \'red\'> Player 2 didn't format his username correctly. Username size must be betwwen 3 and 15 characters," +
    "and can include uppercase and lowercase letters, numbers and _ symbol. </font>";
      ///////////////////////////////////////////
      if(p1_name=="") {
        document.getElementById('error1').innerHTML='<font size=\'2\' color = \'red\'>Player 1 didn\'t enter an username <font>'; 
         
       }
       if(p2_name=="") {
        document.getElementById('error2').innerHTML='<font size=\'2\' color = \'red\'>Player 2 didn\'t enter an username <font>';       
        
       }  
    }
}
   }

}