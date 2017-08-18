describe('Note list view', function() {
  var htmlString = "<ul><li><div><a href=\"#notes/0\">I love Ruby</a></div></li></ul>"

  it("returns the note list as a html string with a URL", function() {
    var noteList = new NoteList(Note);
    var noteListView = new NoteListView(noteList);
    noteList.addNote("I love Ruby");
    assert.isTrue(noteListView.parseNotes() === htmlString);
  })
});
