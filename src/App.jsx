import { NavLink, Routes, Route, Link } from "react-router-dom";

import { Lection_01 } from "./components/Lection_01";
import { Lection_04 } from "./components/Lection_04";
import { Lection_06 } from "./components/Lection_06";
import { Lection_09 } from "./components/Lection_09";
import { Lection_10 } from "./components/Lection_10";
import { Lection_11 } from "./components/Lection_11";
import { Lection_12 } from "./components/Lection_12";
import { Lection_14 } from "./components/Lection_14";
import { Polacy } from "./components/Polacy";
import { Lection } from "./components/Lection";
import { Polish_words } from "./components/Polish_words";

function App() {
	return (
		<>
			<header className="wrapper">
				<NavLink to="/lection_01">*Alphabet</NavLink>
				<NavLink to="/lection_04">***Rodzina. Liczbę</NavLink>
				<NavLink to="/lection_06">Wiadomości*</NavLink>
				<NavLink to="/lection_09">Pory roku</NavLink>
				<NavLink to="/lection_10">*Święta</NavLink>
				<NavLink to="/lection_11">Mój dzień</NavLink>
				<NavLink to="/lection_12">Historia*3</NavLink>
				<NavLink to="/lection_14">Miasto</NavLink>
				<NavLink to="/polacy">Polacy</NavLink>
				<NavLink to="/lection">Лекция</NavLink>
				<NavLink to="/polish_words">Słownik</NavLink>
			</header>
			<Routes>
				<Route path="/Lection_01" element={<Lection_01 />} />
				<Route path="/Lection_04" element={<Lection_04 />} />
				<Route path="/Lection_06" element={<Lection_06 />} />
				<Route path="/Lection_09" element={<Lection_09 />} />
				<Route path="/Lection_10" element={<Lection_10 />} />
				<Route path="/Lection_11" element={<Lection_11 />} />
				<Route path="/lection_12" element={<Lection_12 />} />
				<Route path="/lection_14" element={<Lection_14 />} />
				<Route path="/Polacy" element={<Polacy />} />
				<Route path="/Lection" element={<Lection />} />
				<Route path="/Polish_words" element={<Polish_words />} />
			</Routes>
			
		</>
	);
}

export default App;
