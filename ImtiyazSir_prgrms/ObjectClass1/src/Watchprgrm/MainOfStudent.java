package Watchprgrm;

import org.jsp.rootclass.Student;
import org.jsp.rootclass.StudentManagementSystem;

public class MainOfStudent
{
	public static void main(String[] args)
	{
		StudentManagementSystem sms = new StudentManagementSystem();
		
		Student[] s = sms.readStudentData();
		//sms.dispStudentData(s);
		sms.dispStudentMarksGrt60(s);
		
		
		
	}

}
