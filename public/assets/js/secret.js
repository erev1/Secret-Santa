$(function() {


  $(".create-person").on("submit", function(event) {
    event.preventDefault()

    var newPerson = {
      name: $("#person").val().trim()
    };

    console.log(newPerson)

    // Send the POST request.
    $.ajax("/api/pairs", {
      type: "POST",
      data: newPerson
    }).done(function(data){
      console.log(data)
      $("#pair").text(data)
    })

  });

});