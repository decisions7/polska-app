import lection from "./json/lection_06.json";

const Lection_06 = () => {
	
	

	return (
		<>
					<div  className="wrapper_text">
						<div className="header">
							<div className="heading">Wiadomości o Polsce</div>
						</div>

						<table className="table">
							<thead>
								<tr>
									<th  width="30%" >Pytanie</th>
									<th>Odpowiedź</th>
								</tr>
							</thead>
							<tbody>
								{lection.map((postDetail, index) => {
									return (
										<tr>
											<td>{postDetail.pl}</td>
											<td>{postDetail.ru}</td>
										</tr>
									);
								})}
							</tbody>
						</table>


						<div className="article">
							<div className="title">Legenda o Lechu, Czechu i Rusie</div>
							<p className="pol3">Legenda opowiada o trzech braciach - Lechu, Czechu i Rusie, którzy szukali nowych ziem dla zamieszkania. Dzięki Lechowi powstało państwo polskie i pierwsza stolica Polski - Qniezno. Lech zobaczył gniazdo orła i pomyślał, że to dobry znak, i zaczął tam się budować. Od tych czasów biały orzeł jest symbolem Polski. Czech poszedł na zachód i założył Czechy, Rus podał się na wschód i założył Rosję.</p>
						</div>
						
						
						
						
						<div className="article">
							<div className="title">Legenda o smoku wawelskim</div>
							<p className="pol3">Legenda opowiada o smoku, który pożerał bydło, i nikt go nie mógł pokonać. Lecz miasto wyratował szewczyk, który wypełnił skórę barana siarką i podsunął smokowi. Smok zjadł barana i dużo pił, aż dopóki nie pękł. I teraz w Krakowie można zobaczyć smoka wawelskiego: to rzeźba stojąca przy wzgórzu wawelskim w Krakowie obok wejścia do jaskini Smocza Jama.</p>
						</div>
						
						<div className="article">
							<div className="title">Legenda o Warsie i Sawie</div>
							<p className="pol3">Ta legenda opowiada o powstaniu stolicy Polski Warszawy. To historia miłości rybaka Warsa i syreny Sawy. Pewnego dnia rybak Wars zobaczył przepiękną syrenę nad brzegiem Wisły. Zakochał się w niej, syrena również zakochała się w rybaku. Później pobrali się i założyli rybacką osadę, która po jakimś czasie została miastem. Od imion Wars i Sawa pochodzi nazwa Warszawy, a syrena znajduje się na godle Warszawy.</p>
						</div>
						
						<div className="article">
							<div className="title">Legenda o Warszawskiej Syrence</div>
							<p className="pol3">Pewnego dnia u podnóża dzisiejszego Starego Miasta wyszła z wody przepiękna syrena, aby nieco odpocząć na brzegu. Tak spodobało jej się miejsce, że postanowiła tu zostać na zawsze. Niestety rybacy zauważyli, że ktoś podczas połowów wzburza fale Wisły, plącze sieci i wypuszcza ryby. Postanowili więc schwytać szkodnika. Kiedy jednak usłyszeli przepiękny głos syreny, odmówili swoich zamiarów i szczerze pokochali piękną kobietę-rybę, która od tej pory co wieczór umilała im czas przepięknym śpiewem. Pewnego dnia zobaczył syrenkę bogaty kupiec i postanowił ją schwytać. Płacz syreny usłyszał młody syn rybaka i za pomocą przyjaciół, pod osłoną nocy uwolnił ją. Syrena z wdzięczności za uratowanie życia obiecała im, że zawsze kiedy tylko będą potrzebowali pomocy, stanie w ich obronie. I odtąd warszawska syrenka, uzbrojona w miecz i tarczę, broni miasta i jego mieszkańców.</p>
						</div>

						<div className="article">
							<div className="title">Po co panu (pani) Karta Polaka?</div>
							<p className="pol3">
								<p>-W Polsce mieszkają nasi krewni: ciocie i wujkowie ze strony ojca. Chciałbym odwiedzić jego braci i swoich kuzynków.</p>
								<p>-Chciał(a)bym studiować w Polsce na Uniwersytecie.</p>
								<p>-Chciał(a)bym, aby moje dzieci miały możliwość studiować w Polsce.</p>
								<p>-Chcę pracować i mieszkać w Polsce.</p>
								<p>-Chcę ćwiczyć język polski w Polsce i w przyszłości nauczyć się doskonale mówić po polsku.</p>
							</p>
						</div>

						<div className="article">
							<div className="title">Skąd pan (pani) zna język polski?</div>
							<p className="pol3">
								<p>-Po polsku ze mną w dzieciństwie rozmawiał ojciec, nauczył mnie czytać.</p>
								<p>-Chodzimy razem z rodziną do kościoła, gdzie msze prowadzą się w języku polskim.</p>
								<p>-Obecnie chodzę na kursy językowe i uczę się samodzielnie.</p>
								<p>-Czytam wiadomości w Internecie po polsku.</p>
							</p>
						</div>



						<div className="article">
							<div className="title">Mazurek Dąbrowskiego (1797)</div>
							<p className="russ3">Muzyka: autor nieznany, na motywach mazura. Słowa: Józef Wybicki</p>
							<p className="pol3">
								<p>Jeszcze Polska nie zginęła,</p>
								<p>Kiedy my żyjemy.</p>
								<p>Co nam obca przemoc wzięła,</p>
								<p>Szablą odbierzemy.</p>			
								<br />
								<p>Marsz, marsz Dąbrowski,</p>
								<p>Z ziemi włoskiej do Polski.</p>
								<p>Za twoim przewodem</p>
								<p>Złączym się z narodem.</p>
								<br></br>
								<p>Przejdziem Wisłę, przejdziem Wartę,</p>
								<p>Będziem Polakami.</p>
								<p>Dał nam przykład Bonaparte,</p>
								<p>Jak zwyciężać mamy.</p>
								<br />
								<p>Marsz, marsz Dąbrowski …</p>
								<br />
								<p>Jak Czarniecki do Poznania</p>
								<p>Po szwedzkim zaborze,</p>
								<p>Dla ojczyzny ratowania</p>
								<p>Wrócim się przez morze.</p>
								<br />
								<p>Marsz, marsz Dąbrowski …</p>
								<br />
								<p>Już tam ojciec do swej Basi</p>
								<p>Mówi zapłakany –</p>
								<p>Słuchaj jeno, pono nasi</p>
								<p>Biją w tarabany.</p>
								<br />
								<p>Marsz, marsz Dąbrowski …</p>
							</p>
						</div>








					</div>



				
				
				<div className="gimn">
					<h2></h2>
					<h3></h3>
					
				</div>
				<img src="/img/pol-4-1.jpg" alt="" />
				<img src="/img/pol-4-2.jpg" alt="" />
		</>
	);
};

export { Lection_06 };
