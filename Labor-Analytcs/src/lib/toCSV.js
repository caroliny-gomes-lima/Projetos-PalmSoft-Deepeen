import { SessionStorage } from ".";

function getDefaultDate(addDate = 0, addMonth = 0) {
  const date = new Date();
  date.setDate(date.getDate() + addDate);
  date.setMonth(date.getMonth() + addMonth);
  return date;
}

function tableToCSV(tableId, fileName) {
  //   Select rows from table_id
  var rows = document.querySelectorAll("table#" + tableId + " tr");
  // Construct csv
  var csv = [];
  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th");
    for (var j = 0; j < cols.length; j++) {
      // Clean innertext to remove multiple spaces and jumpline (break csv)
      var data = cols[j].innerText
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/(\s\s)/gm, " ");
      // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
      data = data.replace(/"/g, '""');
      // Push escaped string
      row.push(`="${data}"`);
    }
    csv.push(row.join(";"));
  }
  var csv_string = csv.join("\n");

  // Download it
  var filename = fileName + "_" + new Date().toLocaleDateString() + ".csv";
  var link = document.createElement("a");
  link.style.display = "none";
  link.setAttribute("target", "_blank");
  link.setAttribute(
    "href",
    "data:attachment/csv;charset=UTF-8," + escape(csv_string)
  );
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function forEachItem(list, callback) {
  let i = 0;
  const iMax = list.length;
  const result = [];
  for (; i < iMax; i++) {
    result.push(callback(list[i]));
  }
  return result;
}

function dataToCSV(data, headers, rows, fileName) {
  var startDate = SessionStorage.getItem("shippingStartDate")
    ? new Date(SessionStorage.getItem("shippingStartDate")).toLocaleDateString()
    : getDefaultDate().toLocaleDateString();

  var endDate = SessionStorage.getItem("shippingEndDate")
    ? new Date(SessionStorage.getItem("shippingEndDate")).toLocaleDateString()
    : new Date().toLocaleDateString();

  const cdText = `Unidade;${localStorage.getItem("cd")}`;
  const periodText = `Período:;${startDate};até;${endDate}`;
  const header = forEachItem(headers, (item) => `"${item}"`).join(";");
  const body = forEachItem(data, (item) =>
    forEachItem(rows, (row) => `${item[row]}`).join(";")
  ).join("\n");

  const csv_string = `${cdText}\n${periodText}\n${header}\n${body}`;

  var filename = fileName + "_" + new Date().toLocaleDateString() + ".csv";
  var link = document.createElement("a");
  link.style.display = "none";
  link.setAttribute("target", "_blank");
  link.setAttribute(
    "href",
    "data:attachment/csv;charset=UTF-8," + escape(csv_string)
  );
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // //   Select rows from table_id
  // var rows = document.querySelectorAll("table#" + tableId + " tr");
  // // Construct csv
  // var csv = [];
  // for (var i = 0; i < rows.length; i++) {
  //   var row = [],
  //     cols = rows[i].querySelectorAll("td, th");
  //   for (var j = 0; j < cols.length; j++) {
  //     // Clean innertext to remove multiple spaces and jumpline (break csv)
  //     var data = cols[j].innerText
  //       .replace(/(\r\n|\n|\r)/gm, "")
  //       .replace(/(\s\s)/gm, " ");
  //     // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
  //     data = data.replace(/"/g, '""');
  //     // Push escaped string
  //     row.push(`="${data}"`);
  //   }
  //   csv.push(row.join(";"));
  // }
  // var csv_string = csv.join("\n");
  // // Download it
  // var filename = fileName + "_" + new Date().toLocaleDateString() + ".csv";
  // var link = document.createElement("a");
  // link.style.display = "none";
  // link.setAttribute("target", "_blank");
  // link.setAttribute(
  //   "href",
  //   "data:attachment/csv;charset=UTF-8," + escape(csv_string)
  // );
  // link.setAttribute("download", filename);
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
}

const toCSV = {
  data: dataToCSV,
  table: tableToCSV,
};

export default toCSV;
