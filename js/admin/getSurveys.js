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

    fetch("https://safrji.com/api/v1/admins/get-surveys", {
        method: 'POST',
        body: JSON.stringify({
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
            for(var n = 0; n <= data["surveys"].length - 1; n++){
                $("#surveys_node").append(' <tr> <td style="display:none;" class="id">'+data["surveys"][n]["id"]+'</td></td> <td>'+data["surveys"][n]["subject"]+'</td> <td class="name">'+data["surveys"][n]["year"]+'</td> <td>'+data["surveys"][n]["title"]+'</td> <td>'+data["surveys"][n]["degree"]+'</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editSurvey("+data["surveys"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editDegrees("+data["surveys"][n]["id"]+");"+'"><i class="ri-file-text-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteSurvey("+data["surveys"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
             }
            }
         });
}



function editSurvey(id){
    localStorage.setItem("survey_id" , id);
    location.assign("editSurvey.html");
}

function editDegrees(id){
    localStorage.setItem("survey_id" , id);
    location.assign("surveyDegrees.html");
}

var survey_id = 0;
function showDeleteSurvey(id){
    survey_id = id;
    $("#deleteSurvey").fadeIn(100);
}

function cancelshowDeleteSurvey(){
    $("#deleteSurvey").fadeOut(100);
}

function deleteSurvey(id){
    id= survey_id;
    fetch("https://safrji.com/api/v1/admins/delete-survey", {
        method: 'POST',
        body: JSON.stringify({
            id : id,
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
                var trs = $('tr:not(:first)');
                var chkdName = "id";
                trs = $(trs).find("."+chkdName+':contains('+id+')').parent().eq(0);
                $(trs).hide();
                $("#deleteSurvey").fadeOut(100);
                setTimeout(function(){
        
                    alert("تم حذف الاختبار");
        
                }, 100);   
                }
        });
}

function logout(){
    fetch("https://safrji.com/api/v1/admins/logout", {
        method: 'POST',
        body: JSON.stringify({

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
                location.replace("sign-in.html");
                localStorage.setItem("auth-token" , "");
         });    
}
