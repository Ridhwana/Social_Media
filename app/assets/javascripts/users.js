function activate_modal(){
   $('#myModal').modal()
}

function addCompany(){
  $('#search').typeahead({
  property: "user_role",
  minLength: 1,
  delay: 1500,
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

function updateWorkingHistorySummary() {
$('#workingHistorySummary').text('Company Name: ' + $('#search').val() + "- " + $('#workingHistoryModal').val()).change()
}

function UserViewModel() {
    // Data
    $.getJSON("/api/users/1", function(allData) {
        self.users(allData);
    });  

    var self = this;
    self.users = ko.observableArray([]);
    save = function() {
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
