(function(exports) {
  function NoteController(noteList) {
    noteList.addNote("This is the best Notes app ever")
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.getHTML = function() {
    var string = this.noteListView.parseNotes();
    var app = document.getElementById('app');
    app.innerHTML = string;
  }
  exports.NoteController = NoteController;
})(this);
