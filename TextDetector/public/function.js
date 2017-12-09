var submitimage = function() {
    var body = {};

/*
    body.num1 = $("#firstnumber").val();
    body.num2 = $("#secondnumber").val();*/
        //body = formData
  //  body.formdata = $("#form").val();


    var formData = new FormData();
   // formData.append("profile-picture", event.target.files[0]);
    formData.append("profile-picture",$("#form").value());
    formData.append("profile-picture")
    body: formData

    body.op = "+";
    $.ajax({
        url: "/readimage",
        method: "POST",
        dataType: "json",
        data: body
    }).then(handleSuccess);
}

function handleSuccess(res, response, body) {
    // console.log(body);
    $("#result").val(res.result);
}