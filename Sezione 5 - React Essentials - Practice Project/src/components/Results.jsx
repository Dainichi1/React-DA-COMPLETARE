import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  return <p>Results...</p>;
}
