(function(exports) {
  function NoteController(noteList, element) {
    noteList.addNote("This is the best Notes app ever")
    this.noteListView = new NoteListView(noteList);
    this.element = element;
  }

  NoteController.prototype.insertHTML = function() {
    var string = this.noteListView.parseNotes();
    return this.element.innerHTML = string;

  }
  exports.NoteController = NoteController;
})(this);
