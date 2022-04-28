import lection from "./json/lection_09.json";

const Lection_09 = () => {
    return (
        <>
			<div className="wrapper_text">

				<div className="header">
					<div className="heading">Pory roku</div>
				</div>


				<table className="table">
					<thead>
						<tr>
							<th>Pytanie</th>
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
			</div>
		</>
    )
}

export { Lection_09 }
