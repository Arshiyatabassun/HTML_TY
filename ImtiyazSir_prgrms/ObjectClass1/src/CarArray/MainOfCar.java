package CarArray;

public class MainOfCar
{
	public static void main(String[] args) 
	{
		CarManagementSystem cms= new CarManagementSystem();
		
		Car [] c =cms.readCarData();
		 cms.dispCarPriceMrt15(c);
		
	}

}
