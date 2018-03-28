public class StorieDiAnimali {
	public static void main(String[] args) {
		Gatto cleo = new Gatto();
		// cleo.lunghezzaPelo = 3.2; // è privato
		cleo.miagola();
		cleo.faiFusa();
		System.out.println("C'ho il pelo lungo: " + cleo.getLunghezzaPelo() + "cm");

		// cleo.colore = new String[]{"Rosso"};

		// System.out.println("Sono di colore: " + cleo.colore[0]);	

		cleo.mangia("erba gatta", 6);
		System.out.println("Peso circa " + cleo.peso + "kg");
		cleo.mangia(2);
		System.out.println("Ma ho mangiato e ora sono ingrassato :/ \n sto a " + cleo.peso + " kg");

		Cocker patra = new Cocker();
		patra.allatta();
		patra.mangia("Cose", 12); //mangiaDiSolito
		patra.muovi();
		patra.mangia(12);
		System.out.println("Io invece so' grasso e peso " + patra.peso + " kg");

	}
}