import { Grid, InputAdornment, TextField } from "@mui/material";
import { useContextValues } from "../hooks/useContextValues";

function InputAmount() {
  const { amount, setAmount } = useContextValues();

  return (
    <Grid item>
      <TextField
        label="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
}

export default InputAmount;
