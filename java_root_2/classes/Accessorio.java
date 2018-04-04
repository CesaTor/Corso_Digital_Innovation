package classes;

public class Accessorio {
	float price;
	float weight;
	String brand;
	String[] materials;
	String model; 

	public Accessorio(String model) {
		this.model = model;
		this.wear();
	}

	void wear() {
		System.out.println(this.model + " indossato!");
	}

}