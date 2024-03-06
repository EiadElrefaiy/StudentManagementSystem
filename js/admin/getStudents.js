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

    fetch("https://safrji.com/api/v1/admins/get-students", {
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
            for(var n = 0; n <= data["students"].length - 1; n++){
                $("#students_node").append(' <tr> <td style="display:none;" class="id">'+data["students"][n]["id"]+'</td> <td class="text-center"><img class="rounded img-fluid avatar-40" src="https://safrji.com/students/storage/app/public/images/'+data["students"][n]["image"]+'" alt="profile"></td> <td>'+data["students"][n]["year"]+'</td> <td class="name">'+data["students"][n]["name"]+'</td> <td>'+data["students"][n]["username"]+'</td> <td>********</td> <td>'+data["students"][n]["sum_degrees"]+'</td><td>'+data["students"][n]["sum_full_degrees"]+'</td> <td>'+data["students"][n]["attendance"]+'</td> <td> <div class="flex align-items-center list-user-action"> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"editStudent("+data["students"][n]["id"]+");"+'"><i class="ri-pencil-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" onclick="'+"showDeleteStudent("+data["students"][n]["id"]+");"+'"><i class="ri-delete-bin-line"></i></a> <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"showReports("+data["students"][n]["id"]+");"+'"><i class="ri-file-text-line"></i></a>  <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" onclick="'+"sendNotification("+data["students"][n]["id"]+");"+'"><i class="ri-notification-3-fill"></i></a></div> </td> </tr>');
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


function editStudent(id){
    localStorage.setItem("student_id" , id);
    location.assign("editStudent.html");
}

function showReports(id){
    localStorage.setItem("student_id" , id);
    location.assign("studentReport.html");
}
function sendNotification(id){
    localStorage.setItem("student_id" , id);
    location.assign("sendNotification.html");
}

var student_id = 0;
function showDeleteStudent(id){
    student_id = id;
    $("#deleteStudent").fadeIn(100);
}

function cancelshowDeleteStudent(){
    $("#deleteStudent").fadeOut(100);
}

function deleteStudent(id){
    id= student_id;
    fetch("https://safrji.com/api/v1/admins/delete-student", {
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
                $("#deleteStudent").fadeOut(100);
                setTimeout(function(){
        
                    alert("تم حذف الطالب");
        
                }, 100);   
                }
        });
}

function exportToExcel() {
    TableToExcel.convert(document.getElementById("user-list-table"), {
        name: "table1.xlsx",
        sheet: {
          name: "Sheet 1"
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
