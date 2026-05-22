const noteInput = document.getElementById("noteInput");

const addBtn = document.getElementById("addBtn");

const notesContainer = document.getElementById("notesContainer");

addBtn.addEventListener("click" , () => {
    const notes = noteInput.value;
    
    const noteDiv = document.createElement("div");

    noteDiv.classList.add("childnote");

    //CREATE PARAGRAPH...

    const notePara = document.createElement("p");

    notePara.textContent = notes;

    if(notes == ""){
        return alert("Please write a Note...");
    }

    // CREATE DELETE BUTTON...

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click" , () => {
    noteDiv.remove();
});


    // ADD ELEMENTS INSIDE NOTE DIV...

    noteDiv.appendChild(notePara);
    noteDiv.appendChild(deleteBtn);

    // ADD NOTE TO SCREEN...

    notesContainer.appendChild(noteDiv);

    // CLEAR TEXTAREA...

    noteInput.value = "";
});




