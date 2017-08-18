describe("Note controller", function() {
    var dummyElement = document.createElement("div");
    var noteList = new NoteList(Note);
    var noteListView = new NoteListView(noteList);
    var noteController = new NoteController(noteList, dummyElement, SingleNoteView, noteListView);
    var htmlString = "<ul><li><div><a href=\"#notes/0\">This is the best Not</a></div></li></ul>";

  it("can be instantiated", function() {
    assert.isTrue(noteController instanceof NoteController);
  });

  it("inserts the HTML string into the app element" , function() {

    noteController.insertHTML();

    assert.isTrue(dummyElement.innerHTML === htmlString);

});
	it("displays a single note", function() {

    //noteController.setUpEventListeners();
    noteController.displayNoteByID(0);
		assert.isTrue(dummyElement.innerHTML === "<div>This is the best Notes app ever</div>");

	});


});
