describe("Text property", function() {
  it("returns the text of a note" , function() {
    var note = new Note("Hello there");
    assert.isTrue(note.getText() === "Hello there");
  })
});
