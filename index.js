function WebmailViewModel() {
    // Data
    const self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();

    // Behaviours    
    self.goToFolder = function(folder) { self.chosenFolderId(folder);
       $.get("/mail", {folder: folder}, self.chosenFolderData);
    };    

    // Show inbox by default
    self.goToFolder("Inbox");
};

ko.applyBindings(new WebmailViewModel());