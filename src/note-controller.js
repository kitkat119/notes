(function(exports) {
  function NoteController(noteList, element) {
    noteList.addNote("This is the best Notes app ever")
    this.noteListView = new NoteListView(noteList);
    this.element = element;
  };

  NoteController.prototype.insertHTML = function() {
    var string = this.noteListView.parseNotes();
    return this.element.innerHTML = string;
  };

	NoteController.prototype.updatePageContent = function() {
		window.addEventListener("hashchange", function {

		}) #put somemethod inside anon function
	};

	NoteController.prototype.getIdFromUrl = function(location) {
		console.log(location.hash.split("#")[1]);
		return location.hash.split("#")[1];
	};

	NoteController.prototype.getNote = function() {
		noteList.getNotes()[locations.hash.split("#")[1]];
	};

	NoteController.prototype.assignNoteContent = function() {
		var singleNoteView = new SingleNoteView(noteList.getNotes()[locations.hash.split("#")[1]]);
		document.getElementById('noteContent').innerHTML = singleNoteView.getHTML()
	};

  exports.NoteController = NoteController;
})(this);
