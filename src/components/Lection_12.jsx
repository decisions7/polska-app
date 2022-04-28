import lection from "./json/lection_12.json";

const Lection_12 = () => {
	
	

	return (
		<>
			<div  className="wrapper_text">
				<div className="header">
					<div className="heading">Historia Polski</div>
				</div>

				<div className="article">
					<div className="title">Najważniejsze wydarzenia</div>
				</div>

				<table className="table"  >
					<thead>
						<tr>
							<th width="14%" >data</th>
							<th width="22%">krótko</th>
							<th>szczegółowy</th>
						</tr>
					</thead>
					<tbody>
						{lection.map((postDetail, index) => {
							return (
								<tr>
									<td className="tabl1">{postDetail.pl}</td>
									<td className="tabl1">{postDetail.tu}</td>
									<td className="tabl2">{postDetail.ru}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				
				
			</div>
				
		</>
	);
};

export { Lection_12 };
