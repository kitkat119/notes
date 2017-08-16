describe('note list view', function() {
  var htmlString = "<ul><li><div>I love Ruby</div></li><li><div>Javascript is ok</div></li></ul>"

  it("returns the note list as a html string", function() {
    var noteList = new NoteList(Note);
    var noteListView = new NoteListView(noteList);
    noteList.addNote("I love Ruby");
    noteList.addNote("Javascript is ok");
    assert.isTrue(noteListView.parseNotes() === htmlString);
  })

});
