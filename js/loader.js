$.ajax({
    url: "js/art.json",
    dataType: "json",
    success: function(response) {
        $.each(response, function(key, item) {
            console.log(item);

            $('#works-of-art').append(
                `<div class="card" style="width: 32rem;">
                  
                  <div class="card-body">
                    <h5 class="card-title"><a href="${item.workOfArtWiki}"> ${item.author} - ${item.title}</a></h5>
                    <p class="card-text">${item.description} <span class="font-itallic">by ${item.sender}</span></p>
                  </div>
                  <img class="card-img-top" src="${item.workOfArtImg}" alt="${item.author}">
                </div>`
            );
        });
    }
});
