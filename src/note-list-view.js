(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.parseNotes = function() {
    var htmlString = "<ul>";
    this.noteList.getNotes().forEach(function(note) {
      htmlString += "<li><div><a" + " href=\"#notes/" + note.getId() + "\">" + note.getText().substr(0, 20) + "</a></div></li>";
    })
    htmlString += "</ul>";
    return htmlString;
  };
  exports.NoteListView = NoteListView;
})(this);
