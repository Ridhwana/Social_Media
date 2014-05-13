(function ($) {

  var model = $.getJSON("api/users.json", function() { 
  })
  .done(function(model) {
    console.log( "second success"); 
    viewModel = { 
      people: ko.observableArray(model),
    }
    ko.applyBindings(viewModel);
    console.log(model, viewModel);
  });

})
(jQuery);