package classes;

public class OcchialiDaSole extends Occhiali {

	String lensColor;

	public OcchialiDaSole(String model){
		super(model);
		this.seeUnderSun();
	}

	void seeUnderSun(){
		System.out.println("Ci vedo al sole");
	};
}