
let candidateCount = 3; 

window.onload = function() {
    document.getElementById('submitSelectedButton').disabled = true;
}

function addNewCandidate() {
    candidateCount++; 
    const tbody = document.getElementById('candidateTable').getElementsByTagName('tbody')[0];
    const newRow = tbody.insertRow(); 
    newRow.className = 'newRow'; 

    newRow.innerHTML = `
        <td><input type="checkbox" onchange="toggleCheckbox(this)" /><br /><br /><img src="down.png" alt="expand" width="25" onclick="toggleRow(this)" /></td>
        <td>Student ${candidateCount}</td>
        <td>Teacher ${candidateCount}</td>
        <td>Pending</td>
        <td>Fall</td>
        <td>RA</td>
        <td>4567${candidateCount}</td>
        <td>50%</td>
        <td><button onclick="removeRow(this)" style="display: none;">Delete</button></td>
        <td><button onclick="openEditDialog(this)" style="display: none;">Edit</button></td> 
    `;
    showMessage(`Student ${candidateCount} Record added successfully`);
}

function showMessage(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000); 
}

function removeRow(button) {
    const row = button.parentNode.parentNode;
    const studentName = row.cells[1].textContent; 

    const confirmed = confirm(`Are you sure you want to delete the record for ${studentName}?`);

    if (confirmed) {
        row.parentNode.removeChild(row);

        showMessage(`${studentName} record deleted successfully`);

        updateSubmitButtonState();
    }
}

function updateSubmitButtonState() {
    const checkboxes = document.querySelectorAll('#candidateTable input[type="checkbox"]');
    const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
    document.getElementById('submitSelectedButton').disabled = !isAnyChecked;

    if (isAnyChecked) {
        document.getElementById('submitSelectedButton').classList.add('enabled');
    } else {
        document.getElementById('submitSelectedButton').classList.remove('enabled');
    }
};

function toggleCheckbox(checkbox) {
    const row = checkbox.parentNode.parentNode;

    if (checkbox.checked) {
        row.classList.add('highlight');
        row.classList.remove('default-row');
        document.getElementById('submitSelectedButton').classList.add('enabled');
        row.cells[8].firstChild.style.display = 'inline'; 
        row.cells[9].firstChild.style.display = 'inline'; 
    } else {
        row.classList.remove('highlight');
        row.classList.add('default-row');
        document.getElementById('submitSelectedButton').classList.remove('enabled');
        row.cells[8].firstChild.style.display = 'none'; 
        row.cells[9].firstChild.style.display = 'none'; 
    }

    const checkboxes = document.querySelectorAll('#candidateTable input[type="checkbox"]');
    const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);
    document.getElementById('submitSelectedButton').disabled = !isAnyChecked;
};

function toggleRow(element) {
    let currentRow = element.parentElement.parentElement;
    const candidateName = currentRow.cells[1].textContent;
    const advisor = currentRow.cells[2].textContent;
    const awardStatus = currentRow.cells[3].textContent;
    const semester = currentRow.cells[4].textContent;
    const type = currentRow.cells[5].textContent;
    const budgetNumber = currentRow.cells[6].textContent;
    const percentage = currentRow.cells[7].textContent;

    let nextRow = currentRow.nextElementSibling;
    
    if (nextRow && nextRow.classList.contains('extra-details')) {
        nextRow.remove();
    } else {
        currentRow.insertAdjacentHTML('afterend', `
            <tr class="extra-details">
                <td colspan="10" class="extra-info">
                    <div>
                        <strong>Advisor: ${advisor}</strong> 
                        <br />
                        <br />
                        Award Status: ${awardStatus} 
                        <br />
                        Semester: ${semester}
                        <br />
                        Budget Number: ${budgetNumber}
                        <br />
                        Percentage: ${percentage}
                        <br />
                        Comments: none
                        <br />
                        <br />
                        
                        <br />
                    </div>
                </td>
            </tr>
        `);
    }
};

function openEditDialog(button) {
    const studentRow = button.parentNode.parentNode; 
    const studentDetails = Array.from(studentRow.cells).slice(1, 8).map(cell => cell.textContent); 
    const modal = document.getElementById('editModal');
    modal.style.display = 'block';

    document.getElementById('editModalTitle').textContent = `Edit details of ${studentDetails[0]}`;

    document.getElementById('studentDetailsText').innerHTML = `
        <label><strong>Student Name:</strong></label>
        <input type="text" id="studentName" value="${studentDetails[0]}"><br/>

        <label><strong>Teacher:</strong></label>
        <input type="text" id="teacher" value="${studentDetails[1]}"><br/>

        <label><strong>Status:</strong></label>
        <input type="text" id="status" value="${studentDetails[2]}"><br/>

        <label><strong>Term:</strong></label>
        <input type="text" id="term" value="${studentDetails[3]}"><br/>

        <label><strong>Type:</strong></label>
        <input type="text" id="type" value="${studentDetails[4]}"><br/>

        <label><strong>ID:</strong></label>
        <input type="text" id="studentID" value="${studentDetails[5]}"><br/>

        <label><strong>Performance:</strong></label>
        <input type="text" id="performance" value="${studentDetails[6]}"><br/>
    `;

    document.getElementById('updateButton').onclick = function () {
        studentRow.cells[1].textContent = document.getElementById('studentName').value;
        studentRow.cells[2].textContent = document.getElementById('teacher').value;
        studentRow.cells[3].textContent = document.getElementById('status').value;
        studentRow.cells[4].textContent = document.getElementById('term').value;
        studentRow.cells[5].textContent = document.getElementById('type').value;
        studentRow.cells[6].textContent = document.getElementById('studentID').value;
        studentRow.cells[7].textContent = document.getElementById('performance').value;

        modal.style.display = 'none'; 
        showMessage(`${document.getElementById('studentName').value} data updated successfully`);
    };

    document.getElementById('cancelButton').onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};



