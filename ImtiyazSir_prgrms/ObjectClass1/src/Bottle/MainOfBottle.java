 package Bottle;

public class MainOfBottle 
{
	public static void main(String[] args) 
	{
		Bottle b1 =new Bottle("A",10.11);
		Bottle b2 =new Bottle("B",10.00);
		System.out.println(b1);
		System.out.println(b2);
		
		if(b1.equals(b2))
		{
			System.out.println("juice is Same");
			
		}
		else
		{
			System.out.println("juice is Diffrent");
		}
		
		
	}

}
