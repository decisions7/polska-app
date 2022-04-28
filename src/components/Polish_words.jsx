import pol_words from "./json/pol_words.json";
import pol_words_2 from "./json/pol_words_2.json";

const Polish_words = () => {
	
	

	return (
		<>
			<div className="wrapper_text">

				<div className="header">
					<div className="heading">Słownik polski</div>
				</div>

				<div className="article">
					<div className="title">Przymiotnik(прилагательное)</div>
				</div>

				<table className="table">
						<thead>
							<tr>
								<th>Polski</th>
								<th>Rosyjski</th>
							</tr>
						</thead>
						<tbody>
							{pol_words.map((postDetail, index) => {
								return (
									<tr>
										<td  className="pol3">{postDetail.pl}</td>
										<td className="pol3">{postDetail.ru}</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="article">
						<div className="title">Przysłówki(наречие)</div>
					</div>


					<table className="table">
						<thead>
							<tr>
								<th>Polski</th>
								<th>Rosyjski</th>
							</tr>
						</thead>
						<tbody>
							{pol_words_2.map((postDetail, index) => {
								return (
									<tr>
										<td  className="pol3">{postDetail.pl}</td>
										<td className="pol3">{postDetail.ru}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					
					</div>












		</>
	);
};

export { Polish_words };
