

function load() {
    $.ajax({
        url: "js/art.json",
        dataType: "json",
        success: function(response) {
            var controller = new Controller(response);
            controller.render([]);
        }
    });
}



$( document ).ready(function() {
    load();
});
