function testTextProperty() {
    var note = new Note("Hello there");
    assert.isTrue(note.getText() === "Hello there");
  }
testTextProperty();
