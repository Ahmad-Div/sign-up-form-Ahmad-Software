
//make document ready

$(document).ready(function () {

    //give some hover animation to the inputs
    $("input").hover(function () {
        $(this).css("border-color", "red");
        $(this).css("border-width", "2px");
    }, function () {
        $(this).css("border-color", "black");
        $(this).css("border-width", "1px");
    })

    //*************************** */




    //work on the inputs where button clicked
    let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "<", ">", "{", "}", "~"];

    $("button").click(function () {
        let inputsAreEmpty = true;
        for (let i = 0; i < $("input").length; i++) {
            if ($("#input-" + (i + 1)).val() == "") {
                inputsAreEmpty = true;
            } else {
                inputsAreEmpty = false;
                break;

            }
        }
        const array = ["first Name", "Last Name", "Email address", "Password"];
        if (inputsAreEmpty) {
            for (let i = 1; i <= 4; i++) {
                let name = "#error-" + i + "";
                $(name).text(array[i - 1] + " cannot be empty");
            }


            $(".error-message").css("display", "block");
            $(".error-img").css("display", "block");
            $(".form input").css("border-color", "red");
            $(".form input").css("border-width", "2px");

            setTimeout(function () {
                $(".error-message").css("display", "none");
                $(".error-img").css("display", "none");
                $(".form input").css("border-color", "black");
                $(".form input").css("border-width", "1px");
            }, 5000)
        } else {

            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < symbols.length; j++) {
                    if ($("#input-" + (i + 1)).val() == symbols[j]) {
                        $("#error-" + (i + 1)).text("Wrong name");
                        $("#error-" + (i + 1)).css("display", "block");
                        $("#error-img-" + (i + 1)).css("display", "block");
                        $("#input-" + (i + 1)).css("border-color", "red");
                        $("input-" + (i + 1)).css("border-width", "2px");
                        break;
                    }
                }
            }
            setTimeout(function () {
                for (let i = 0; i < 2; i++) {
                    $("#error-" + (i + 1)).css("display", "none");
                    $("#error-img-" + (i + 1)).css("display", "none");
                    $("#input-" + (i + 1)).css("border-color", "black");
                    $("input-" + (i + 1)).css("border-width", "1px");
                }

            }, 5000)

            if ($("#input-3").val().includes("@gmail.com") && $("#input-3").val().length >= 10) {

            } else {
                $("#error-3").text("Wrong email");
                $("#error-3").css("display", "block");
                $("#error-img-3").css("display", "block");
                $("#input-3").css("border-color", "red");
                $("input-3").css("border-width", "2px");
                setTimeout(function () {
                    $("#error-3").css("display", "none");
                    $("#error-img-3").css("display", "none");
                    $("#input-3").css("border-color", "black");
                    $("input-3").css("border-width", "1px");
                }, 5000)
            }
        }

    })
})
