(function(exports) {
  function NoteList() {
    this.notes = [];

  }

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNote = function(string) {
    var note = this.constructor;
    this.notes.push(new Note(string));
  }
  exports.NoteList = NoteList;
})(this);
