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
                console.log(data);
                for(var n = 0; n <= data["results"].length - 1; n++){
                    $("#students_node").append('<tr> <td style="display:none;" class="id">'+data["results"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["results"][n]["student_image"]+'" alt="profile"></td> <td>'+data["results"][n]["student_year"]+'</td> <td class="name">'+data["results"][n]["student_name"]+'</td> <td>'+data["results"][n]["student_username"]+'</td> <td>'+data["results"][n]["degree"]+'</td><td>'+data["results"][n]["full_degree"]+'</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editDegree("+data["results"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a></div> </td> </tr>');
                 }    
            }
         });
}

function search(){
    input = document.getElementById("exampleInputSearch").value;
    
    var trs = $('tr:not(:first)');
    $(trs).hide();

    var chkdName = "name";
    trs = $(trs).find("."+chkdName+':contains('+input+')').parent();
    $(trs).show();
}

function editDegree(id){
    localStorage.setItem("result_id" , id);
    location.assign("editResult.html");
}




