package CarArray;

public class Car
{
	private String name;
	private String color;
	private double price;
	private  int yearofmanufacture;
	
	
	public Car(String name ,String color ,double price ,int yearofmanufacture)
	{
		this.name = name;
		this.color = color;
		this.price = price;
		this.yearofmanufacture = yearofmanufacture;
	}
	
	public String getName()
	{
		return name;
	}
	public String getColor()
	{
		return color;
	}
	public double getPrice()
	{
		return price;
	}
	public int getYearofmanufacture()
	{
		return this.yearofmanufacture;
	}
	
	public void setName(String name)
	{
		this.name = name;
			
	}
	public void setColor(String color)
	{
		 this.color = color;
	}
	public void setPrice(double price)
	{
		this.price = price;
		
	}
	public void setYearofmanufacture()
	{
		yearofmanufacture = yearofmanufacture;
	}
	
	@Override
	
	public String toString()
	{
		return name+ "\t"+color+ "\t" +price+ "\t" +yearofmanufacture+ "\t";
	}

}
