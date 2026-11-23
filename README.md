# Lernkasten

Lern-App für die 5. Klasse (Gymnasium NRW) mit zwei Fächern. Früher hieß sie „Vokabelkasten“.

## Englisch: Vokabeln
- Vokabeln aus *Green Line 1 G9*, Vocabulary S. 184–230.
- Vor jeder Übung werden die Seiten aus dem Buch ausgewählt, danach ob die Vokabeln aus den grünen Kästen mit abgefragt werden.
- Das deutsche Wort wird angezeigt, die englische Vokabel muss genau richtig geschrieben werden.

## Deutsch: Rechtschreibung
- **Lernwörter:** Die App spricht ein Wort mit Beispielsatz vor, das Kind schreibt es. Bereiche nach den Strategien aus Kapitel 13 des Deutschbuchs („Rechtschreibung erforschen“: schwingen, verlängern, zerlegen, ableiten, Merkwörter …) und die 100 häufigsten Fehlerwörter.
- **Diktat:** 5 oder 10 Sätze. Jeder Satz wird erst ganz, dann in Teilen vorgelesen. Fehler werden markiert, falsche Wörter kommen zu „Meine Fehlerwörter“.
- Groß- und Kleinschreibung zählt. Die Sprachausgabe nutzt die deutsche Stimme des Geräts.

## Für beide Fächer
- Karteikasten-Prinzip mit 5 Fächern. Namen und Lernstand bleiben nur auf dem jeweiligen Gerät.
- Sicherung: Lernstand als Datei oder Code exportieren und auf einem anderen Gerät wieder einspielen.
- Läuft als Web-App: in Safari öffnen, „Teilen“ → „Zum Home-Bildschirm“. Funktioniert danach auch offline.

Neue Vokabeln kommen in `vocab.js`, neue Lernwörter und Diktate in `deutsch.js`. Nach einer Änderung in `sw.js` die `VERSION` hochzählen.
