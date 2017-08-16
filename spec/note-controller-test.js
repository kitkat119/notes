describe("Note controller", function() {
    var dummyElement = document.createElement("div");
    var noteList = new NoteList(Note);
    var noteController = new NoteController(noteList, dummyElement);
    var htmlString = "<ul><li><div>This is the best Not</div></li></ul>";

  it("can be instantiated", function() {
    assert.isTrue(noteController instanceof NoteController);
  })

  it("inserts the HTML string into the app element" , function() {
    assert.isTrue(noteController.insertHTML() === htmlString);
})
});
