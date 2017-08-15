describe("Note controller", function() {
  it("inserts the HTML string into the app element" , function() {
    var noteList = new NoteList(Note);
    var noteController = new NoteController(noteList);
    var htmlString = "<ul><li><div>This is the best Notes app ever</div></li></ul>";

    

    noteController.getHTML();
    assert.isTrue(element.innerHTML === htmlString);
  })
});
