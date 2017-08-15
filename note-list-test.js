function testNotesArray() {
    var noteList = new NoteList();
    assert.isTrue(noteList.getNotes.length === 0);
  }

function testStoresNote() {
  var noteList = new NoteList(Note);
  noteList.addNote("hello");
  assert.isTrue(noteList.getNotes().length !== 0);
}
testNotesArray();
testStoresNote();
