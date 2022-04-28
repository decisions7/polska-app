import { NavLink, Routes, Route, Link } from "react-router-dom";

import { Lection_09 } from "./Lection_09";

const Lection_01 = () => {
	return (
		<>
			<div>
				<h3>Alfabet polski</h3>
				<p>Alfabet polski</p>
				<img src="/img/pol-0-2.png" alt="" />
				<img src="/img/pol-0-3.png" alt="" />
				<img src="/img/pol-1-1.png" alt="" />
				<img src="/img/pol-0-1.png" alt="" />
			</div>
			<Routes>
				<Route path="/blog" element={<Lection_09 />} />
			</Routes>
		</>
	);
};

export { Lection_01 };
