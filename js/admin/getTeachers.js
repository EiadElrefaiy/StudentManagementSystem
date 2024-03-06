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

    fetch("https://safrji.com/api/v1/admins/get-teachers", {
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
            for(var n = 0; n <= data["teachers"].length - 1; n++){
                $("#teachers_node").append(' <tr> <td style="display:none;" class="id">'+data["teachers"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["teachers"][n]["image"]+'"" alt="profile"></td> <td>'+data["teachers"][n]["subject"]+'</td> <td class="name">'+data["teachers"][n]["name"]+'</td> <td>'+data["teachers"][n]["username"]+'</td> <td>********</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteTeacher("+data["teachers"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> </div> </td> </tr>');
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


function editTeacher(id){
    localStorage.setItem("teacher_id" , id);
    location.assign("editTeacher.html");
}

var teacher_id = 0;
function showDeleteTeacher(id){
    teacher_id = id;
    $("#deleteTeachers").fadeIn(100);
}

function cancelshowDeleteTeacher(){
    $("#deleteTeachers").fadeOut(100);
}

function deleteTeacher(id){
    id= teacher_id;
    fetch("https://safrji.com/api/v1/admins/delete-teacher", {
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
                $("#deleteTeachers").fadeOut(100);
                setTimeout(function(){
        
                    alert("تم حذف المدرس");
        
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
