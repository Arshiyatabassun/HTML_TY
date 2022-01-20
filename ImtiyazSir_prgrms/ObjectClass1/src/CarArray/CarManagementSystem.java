package CarArray;

import java.util.Scanner;

public class CarManagementSystem 
{
	public Car[] readCarData()
	{
		Scanner sc = new Scanner(System.in);
	
		
		Car[]  c = new Car[5];
		
		for(int i = 0 ; i < 5 ; i++)
		{
			System.out.println("Enter the Name of Car");
			String name = sc.nextLine();
			sc.nextLine();
			
			System.out.println("Enter the Color of Car");
			String color = sc.nextLine();
			
			System.out.println("Enter the Price of Car");
			double price = sc.nextDouble();
			
			System.out.println("Enter the  year of Manufacture of car ");
			int yearofmanufacture = sc.nextInt();
			
			 c[i] = new Car(name,color,price,yearofmanufacture);
			
		}
		return c;
	}
	public void dispCarData(Car[] c)
	{
		System.out.println("Name\t\tColor\t\tPrice\t\tYearofmanufacture");
		System.out.println("--------------------------------------");
		for(int i =0;i<c.length; i++)
		{
			System.out.println("c[i]");
		}
	}
	public void dispCarPriceMrt15( Car[] c)
	{
		System.out.println("Name\t\tColor\t\tPrice\t\tYearofmanufacture");
		System.out.println("--------------------------------------");
		for(int i =0;i<c.length; i++)
		{
			if(c[i].getPrice() > 15)
			{
				System.out.println(c[i]);
			}
			
		}
	}
 
}
