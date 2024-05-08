import EnrollmentItem from "../EnrollmentItem/EnrollmentItem";
import { List } from "./EnrollmentsList.styled";

const EnrollmentsList = ({ enrollments }) => {
  return (
    <List>
      {enrollments.map((enrolment) => (
        <EnrollmentItem key={enrolment._id} enrolment={enrolment} />
      ))}
    </List>
  );
};

export default EnrollmentsList;
