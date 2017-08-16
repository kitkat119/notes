  document.addEventListener("DOMContentLoaded", function(event) {
    var element = document.getElementById('app');
    var noteList = new NoteList();
    var noteController = new NoteController(noteList, element);
    noteController.insertHTML();
  });
