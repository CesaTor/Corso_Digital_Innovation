public class EssereVivente {
	float dimensione;
	String[] colore;
	float eta;
	float peso;

	EssereVivente() {
	}

	void mangia(String cibo, int nVolteAlGiorno) {
		System.out.println("Ho voglia di " + cibo + " circa " + nVolteAlGiorno + " volte al giorno");
		return;
	}

	void mangia(float nKg) {
		this.peso += nKg;
	}
}