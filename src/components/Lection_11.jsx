import lection_11_1 from "./json/lection_11_1.json";
import lection_11_2 from "./json/lection_11_2.json";

const Lection_11 = () => {
	
	

	return (
		<>
			<div className="wrapper_text">


				<div className="header">
					<div className="heading">Mój dzień</div>
				</div>


					<table className="table">
						<thead>
							<tr>
								<th>Polski</th>
								<th>Rosyjski</th>
							</tr>
						</thead>
						<tbody>
							{lection_11_1.map((postDetail, index) => {
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
						<div className="title">Która godzina? O której (godzinie)?</div>
					</div>

				
					<table className="table">
						<thead>
							<tr>
								<th>Polski</th>
								<th>Rosyjski</th>
							</tr>
						</thead>
						<tbody>
							{lection_11_2.map((postDetail, index) => {
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

export { Lection_11 };
