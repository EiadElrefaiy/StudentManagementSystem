window.onload = function () {
    if(localStorage.getItem("login") == 2){
        $("#teachers_menu").addClass("hidden");
        $("#exams_menu").addClass("hidden");
    }
    document.getElementById("admin_name").innerHTML= localStorage.getItem("admin_name");
    var position;
    localStorage.getItem("login") == 1 ? position = 'مدير' : localStorage.getItem("login") == 2 ? position = 'اخصائي' : position = 'مدرس';
    document.getElementById("admin_position").innerHTML= position;
    document.getElementById("admin_img").src= "https://safrji.com/students/storage/app/public/images/"+localStorage.getItem("admin_image");

    fetch("https://safrji.com/api/v1/admins/get-survey-id", {
        method: 'POST',
        body: JSON.stringify({
            id : localStorage.getItem("survey_id")
        }),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },        
})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data["status"] == false){
                location.replace("sign-in.html");
            }else{

                var selectClass = document.getElementById('exampleFormControlSelect1');
                var optionClass;
                for (var i = 0; i < selectClass.options.length; i++) {
                    optionClass = selectClass.options[i];
                         if (optionClass.text == data["survey"]["subject"]) {
                            optionClass.setAttribute('selected', true);
                    }
                }

                var selectClass2 = document.getElementById('exampleFormControlSelect2');
                var optionClass2;
                for (var i = 0; i < selectClass2.options.length; i++) {
                    optionClass2 = selectClass2.options[i];
                         if (optionClass2.text == data["survey"]["year"]) {
                            optionClass2.setAttribute('selected', true);
                    }
                }
        
            document.getElementById("title").value = data["survey"]["title"];
            document.getElementById("degree").value = data["survey"]["degree"];
            }
         });
}


function editSurvey(){
    
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/update-survey", {
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
                alert("تم تعديل الاختبار بنجاح");
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

      formData.append("id", localStorage.getItem("survey_id"));
      formData.append("subject", text_subject);
      formData.append("year", text);
      formData.append("title", document.getElementById("title").value);
      formData.append("degree", document.getElementById("degree").value);
      upload(formData);
}
