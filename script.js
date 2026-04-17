$(function() {

    let storedData = [];

    // Charger une seule fois
    $.getJSON('./data.json', function(data) {
        storedData = data;
        renderCards('daily'); // affichage initial
    });

    function renderCards(period) {
        $('.cards').html('');

        storedData.forEach(function(item) {
            $('.cards').append(`
                <div class="card">
                    <div class="card-background ${item.title.toLowerCase()}"></div>
                    <h3>${item.title}</h3>

                    <div class="card-info">
                        <p>${item.timeframes[period].current}hrs</p>
                        <div class="footer">
                            Last Week - ${item.timeframes[period].previous}hrs
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Click navigation
    $('.navigation li').click(function() {
        let target = $(this).text().toLowerCase().trim();
        renderCards(target);
    });

});