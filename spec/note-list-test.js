describe("Notes list", function() {
  it("has an empty notes array as default" , function() {
    var noteList = new NoteList();
    assert.isTrue(noteList.getNotes().length === 0);
  })

  it("can store a created note", function() {
    var noteList = new NoteList(Note);
    noteList.addNote("hello");
    assert.isTrue(noteList.getNotes().length === 1);
  })
});
