(function(exports) {
  function NoteList(constructor) {
    this.notes = [];
    this.constructor = constructor;
  }

  NoteList.prototype.getNotes = function() {
    return this.notes;
  }

  NoteList.prototype.addNote = function(string) {
    var note = this.constructor;
    this.notes.push(new note(string));
  }
  exports.NoteList = NoteList;
})(this);
