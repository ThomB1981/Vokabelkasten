/* Rechtschreibung Deutsch, 5. Klasse Gymnasium NRW.
   Lernwörter nach den Strategien aus Kapitel 13 des Deutschbuchs („Rechtschreibung erforschen“, S. 283–313)
   und den 100 häufigsten Fehlerwörtern. Die Diktate sind eigene Texte zu Themen der 5. Klasse.

   Wörter: "Wort" oder ["Wort", "Satz, in dem das Wort vorkommt"].
   Nomen stehen mit Artikel; beim Üben reicht auch das Nomen allein (großgeschrieben). */
window.DEUTSCH = {
topics: [
  {id:'fehler', name:'Die 100 Fehlerwörter', src:'Rechtschreibkarte',
   hint:'Das ist ein Fehlerwort. Präge dir die Schreibweise gut ein.'},
  {id:'schwingen', name:'Lange Wörter schwingen', src:'S. 284',
   hint:'Schwingen: Sprich das Wort deutlich in Silben und schreibe Silbe für Silbe mit.'},
  {id:'verlaengern', name:'b/p, d/t, g/k am Wortende', src:'S. 285',
   hint:'Verlängern: Am Wortende klingen b/p, d/t und g/k gleich. Bilde den Plural, steigere das Adjektiv oder bilde den Infinitiv (der Tag → die Tage).'},
  {id:'zerlegen', name:'Zusammengesetzte Wörter', src:'S. 286–287',
   hint:'Zerlegen und verlängern: Zerlege das Wort in seine Teile und verlängere den unklaren Teil (Wald|weg → die Wälder).'},
  {id:'doppel', name:'Doppelkonsonanten, tz und ck', src:'S. 289–290',
   hint:'Doppelkonsonanten schreibt man nur, wenn die erste Silbe geschlossen ist und der Vokal kurz klingt (ren-nen, Him-mel). Statt kk schreibt man ck, statt zz schreibt man tz.'},
  {id:'slaut', name:'s, ss oder ß', src:'S. 291–292',
   hint:'Erste Silbe offen und summendes s → s. Offen und zischendes s → ß. Erste Silbe geschlossen → ss. Einsilber erst verlängern!'},
  {id:'ie', name:'i oder ie', src:'S. 293–294',
   hint:'Ist die erste Silbe offen und der Vokal lang, schreibt man meist ie. Ist sie geschlossen, schreibt man i. Einsilber verlängern!'},
  {id:'h', name:'Wörter mit h', src:'S. 295',
   hint:'Silbenöffnendes h: Beim Verlängern hörst du es am Anfang der 2. Silbe (ge-hen). Ein h, das man nicht hört, ist ein Merkwort-h (zäh-len).'},
  {id:'ae', name:'ä oder e, äu oder eu', src:'S. 297',
   hint:'Ableiten: Gibt es ein verwandtes Wort mit a oder au, schreibt man ä oder äu (die Kälte – kalt). Sonst e oder eu.'},
  {id:'doppelvokal', name:'Doppelvokal: aa, ee, oo', src:'S. 302',
   hint:'Wörter mit aa, ee oder oo sind Merkwörter. Präge sie dir ein.'},
  {id:'vks', name:'v, x, chs und ks', src:'S. 303',
   hint:'Wörter mit v sind Merkwörter, ver- und vor- schreibt man immer mit v. Bei ks, cks und gs hilft Verlängern, x und chs muss man sich merken.'},
  {id:'nomen', name:'Nomen erkennen', src:'S. 298–299',
   hint:'Nomen schreibt man groß. Endungen wie -heit, -keit, -ung, -nis, -schaft und -tum zeigen dir: Das ist ein Nomen.'},
  {id:'merk', name:'Merkwörter', src:'S. 292–297',
   hint:'Merkwörter kann man nicht ableiten oder verlängern. Präge sie dir gut ein.'}
],

words: {
fehler: [
  ['groß','Unser Hund ist sehr groß.'], ['bald','Bald sind endlich Ferien.'], ['wieder','Morgen spielen wir wieder Fußball.'],
  ['dann','Erst essen wir, dann gehen wir raus.'], ['fahren','Wir fahren mit dem Bus zur Schule.'], ['wir','Heute gehen wir ins Kino.'],
  ['zurück','Um sechs Uhr kommt Papa zurück.'], ['fertig','Ich bin mit den Hausaufgaben fertig.'], ['kommt','Gleich kommt mein Freund zu Besuch.'],
  ['hat','Lena hat einen neuen Rucksack.'], ['fallen','Im Herbst fallen die Blätter von den Bäumen.'], ['ließ','Der Junge ließ den Ball fallen.'],
  ['einmal','Ich war erst einmal in Berlin.'], ['plötzlich','Plötzlich fing es an zu regnen.'], ['will','Mein Bruder will Astronaut werden.'],
  ['fleißig','Die Bienen sind sehr fleißig.'], ['sehen','Wir sehen uns morgen in der Schule.'], ['morgen','Morgen schreiben wir einen Test.'],
  ['nie','Ich war noch nie am Meer.'], ['die Straße','Wir wohnen in einer ruhigen Straße.'], ['der Vater','Mein Vater kocht heute das Essen.'],
  ['hält','Der Bus hält direkt vor der Schule.'], ['sehr','Das Buch ist sehr spannend.'], ['weiß','Ich weiß die Antwort leider nicht.'],
  ['wäre','Es wäre schön, wenn du mitkommst.'], ['der Vogel','Ein Vogel sitzt auf dem Dach.'], ['bekommt','Jedes Kind bekommt ein Stück Kuchen.'],
  ['ziemlich','Heute ist es ziemlich kalt.'], ['sitzt','Die Katze sitzt auf dem Sofa.'], ['die Fahrräder','Vor der Schule stehen viele Fahrräder.'],
  ['gibt','Heute gibt es Nudeln.'], ['steht','Der Lehrer steht an der Tafel.'], ['alle','Alle Kinder spielen mit.'],
  ['nehmen','Wir nehmen den Regenschirm mit.'], ['muss','Ich muss noch Vokabeln lernen.'], ['die Haare','Meine Schwester hat lange Haare.'],
  ['das Kind','Das Kind spielt im Sandkasten.'], ['ohne','Ohne Jacke ist es zu kalt.'], ['das Ende','Am Ende des Films waren alle froh.'],
  ['fällt','Der Ball fällt ins Wasser.'], ['spielt','Tom spielt gern Gitarre.'], ['die Lehrerin','Unsere Lehrerin erklärt die Aufgabe.'],
  ['schnell','Der Gepard läuft sehr schnell.'], ['ein bisschen','Ich habe ein bisschen Hunger.'], ['jetzt','Jetzt sind wir an der Reihe.'],
  ['hatte','Gestern hatte ich Geburtstag.'], ['nichts','Ich habe nichts gehört.'], ['hier','Hier ist mein Platz.'],
  ['rennt','Der Hund rennt über die Wiese.'], ['fährt','Mama fährt mit dem Auto zur Arbeit.'], ['lassen','Wir lassen den Drachen steigen.'],
  ['sieht','Er sieht aus dem Fenster.'], ['das Mädchen','Das Mädchen liest ein Buch.'], ['zu Hause','Am Wochenende bleiben wir zu Hause.'],
  ['soll','Ich soll mein Zimmer aufräumen.'], ['dies','Dies ist mein Lieblingsbuch.'], ['die Mutter','Meine Mutter arbeitet im Krankenhaus.'],
  ['fehlt','Heute fehlt ein Schüler.'], ['endlich','Endlich sind Ferien!'], ['los','Auf die Plätze, fertig, los!'],
  ['nahm','Sie nahm den letzten Apfel.'], ['rief','Der Junge rief laut um Hilfe.'], ['ihn','Ich habe ihn gestern gesehen.'],
  ['kam','Der Zug kam zu spät.'], ['geht','Meine Schwester geht in die dritte Klasse.'], ['wenn','Wenn es regnet, bleiben wir drinnen.'],
  ['voll','Der Bus ist ganz voll.'], ['nächste','Die nächste Stunde ist Sport.'], ['nimmt','Er nimmt sich ein Stück Pizza.'],
  ['außen','Die Tür ist von außen bemalt.'], ['wird','Es wird langsam dunkel.'], ['auf einmal','Auf einmal war das Licht aus.'],
  ['nämlich','Ich bin müde, ich habe nämlich schlecht geschlafen.'], ['wissen','Wir wissen den Weg.'], ['kriegt','Wer kriegt das letzte Stück?'],
  ['sah','Ich sah einen Fuchs im Garten.'], ['man','Hier darf man nicht laut sein.'], ['der Tag','Heute ist ein schöner Tag.'],
  ['immer','Oma ruft immer am Sonntag an.'], ['mehr','Ich möchte mehr Saft.'], ['sagt','Papa sagt, dass wir gleich essen.'],
  ['der Mann','Der Mann wartet auf den Bus.'], ['stellt','Sie stellt die Blumen in eine Vase.'], ['das Fahrrad','Ich fahre mit dem Fahrrad zur Schule.'],
  ['ganz','Die Torte ist ganz lecker.'], ['am Abend','Am Abend lesen wir eine Geschichte.'], ['bekam','Zum Geburtstag bekam ich ein Buch.'],
  ['allein','Ich gehe allein nach Hause.'], ['viel','Wir haben viel gelacht.'], ['essen','Wir essen heute Pizza.'],
  ['ging','Gestern ging ich früh ins Bett.'], ['heran','Das Reh kam vorsichtig heran.'], ['hätte','Ich hätte gern ein Eis.'],
  ['ihm','Ich gebe ihm meinen Stift.'], ['kennt','Sie kennt den Weg genau.'], ['lässt','Er lässt seinen Hund frei laufen.'],
  ['stand','Die Tür stand offen.'], ['denn','Wir bleiben drinnen, denn es regnet.'], ['wenig','Ich habe nur wenig Zeit.'],
  ['vielleicht','Vielleicht kommt Oma morgen.']
],
schwingen: [
  'das Streuselteilchen', 'das Schokoladeneis', 'die Bananenmilch', 'die Aprikosenmarmelade', 'das Salamibrötchen',
  'der Tomatennudelauflauf', 'das Wurzelgemüse', 'die Salatgurke', 'das Sesamhörnchen', 'der Birnennachtisch',
  'die Apfelsaftschorle', 'die Zitroneneiskugel', 'die Sauerkirschtorte', 'die Ananas', 'die Riesenachterbahn',
  'der Gänseblümchenstrauß', 'der Luftballonverkäufer', 'der Kioskbesitzer', 'die Kindertheaterbühne',
  'die Popcornmaschine', 'der Pizzabackofen', 'die Schokolade', 'die Tomate', 'die Banane', 'der Kaugummi'
],
verlaengern: [
  'der Berg', 'das Rad', 'der Stab', 'der Steg', 'das Sieb', 'das Pferd', ['rund','Der Tisch ist rund.'], 'der Zwerg', 'das Schild',
  'der Dieb', 'er lügt', 'er beschreibt', 'unbekannt', 'farbig', 'gesund', 'die Wand', 'der Elefant', 'der Korb', 'das Bild',
  'der Abend', 'der Erfolg', 'klug', 'bunt', 'wild', 'traurig', 'stark', 'lieb', 'sie lobt', 'sie denkt', 'es klebt', 'sie hebt',
  'er klagt', 'er hupt', 'sie springt', 'der Monat', 'das Gerät', 'der Gegenstand', 'der Betrug', 'der Umschlag', 'das Volk',
  ['gelb','Die Banane ist gelb.'], 'verliebt', 'die Hand', 'lustig', 'er lebt', 'der Wald', ['halb','Das Glas ist nur halb voll.'], 'er bleibt'
],
zerlegen: [
  'der Diebstahl', 'der Einbruch', 'das Waldstück', 'der Strandkorb', 'die Abendstunde', 'das Korbgeflecht', 'die Schubkarre',
  'die Gartenhandschuhe', 'das Werkzeug', 'der Radfahrer', 'der Bankautomat', 'der Wandschrank', 'der Ratgeber',
  'freundlich', ['ratlos','Ich wusste nicht weiter und war ratlos.'], 'sorglos', 'lieblos', 'das Täubchen', 'der Schreibtisch', 'das Altpapier',
  'die Schrankwand', 'die Weltreise', 'das Hütchen', 'die Landschaft', 'das Bildchen', 'mündlich', 'endlos', 'stündlich',
  'die Brotdose', 'der Kirschkern', 'der Berggipfel', 'das Saftglas', 'das Baumhaus', 'der Feldweg', 'die Geldbörse',
  'der Waldbewohner', 'das Handwerk', 'der Buntstift', 'der Drehstuhl', 'die Strandbar', 'das Kleidchen', 'der Korbsessel',
  'der Baumstamm', 'der Pappbecher', 'vollständig', 'die Wildwasserfahrt'
],
doppel: [
  'die Ratten', 'die Hütte', 'die Klasse', 'die Schiffe', 'der Keller', 'der Herr', 'das Fell', ['satt','Nach dem Essen bin ich satt.'],
  'das Ballspiel', 'das Walross', 'der Schwimmlehrer', 'der Brummbär', 'die Rennstrecke', 'das Glatteis', 'der Tatort',
  'die Hitze', 'schwitzen', 'sitzen', 'die Jacke', 'die Decke', 'die Tatze', 'dicker', 'der Sattel', 'müssen', 'der Koffer',
  'das Wunder', 'die Welle', 'die Butter', 'sammeln', 'der Himmel', 'rennen', 'nett', 'glatt', 'hell', 'stumm',
  'die Katze', 'die Lücke', 'die Flecken', 'die Latte', 'der Knallfrosch', 'der Abfalleimer', 'die Stalllampe', 'die Pfanne',
  'die Mücke', 'die Kelle', 'die Schnecken', 'der Blitz', 'der Schwamm', 'die Wolke'
],
slaut: [
  'die Gläser', ['reisen','In den Ferien reisen wir nach Italien.'], 'die Soße', 'die Nüsse', 'die Füße', 'der Riese', 'lesen', 'sie reist',
  'sie saust', 'das Gras', 'die Maus', 'der Kreis', 'es gießt', 'es fließt', 'es heißt', 'der Kloß', 'das Floß', 'er passt',
  ['er fasst','Er fasst sich an die Nase.'], 'der Riss', 'der Pass', 'der Biss', 'draußen', 'der Rasen', 'die Luftblase', 'schießen', 'der Besen',
  'der Strauß', 'heiß', 'die Haselnuss', 'der Gruß', 'der Spaß', 'der Kuss', 'der Fußboden', 'die Haustür', 'das Maßband',
  'großziehen', 'die Gießkanne', 'messen', ['ich maß','Gestern maß ich meine Größe.'], ['reißen','Das Seil darf nicht reißen.'],
  'ich riss', 'verlassen', 'ich verließ', 'gießen', 'ich goss', 'schließen', 'ich schloss', 'vergessen', 'die Musik', 'die Grüße'
],
ie: [
  'binden', 'die Filme', 'finden', 'schimpfen', 'bilden', 'liegen', 'lieben', 'kriechen', 'still', 'tief',
  'das Rind', 'das Ziel', 'schief', 'mild', 'er singt', 'er wiegt', 'es klingt', 'der Film', 'das Wiesel',
  'der Kiesel', 'das Tier', 'die Wiese', 'niesen', 'sieben', 'die Liebe', 'der Brief', 'das Spiel', 'die Ziege', 'die Fliege',
  'der Spiegel', 'die Zwiebel', 'der Stiefel', 'schieben', 'er schiebt', 'er liegt'
],
h: [
  ['ehren','Wir ehren die Sieger mit einer Medaille.'], 'gehen', 'zählen', 'stehen', 'gähnen', 'muhen', 'fühlen', 'stehlen',
  'fliehen', 'sprühen', 'bezahlen', 'fehlen', 'zähmen', 'drehen', 'mähen', 'krähen', 'bemühen',
  'belohnen', 'wohnen', 'das Reh', 'kühl', 'der Schuh', 'früh', ['er lehnt','Er lehnt sich an die Wand.'], 'die Kuh', 'der Stuhl', 'lahm',
  'ziehen', 'ruhen', 'die Zahl', 'der Zeh', 'der Zahn', 'blühen', 'der Gehweg', 'die Mühe', 'drohen', 'früher', 'die Strahlen',
  'ruhig', 'höher', 'die Bohne', 'die Ruhe', 'froh', 'die Uhr', 'das Jahr', 'die Fahrt'
],
ae: [
  'schälen', 'kräftig', 'die Räume', 'täglich', 'wärmen', 'das Gebäude', 'schädlich', 'die Länder', 'die Zäune',
  'die Menschen', 'die Bäume', 'die Bäuerin', 'die Wälder', 'die Leute', 'heute', 'die Ente', 'die Kälte', 'nähen',
  'der Bäcker', 'gefährlich', 'der Jäger', 'der Gärtner', 'fremd', 'das Geräusch', 'jährlich', 'der Herbst', 'aufwärmen',
  'das Fenster', 'das Feuer', 'das Verständnis', ['das Feld','Auf dem Feld wächst Mais.'], 'streuen', 'träumen', 'leuchten', 'der Läufer',
  'die Fläche', 'anständig', 'die Ernte', 'melken', 'die Blattläuse', 'die Hände', 'die Mäuse', 'die Bären', 'die Eulen', 'läuten'
],
doppelvokal: [
  'der Aal', 'das Haar', ['ein paar','Ich habe noch ein paar Bonbons.'], ['das Paar','Ich brauche ein neues Paar Schuhe.'], 'der Saal', 'die Saat',
  ['der Staat','Deutschland ist ein Staat in Europa.'], 'die Waage', 'die Allee', 'die Armee', 'die Beere', 'das Beet', 'die Fee', 'das Heer',
  'der Klee', 'das Meer', 'der Schnee', 'der See', 'die Seele', 'der Teer', 'die Idee', 'der Kaffee', 'der Tee', 'das Püree',
  ['leer','Das Glas ist leer.'], 'das Boot', ['doof','Das finde ich doof.'], 'das Moor', 'das Moos', 'der Zoo', 'die Seefahrt', 'der Badesee',
  'die Erdbeere', 'der Schneemann', 'das Ruderboot'
],
vks: [
  'die Vögel', 'viele', 'verrückt', 'die Vorstellung', 'verschieden', 'die Vogelarten', 'versprechen', 'versuchen',
  'verstehen', 'von', 'vier', 'die Vase', 'das Verb', 'der Vers', 'brav', 'das Klavier', 'der Pullover', 'verlaufen',
  'vortragen', 'der Vorname', 'vorbei', 'der Vulkan', 'du trinkst', ['anfangs','Anfangs war ich noch unsicher.'], 'du denkst', ['montags','Montags haben wir Sport.'],
  'du lügst', ['links','An der Ampel biegen wir links ab.'], 'der Glücksklee', 'unterwegs', 'die Nixe', 'der Ochse', 'der Lachs', 'das Wachs',
  'der Fuchs', 'wachsen', 'wechseln', 'die Hexe', 'das Taxi', 'der Text', 'die Axt', 'sechs', 'der Dachs'
],
nomen: [
  'die Gelegenheit', 'das Ereignis', 'das Erlebnis', 'die Freundschaft', 'die Sparsamkeit', 'die Malerin', 'der Reichtum',
  'die Dunkelheit', 'die Entfernung', 'die Ängstlichkeit', 'die Schüchternheit', 'die Freiheit', 'die Einigkeit',
  'die Gesundheit', 'die Wohnung', 'die Berechnung', 'die Erzählung', 'das Versäumnis', 'die Meisterin', 'die Verletzung',
  'die Heiterkeit', 'das Eigentum', 'die Abwechslung', 'die Beschäftigung', 'die Fähigkeit', 'die Wildnis', 'die Ärztin',
  'die Zeitung', 'die Wissenschaft', 'die Unterstützung', 'die Mannschaft', 'das Zeugnis', 'die Übung', 'die Möglichkeit'
],
merk: [
  ['ärgern','Mein Bruder will mich immer ärgern.'], 'der Käfer', 'die Säge', 'die Träne', ['während','Während der Pause essen wir.'], 'der Käse', 'der Käfig',
  ['mir','Kannst du mir helfen?'], ['dir','Ich gebe dir mein Heft.'], ['ihr','Habt ihr schon gegessen?'], ['ihnen','Ich habe ihnen alles erzählt.'],
  ['ihre','Lisa sucht ihre Brille.'], ['als','Er ist größer als ich.'], ['aus','Wir gehen aus dem Haus.'], ['bis','Ich warte, bis du kommst.'],
  ['es','Es regnet schon den ganzen Tag.'], ['etwas','Möchtest du etwas trinken?'], ['niemals','Ich gebe niemals auf.'], ['alles','Ich habe alles verstanden.'],
  ['anders','Heute ist alles anders.'], ['morgens','Morgens bin ich oft müde.'], 'das Krokodil', 'der Igel', 'der Tiger', 'die Giraffe',
  'die Libelle', 'das Kaninchen', 'die Maschine', 'die Apfelsine'
]
},

/* Kurze Diktate: Jeder Text hat zwei Teile mit je 5 Sätzen.
   Bei 5 Sätzen wird ein Teil diktiert, bei 10 Sätzen der ganze Text. */
texts: [
  {id:'schultag', title:'Der erste Schultag', a:[
    'Am ersten Schultag war ich ziemlich aufgeregt.',
    'Mein Vater fuhr mit mir auf dem Fahrrad zur neuen Schule.',
    'Vor dem großen Gebäude standen schon viele Kinder mit ihren Eltern.',
    'Plötzlich rief eine Lehrerin unsere Namen auf.',
    'Danach gingen wir gemeinsam in unsere neue Klasse.'
  ], b:[
    'Unsere Klassenlehrerin heißt Frau Becker und ist sehr freundlich.',
    'Sie erzählte uns, dass wir bald einen Ausflug in den Zoo machen.',
    'In der Pause spielten wir auf dem Schulhof Fußball.',
    'Am Nachmittag kam ich müde, aber glücklich nach Hause.',
    'Meine Mutter wollte natürlich alles ganz genau wissen.'
  ]},
  {id:'wildschweine', title:'Wildschweine im Garten', a:[
    'Gestern Abend hörte unser Nachbar draußen ein lautes Geräusch.',
    'Als er nachsah, liefen drei Wildschweine durch seinen Garten.',
    'Die Tiere hatten das ganze Blumenbeet umgegraben.',
    'Sogar die Schubkarre lag umgekippt auf dem Rasen.',
    'Unser Nachbar war ziemlich wütend und rief den Förster an.'
  ], b:[
    'Der Förster erklärte ihm, dass Wildschweine im Wald oft nicht genug Futter finden.',
    'Deshalb kommen sie immer häufiger in die Stadt.',
    'Am besten soll man den Gartenzaun fest verschließen.',
    'Außerdem darf man den Tieren niemals etwas zu fressen geben.',
    'Seitdem schaut unser Nachbar jeden Abend aus dem Fenster.'
  ]},
  {id:'freizeitpark', title:'Im Freizeitpark', a:[
    'In den Sommerferien fuhren wir endlich in den Freizeitpark.',
    'Zuerst stellten wir uns an der Riesenachterbahn an.',
    'Die Fahrt war so schnell, dass mir ein bisschen schlecht wurde.',
    'Danach wollte mein Bruder unbedingt zur Wildwasserfahrt.',
    'Dort wurden wir alle von oben bis unten nass.'
  ], b:[
    'Zum Glück schien die Sonne und es war sehr heiß.',
    'Am Mittag aßen wir Pommes und tranken eine Apfelsaftschorle.',
    'Danach kaufte uns Mama ein großes Eis mit bunten Streuseln.',
    'Am Abend waren wir müde, aber wir hatten sehr viel Spaß.',
    'Im nächsten Jahr wollen wir auf jeden Fall wiederkommen.'
  ]},
  {id:'zoo', title:'Ausflug in den Zoo', a:[
    'Am Montag machte unsere Klasse einen Ausflug in den Zoo.',
    'Zuerst beobachteten wir die Elefanten beim Baden.',
    'Ein junger Elefant spritzte mit seinem Rüssel Wasser in die Luft.',
    'Danach sahen wir die Giraffen, die Blätter von hohen Bäumen fraßen.',
    'Im Reptilienhaus lag ein Krokodil ganz still im Wasser.'
  ], b:[
    'Ein Tierpfleger erzählte uns viel über seine tägliche Arbeit.',
    'Er füttert die Tiere jeden Morgen und säubert die Gehege.',
    'Damit sich die Affen nicht langweilen, verstecken die Pfleger ihr Futter.',
    'Am Ende durften wir sogar die Ziegen im Streichelzoo füttern.',
    'Auf der Rückfahrt im Bus redeten alle nur noch über die Tiere.'
  ]},
  {id:'weltall', title:'Reise ins Weltall', a:[
    'Seit vielen Jahren träumen Menschen von einer Reise zu fremden Planeten.',
    'Mit großen Fernrohren beobachten Forscher den Himmel.',
    'Unser Planet heißt Erde und dreht sich um die Sonne.',
    'Der Mond ist viel kleiner als die Erde und kreist um sie herum.',
    'Nachts kann man ihn am Himmel oft hell leuchten sehen.'
  ], b:[
    'Vor über fünfzig Jahren betraten zum ersten Mal Menschen den Mond.',
    'Die Astronauten mussten schwere Anzüge tragen, weil es dort keine Luft gibt.',
    'Heute leben Astronauten oft monatelang auf einer Raumstation.',
    'Dort schweben sie, denn in der Raumstation gibt es keine Schwerkraft.',
    'Vielleicht fliegen eines Tages auch Kinder zum Mars.'
  ]},
  {id:'winter', title:'Ein Wintertag', a:[
    'Als ich heute Morgen aufwachte, lag draußen überall Schnee.',
    'Schnell zog ich meine dicke Jacke, eine Mütze und warme Handschuhe an.',
    'Mit meinen Freunden baute ich im Garten einen riesigen Schneemann.',
    'Er bekam eine Möhre als Nase und zwei Steine als Augen.',
    'Danach machten wir eine wilde Schneeballschlacht.'
  ], b:[
    'Am Nachmittag gingen wir zum zugefrorenen See.',
    'Das Eis war so glatt, dass mein Freund sofort hinfiel.',
    'Zum Glück war ihm nichts passiert und er lachte nur.',
    'Zu Hause wärmten wir uns mit einer Tasse Tee wieder auf.',
    'Abends war ich so müde, dass ich sofort einschlief.'
  ]},
  {id:'kaninchen', title:'Unser Kaninchen', a:[
    'Seit dem letzten Sommer haben wir ein Kaninchen.',
    'Es heißt Flocke und hat ein weiches, weißes Fell.',
    'Jeden Morgen bekommt Flocke frisches Heu und etwas Gemüse.',
    'Am liebsten frisst sie Möhren und Salatblätter.',
    'Wenn wir aus der Schule kommen, wartet sie schon am Gitter.'
  ], b:[
    'Einmal in der Woche müssen wir den Käfig putzen.',
    'Das ist nicht besonders schön, aber es gehört nun mal dazu.',
    'Im Sommer darf Flocke draußen auf dem Rasen herumhoppeln.',
    'Dabei passen wir genau auf, dass keine Katze in die Nähe kommt.',
    'Ohne Flocke wäre es bei uns nur halb so schön.'
  ]},
  {id:'fussball', title:'Das Fußballturnier', a:[
    'Am Samstag fand bei uns das große Fußballturnier statt.',
    'Unsere Mannschaft trainierte schon seit Wochen jeden Dienstag.',
    'Im ersten Spiel waren wir ziemlich nervös und verloren knapp.',
    'Doch dann gewannen wir die nächsten beiden Spiele.',
    'Mein Freund schoss sogar ein Tor mit dem Kopf.'
  ], b:[
    'Im Endspiel mussten wir gegen die stärkste Mannschaft antreten.',
    'Es regnete stark und der Rasen wurde immer rutschiger.',
    'Kurz vor Schluss stand es immer noch null zu null.',
    'Plötzlich fiel der Ball unserem Stürmer genau vor die Füße.',
    'Er traf ins Tor und alle jubelten laut.'
  ]},
  {id:'klassenfahrt', title:'Die Klassenfahrt', a:[
    'Im Frühling fuhr unsere Klasse für drei Tage an die Nordsee.',
    'Wir wohnten in einer Jugendherberge direkt hinter dem Deich.',
    'Gleich am ersten Tag machten wir eine Wanderung durch das Watt.',
    'Dabei fanden wir Muscheln, Krebse und kleine Würmer.',
    'Ein Mann erklärte uns, wann das Wasser zurückkommt.'
  ], b:[
    'Am zweiten Tag fuhren wir mit einem Boot zu den Seehunden.',
    'Die Tiere lagen faul auf einer Sandbank und schauten uns an.',
    'Abends saßen wir zusammen und spielten Karten.',
    'Leider durften wir nicht so lange aufbleiben, wie wir wollten.',
    'Trotzdem war die Klassenfahrt für alle ein tolles Erlebnis.'
  ]},
  {id:'herbst', title:'Ein Tag im Herbst', a:[
    'Im Herbst werden die Blätter an den Bäumen gelb, rot und braun.',
    'Bei starkem Wind fallen sie herunter und bedecken die Wege.',
    'Am Wochenende sammelten wir im Wald Kastanien und Eicheln.',
    'Daraus bastelten wir zu Hause kleine Tiere.',
    'Mein kleiner Bruder malte ihnen lustige Gesichter.'
  ], b:[
    'Danach ließen wir auf dem Feld unseren neuen Drachen steigen.',
    'Der Wind war so stark, dass ich die Schnur kaum halten konnte.',
    'Auf einmal riss die Schnur und der Drache flog davon.',
    'Wir rannten hinterher, bis er sich in einem Baum verfing.',
    'Zum Glück konnte unser Vater ihn mit einer langen Leiter holen.'
  ]},
  {id:'schwimmbad', title:'Im Schwimmbad', a:[
    'Bei dem heißen Wetter wollten wir unbedingt ins Schwimmbad.',
    'Schon am Eingang wartete eine lange Schlange.',
    'Endlich lagen wir auf unseren Handtüchern auf der Wiese.',
    'Mein Freund sprang sofort vom hohen Sprungbrett ins Wasser.',
    'Ich traute mich zuerst nicht, weil es ziemlich hoch war.'
  ], b:[
    'Der Schwimmlehrer machte mir Mut und zeigte mir, wie man springt.',
    'Beim dritten Versuch sprang ich endlich hinunter.',
    'Das Wasser war kalt, aber ich war sehr stolz auf mich.',
    'Danach holten wir uns am Kiosk ein Eis.',
    'Am Abend hatten wir beide einen Sonnenbrand auf der Nase.'
  ]},
  {id:'buecherei', title:'In der Bücherei', a:[
    'Jeden Freitag gehe ich mit meiner Schwester in die Bücherei.',
    'Dort gibt es sehr viele Bücher, Hörspiele und Filme.',
    'Am liebsten lese ich spannende Geschichten über Ritter und Drachen.',
    'Meine Schwester mag dagegen lustige Comics.',
    'Wir dürfen jedes Mal fünf Bücher für drei Wochen ausleihen.'
  ], b:[
    'Die Frau an der Ausleihe kennt uns schon sehr gut.',
    'Manchmal empfiehlt sie uns ein neues Buch, das wir noch nicht kennen.',
    'Zu Hause mache ich es mir dann mit einer Decke auf dem Sofa gemütlich.',
    'Oft lese ich so lange, bis meine Mutter das Licht ausmacht.',
    'Vielleicht schreibe ich später selbst einmal ein Buch.'
  ]},
  {id:'geburtstag', title:'Der Geburtstag', a:[
    'Am Samstag feierte meine Schwester ihren zehnten Geburtstag.',
    'Schon morgens stand ein großer Kuchen mit bunten Kerzen auf dem Tisch.',
    'Sie durfte als Erste ein Stück essen und sich etwas wünschen.',
    'Dann packte sie ihre Geschenke aus und freute sich riesig.',
    'Am meisten mochte sie das Buch über Pferde, das ich ihr geschenkt hatte.'
  ], b:[
    'Am Nachmittag kamen sieben Freundinnen zu Besuch.',
    'Im Garten spielten wir Sackhüpfen und machten eine Schnitzeljagd.',
    'Die Hinweise hatten wir vorher an Bäumen und Büschen versteckt.',
    'Am Ende fanden die Mädchen eine Kiste voller Süßigkeiten.',
    'Es war ein heißer Tag, aber alle hatten großen Spaß.'
  ]},
  {id:'bauernhof', title:'Auf dem Bauernhof', a:[
    'In den Herbstferien verbrachten wir eine Woche auf einem Bauernhof.',
    'Jeden Morgen weckte uns der laute Hahn schon um sechs Uhr.',
    'Nach dem Frühstück halfen wir der Bäuerin im Stall.',
    'Wir fütterten die Kälber und streuten frisches Stroh aus.',
    'Die Kühe standen ruhig nebeneinander und kauten ihr Futter.'
  ], b:[
    'Am Nachmittag durften wir mit dem Traktor über die Felder fahren.',
    'Der Bauer erklärte uns, wann die Äpfel und Birnen geerntet werden.',
    'Danach sammelten wir Eier im Hühnerstall ein.',
    'Abends saßen wir mit den anderen Familien am Lagerfeuer.',
    'Das war der schönste Urlaub, den ich mir vorstellen kann.'
  ]},
  {id:'burg', title:'Auf der Ritterburg', a:[
    'Hoch über dem Fluss steht eine alte Burg aus dicken Steinen.',
    'Vor langer Zeit lebten dort Ritter mit ihren Familien.',
    'Um die Burg herum gab es einen tiefen Graben voller Wasser.',
    'Feinde konnten nur über eine schmale Brücke hineinkommen.',
    'Wenn Gefahr drohte, wurde die Brücke schnell hochgezogen.'
  ], b:[
    'Bei einer Führung durften wir sogar in den Keller hinabsteigen.',
    'Dort war es dunkel, feucht und ziemlich kalt.',
    'Im Rittersaal hingen schwere Rüstungen und alte Schwerter an der Wand.',
    'Mein Bruder wollte unbedingt einen Helm aufsetzen.',
    'Leider passte er ihm nicht, weil er viel zu groß war.'
  ]},
  {id:'wald', title:'Im Wald', a:[
    'Am Sonntag gingen wir mit unserem Opa im Wald spazieren.',
    'Er kennt viele Tiere und Pflanzen und erklärt uns alles genau.',
    'Unter einer Wurzel entdeckten wir einen kleinen Igel.',
    'Er rollte sich sofort zusammen und rührte sich nicht mehr.',
    'Wir ließen ihn in Ruhe und gingen leise weiter.'
  ], b:[
    'Auf einer Wiese sahen wir sieben Rehe beim Fressen.',
    'Plötzlich hob eines der Tiere den Kopf und lief davon.',
    'Die anderen folgten ihm in großen Sprüngen.',
    'Opa zeigte uns, wie man an den Spuren erkennt, welches Tier hier war.',
    'Auf dem Rückweg fanden wir noch viele Pilze, aber die ließen wir lieber stehen.'
  ]},
  {id:'gewitter', title:'Das Gewitter', a:[
    'Am Nachmittag wurde der Himmel plötzlich ganz dunkel.',
    'In der Ferne hörten wir schon das Donnern.',
    'Schnell holten wir die Wäsche von der Leine.',
    'Kurz darauf fing es heftig an zu regnen.',
    'Blitze zuckten über den Himmel und der Wind rüttelte an den Fenstern.'
  ], b:[
    'Mein kleiner Bruder hatte Angst und kroch unter seine Decke.',
    'Ich erklärte ihm, dass wir im Haus sicher sind.',
    'Zum Zeitvertreib spielten wir zusammen ein Brettspiel.',
    'Nach einer Stunde war das Gewitter vorbei.',
    'Am Himmel leuchtete jetzt ein wunderschöner Regenbogen.'
  ]},
  {id:'meer', title:'Ein Tag am Meer', a:[
    'Im Sommer machten wir Urlaub an der Ostsee.',
    'Gleich am ersten Morgen liefen wir barfuß zum Strand.',
    'Das Meer war ruhig und das Wasser glitzerte in der Sonne.',
    'Mein Vater mietete ein kleines Boot für eine Stunde.',
    'Wir paddelten hinaus und sahen sogar ein paar Quallen.'
  ], b:[
    'Am Nachmittag bauten wir eine riesige Sandburg mit Türmen.',
    'Meine Mutter las im Strandkorb und trank einen Kaffee.',
    'Später holten wir uns ein Eis mit Erdbeeren.',
    'Als die Sonne unterging, war der Strand fast leer.',
    'Müde und zufrieden gingen wir zurück zu unserer Ferienwohnung.'
  ]},
  {id:'vulkane', title:'Feuerberge', a:[
    'Vulkane gehören zu den gewaltigsten Naturerscheinungen der Erde.',
    'Tief im Inneren unseres Planeten ist es unvorstellbar heiß.',
    'Dort ist das Gestein so heiß, dass es flüssig wird.',
    'Wenn ein Vulkan ausbricht, fließt glühende Lava an seinen Hängen hinunter.',
    'Oft steigen dabei auch dicke Wolken aus Asche in den Himmel.'
  ], b:[
    'Viele Menschen leben trotzdem in der Nähe von Vulkanen.',
    'Der Boden ist dort nämlich besonders fruchtbar.',
    'Forscher beobachten die Vulkane genau, um Ausbrüche vorherzusagen.',
    'So können die Menschen rechtzeitig gewarnt werden.',
    'Im Museum haben wir ein Modell gesehen, das einen Ausbruch zeigt.'
  ]},
  {id:'klassenarbeit', title:'Die Klassenarbeit', a:[
    'Morgen schreiben wir unsere erste Klassenarbeit in Mathe.',
    'Deshalb habe ich heute Nachmittag besonders fleißig geübt.',
    'Meine Mutter hat mir ein paar schwierige Aufgaben gestellt.',
    'Am Anfang wusste ich nicht, wie man sie lösen kann.',
    'Doch dann hat es endlich geklappt.'
  ], b:[
    'Am nächsten Morgen war ich trotzdem ein bisschen nervös.',
    'Die Lehrerin verteilte die Blätter und wünschte uns viel Glück.',
    'Die ersten Aufgaben waren ziemlich leicht.',
    'Bei der letzten Aufgabe musste ich lange nachdenken.',
    'Als ich fertig war, blieb sogar noch Zeit zum Kontrollieren.'
  ]},
  {id:'hund', title:'Unser Hund Bello', a:[
    'Seit einem Jahr wohnt bei uns ein lustiger Hund namens Bello.',
    'Er hat ein braunes Fell und große Ohren.',
    'Jeden Tag gehen wir mit ihm im Park spazieren.',
    'Am liebsten jagt er Tauben, aber er fängt nie eine.',
    'Wenn er müde ist, legt er sich in seinen Korb neben der Heizung.'
  ], b:[
    'Einmal ist Bello beim Spaziergang einfach weggelaufen.',
    'Wir haben ihn lange gesucht und überall nach ihm gerufen.',
    'Am Abend saß er plötzlich vor unserer Haustür.',
    'Er wedelte mit dem Schwanz, als wäre nichts gewesen.',
    'Seitdem halten wir ihn im Wald immer an der Leine.'
  ]},
  {id:'theater', title:'Das Theaterstück', a:[
    'Unsere Klasse probt seit Wochen für ein Theaterstück.',
    'Es handelt von einem Jungen, der sich im Wald verirrt.',
    'Ich spiele einen frechen Raben, der ihm den Weg zeigt.',
    'Meine Freundin hat mir beim Nähen des Kostüms geholfen.',
    'Die Flügel sind aus schwarzem Stoff und glänzen im Licht.'
  ], b:[
    'Am Abend der Aufführung war die Aula bis auf den letzten Platz besetzt.',
    'Hinter der Bühne war ich so aufgeregt, dass meine Hände zitterten.',
    'Doch sobald ich auf der Bühne stand, war die Angst verschwunden.',
    'Am Ende klatschten die Zuschauer lange Beifall.',
    'Wir verbeugten uns und waren sehr stolz auf uns.'
  ]},
  {id:'radtour', title:'Die Fahrradtour', a:[
    'Am Wochenende machten wir eine Fahrradtour am Rhein entlang.',
    'Mein Vater hatte vorher die Reifen aufgepumpt und die Bremsen geprüft.',
    'Der Radweg führte an Feldern, Wiesen und kleinen Dörfern vorbei.',
    'Nach zwei Stunden machten wir an einem Spielplatz eine Pause.',
    'Wir aßen belegte Brote und tranken Apfelsaft.'
  ], b:[
    'Auf dem Rückweg wurde der Himmel immer dunkler.',
    'Plötzlich hatte meine Schwester einen Platten.',
    'Zum Glück hatte Papa Flickzeug in seiner Satteltasche.',
    'Nach kurzer Zeit konnten wir weiterfahren.',
    'Kurz bevor wir zu Hause ankamen, fing es an zu regnen.'
  ]},
  {id:'pizza', title:'Pizza backen', a:[
    'Heute Abend backen wir zusammen eine Pizza.',
    'Zuerst muss der Teig eine Stunde an einem warmen Ort ruhen.',
    'In der Zwischenzeit schneiden wir Tomaten, Paprika und Pilze klein.',
    'Mein Bruder reibt den Käse und ich rühre die Soße an.',
    'Dann rollen wir den Teig aus und legen ihn auf ein Blech.'
  ], b:[
    'Jeder darf seine Hälfte so belegen, wie er möchte.',
    'Ich nehme besonders viel Käse und ein paar Oliven.',
    'Danach kommt die Pizza für etwa zwanzig Minuten in den heißen Ofen.',
    'Schon bald duftet es in der ganzen Küche.',
    'Die Pizza schmeckt so gut, dass am Ende kein Stück mehr da ist.'
  ]},
  {id:'museum', title:'Im Dinosaurier-Museum', a:[
    'Mit unserer Klasse besuchten wir das Naturkundemuseum.',
    'Gleich in der großen Halle stand das Skelett eines riesigen Dinosauriers.',
    'Es war so hoch wie ein Haus und hatte einen langen Schwanz.',
    'Eine Führerin erzählte uns, dass die Dinosaurier vor vielen Millionen Jahren lebten.',
    'Manche fraßen nur Pflanzen, andere jagten kleinere Tiere.'
  ], b:[
    'Wir durften sogar echte Knochen und versteinerte Eier anfassen.',
    'Besonders spannend fand ich die Zähne eines Raubsauriers.',
    'Sie waren so lang wie meine Hand und sehr spitz.',
    'Niemand weiß genau, warum die Dinosaurier ausgestorben sind.',
    'Vielleicht ist damals ein großer Stein aus dem Weltall auf die Erde gestürzt.'
  ]},
  {id:'laterne', title:'Der Laternenumzug', a:[
    'Im November bastelten wir in der Schule bunte Laternen.',
    'Meine Laterne sieht aus wie ein Fuchs mit einem langen Schwanz.',
    'Am Abend trafen sich alle Kinder vor der Kirche.',
    'Ein Mann auf einem Pferd ritt dem Zug voran.',
    'Hinter ihm liefen wir mit unseren leuchtenden Laternen.'
  ], b:[
    'Dabei sangen wir Lieder, die wir vorher geübt hatten.',
    'Auf dem Marktplatz brannte ein großes Feuer.',
    'Dort bekam jedes Kind eine warme Brezel.',
    'Leider fing meine Laterne plötzlich Feuer.',
    'Zum Glück war es nur das Papier und niemandem ist etwas passiert.'
  ]},
  {id:'weihnachtsmarkt', title:'Auf dem Weihnachtsmarkt', a:[
    'In der Adventszeit besuchten wir den Weihnachtsmarkt in der Stadt.',
    'Überall leuchteten bunte Lichter an kleinen Holzbuden.',
    'Es duftete nach gebrannten Mandeln und heißen Waffeln.',
    'Ich kaufte mir von meinem Taschengeld eine Tüte Lebkuchen.',
    'Meine Eltern tranken einen Tee, um sich aufzuwärmen.'
  ], b:[
    'In der Mitte des Platzes stand ein riesiger Tannenbaum.',
    'Daneben drehte sich ein altes Karussell mit Pferden.',
    'Meine kleine Schwester durfte dreimal mitfahren.',
    'Als es anfing zu schneien, war die Freude bei allen groß.',
    'Wir hatten kalte Füße, aber wir waren glücklich.'
  ]},
  {id:'umzug', title:'Der Umzug', a:[
    'Im Sommer sind wir in eine neue Wohnung umgezogen.',
    'Schon Wochen vorher packten wir alles in große Kartons.',
    'Am Umzugstag halfen uns Freunde beim Tragen der schweren Möbel.',
    'Der Schrank passte kaum durch das enge Treppenhaus.',
    'Am Abend waren alle erschöpft, aber zufrieden.'
  ], b:[
    'Mein neues Zimmer ist viel größer als das alte.',
    'Von meinem Fenster aus kann ich die Bäume im Park sehen.',
    'Am nächsten Tag klingelten die Nachbarn und brachten uns einen Kuchen.',
    'Die Leute im Haus sind sehr freundlich.',
    'Inzwischen fühle ich mich in unserer neuen Wohnung richtig wohl.'
  ]},
  {id:'bienen', title:'Die fleißigen Bienen', a:[
    'Bienen gehören zu den wichtigsten Tieren auf der Erde.',
    'Sie fliegen von Blüte zu Blüte und sammeln Nektar.',
    'Dabei bleiben an ihren Beinen kleine Pollen hängen.',
    'So sorgen sie dafür, dass neue Früchte wachsen.',
    'In einem Bienenstock leben im Sommer sehr viele Bienen zusammen.'
  ], b:[
    'Jede Biene hat eine bestimmte Aufgabe.',
    'Die Königin legt jeden Tag sehr viele Eier.',
    'Die Arbeiterinnen bauen Waben und füttern die Larven.',
    'Aus dem Nektar machen die Bienen süßen Honig.',
    'Leider gibt es heute immer weniger Bienen, weil ihnen Blumen fehlen.'
  ]},
  {id:'traum', title:'Ein seltsamer Traum', a:[
    'Letzte Nacht hatte ich einen ziemlich seltsamen Traum.',
    'Ich lag in meinem Bett, als plötzlich mein Fenster aufging.',
    'Ein riesiger Vogel mit glänzenden Federn landete auf dem Fensterbrett.',
    'Er nickte mir zu und ich kletterte auf seinen Rücken.',
    'Dann flogen wir hoch über die schlafende Stadt.'
  ], b:[
    'Unter uns lagen die Häuser wie winzige Spielzeuge.',
    'Wir flogen über Wälder, Flüsse und hohe Berge.',
    'Auf einem Gipfel lag tiefer Schnee, obwohl es Sommer war.',
    'Gerade als der Vogel landen wollte, klingelte mein Wecker.',
    'Schade, dass ich nie erfahren werde, wohin er mich bringen wollte.'
  ]}
]
};
