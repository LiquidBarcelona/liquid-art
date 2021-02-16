$.ajax({
    url: "js/art.json",
    dataType: "json",
    success: function(response) {
        $.each(response.reverse(), function(key, item) {
            $('#works-of-art').append(
                `
                <div class="row">
                    <div class="card d-flex h-100" style="width: 38rem;">
                      
                      <div class="card-body d-flex flex-column align-items-start">
                        <h5 class="card-title"><a href="${item.authorUrl}" target="_blank"> ${item.author}</a> - <a href="${item.workOfArtWiki}" target="_blank">${item.title}</a> (${item.year})</h5>
                      </div>
                      <img class="card-img-top" src="${item.workOfArtImg}" alt="${item.title}">
                      <div class="card-body">
                       <p class="card-text">${item.description} <span class="badge badge-primary">${item.sender}</span></p>
                      </div>
                    </div>
                </div>`
            );
        });
    }
});
