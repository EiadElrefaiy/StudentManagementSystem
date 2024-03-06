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

function addSurvey(){
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/add-survey", {
            method: "POST",
            headers: {
                "auth-token" : localStorage.getItem("auth-token"),
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
                alert("تم اضافة الاختبار بنجاح");
                location.replace("surveys.html");
            }, 100);  
         }   
        });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
      const formData = new FormData();

      var e_subject = document.getElementById("exampleFormControlSelect1");
      var text_subject = e_subject.options[e_subject.selectedIndex].text;

      var e = document.getElementById("exampleFormControlSelect2");
      var text = e.options[e.selectedIndex].text;


      
      formData.append("subject", text_subject);
      formData.append("year", text);
      formData.append("title", document.getElementById("title").value);
      formData.append("degree", document.getElementById("degree").value);
      
      upload(formData);
      
}
