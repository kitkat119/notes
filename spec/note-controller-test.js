describe("Note controller", function() {
    var dummyElement = document.createElement("div");
    var noteList = new NoteList(Note);
    var noteListView = new NoteListView(noteList);
    var noteController = new NoteController(noteList, dummyElement, SingleNoteView, noteListView);
    var htmlString = "<ul><li><div><a href=\"#notes/0\">This is the best Not</a></div></li></ul>";

  it("can be instantiated", function() {
    assert.isTrue(noteController instanceof NoteController);
  })

  it("inserts the HTML string into the app element" , function() {

    noteController.insertHTML();

    assert.isTrue(dummyElement.innerHTML === htmlString);

})
	it("returns the content of a note when it is clicked on", function() {

    noteController.setUpEventListeners();
    noteController.updatePageContent();
		assert.isTrue(dummyElement.innerHTML === "<div>This is the best Notes app ever</div>");

	});


});
