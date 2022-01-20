package org.jsp.rootclass;

import java.util.Scanner;

public class StudentManagementSystem 
{
	public Student[] readStudentData()
	{
		Scanner  sc = new Scanner(System.in);
		System.out.println("Enter the no of students");
		int size = sc.nextInt();
		sc.nextLine();
		Student [] s =new Student[size];
		
		for (int i = 0 ;i < size;i++)
		{
			System.out.println("Enter the name");
			String name =sc.nextLine();
			
			System.out.println("Enter the id");
			
			int id = sc.nextInt();
			
			System.out.println("Enter the marks");
			
			double marks = sc.nextDouble();
			
			sc.nextLine();
			
			s[i] = new Student(name,id,marks);
			
		}
		return s;
			
		}
	public void dispStudentData(Student[] s)
	{
		System.out.println("Name\t\tId\t\tMarks");
		System.out.println("--------------------------------------------");
		
		for (int i = 0 ;i <s.length;i++)
		{
			System.out.println(s[i]);
		}
	}
	public void dispStudentMarksGrt60(Student[] s)
	{
		System.out.println("Name\t\tId\t\tMarks");
		System.out.println("--------------------------------------------");
		
		for (int i = 0 ;i <s.length;i++)
		{
			if(s[i].getName().startsWith("S"))
			{
		
			System.out.println(s[i]);
		}
}
}
}
	


