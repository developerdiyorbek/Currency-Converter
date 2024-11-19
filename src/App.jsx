import { Box, Container, Grid, Typography } from "@mui/material";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/SelectCountry";
import SwitchCurrency from "./components/SwitchCurrency";
import { useContextValues } from "./hooks/useContextValues";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, amount } =
    useContextValues();

  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      axios
        .get(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${
            fromCurrency.split(" ")[1]
          }&to=${toCurrency.split(" ")[1]}`
        )
        .then((data) => {
          setConvertedAmount(data.data.rates[toCurrency.split(" ")[1]]);
        })
        .catch((error) => {
          console.error("Error fetching currency data", error);
          setError("This currency is not supported by the API.");
          setConvertedAmount(null);
        });
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <Container maxWidth="md">
      <Typography
        component={"h1"}
        sx={{ textAlign: "center", margin: "20px 0", fontSize: "30px" }}
      >
        Currency app
      </Typography>
      <Grid container spacing={2} direction={"column"}>
        <InputAmount />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>

      {convertedAmount !== null && (
        <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
          {" "}
          <Typography>
            {amount} {fromCurrency} =
          </Typography>
          <Typography
            component={"h5"}
            sx={{ marginTop: "5px", fontWeight: "bold", fontSize: "22px" }}
          >
            {convertedAmount} {toCurrency}
          </Typography>
        </Box>
      )}

      {error && (
        <Typography
          sx={{ color: "red", textAlign: "center", marginTop: "1rem" }}
        >
          {error}
        </Typography>
      )}
    </Container>
  );
}

export default App;
