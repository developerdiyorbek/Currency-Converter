import { CompareArrows } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { useContextValues } from "../hooks/useContextValues";

function SwitchCurrency() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContextValues();

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Grid item>
      <Button sx={{ borderRadius: 1, height: "100%" }} onClick={handleSwitch}>
        <CompareArrows sx={{ fontSize: "30px" }} />
      </Button>
    </Grid>
  );
}

export default SwitchCurrency;
