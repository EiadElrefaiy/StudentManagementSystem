
window.onload = function(){
  if(localStorage.getItem("login") == 2){
    $("#teachers_menu").addClass("hidden");
    $("#exams_menu").addClass("hidden");
}
  document.getElementById("admin_name").innerHTML= localStorage.getItem("admin_name");
  var position;
  localStorage.getItem("login") == 1 ? position = 'مدير' : localStorage.getItem("login") == 2 ? position = 'اخصائي' : position = 'مدرس';
  document.getElementById("admin_position").innerHTML= position;
  document.getElementById("admin_img").src= "https://safrji.com/students/storage/app/public/images/"+localStorage.getItem("admin_image");
}

function send(){
    
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/send-notification", {
            method: "POST",
            headers: {
                "async": true,
                "crossDomain": true,
            },        
            body: formData
          }).then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data["status"] == false){
                location.replace("sign-in.html");
            }else{
            console.log(data);
            setTimeout(function(){       
                alert("notification sent Successfully");
            }, 100);  
         }   
        });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const formData = new FormData();      
      formData.append("id", localStorage.getItem("student_id"));
      formData.append("message", document.getElementById("message").value);
      
      upload(formData);
      
}
