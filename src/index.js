  document.addEventListener("DOMContentLoaded", function(event) {
    var element = document.getElementById('app');
    var noteList = new NoteList(Note);
    var noteListView = new NoteListView(noteList);
    var noteController = new NoteController(noteList, element, SingleNoteView, noteListView);
    noteController.insertHTML();
    noteController.setUpEventListeners();
  });
