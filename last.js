// EMAIL
function sendMail(){
  var params = {
    message: document.getElementById("message").value 
  };
  const serviceID = "service_18cuam6";
  const templateID = "template_bfmw3s6";
  
  emailjs.send(serviceID, templateID, params).then(
    res =>{
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your Last Message sent succesfully Continuously takecare of yourself Thankyou for Sending message Appreciated Goodbye.cd")
    }
    )
    .catch((err) => console.log(err));
  }