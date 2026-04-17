$(function(){

    $.getJSON('./data.json', function(data) {
        data.forEach(function(item) {
            $('.cards').append(`
            <div class="card">
                <div class="card-background ${item.title.toLowerCase()}"></div>
                <h3>${item.title}</h3>
                <p>${item.timeframes.daily.current}hrs</p>
                <div>
                    Last Week - ${item.timeframes.daily.previous}hrs
                </div>
            </div>
        `);
        });
    });


    $('.navigation li').click(function(e) {
        let target = e.target.innerText.toLowerCase(); // daily, weekly, monthly

        $.getJSON('./data.json', function(data) {

            $('.cards').html(''); // 🔥 reset avant d'ajouter

            data.forEach(function(item) {
                $('.cards').append(`
                <div class="card">
                    <div class="card-background ${item.title.toLowerCase()}"></div>
                    <h3>${item.title}</h3>
                    <p>${item.timeframes[target].current}hrs</p>
                    <div class="footer">
                        Last Week - ${item.timeframes[target].previous}hrs
                    </div>
                </div>
            `);
            });

        });
    });

})