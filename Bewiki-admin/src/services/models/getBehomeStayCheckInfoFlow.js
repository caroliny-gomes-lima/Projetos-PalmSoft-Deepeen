export default function getBehomeStayCheckInfoFlow(response) {
  const data = ({
    currentOccupation: response.data.currentOccupation,
    expectedCheckIns: response.data.expectedCheckIns,
    expectedCheckOuts: response.data.expectedCheckOuts,
    reportDate: response.data.reportDate,
  })
  return {
    ...response,
    data,
  };

}
