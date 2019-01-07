function WebmailViewModel() {
    // Data
    const self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    
    // Behaviors
    self.goToFolder = function(folder) {
        self.chosenFolderId(folder);
    };
};

ko.applyBindings(new WebmailViewModel());