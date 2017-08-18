(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getHTML = function() {
    var htmlString = "<div>";
    htmlString += this.note.getText() + "</div>";
    return htmlString;
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
