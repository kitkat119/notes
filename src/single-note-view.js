(function(exports) {
  function SingleNoteView(constructor) {
    this.constructor = constructor;
  }

  SingleNoteView.prototype.getHTML = function() {
    var note = this.constructor;
    var htmlString = "<div>";
    htmlString += note.getText() + "</div>";
    return htmlString;
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
