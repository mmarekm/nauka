var sygnatura = 4;

var zadMatUla = ["Darek mieszkał z rodzicami, oraz swoimi dwoma braćmi i trzema siostrami. Postanowił kupić kilogram chleba razowego i obdzielić każdego (także siebie) po równo. Cena 200 g chleba razowego była tańsza o 1 zł i 37 gr od kostki masła kosztującej 4 zł 1 gr. Darek zawsze kupował świeży chleb, który dowoził pan Kazik o g. 11<sup>20</sup>. Zauważył, że do tego czasu ma jeszcze 2 godziny i 35 minut, gdyż dopiero kwadrans temu jadł śniadanie. Jednak poszedł już przygotować sobie monety dwuzłotowe do tego zakupu, które układał na specjalnej półce wzdłuż ściany co 3,5 dm. Ile gram chleba razowego zje każda osoba z rodziny, o której godzinie Darek jadł śniadanie i o ile krótszy będzie rządek dwuzłotówek na półce Darka. Czy wystarczy mu dziesięciogroszówek, które dostanie jako reszty od pani Zosi ze sklepu, by je poumieszczać w miejsce tamtych?"];
var zadMatBasia = ['2 lutego Kasia spytała swojego starszego brata, która godzina. "Jest pierwsza po południu" - odpowiedział brat."Ojej, a poprzednio, gdy cię pytałam, mówiłeś, że jest dokładnie południe!". "Tak - powiedział brat - ale poprzednio pytałaś mnie 29 stycznia". Ile godzin minęło między tymi dwoma pytaniami Kasi i ile minut brakuje do spotkania z koleżanką, które zostało zaplanowane na g. 14<sup>40</sup> tego dnia (2 lutego)?'];
var histBookV = ["Życie pierwszych ludzi s.8-11","W jaki sposób oblicza się czas? oraz Od epoki kamienia do epoki żelaza s.6 oraz s.12-13","Miasta-państwa Mezopotamii s.14-17","W Babilonii s.18-19","W Egipcie faraonów s.20-22","Egipskie piramidy i dalej s.23-25","W starożytnym Izraelu s.26-29 uzupełniamy (modyfikujemy) wiedzą z Pisma Świętego!","Cywizlizacje Indii i Chin s.30-32 połowa","Wielki Mur Chiński i dalej s.32 połowa-34","Od hieroglifów do alfabetu s.35-37","Rozwój pisma oraz Tajemnice sprzed wieków s.38-39 oraz s.40-41","Podsumowanie s.42","Demokratyczne Ateny s.44-45","Starożytne Ateny i dalej s.46-48","Sparta i wojny z Persami s.49-51","Zwycięstwo Greków nad Persami i dalej s.52-54","Bogowie i mity s.55-58","Iliada i Odyseja i dalej s.59-60","Kultura starożytnej Grecji s.61-63","Nie tylko mity i dalej s.64-66","Imperium Aleksandra Wielkiego s.67-69","cd. Aleksandra Wielkiego oraz Tajemnice sprzed wieków s.70-71 oraz 72-73","Podsumowanie s.74","Ustrój starożytnego Rzymu s.76-78","ciąg dalszy s.79-80","Imperium Rzymskie s.81-83","Podział, upadek cesarstwa i języki s.84-85","Życie w Wiecznym Mieście s.86-89","Dokonania starożytnych Rzymian s.90-93","Prawo rzymskie s.94-95","Początki chrześcijaństwa s.96-99 uzupełniamy (modyfikujemy) wiedzą!","Tajemnice sprzed wieków s.100-101","Podsumowanie s.102","Bizancjum w czasach świetności s.104-106","Osiągnięcia naukowe i dalej s.107-108","Arabowie i początki islamu s.109-111","Osiągnięcia Arabów i dalej s.112-113","Nowe państwa w Europie s.114-116","Korona cesarska w rękach władców niemieckich i dalej s.117-118","Konflikt papiestwa z cesarstwem s.119-121","Wyprawy krzyżowe s.122-124","Zakony rycerskie i dalej s.125-127","Tajemnice sprzed wieków s.128-129","Podsumowanie s.130","System feudalny s.132-135","Epoka rycerzy s.136-139","Tajemnice sprzed wieków s.140-141","Średniowieczne miasto i wieś s.142-145","Życie w średniowiecznym mieście i dalej s.146-147","Kościół w średniowieczu s.148-150 uzupełniamy (modyfikujemy) wiedzą!", "Praca średniowiecznych kopistów i dalej s.151-152 uzupełniamy (modyfikujemy) wiedzą!","Sztuka średniowiecza s.153-155","Sztuka epoki średniowiecza i dalej s.156-157","Podsumowanie s.158","Zanim powstała Polska s.160-161","Najstarsze wiadomości o Słowianach i dalej s.162-164","Mieszko I i początki Polski s.165-167","W obronie granic i dalej s.168-169","Polska Bolesława Chrobrego s.170-172 połowa","Tekst źródłowy i dalej s.172 połowa-174","Kryzys i odbudowa państwa polskiego s.175-178","Rządy Bolesława Krzywoustego s.179-182","Społeczeństwo w czasach pierwszych Piastów s.183-185","Obowiązki mieszkańców państwa i dalej oraz Tajemnice sprzed wieków s.186-187 oraz s.188-189","Podsumowanie s.190","Rozbicie dzielnicowe s.192-194","Ziemie polskie w XIII wieku i dalej s.195-197","Zjednoczenie Polski s.198-200 połowa","Tekst źródłowy Jana Długosza i dalej s.200 połowa-202","Czasy Kazimierza Wielkiego s.203-205","Uczta u Wierzynka i dalej s.206-207","Unia polsko-litewska s.208-210","Bitwa pod Grunwaldem i dalej s.211-213","Tajemnice sprzed wieków s.214-215","Czasy świetności dynastii Jagiellonów s.216-218","Polska odzyskuje Pomorze Gdańskie s.219-221","Monarchia stanowa w Polsce s.222-225","Przywileje szlacheckie i dalej s.226-227","Podsumowanie s.228","Podsumowanie znajomości pojęć z połowy słowniczka s.229-232","Podsumowanie znajomości pojęć z połowy słowniczka s.233-235 i rzut okiem na s.236"];
var religiaV = ["Czym różni się prawdziwe szczęście od chwilowej przyjemności?", "Co daje Ci szczęście?", "Jak możesz pomagać w grupach/wspólnotach/rodzinie, aby inni byli szczęśliwi?", "Podaj przykłady z życia codziennego, w których ważną rolę odgrywa wiara, nadzieja i miłość.", "Z czego się składa Biblia?", "Jakie Księgi Biblijne umiesz wymienić, jakie rodzaje ksiąg znajdują się w Nowy Testamencie?", "Jakie gatunki literackie możesz znaleźć w Biblii?", "Jak czytać i interpretować Pismo Święte? Czy można brać wszystko dosłownie?", "Biblia a nauka - czy jest tu jakiś konflikt, czy da się te dwie nauki pogodzić?", "Jaki jest związek Pisma Świętego a Tradycją? Czym jest Tradycja (pisana przez wielkie T)?", "Czytasz indywidualnie Pismo Święte?", "Historie biblijne: Kain i Abel, Noe, wieża Babel.", "Wyjaśnij pojęcia: anioł, błogosławieństwo, Ewangelia, protoewangelia, wolna wola.", "Podaj przykłady postaci biblijnych w kontekście odróżniania dobra od zła", "Jakie są konsekwencje grzechu?", "Co to jest Naród Wybrany? Co oznacza słowo przymierze.", "Opowiedz historię Abrahama, Izaaka, Jakuba, Józefa Egipskiego, niewoli egipskiej, Paschy i wyjścia z Egiptu, wędrówki Narodu Wybranego, otrzymania Dekalogu. Jak Bóg troszczy się o swój lud? Jaka jest postawa ludzi wobec Boga?", "Kim był Jonasz?", "Jak Bóg objawia się ludziom? W którym momencie historii i jak objawił się w pełni?", "Jak Jezus okazuje nam miłość poprzez mękę, śmierć i zmartwychwstanie?", "Czym jest Ewangelia? Jakich znasz Ewangelistów? Czy poszczególne wersje ewangelii są takie same czy różnią się od siebie?", "Czym jest przypowieść? Jakie znasz przypowieści o Królestwie Niebieskim?", "Czym jest Kościół (pisany przez wielkie K), a czym kościół (przez małe k)?", "Wymień biblijne obrazy Kościoła - do czego możemy porównać Kościół, np. do owczarni, gdzie Jezus jest Dobrym Pasterzem.", "Jakie jest znaczenie Chrztu?", "Jak wyglądał pierwotny Kościół?", "Opowiedz o początkach Kościoła w Polsce.", "Czym jest życie konsekrowane? Czym są misje, kim są misjonarze?", "Kim są świeccy i jaka jest ich rola w Kościele?", "Jak Ty możesz udzielać się w Kościele?"];
var religiaIII = ["Czym jest modlitwa?","Jak możesz wielbić Boga, kiedy przepraszasz?", "Za kogo możesz się modlić? O co prosić Pana Boga?", "O co prosimy w Modlitwie Pańskiej?", "Wymień modlitwy Maryjne.", "Jaki sakrament oczyszcza nas z grzechów?", "Jak dobrze przygotować się do Sakramentu Pokuty i Pojednania?", "Jak odróżnić grzech lekki i ciężki?", "Jak możesz pracować nad sobą i stawać się coraz lepszym?", "Jak często powinno się przystępować do Spowiedzi?", "Na czym polega praktyka pierwszych piątków miesiąca?", "Podaj przykłady zastosowania przykazań Bożych w życiu codziennym.", "Co oznacza, że niedziela jest pamiątką Zmartwychwstania? Jak możemy świętować niedzielę?", "Omów przypowieści: „O zagubionej owcy”, „O miłosiernym ojcu”, „O miłosiernym samarytaninie”.", "Czym jest Adoracja Najświętszego Sakramentu?"];

var dzien = ["10 maja 2024 r.","9 maja 2024 r.","8 maja 2024 r.","7 maja 2024 r.","6 maja 2024 r.","<b>data</b>"];
var religiaUla = [religiaV[4],religiaV[3],religiaV[2],religiaV[1],religiaV[0],"<b>religia Ula</b>"];
var religiaBasia = [religiaIII[4],religiaIII[3],religiaIII[2],religiaIII[1],religiaIII[0],"<b>religia Basia</b>"];
var matematykaUla = ["nauka NWD i NWW na przykładach: NWD(36,48), NWD(56, 84), NWW(8,28), NWW(12,16)","Rozłóż następujące liczby na czynniki pierwsze: 375, 567, 8192",zadMatUla[0],"Które liczby są złożone: 3, 9, 13, 22, 31, 41, 45, 69","Które liczby są pierwsze: 2, 7, 15, 23, 33, 49, 51, 61?","<b>matem Ula</b>"];
var matematykaBasia = ["Oblicz:<br/>2x4 + 3x3 + 8x8<br/>--------------------- =<br/>7x9 - 6x8 - 54:9","1. L - IX x IV, C - X x VIII, LX + XL, V x VIII + VII x IX<br/>2. Wzdłuż 1 cm można ułożyć 1 g ziarenek. Na jakiej odległości należy ułożyć ziarenka, by ważyły pół kg?",zadMatBasia[0],"Oblicz: 9x5, 7x7, 4x6, 3x9, 2x7, 9x8, 5x7, 6x7 ","Oblicz: 6x5, 4x7, 3x8, 2x9, 7x5, 8x4, 9x9, 4x4","<b>matem Basia</b>"];
var lekturaUla = ["Opowieści z Narnii: Książę Kaspian","Opowieści z Narnii: Książę Kaspian","Opowieści z Narnii: Książę Kaspian","Opowieści z Narnii: Książę Kaspian","Opowieści z Narnii: Książę Kaspian","<b>lektura Ula</b>"];
var lekturaBasia = ["Opowieści z Narnii: Lew, czarownica i stara szafa","Opowieści z Narnii: Lew, czarownica i stara szafa","Opowieści z Narnii: Lew, czarownica i stara szafa","Opowieści z Narnii: Lew, czarownica i stara szafa","Opowieści z Narnii: Lew, czarownica i stara szafa","<b>lektura Basia</b>"];
var polskiUla = ["","wspólne zadanie: Napisz ze słyszenia: krzesło, rzeka, rzepa, tchórz, żaba, spokój, również, mucha, kura, jaskółka, trochę, schody, filharmonia, machać, wahać","wspólne zadanie: Napisz ze słyszenia: bohater, chata, chrzan, herbata, wichura, borsuk, góra, kłótnia, mrówka, fartuch, drzewo, jarzębina, jeżyna, księżyc, rzodkiewka","","","<b>gram pol Ula</b>"];
var polskiBasia = ["","wspólne zadanie: Napisz ze słyszenia: krzesło, rzeka, rzepa, tchórz, żaba, spokój, również, mucha, kura, jaskółka, trochę, schody, filharmonia, machać, wahać","wspólne zadanie: Napisz ze słyszenia: bohater, chata, chrzan, herbata, wichura, borsuk, góra, kłótnia, mrówka, fartuch, drzewo, jarzębina, jeżyna, księżyc, rzodkiewka","","","<b>gram pol Basia</b>"];
var slowkaAngUla = ["","mały, wąski, głęboki, pusty, ciężki, miękki, szybki, zły, niebezpieczny, prawidłowy, łatwy, młody, niski","duży, szeroki, płytki, pełny, lekki, twardy, (po)wolny, dobry, bezpieczny, błędny, trudny, stary, wysoki","2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 40, 60, 80, 100, 1000000","1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 30, 50, 70, 90, 1000","<b>słówka Ula</b>"];
var slowkaAngBasia = ["","duży, szeroki, płytki, pełny, lekki, twardy, (po)wolny, dobry, bezpieczny, błędny, trudny, stary, wysoki","mały, wąski, głęboki, pusty, ciężki, miękki, szybki, zły, niebezpieczny, prawidłowy, łatwy, młody, niski","1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 30, 50, 70, 90, 1000","2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 40, 60, 80, 100, 1000000","<b>słówka Basia</b>"];
var angielskiUla = ["Przywitanie się i przedstawienie","","","","","<b>angiel Ula</b>"];
var angielskiBasia = ["Przywitanie się i przedstawienie","","","","","<b>angiel Basia</b>"];
var informatykaUla = ["Jakie znasz zasady tworzenia dokumentów?","Do czego służy przycisk F5? Jak zamienić wszystkie wyrazy <em>nie</em> w tekście na <em>tak</em>?","Po co stosujemy skróty klawiaturowe? Jakie znasz skróty klawiaturowe?","Co to jest formatowanie tekstu? Jak wyczyścić formatowanie w tekście?","Co to jest akapit i interlinia w Wordzie(LibreOffice Writer)","<b>inform Ula</b>"];
var informatykaBasia =["Jakie znasz zasady tworzenia dokumentów?","Do czego służy przycisk F5? Jak zamienić wszystkie wyrazy <em>nie</em> w tekście na <em>tak</em>?","Po co stosujemy skróty klawiaturowe? Jakie znasz skróty klawiaturowe?","Co to jest formatowanie tekstu? Jak wyczyścić formatowanie w tekście?","Co to jest akapit i interlinia w Wordzie(LibreOffice Writer)","<b>inform Basia</b>"];
var zagadnieniaBasia = ["Wykaż znajomość godła, flagi, hymnu narodowego","Wskaż rzeczowniki, czasowniki i przymiotniki w wierszu o kotku Psotku","","ćwiczenie wiersza","Który wiersz na pamięć?","<b>zagadn Basia</b>"];
var historiaUla = [histBookV[4],histBookV[3],histBookV[2],histBookV[1],histBookV[0],"<b>historia Ula</b>"];
var biologiaUla = ["","","","","","<b>biologia Ula</b>"];
var geografiaUla = ["","","","","","<b>geografia Ula</b>"];

var naglowek = [dzien[dzien.length - 1],religiaUla[religiaUla.length - 1],religiaBasia[religiaBasia.length - 1],matematykaUla[matematykaUla.length - 1],matematykaBasia[matematykaBasia.length - 1],lekturaUla[lekturaUla.length - 1],lekturaBasia[lekturaBasia.length - 1],polskiUla[polskiUla.length - 1], polskiBasia[polskiBasia.length - 1],slowkaAngUla[slowkaAngUla.length - 1],slowkaAngBasia[slowkaAngBasia.length - 1],angielskiUla[angielskiUla.length - 1],angielskiBasia[angielskiBasia.length - 1],informatykaUla[informatykaUla.length - 1],informatykaBasia[informatykaBasia.length - 1],zagadnieniaBasia[zagadnieniaBasia.length - 1],historiaUla[historiaUla.length - 1],biologiaUla[biologiaUla.length - 1],geografiaUla[geografiaUla.length - 1]];

var wszystkie = [];
for (let i = 0; i < dzien.length - 1; i++)
{
	wszystkie.push(dzien[i]);
	wszystkie.push(religiaUla[i]);
	wszystkie.push(religiaBasia[i]);
	wszystkie.push(matematykaUla[i]);
	wszystkie.push(matematykaBasia[i]);
	wszystkie.push(lekturaUla[i]);
	wszystkie.push(lekturaBasia[i]);
	wszystkie.push(polskiUla[i]);
	wszystkie.push(polskiBasia[i]);
	wszystkie.push(slowkaAngUla[i]);
	wszystkie.push(slowkaAngBasia[i]);
	wszystkie.push(angielskiUla[i]);
	wszystkie.push(angielskiBasia[i]);
	wszystkie.push(informatykaUla[i]);
	wszystkie.push(informatykaBasia[i]);
	wszystkie.push(zagadnieniaBasia[i]);
	wszystkie.push(historiaUla[i]);
	wszystkie.push(biologiaUla[i]);
	wszystkie.push(geografiaUla[i]);
}
function pisz()
{
	$("#dziennik").html('');
	for (let i = 0; i < naglowek.length; i++)
	{
		$("#dziennik").append('<div class="ramka">' + naglowek[i] + '</div>');
	}
	$("#dziennik").append('<br/><br/>');
	for (let i = 0; i < wszystkie.length; i++)
	{
		$("#dziennik").append('<div class="ramka">' + wszystkie[i] + '</div>');
	}
}
function wyswietl()
{
	$("#dzien").html('');
	$("#Ula").html('');
	$("#Basia").html('');
	$("#dzien").append(dzien[sygnatura]);
	for (let i = 1; i < 19; i ++)
	{
		if (i < 15)
		{
			if (i % 2 == 1)
			{
			if (i == 1)
				$("#Ula").append('<b>Religia</b>: ');
			if (i == 3)
				$("#Ula").append('<b>Matematyka</b>: ');
			if (i == 5)
				$("#Ula").append('<b>Lektura</b>: ');
			if (i == 7)
				$("#Ula").append('<b>Polski</b>: ');
			if (i == 9)
				$("#Ula").append('<b>Słówka</b>: ');
			if (i == 11)
				$("#Ula").append('<b>Angielski</b>: ');
			if (i == 13)
				$("#Ula").append('<b>Informatyka</b>: ');
			$("#Ula").append(wszystkie[sygnatura * 19 + i]);
			$("#Ula").append('<br/>');
			}
			else
			{
			if (i == 2)
				$("#Basia").append('<b>Religia</b>: ');
			if (i == 4)
				$("#Basia").append('<b>Matematyka</b>: ');
			if (i == 6)
				$("#Basia").append('<b>Lektura</b>: ');
			if (i == 8)
				$("#Basia").append('<b>Polski</b>: ');
			if (i == 10)
				$("#Basia").append('<b>Słówka</b>: ');
			if (i == 12)
				$("#Basia").append('<b>Angielski</b>: ');
			if (i == 14)
				$("#Basia").append('<b>Informatyka</b>: ');
			$("#Basia").append(wszystkie[sygnatura * 19 + i]);
			$("#Basia").append('<br/>');
			}
		}
		else if (i == 15)
		{
			$("#Basia").append('<b>Zagadnienie</b>: ' + wszystkie[sygnatura * 19 + i]);
			$("#Basia").append('<br/>');
		}
		else
		{
			if (i == 16)
				$("#Ula").append('<b>Historia</b>: ');
			if (i == 17)
				$("#Ula").append('<b>Biologia</b>: ');
			if (i == 18)
				$("#Ula").append('<b>Geografia</b>: ');
			$("#Ula").append(wszystkie[sygnatura * 19 + i]);
			$("#Ula").append('<br/>');
		}
	}
	$("#obowiazkowe").html("INSTRUMENTY<br/>busuu i FISZKI");
}