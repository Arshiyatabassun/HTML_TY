package Bottle;

import Watchprgrm.Watch;

public class Bottle
{
	private String juicetype;
	private double juicequantity;
	
	public Bottle (String juicetype ,double juicequantity)
	{
		this.juicetype=juicetype;
		this.juicequantity=juicequantity;
	}
	
	@Override
	
	public String toString()
	{
		return juicetype + juicequantity ;
	}
	
	@Override
	public boolean equals(Object obj)
	{
		Bottle b=(Bottle)obj;
		
		return this.juicetype.equals(juicetype) &&
				this.juicequantity == b.juicequantity;
		
		
	}

}
