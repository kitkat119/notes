describe("Note model", function() {
  var note = new Note("Hello there");
  var noteMock = {
    getId: function() {
      return 0;
  }
  };

  it("returns the text of a note" , function() {
    assert.isTrue(note.getText() === "Hello there");
  })
  it("returns a unique id" , function() {
    assert.isTrue(noteMock.getId() === 0);
  })
});
