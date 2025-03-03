async function getValues() {
  try {
    const response = await fetch(
      "https://economia.awesomeapi.com.br/json/last/USD-BRL,BTC-BRL"
    );
    const data = await response.json();

    const usdPrice = (data["USDBRL"]["bid"] = parseFloat(
      data["USDBRL"]["bid"]
    ).toFixed(2));
    const usdChange = data["USDBRL"]["pctChange"];
    const btcPrice = data["BTCBRL"]["bid"];
    const btcChange = data["BTCBRL"]["pctChange"];

    document.getElementById("usd-price").textContent = `$${usdPrice}`;
    document.getElementById("usd-change").textContent = `${usdChange}% ${
      usdChange > 0 ? "⬆" : "⬇"
    }`;

    document.getElementById("btc-price").textContent = `$${btcPrice}`;
    document.getElementById("btc-change").textContent = `${btcChange}% ${
      btcChange > 0 ? "⬆" : "⬇"
    }`;

    const usdChangeElement = document.getElementById("usd-change");
    const btcChangeElement = document.getElementById("btc-change");

    if (usdChange < 0) {
      usdChangeElement.style.color = "red";
    }
    if (btcChange < 0) {
      btcChangeElement.style.color = "red";
    }
  } catch (error) {
    console.error(error);
  }
}

getValues();
