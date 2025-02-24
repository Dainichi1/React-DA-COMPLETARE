import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thread>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thread>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            year.valueEndOfYear - yearData.annualInvestment * yearData.year;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
