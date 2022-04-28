import pol from "./json/lection_04.json";

const Lection_04 = () => {
	
	

	return (
		<>
			<div className="wrapper_text">

				<div className="header">
					<div className="heading">Liczby</div>
				</div>

				<table className="table">
					<thead>
						<tr>
							<th>Pytanie</th>
							<th>Odpowiedź</th>
						</tr>
					</thead>
					<tbody>
						{pol.map((postDetail, index) => {
							return (
								<tr>
									<td>{postDetail.pl}</td>
									<td>{postDetail.ru}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
					
					
				</div>
		</>
	);
};

export { Lection_04 };
