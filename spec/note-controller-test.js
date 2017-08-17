describe("Note controller", function() {
    var dummyElement = document.createElement("div");
    var noteList = new NoteList(Note);
    var noteController = new NoteController(noteList, dummyElement);
    var htmlString = "<ul><li><div><a href=\"#notes/0\">This is the best Not</a></div></li></ul>";

  it("can be instantiated", function() {
    assert.isTrue(noteController instanceof NoteController);
  })

  it("inserts the HTML string into the app element" , function() {
    assert.isTrue(noteController.insertHTML() === htmlString);
})
	it("returns the content of a note when it is clicked on", function() {

		function noteListMock(noteMock) {
			this.noteMock = noteMock
		}

		function noteMock(string, id) {
			this.text = string;
			this.id = id;
		}

		noteListMock = new noteListMock(noteMock);
		noteListMock.addNote("I am a string");

		noteController = new NoteController(noteListMock, dummyElement);

		function singleNoteViewMock() {};

		var singleNoteViewMock = new singleNoteViewMock(noteListMock[0]);

		assert.isTrue(noteController.insertHTML() === singleNoteViewMock.getHTML());
	});


});
