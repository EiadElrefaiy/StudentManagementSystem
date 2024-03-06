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

  var abssence = 0;
  var full_days = 100;
  var degrees = 0;
  var full_degrees = 0;

  fetch("https://safrji.com/api/v1/admins/get-student-id", {
    method: 'POST',
    body: JSON.stringify({
        id : localStorage.getItem("student_id")
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
          for(var n = 0; n <= data["results"].length - 1; n++){
            degrees +=  data["results"][n]["degree"];
            full_degrees +=  data["results"][n]["full_degree"];
         }
         abssence =  data["student"]["attendance"];
         if(jQuery('#home-perfomer-chart').length){
          new Morris.Donut({
            element: 'home-perfomer-chart',
            resize: true,
            colors: ["#1e3d73", "#fe517e"],
            data: [
              {label: "نسبة الحضور", value: full_days - ((abssence / 100) * 100)},
              {label: "نسبة الغياب", value: (abssence / 100) * 100},
            ],
            hideHover: 'auto'
          });
      }
      if(jQuery('#home-perfomer-chart2').length){
           new Morris.Donut({
            element: 'home-perfomer-chart2',
            resize: true,
            colors: ["#1e3d73", "#fe517e"],
            data: [
              {label: "نسبة الدرجات", value: (degrees / full_degrees) * 100},
              {label: "نسبة الدرجات", value: 100 - ((degrees / full_degrees) * 100)},
            ],
            hideHover: 'auto'
          });
      }
        document.getElementById("degrees").innerHTML = degrees;
        document.getElementById("abssence").innerHTML = abssence;
        document.getElementById("full_degrees").innerHTML = full_degrees;

        var abssence_status = "";
        if(((abssence / 100) * 100) >= 50 && ((abssence / 100) * 100) <= 100){
          abssence_status = "غير ملتزم";
        }else if(((abssence / 100) * 100) > 25 && ((abssence / 100) * 100) < 50){
          abssence_status = "منوسط";
        }else{
          abssence_status = "ملتزم";
        }
        document.getElementById("abssence_status").innerHTML = abssence_status;


        var degrees_status = "";
        if(((degrees / full_degrees) * 100) >= 80 && ((degrees / full_degrees) * 100) <= 100){
          degrees_status = "ممتاز";
        }else if(((degrees / full_degrees) * 100) >= 60 && ((degrees / full_degrees) * 100) < 80){
          degrees_status = "متوسط";
        }else{
          degrees_status = "ضعيف";
        }
        document.getElementById("degrees_status").innerHTML = degrees_status;
        }
     });

}
