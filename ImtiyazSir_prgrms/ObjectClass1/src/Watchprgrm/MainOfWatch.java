package Watchprgrm;

public class MainOfWatch 
{
	public static void main(String[] args) 
	{
		Watch w1=new Watch(10,12,43);
		Watch w2 =new Watch (8 ,18,12);
		
		System.out.println(w1);
		System.out.println(w2);
		if(w1.equals(w2))
		{
			System.out.println("Time is Same");
			
		}
		else
		{
			System.out.println("Time is Diffrent");
		}
	}

}
