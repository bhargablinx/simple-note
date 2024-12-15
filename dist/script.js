let notesCount = 0;

class FullNoteTempelate {
  constructor(title, description, index) {
    this.title = title;
    this.description = description;
    this.index = index;
  }
}

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
  titleInput.autocomplete = "off";
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.classList.add("p-2", "w-full", "rounded-lg");
  inputDiv.appendChild(titleInput);
  writingZonDiv.appendChild(inputDiv);
  const inputNoteDiv = document.createElement("div"); // input notes div
  const textArea = document.createElement("textarea"); // text area notes
  textArea.autocomplete = "off";
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
  //   const savBtn = document.createElement("input");
  //   savBtn.classList.add(
  //     "cursor-pointer",
  //     "text-sm",
  //     "bg-black",
  //     "text-white",
  //     "px-3",
  //     "rounded-lg",
  //     "hover:text-sky-600",
  //     "save-btn"
  //   );
  //   savBtn.type = "submit";
  //   savBtn.value = "Save";
  //   btnContainer.appendChild(savBtn);
  //   delete btn
  const delBtn = document.createElement("button");
  delBtn.className = "delete-button";
  const delIcon = document.createElement("i");
  delIcon.classList.add("fa-solid", "fa-trash", "hover:text-red-700");
  delBtn.appendChild(delIcon);
  btnContainer.appendChild(delBtn);
  container.appendChild(btnContainer);

  document.querySelector(".all-note-container").appendChild(container);
}

document.querySelector(".add-note-btn").addEventListener("click", () => {
  createCard();

  notesCount++;
  document.querySelector(
    ".note-counter"
  ).textContent = `Total Notes Count: ${notesCount}`;

  //   document.querySelectorAll(".save-btn").forEach((item) => {
  //     item.addEventListener("click", (e) => {
  //       const writingZone =
  //         e.target.parentNode.parentNode.childNodes[0].childNodes;
  //       const title = writingZone[0].childNodes[0].value;
  //       const notes = writingZone[1].childNodes[0].value;
  //       const index = notesCount - 1;
  //       const n1 = new FullNoteTempelate(title, notes, index);
  //       console.log(n1);
  //     });
  //   });

  document.querySelectorAll(".delete-button").forEach((item) => {
    item.addEventListener("click", (e) => {
      let note = e.target.parentNode.parentNode.parentNode;
      note.remove();
    });
  });
});
