fetch("https://corona.askbhunte.com/api/v1/data/nepal")
  .then((apiData) => {
    return apiData.json();
  })
  .then((data) => {
    const totalCases = data.tested_total;
    const totalRecovered = data.recovered;
    const totalDeaths = data.deaths;

    const isolated = data.in_isolation;
    const quarantine = data.quarantined;
    const pending = data.pending_result;

    const testedPos = data.tested_positive;
    const testedNeg = data.tested_negative;
    const testedRdt = data.tested_rdt;

    const update = new Date(data.updated_at);

    document.getElementById("cases").innerHTML = `${totalCases}`;
    document.getElementById("recover").innerHTML = `${totalRecovered}`;
    document.getElementById("death").innerHTML = `${totalDeaths}`;

    document.getElementById("isolate").innerHTML = `${isolated}`;
    document.getElementById("quarantine").innerHTML = `${quarantine}`;
    document.getElementById("pending").innerHTML = `${pending}`;

    document.getElementById("tested_positive").innerHTML = `${testedPos}`;
    document.getElementById("tested_negative").innerHTML = `${testedNeg}`;
    document.getElementById("tested_rdt").innerHTML = `${testedRdt}`;

    document.getElementById("updated").innerHTML = `Last updated: ${update}`;
  })
  .catch(() => {
    document.querySelector(".error-msg").style = "display:block !important";
  });
