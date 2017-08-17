describe("Notes list", function() {

	function noteMock(string,id) {
		this.string = string;
		this.id = id;
	}

  it("has an empty notes array as default" , function() {
    var noteList = new NoteList();
    assert.isTrue(noteList.getNotes().length === 0);
  })

  it("can store a created note", function() {
    var noteList = new NoteList(Note);
    noteList.addNote("hello");
    assert.isTrue(noteList.getNotes().length === 1);
  })

	it("adds an id to each note", function() {
		var noteList = new NoteList(noteMock);
		noteList.addNote("I am a string");
		assert.isTrue(noteList.getNotes()[0].id === 0);
	})
});
