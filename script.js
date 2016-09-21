$("#next").on("click", function () {
    changeColor();
    getQuote();
});

function changeColor() {
    var backColor=["#F44336","#9C27B0","#3F51B5","#4CA503","#4CAF50","#FFA300","#FF5722","#795548","#607D8B","#009688","#E91E63"];
    var randI = Math.floor(Math.random()*backColor.length);
    $(".colorChange").css("backgroundColor",backColor[randI]);
}

function getQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json) {
        var quote=json.quoteText;
        var author=json.quoteAuthor;
    // sending quote and author on the card
        $("#quote").html(quote);
        $("#author").html("<i>" + author + "</i>");
    // change href from twitter button in case of tweeting
        $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quote + " From : " + author);
    });
}
