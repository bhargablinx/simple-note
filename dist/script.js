const allNotesContainer = document.querySelector(".all-note-container");

function createCard() {
  // card container start
  const container = document.createElement("div");
  container.classList.add(
    "p-3",
    "bg-pink-400",
    "w-80",
    "rounded-lg",
    "border-2",
    "border-pink-500"
  );

  // Writing zone stat
  const writingZonDiv = document.createElement("div"); // no class
  const inputDiv = document.createElement("div"); //input div
  inputDiv.className = "mb-3";
  const titleInput = document.createElement("input"); //Title input
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.classList.add("p-2", "w-full", "rounded-lg");
  inputDiv.appendChild(titleInput);
  writingZonDiv.appendChild(inputDiv);
  const inputNoteDiv = document.createElement("div"); // input notes div
  const textArea = document.createElement("textarea"); // text area notes
  textArea.placeholder = "Enter Notes Here";
  textArea.classList.add("p-2", "w-full", "rounded-lg", "h-44", "resize-none");
  inputNoteDiv.appendChild(textArea);
  writingZonDiv.appendChild(inputNoteDiv);
  container.appendChild(writingZonDiv);

  //   button section
  const btnContainer = document.createElement("div");
  btnContainer.classList.add(
    "flex",
    "justify-between",
    "mx-6",
    "mt-2",
    "text-xl"
  );
  //   save btn
  const savBtn = document.createElement("button");
  const savIcon = document.createElement("i");
  savIcon.classList.add("fa-solid", "fa-floppy-disk", "hover:text-sky-600");
  savBtn.appendChild(savIcon);
  btnContainer.appendChild(savBtn);
  //   delete btn
  const delBtn = document.createElement("button");
  const delIcon = document.createElement("i");
  delIcon.classList.add("fa-solid", "fa-trash", "hover:text-red-700");
  delBtn.appendChild(delIcon);
  btnContainer.appendChild(delBtn);
  container.appendChild(btnContainer);

  allNotesContainer.appendChild(container);
}
