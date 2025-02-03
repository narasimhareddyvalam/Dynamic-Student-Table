Assignment 3 - Student Records Management

Project Overview

This project implements a dynamic Student Records Management System using HTML, CSS, and JavaScript. The system allows adding, deleting, editing, and selecting student records while ensuring an interactive user experience.

Tech Stack

Frontend: HTML, CSS, JavaScript (Vanilla JS)

User Interface: Dynamic Table with JavaScript DOM Manipulation

Features

1. Initial Page Load

Displays the Full Name and NUID.

The table remains collapsed by default.

The Submit button is disabled (grayed out) and unclickable.

2. Adding New Student Records

Clicking the "Add New Student" button dynamically adds a new row with dummy values (e.g., "Student 4, Teacher 4").

Ensures existing CSS styles apply to newly added rows.

Displays a popup confirmation message with the new student name.

Displays an error message if the record addition fails.

3. Row Selection (Checkbox Behavior)

Selecting a row:

Changes row background color to yellow.

Enables the Submit button, turning it orange.

Dynamically adds a Delete button in the DELETE column.

Dynamically adds an Edit button in the EDIT column.

Deselecting a row:

Changes background color back to white.

If no rows are selected, the Submit button is disabled again (grayed out).

Hides the Delete and Edit buttons in deselected rows.

4. Delete Record

Clicking the Delete button removes the corresponding row.

Displays a popup confirmation message stating the student record was deleted successfully.

5. Edit Record

Clicking the Edit button opens a popup modal with student details displayed as non-editable text.

The popup contains Update and Cancel buttons.

Clicking Update displays a success message like "Student 2 data updated successfully".

Clicking Cancel closes the popup without changes.

6. Expand/Collapse Table Rows

Clicking the green arrow toggles row expansion and collapse.
