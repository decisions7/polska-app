import lection_14_1 from "./json/lection_14_1.json";
import lection_14_2 from "./json/lection_14_2.json";

const Lection_14 = () => {
	
	

	return (
		<>
			<div className="wrapper_text">
				<div className="header">
					<div className="heading">Mieszkanie</div>
				</div>


					<table className="table">
						<thead>
							<tr>
								<th>Pytanie</th>
								<th>Odpowiedź</th>
							</tr>
						</thead>
						<tbody>
							{lection_14_1.map((postDetail, index) => {
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
						<div className="title">Miasto</div>
					</div>
				

				
					<table className="table">
						<thead>
							<tr>
								<th>Pytanie</th>
								<th>Odpowiedź</th>
							</tr>
						</thead>
						<tbody>
							{lection_14_2.map((postDetail, index) => {
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

export { Lection_14 };
