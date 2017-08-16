describe("Single note view", function() {
  var note = new Note("Eyyy up");
  var singleNoteView = new SingleNoteView(note);

  it("can be instantiated", function() {
    assert.isTrue(singleNoteView instanceof SingleNoteView);
  })

  it("returns a HTML string of the note" , function() {
    assert.isTrue(singleNoteView.getHTML() === "<div>Eyyy up</div>");
  })
});
