function addNote() {
    const noteText = document.getElementById('note-text').value;
    if (noteText.trim() === '') {
        alert('Please enter a note');
        return;
    }

    const notesContainer = document.getElementById('notes');
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = `
        <p>${noteText}</p>
        <button onclick="deleteNote(this)">x</button>
    `;
    notesContainer.appendChild(note);

    document.getElementById('note-text').value = '';
}

function deleteNote(button) {
    const note = button.parentElement;
    note.remove();
}
