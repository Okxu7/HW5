function  sendMail()  {
    var params = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    console.log(email);
    
    console.log(message);

   
   
    const serviceID = "service_q9xso4n";
const templateID = "template_6wtcbiq";

emailjs.send(serviceID,  templateID,  params)
    .then(
        res => {
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log(res);
  alert("vvvvvvvvvvvvvvvvvvvvvvv"); 
  })


.catch ((err)   =>   console.log(err)); 
   
    
 }

