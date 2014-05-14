function activate_modal(){
  console.log("bjdsahbds");
   $('#myModal').modal()
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
    workHistory = ko.computed(function() {
        // console.log("hsbcbds", this.work());
    }, this);
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


ko.applyBindings(new UserViewModel());