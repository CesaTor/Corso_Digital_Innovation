package classes;

public class OcchialiDaVista extends Occhiali {
	private float graduation;

	public OcchialiDaVista(String model) {
		super(model);
		this.fixView();
	}

	void fixView() {
		System.out.println("Ci vedo molto meglio!");
	};

	float calibrate(float newGraduation) {
		if (newGraduation != this.graduation) {
			this.graduation = newGraduation;
		}
		return this.graduation;
	}
}