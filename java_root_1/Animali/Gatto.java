public class Gatto extends Mammifero {

	private double lunghezzaPelo;

	Gatto() {
		super();
		this.verso = "MEWWWWW";
		this.lunghezzaPelo = 3;
	}

	void miagola() {
		System.out.println(this.verso);
	}

	void faiFusa() {
		System.out.println("FRRRRRR");
	}

	double getLunghezzaPelo() {
		return this.lunghezzaPelo;
	}

}
