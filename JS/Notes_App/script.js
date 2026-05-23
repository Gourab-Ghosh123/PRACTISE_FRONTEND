let noteText = JSON.parse(localStorage.getItem("noteText")) || [];

const noteInput = document.getElementById("noteInput");

const addBtn = document.getElementById("addBtn");

const notesContainer = document.getElementById("notesContainer");

function renderNoteText() {
    notesContainer.innerHTML = "";

    noteText.forEach((note , index) => {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("childnote");

        //CREATE PARAGRAPH...    
        const notePara = document.createElement("p");

        notePara.textContent = note;

        // CREATE DELETE BUTTON...
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click" , () => {
        noteText.splice(index , 1);

    // Saving updated notes array in localStorage...
    localStorage.setItem("noteText" , JSON.stringify(noteText));

    renderNoteText();
});

        // ADD ELEMENTS INSIDE NOTE DIV...
        noteDiv.appendChild(notePara);
        noteDiv.appendChild(deleteBtn);

        // ADD NOTE TO SCREEN...
        notesContainer.appendChild(noteDiv);
    });
}

addBtn.addEventListener("click" , () => {
    const notes = noteInput.value;

    

    
    
    

    if(notes == ""){
        return alert("Please write a Note...");
    }

    noteText.push(notes);

    localStorage.setItem("noteText" , JSON.stringify(noteText));



    

    renderNoteText();


    // CLEAR TEXTAREA...

    noteInput.value = "";
});


renderNoteText();

