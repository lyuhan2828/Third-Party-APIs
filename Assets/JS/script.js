
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, value)
    })
    $("#9 .description").text(localStorage.getItem("9"))
    $("#10 .description").text(localStorage.getItem("10"))
    $("#11 .description").text(localStorage.getItem("11"))
    $("#12 .description").text(localStorage.getItem("12"))
    $("#13 .description").text(localStorage.getItem("13"))
    $("#14 .description").text(localStorage.getItem("14"))
    $("#15 .description").text(localStorage.getItem("15"))
    $("#16 .description").text(localStorage.getItem("16"))
    $("#17 .description").text(localStorage.getItem("17"))



    function checkHour(){
        var currentHour = moment().hours()
        console.log(currentHour)
        $(".time-block").each(function() {
            console.log($(this))
            var blockHour = parseInt($(this).attr("id"))
            if (currentHour === blockHour) {
                $(this).children().addClass("present")
            }
            else if (currentHour > blockHour) {
                $(this).children().addClass("past")
            }
            else {
                $(this).children().addClass("future")
            }
        })
    }
    
    checkHour();

    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:a'))

})