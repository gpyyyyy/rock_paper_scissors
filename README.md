Schere, Stein, Papier - Das Spiel

Ein einfaches, aber unterhaltsames Konsolen-basiertes Schere-Stein-Papier-Spiel, implementiert in reinem JavaScript. 
Fordere den Computer zu einem Duell über fünf Runden heraus und stelle deine Fähigkeiten auf die Probe!


📜 Spielbeschreibung

Dieses Projekt ist eine klassische Implementierung des Spiels "Schere, Stein, Papier". 
Du spielst gegen den Computer, der seine Wahl bei jeder Runde zufällig trifft. 
Das Spiel läuft über eine feste Anzahl von fünf Runden. Dein Ziel ist es, am Ende mehr Runden als der Computer gewonnen zu haben.


✨ Features

Interaktives Konsolenspiel: Alle Eingaben und Ausgaben erfolgen direkt in der Entwicklerkonsole deines Browsers.
Zufälliger Gegner: Der Computer wählt seine Züge zufällig, was jede Runde unvorhersehbar macht.
Rundenbasiertes System: Das Spiel erstreckt sich über fünf Runden, um einen klaren Gewinner zu ermitteln.
Punkteverfolgung: Das Skript zählt automatisch die Punkte für dich und den Computer.
Klares Ergebnis: Nach Abschluss aller Runden wird der Endstand und der Gesamtsieger des Spiels bekannt gegeben.


🚀 Wie man spielt

Das Spiel zu starten ist ganz einfach. Da es sich um reines JavaScript handelt, benötigst du lediglich einen Webbrowser.
Klone das Repository oder kopiere den gesamten JavaScript-Code.
Öffne die Entwicklerkonsole in deinem Browser (normalerweise mit F12 oder Cmd+Opt+J auf Mac).
Füge den Code in die Konsole ein und drücke Enter.
Das Spiel startet automatisch. Du wirst in einem Pop-up-Fenster (prompt) aufgefordert, deine Wahl für jede Runde einzugeben.
Gib deine Wahl ein: "Rock", "Paper" oder "Scissor".
Verfolge die Ergebnisse jeder Runde direkt in der Konsole.
Nach fünf Runden wird der Gewinner verkündet. Viel Glück!


⚙️ Code-Struktur

Der Code ist in mehrere Funktionen unterteilt, um die Lesbarkeit und Wartbarkeit zu gewährleisten:
getComputerChoice(): Diese Funktion generiert die zufällige Auswahl des Computers (Rock, Paper oder Scissor).
getHumanChoice(): Fordert den Spieler über ein prompt zur Eingabe seiner Wahl auf.
playRound(humanChoice, computerChoice): Vergleicht die Auswahl des Spielers und des Computers, um den Gewinner einer einzelnen Runde zu ermitteln und das Ergebnis in der Konsole auszugeben.
playGame(): Die Hauptfunktion, die das gesamte Spiel steuert. Sie initialisiert die Punktzahlen, führt die fünf Runden in einer Schleife aus, zählt die Punkte und gibt am Ende den Gesamtsieger bekannt.
Das Spiel startet durch den Aufruf von playGame() am Ende des Skripts.
