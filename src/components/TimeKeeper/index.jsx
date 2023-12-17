import "./style.css";

export default function TimeKeeper({ scoreTime }) {
  const scoreTable = [...scoreTime].reverse().map((scoreTime) => (
    <tr key={scoreTime.id}>
      <td>{scoreTime.id}</td>
      <td>
        {scoreTime.m < 10 ? "0" + scoreTime.m : scoreTime.m}:
        {scoreTime.s < 10 ? "0" + scoreTime.s : scoreTime.s}:
        {scoreTime.ms < 10 ? "0" + scoreTime.ms : scoreTime.ms}
      </td>
    </tr>
  ));

  return (
    <article>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>N.</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>{scoreTable}</tbody>
        </table>
      </div>
    </article>
  );
}
