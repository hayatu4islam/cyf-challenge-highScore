import allCountryScores from "./scores";
function PrintScores() {
    allCountryScores.sort((a, b) => (a.name > b.name ? 1 : -1));
  return allCountryScores.map((val) => {
    let objects = val.scores;
    objects.sort((a, b) => (a.s < b.s ? 1 : -1));
    return (
      <div className="scores-div">
        <h3 className="score-header">HIGH SCORES: {val.name} </h3>
        <div className="table-div">
          <table rules="rows">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
                {objects.map((obj, key) => {
                    return (
                      <tbody>
                        <tr key={key}>
                          <td>{obj["n"].toUpperCase()}</td>
                          <td>{obj["s"]}</td>
                        </tr>
                      </tbody>
                    );
                })}
          </table>
        </div>
      </div>
    );
  });
}
export default PrintScores;