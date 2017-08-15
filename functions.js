  document.addEventListener("DOMContentLoaded", function(event) {
    var noteList = new NoteList(Note);
    var noteController = new NoteController(noteList);
    noteController.getHTML();
  });
