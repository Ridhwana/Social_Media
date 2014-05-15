function activate_modal(){
  console.log("bjdsahbds");
   $('#myModal').modal()
}

function addCompany(){
  $('#search').typeahead({
  property: "user_role",
  minLength: 1,
  delay: 1500,
  // source: colors

  source: function (query, process) {
      return $.getJSON(
          '/api/companies.json',
          { query: query },
          function (data) {
            var newData = [];
             $.each(data, function(){

                  newData.push(this.name);
              });
              return process(newData);
          });
  }
  });
}

// function User(data) {
//     console.log("in User");
//     this.name = ko.observable(data.name);
//     this.bio = ko.observable(data.bio);
//     this.work = ko.observable(data.work);
//     this.email = ko.observable(data.email);
// }

function UserViewModel() {
    // Data
    $.getJSON("/api/users/1", function(allData) {
        console.log("get data from server", allData);
        // var mappedUsers = $.map(allData, function(user) { return new User(user) });
        // console.log(mappedUsers);
        self.users(allData);
    });  

    var self = this;
    self.users = ko.observableArray([]);
    console.log("ping", self.users);
    console.log(self.users);
    save = function() {
      console.log("put data to server", ko.toJSON({ users: self.users }));
      $.ajax("/api/users/1", {
          data: ko.toJSON(self.users),
          type: "put", contentType: "application/json",
          success: function(data) {}
      });
    }; 
    // Load initial state from server, convert it to Task instances, then populate self.tasks



}

$(document).ready(function() {
    ko.applyBindings(new UserViewModel());

});
