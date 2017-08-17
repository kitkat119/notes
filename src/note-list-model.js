(function(exports) {
  function NoteList(constructor) {
    this.constructor = constructor;
    this.notes = [];
		this.noteCount = 0;
  }

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNote = function(string) {
		var note = this.constructor;
    this.notes.push(new note(string, this.noteCount));
		this.noteCount += 1;
  }

  exports.NoteList = NoteList;
})(this);
