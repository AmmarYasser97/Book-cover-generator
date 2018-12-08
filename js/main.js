$(document).ready(function () {
    $(".btn").click(function () {
        let subtitle = $("#bookSubTitle").val();
        let author = $("#authorName").val();
        let publisher = $("#publisher").val();
        let published_year = $("#yearPicker").val();
        let background = $("#backgroundPicker").val();

        $(".foo").text($("#bookTitle").val());
        $(".background").css("background-color", background);
    });
});

// $(document).ready(function () {
//   $(".btn").click(function () {
//     let title = $("#bookTitle").val();
//     // let subtitle = $(".subtitle").val();
//     // let author = $(".author").val();
//     // let color = $(".color").val();
//     // let publisher = $(".publisher").val();
//     // let year = $(".year").val();

//     console.log("title = " + title);
//     // console.log("subtitle = " + subtitle);
//     // console.log("author = " + author);
//     // console.log("color = " + color);
//     // console.log("publisher = " + publisher);
//     // console.log("year = " + year);


//     $(".foo").text(title);

//   });
// });