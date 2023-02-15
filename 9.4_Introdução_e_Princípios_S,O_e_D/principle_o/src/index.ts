type School = {
  name: string;
  approvalGrade: number;
};

type Discipline = {
    name: string;
    grade: number;
    letterGrade?: string;
  };
  
  type Student = {
    name: string;
    disciplines: Discipline[];
    school: School;
  };
  
  /* "Determinar" */
const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => grade >= school.approvalGrade);
  
  export default {
    approvedStudents,
  };