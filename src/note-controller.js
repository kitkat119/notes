(function(exports) {
  function NoteController(noteList, element, SingleNoteView, noteListView) {
    this.noteList = noteList;
    this.noteList.addNote("This is the best Notes app ever")
    this.noteListView = noteListView;
    this.element = element;
    this.singleNoteView = SingleNoteView;
  };

  NoteController.prototype.insertHTML = function() {
    var string = this.noteListView.parseNotes();
    this.element.innerHTML = string;
    return this.element.innerHTML ;
  };

NoteController.prototype.setUpEventListeners = function() {
  var self = this;
  window.addEventListener("hashchange", function(event) {
    self.updatePageContent();
});
}
  NoteController.prototype.updatePageContent = function() {
    var id = window.location.hash.split("notes/")[1];
    console.log(window.location);
  	var singleNote = new this.singleNoteView(this.noteList.getNotes()[id]);
    	this.element.innerHTML = singleNote.getHTML();

  }
  NoteController.prototype.findById = function() {

  }


	// NoteController.prototype.updatePageContent = function() {
	// 	window.addEventListener("hashchange", function {
  //
	// 	}) #put somemethod inside anon function
	// };
  //
	// NoteController.prototype.getIdFromUrl = function(location) {
	// 	console.log(location.hash.split("#")[1]);
	// 	return location.hash.split("#")[1];
	// };
  //
	// NoteController.prototype.getNote = function() {
	// 	noteList.getNotes()[locations.hash.split("#")[1]];
	// };
  //
	// NoteController.prototype.assignNoteContent = function() {
	// 	var singleNoteView = new SingleNoteView(noteList.getNotes()[locations.hash.split("#")[1]]);
	// 	document.getElementById('noteContent').innerHTML = singleNoteView.getHTML()
	// };

  exports.NoteController = NoteController;
})(this);
