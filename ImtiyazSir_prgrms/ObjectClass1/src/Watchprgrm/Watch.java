package Watchprgrm;

public class Watch 
{
	private int hh;
	private int mm;
	private int ss;
	
	public Watch(int hh ,int mm ,int ss)
	{
		this.hh=hh;
		this.mm=mm;
		this.ss=ss;
	}
	@Override
	
	public String toString()
	{
		return hh+":"+mm +":" + ss;
	}
	@Override
	public boolean equals(Object obj)
	{
		Watch w=(Watch)obj;//Down Casting
		return this.hh==(w.hh) &&
			   this.mm==(w.mm) && 
			   this.ss==(w.ss);
	}


}
