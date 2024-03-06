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
  
function addTeacher(){
  
    async function upload(formData) {
        try {
          const response = await fetch("https://safrji.com/api/v1/admins/add-teacher", {
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
                alert("تم اضافة المدرس بنجاح");




      var checkbox1 = document.getElementById('checkbox1');
      var label = document.querySelector('label[for="' + checkbox1.id + '"]');

      var labelText = label.textContent || label.innerText;
  
          if (checkbox1.checked) {
            fetch("https://safrji.com/api/v1/admins/add-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
           } else {
            fetch("https://safrji.com/api/v1/admins/remove-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      

          }


      var checkbox2 = document.getElementById('checkbox2');

      var label = document.querySelector('label[for="' + checkbox2.id + '"]');

      var labelText = label.textContent || label.innerText;
  
          if (checkbox2.checked) {
            fetch("https://safrji.com/api/v1/admins/add-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
           } else {
            fetch("https://safrji.com/api/v1/admins/remove-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      

          }


      var checkbox3 = document.getElementById('checkbox3');

      var label = document.querySelector('label[for="' + checkbox3.id + '"]');

      var labelText = label.textContent || label.innerText;
  
          if (checkbox3.checked) {
            fetch("https://safrji.com/api/v1/admins/add-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
           } else {
            fetch("https://safrji.com/api/v1/admins/remove-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      

          }

      var checkbox4 = document.getElementById('checkbox4');

      var label = document.querySelector('label[for="' + checkbox4.id + '"]');

      var labelText = label.textContent || label.innerText;
  
          if (checkbox4.checked) {
            fetch("https://safrji.com/api/v1/admins/add-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
           } else {
            fetch("https://safrji.com/api/v1/admins/remove-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      

          }

      var checkbox5 = document.getElementById('checkbox5');

      var label = document.querySelector('label[for="' + checkbox5.id + '"]');

      var labelText = label.textContent || label.innerText;
  
          if (checkbox5.checked) {
            fetch("https://safrji.com/api/v1/admins/add-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
           } else {
            fetch("https://safrji.com/api/v1/admins/remove-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      

          }


      var checkbox6 = document.getElementById('checkbox6');

      var label = document.querySelector('label[for="' + checkbox6.id + '"]');

      var labelText = label.textContent || label.innerText;
  
          if (checkbox6.checked) {
            fetch("https://safrji.com/api/v1/admins/add-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
           } else {
            fetch("https://safrji.com/api/v1/admins/remove-teacher-class", {
              method: 'POST',
              body: JSON.stringify({
                teacher_id : data["id"],
                year : labelText
              }),
              headers: {
                  "auth-token" : localStorage.getItem("auth-token"),
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
                  console.log(data);
                  for(var n = 0; n <= data["teachers"].length - 1; n++){
                      $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
                   }
                  }
               });
      
          }


                location.replace("teachers.html");
            }, 100);  
         }   
        });
        } catch (error) {
          console.error("Error:", error);
        }
      }
      




      const formData = new FormData();
      const fileField = document.querySelector('#customFile');

      var e = document.getElementById("exampleFormControlSelect1");
      var text = e.options[e.selectedIndex].text;

      
      formData.append("image", fileField.files[0]);
      formData.append("name", document.getElementById("fname").value);
      formData.append("subject", text);
      formData.append("username", document.getElementById("username").value);
      formData.append("password", document.getElementById("password").value);
      
      upload(formData);
      
}
