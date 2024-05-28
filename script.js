document.addEventListener("DOMContentLoaded",function (event) {
    document.querySelector("button").addEventListener("click",function () {
        $ajaxUtils.sendGetRequest("data/data.json", function (res) {
            var name = res.firstname + " " + res.lastname;
            var message = "";
            if (res.status) {
                message += "is Happy!";
            }
            else {
                message += "is in Pain...";
            }
            document.querySelector("#content").innerHTML = "<h2>"+name +" "+message + "</h2>";

        }
    );
    });

}
);