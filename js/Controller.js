class Controller {
    data = null;
    senders = [];
    authors = [];
    firstTime = true;
    hash = '';
    filter = '';


    constructor(data) {
        this.data = data.reverse();
        this.hash = window.location.hash?.substring(1);
        this.filter = this.getFilter(this.hash);
        var self = this;
        window.addEventListener('hashchange', function() {
            self.hash = window.location.hash.substring(1);
            self.filter = self.getFilter(self.hash);
            console.log(self.filter);
            self.render();
        })
    }

    getFilter(str) {
        if(str.length > 1) {
            return {
                property: str.split(':')[0],
                value: decodeURIComponent(str.split(':')[1])
            };
        }
        return '';
    }

    renderDiv(div, item) {
        $(div).append(
            `
                <div class="row">
                    <div class="card d-flex h-100" style="width: 38rem;">
                      
                      <div class="card-body d-flex flex-column align-items-start">
                        <h5 class="card-title">
                            <a href="${item.authorUrl}" target="_blank"> ${item.author}</a> - <a href="${item.workOfArtWiki}" target="_blank">${item.title}</a>  (<a href="#year:${item.year}">${item.year}</a>)   &nbsp; &nbsp;<a href="#title:${item.title}" class="bi bi-link float-right"></a>
                        </h5>
                        
                      </div>
                      <img class="card-img-top" src="${item.workOfArtImg}" alt="${item.title}">
                      <div class="card-body">
                       <p class="card-text description">${item.description} <span class="badge badge-primary">${item.sender}</span></p>
                      </div>
                    </div>
                </div>`
        );
    }

    render() {
        var filter = this.filter;
        var self = this;
        $('#works-of-art').empty();

        $.each(this.data, function(key, item) {
            if(!self.senders.includes(item.sender)) {
                self.senders.push(item.sender);
            }
            if(!self.authors.includes(item.author)) {
                self.authors.push(item.author);
            }

            if(filter.length === 0 || item[filter.property].toString() === filter.value) {
                self.renderDiv('#works-of-art', item);
            }
        });


        if(this.firstTime) {
            $.each(this.senders.reverse(), function(key, name) {
                $('#senders').append(
                    `<li><a class="dropdown-item" href="#sender:${name}">${name}</a></li>`
                );
            });
            this.firstTime = false;
        }
    }

}
