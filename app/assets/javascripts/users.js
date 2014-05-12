(function ($) {

  var model = [
    {
      name:     "Ridhwana Khan",
      email:    "ridhwana.khan16@gmail.com",
      bio:      "I am interested in Computer Science. I love reading. Spending time with family. Eating",
      work:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit quis augue sit amet mollis. Mauris id turpis diam. Ut pellentesque justo dolor, nec eleifend mauris euismod vitae. Morbi diam est, ornare non felis sit amet, elementum ultricies ante. Mauris id condimentum mauris. Nunc eleifend et enim eu sagittis. In congue, sapien nec vulputate pulvinar, tellus leo porttitor nibh, at rhoncus tellus lacus ac metus. Vestibulum pharetra scelerisque est sed tincidunt. Ut congue, quam a molestie luctus, quam orci congue erat, laoreet interdum lectus justo ac urna. Vestibulum eleifend tellus sit amet urna egestas tempus. Proin ac pretium nisi. Phasellus sit amet tincidunt magna, quis tincidunt sapien. Quisque quis pretium diam, ut consectetur ligula. Sed condimentum purus viverra auctor porta. Ut in bibendum velit. Curabitur eu leo mattis, pretium sapien sed, iaculis mauris.",
      pic:      "/img/person.png",
      deleteMe: function () { viewModel.people.remove(this); } 
    }
    ],

    viewModel = { 
      people: ko.observableArray(model),
    }
  ko.applyBindings(viewModel);
  console.log(model, viewModel);
})
(jQuery);