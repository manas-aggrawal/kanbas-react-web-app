import { SetStateAction, useState } from "react";

export default function AssignmentEditor() {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle selection changes
  const handleSubmissionTypeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div id='wd-assignments-editor'>
      <h3>
        <label htmlFor='wd-name'>Assignment Name</label>
      </h3>

      <input id='wd-name' value='A1 - ENV + HTML' />
      <br />
      <br />
      <textarea id='wd-description'>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        {/* Points */}
        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-points'>Points</label>
          </td>
          <td>
            <input id='wd-points' value={100} />
          </td>
        </tr>
        <br />
        <br />
        {/* Assignment group */}
        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-group'>Assignment Group </label>
          </td>
          <td>
            <select name='assignment-group' id='wd-group'>
              <option value=''>--select--</option>
              <option value='assignment'>Assignment</option>
              <option value='quiz'>Quiz</option>
              <option value='exam'>Exam</option>
              <option value='project'>Project</option>
            </select>
          </td>
        </tr>
        <br />
        <br />
        {/* Display grade as */}
        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-display-grade-as'>Display grade as </label>
          </td>
          <td>
            <select
              name='assignment-display-grade-type'
              id='wd-display-grade-as'
            >
              <option value=''>--select--</option>
              <option value='percentage'>Percentage</option>
              <option value='letter'>Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <br />
        {/* Assignment Submission type */}
        <tr>
          <td align='right' valign='top'>
            <label htmlFor='wd-submission-type'>Submission type </label>
          </td>
          <td>
            <select
              name='assignment-submission-type'
              id='wd-submission-type'
              onChange={handleSubmissionTypeChange}
            >
              <option value=''>--select--</option>
              <option value='online'>Online</option>
              <option value='in-person'>In Person</option>
            </select>
          </td>
        </tr>
        <br />
        <br />
        {/* Entry options */}
        <tr>
          {selectedOption === "online" && (
            <>
              <td align='right' valign='top'>
                <label htmlFor='wd-text-entry'>Online Entry Options:</label>
              </td>
              <td>
                <input type='checkbox' name='text' id='' />
                Text Entry
                <input type='checkbox' name='website-url' id='' />
                Website URL
                <input type='checkbox' name='media-recordings' id='' />
                Media Recordings
                <input type='checkbox' name='student-annotations' id='' />
                Student Annotations
                <input type='checkbox' name='file-uploads' id='' />
                File Uploads
              </td>
            </>
          )}
        </tr>
        <br />
        <br />
        {/* Assign to */}
        <tr>
          <td align='right' valign='top'>
            <label htmlFor=''>Assign</label>
          </td>
          <tr>
            <td align='left' valign='top'>
              <label htmlFor='wd-assign-to'>Assign to</label>
            </td>
          </tr>
          <tr>
            <td align='left' valign='top'>
              <select name='assign-to' id='wd-assign-to'>
                <option value='everyone'>Everyone</option>
              </select>
            </td>
          </tr>
          <br />
          <br />

          <tr>
            <td align='left' valign='top'>
              <label htmlFor='wd-due-date'>Due date</label>
            </td>
          </tr>
          <tr>
            <td align='left' valign='top'>
              <input type='date' name='due-date' id='wd-due-date' />
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td align='left' valign='top'>
              <label htmlFor='wd-available-from'>Available from</label>
            </td>
            <td align='left' valign='top'>
              <label htmlFor='wd-available-until'>Until</label>
            </td>
          </tr>
          <tr>
            <td align='left' valign='top'>
              <input type='date' name='available-from' id='wd-available-from' />
            </td>

            <td align='left' valign='top'>
              <input
                type='date'
                name='available-until'
                id='wd-available-until'
              />
            </td>
          </tr>
        </tr>
      </table>
    </div>
  );
}
