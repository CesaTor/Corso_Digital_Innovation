package classes;

import java.util.*;

public class Orologio extends Accessorio {
	boolean isDigital;
	String watchstrap;
	long phase; //secondi di sfasamento

	public Orologio(String model) {
		super(model);
	}

	long getTimeMillis() {
		long actDate = new Date().getTime(); // Data in millisecondi
		return actDate + (this.phase * 1000);
	}

	public Date getTime() {
		return new Date(this.getTimeMillis());
	}

	public long setPhase(long newPhase) {
		if (newPhase != this.phase) {
			this.phase = newPhase;
		}
		return this.phase;
	}
}