// File Uploader

const fileUploadContainer = document.getElementById('file-upload-container');

if (fileUploadContainer) {
    fileUploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUploadContainer.classList.add('drag-over');
    });

    fileUploadContainer.addEventListener('dragleave', () => {
        fileUploadContainer.classList.remove('drag-over');
    });

    fileUploadContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUploadContainer.classList.remove('drag-over');
        handleFiles(e.dataTransfer.files);
    });

    document.getElementById('file-upload-input').addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // Do something with the file, for example, display its name
        console.log('File uploaded: ' + file.name);
    }
}

function openFileUploader() {
    const fileInput = document.getElementById("file-upload-input");
    if (fileInput) {
        fileInput.click();
    }
}

// Image Upload

const fileInput = document.getElementById("file-input");
const fileLabel = document.querySelector(".file-label");
const fileName = document.querySelector(".file-name");
const imagePreview = document.getElementById("image-preview");
const fileInputButton = document.getElementById("file-input-button");

if (fileInputButton && fileInput) {
    fileInputButton.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            fileName.textContent = file.name;
            fileName.style.display = "inline";
            fileLabel.querySelector(".remove-icon").style.display = "inline";

            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "inline";
            };
            reader.readAsDataURL(file);
        } else {
            fileName.style.display = "none";
            fileLabel.querySelector(".remove-icon").style.display = "none";
            imagePreview.style.display = "none";
        }
    });

    function removeImage() {
        fileInput.value = ""; // Clear the file input
        fileName.style.display = "none";
        fileLabel.querySelector(".remove-icon").style.display = "none";
        imagePreview.style.display = "none";
    }
}


// Multiple Select

const selectBox = document.querySelector('.muptiple-select-box');
const selectCheckboxesContainer = document.querySelector('.selectcheckboxes');
const selectCheckboxes = document.querySelectorAll('.selectcheckboxes input[type="checkbox"]');
const select = document.querySelector('select');

selectBox.addEventListener('click', (e) => {
    e.stopPropagation();
    selectCheckboxesContainer.style.display = selectCheckboxesContainer.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (e.target !== selectBox && !selectCheckboxesContainer.contains(e.target)) {
        selectCheckboxesContainer.style.display = 'none';
    }
});


selectCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedOptions = Array.from(selectCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (selectedOptions.length === 0) {
            selectBox.querySelector('span').textContent = 'Select';
        } else if (selectedOptions.length === selectCheckboxes.length) {
            selectBox.querySelector('span').textContent = 'All selected';
        } else if (selectedOptions.length === 1) {
            selectBox.querySelector('span').textContent = selectedOptions;
        } else {
            selectBox.querySelector('span').textContent = selectedOptions.length + ' selected';
        }

        // Log the selected values
        // console.log(selectedOptions);
    });
});


