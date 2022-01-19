function transformNotes(notes) {
    return notes.slice().sort(function (a, b) {
        return b.timestamp - a.timestamp;

    });
}


function formatTimestamp(timestamp) {
    return new Date(timestamp).toUTCString();
}


function formatTitle(body) {
    var maxLength = 20;

    if(body.length > maxLength) {
        return body.substring(0, maxLength - 3) + "...";
    } else if(body.length === 0) {
        return "New Note";
    }
     else {
        return body;
    }
}




var notes = [
    { id:1, body: "", timestamp: Date.now() - 300000000 },
    { id: 2, body: "This is a second test suuuuupe rlong note", timestamp: Date.now() - 200000000 },
    { id: 3, body: "This is a third test", timestamp: Date.now() - 10000000 },
    { id: 4, body: "This is a fourth test", timestamp: Date.now() },
];

var htmlString = "";

transformNotes(notes).forEach(function (note) {
    htmlString += `
     <div class="note-selector">
     <p class="note-selector-title">${formatTitle(note.body)}</p>
     <p class="note-selector-timestamp">${formatTimestamp(note.timestamp)}</p>
     </div>
     `;
});

document.querySelector(".note-selectors").innerHTML = htmlString;
