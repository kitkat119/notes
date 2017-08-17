(function(exports) {
  function Note(string, id) {
    this.text = string;
    this.id = id;
  }

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.getId = function() {
    return this.id;
  }
  exports.Note = Note;
})(this);
