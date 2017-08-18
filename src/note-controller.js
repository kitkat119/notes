(function(exports) {
  function NoteController(noteList, element, SingleNoteView, noteListView) {
    this.noteList = noteList;
    // this.noteList.addNote("This is the best Notes app ever");
    this.noteListView = noteListView;
    this.element = element;
    this.singleNoteView = SingleNoteView;
  }

  NoteController.prototype.insertHTML = function() {
    var string = this.noteListView.parseNotes();
    this.element.innerHTML = string;
    return this.element.innerHTML ;
  };

NoteController.prototype.setUpEventListeners = function() {
  var self = this;
    window.addEventListener("hashchange", function(event) {
      self.updatePageContent();
    });
    window.document.getElementById("text").addEventListener("submit", function(event) {
      console.log(event.target.elements[0].value);
      event.preventDefault();
      self.noteList.addNote(event.target.elements[0].value);
      self.insertHTML();
    });
};
  NoteController.prototype.updatePageContent = function() {
    var id = this.findNoteId();
    this.displayNoteByID(id);
  };
  NoteController.prototype.displayNoteByID = function(id) {
    var singleNote = new this.singleNoteView(this.noteList.getNotes()[id]);
    this.element.innerHTML = singleNote.getHTML();
  };
  NoteController.prototype.findNoteId = function() {
    var id = window.location.hash.split("notes/")[1];
    return id;
  };

  exports.NoteController = NoteController;
})(this);
