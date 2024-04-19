
const employeeList = document.getElementById('employee-list');
const addEmployeeBtn = document.getElementById('add-employee-btn');
const modal = document.getElementById('add-employee-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const addEmployeeSubmitBtn = document.getElementById('add-employee-submit');

    
let employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Function to display employees
function displayEmployees() {
        
    const result = document.getElementById('display');

    // Clear existing rows except for the table head
    const tableHead = result.querySelector('tr.tableHead');
    result.innerHTML = '';
    result.appendChild(tableHead);

    // Add employee data rows
    employees.forEach(function(employee) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="name"><span><img src="${employee.image}" alt=""></span>${employee.name}</td>
            <td>${employee.contact}</td>
            <td>${employee.joinDate}</td>
            <td>${employee.position}</td>
            <td>${employee.department}</td>
            <td>${employee.id}</td>
        `;
        result.appendChild(newRow);
    });
}

displayEmployees();

    // Add employee button click event
addEmployeeBtn.onclick = function() {
        modal.style.display = 'flex';
    }

    // Close modal when close button is clicked
closeBtn.onclick = function() {
        modal.style.display = 'none';

    }

    // Add employee submit button click event
addEmployeeSubmitBtn.onclick = function() {
        const name = document.getElementById('employee-name').value;
        const fatherName = document.getElementById('fatherName').value;
        const position = document.getElementById('employee-position').value;
        const contact = document.getElementById('employee-contact').value;
        const department = document.getElementById('employee-department').value;


        if (!selectedImageData) {
            alert("Please select an image for the employee.");
            return;
        }
        
        if(name.trim() === "" && fatherName.trim() === "" && position.trim() === ""){
            alert("Please fill all inout fields")
        }else{

            employees.push({ name, position , fatherName , selectedImageData , contact, department, image: selectedImageData});
    
            localStorage.setItem("employees" , JSON.stringify(employees))
    
            console.log(localStorage)
    
            // Update the displayed list of employees
            displayEmployees();
    
            // Close the modal
            modal.style.display = 'none';
    
            // Clear input fields
            document.getElementById('employee-name').value = '';
            document.getElementById('employee-position').value = '';
            document.getElementById('fatherName').value = " ";
            document.getElementById('employee-contact').value = "";
            document.getElementById('employee-department').value = "";
            selectedImageData = null;
        }

    
}

function triggerFileInput() {
    document.getElementById('picture').click();
}

function handleFileSelection(input) {
    let selectedFile = input.files[0];

    if (!selectedFile) {
        return;
    }

    let validFileTypes = ["image/jpeg", "image/png"];
    if (validFileTypes.indexOf(selectedFile.type) === -1) {
        alert("Invalid file type. Please select a JPEG or PNG file.");
        return;
    }

    let maxSizeInBytes = 1 * 1024 * 1024; // 1 MB
    if (selectedFile.size > maxSizeInBytes) {
        alert("File size exceeds 1MB. Please select a smaller file.");
        return;
    }

    let preview = document.getElementById('preview');
    preview.style.display = 'block';
    preview.src = URL.createObjectURL(selectedFile);

    selectedImageData = URL.createObjectURL(selectedFile);
    console.log(selectedImageData)
}
