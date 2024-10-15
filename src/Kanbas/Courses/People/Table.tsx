import { FaUserCircle } from "react-icons/fa";
import { enrollments, people } from "../../Database";
import { useParams } from "react-router";

export default function PeopleTable() {
  const { cid } = useParams();
  const enrolledUserIds = enrollments
    .filter((e) => e.course === cid)
    .map((m) => m.user);
  const enrolledUsers = people.filter((p) => enrolledUserIds.includes(p._id));

  return (
    <div id='wd-people-table'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((eu) => (
            <tr key={eu._id}>
              <td className='wd-full-name text-nowrap'>
                <FaUserCircle className='me-2 fs-1 text-secondary' />
                <span className='wd-first-name'>{eu.firstName}</span>{" "}
                <span className='wd-last-name'>{eu.lastName}</span>
              </td>
              <td className='wd-login-id'>{eu.loginId}</td>
              <td className='wd-section'>{eu.section}</td>
              <td className='wd-role'>{eu.role}</td>
              <td className='wd-last-activity'>{eu.lastActivity}</td>
              <td className='wd-total-activity'>{eu.totalActivity}</td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
