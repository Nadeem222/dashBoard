document.addEventListener('DOMContentLoaded', function() {
    const employeeList = document.getElementById('employee-list');
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    const modal = document.getElementById('add-employee-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const addEmployeeSubmitBtn = document.getElementById('add-employee-submit');
    
    // Dummy data for initial display
    let employees = [
        { name: 'John Doe', position: 'Manager' },
        { name: 'Jane Smith', position: 'Developer' }
    ];

    // Function to display employees
    function displayEmployees() {
        employeeList.innerHTML = '';
        employees.forEach(function(employee) {
            const item = document.createElement('div');
            item.innerHTML = `<strong>${employee.name}</strong>: ${employee.position}`;
            employeeList.appendChild(item);
        });
    }

    // Display initial employees
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
        const position = document.getElementById('employee-position').value;

        // Add the new employee to the employees array
        employees.push({ name, position });

        // Update the displayed list of employees
        displayEmployees();

        // Close the modal
        modal.style.display = 'none';

        // Clear input fields
        document.getElementById('employee-name').value = '';
        document.getElementById('employee-position').value = '';
    }
});
