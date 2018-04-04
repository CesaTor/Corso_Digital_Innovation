import classes.*;
import java.util.*;

public class Run {

	public static void main(String[] args) {
		// Instanzio la classe
		A158W oro1 = new A158W();
		// Stampo la data attuale
		System.out.println(oro1.getTime());
		// Avanzo di un giorno
		oro1.setPhase(24 * 3600);
		// Stampo la nuova data
		System.out.println(oro1.getTime());

		OcchialiDaVista occ1 = new OcchialiDaVista("Occhiali Neutri");
		OcchialiDaSole occ2 = new OcchialiDaSole("RayBan");
	}
}