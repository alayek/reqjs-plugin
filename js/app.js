'use strict';

define('app', [
  'jquery',
], function($){
  var defaultQuote = {
    "quoteText": "Sometimes JSON APIs do not work. That's why you should have an error handler.",
		"quoteAuthor" : "anonymous"
  }

  var updateQuote = function(event){
    event.preventDefault();
    // set the button text
    $("#getQuote")
      .html("Loading...")
      .attr("disabled", true);

    // send the AJAX request to the remote API
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(function(data) {
      $("#quoteText").html(data["quoteText"]);
      if (data["quoteAuthor"].length !== 0) {
        $("#quoteAuthor").html(data["quoteAuthor"]);
      }
      else {
        $("#quoteAuthor").html("anonymous");
      }
      $("#getQuote")
        .html("New Quote")
        .removeAttr("disabled");
    })
    .fail(function(jqxhr, textStatus, err) {
      console.log("Request Failed: " + textStatus + ", " + err);
      $("#quoteText").html(quote["quoteText"]);
      $("#quoteAuthor").html(quote["quoteAuthor"]);
      $("#getQuote")
        .html("New Quote")
        .removeAttr("disabled");
    });
  }

  return {
    defaultQuote: defaultQuote,
    updateQuote: updateQuote
  }
})
