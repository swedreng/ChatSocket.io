$(document).ready(function(){

    $.GirisYap = function(){
        console.log("geldi");

        $.ajax({


            url: '/girisyap',
            type: "GET",


            success: function (data) {

            }
        });
    }

    $.uyeol = function(){
        console.log("geldi");
        $.ajax({

            url: "/uyeol",
            type: "GET",

            success: function (data) {



            }

        });
    }


});