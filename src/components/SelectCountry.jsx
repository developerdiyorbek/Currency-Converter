import { Autocomplete, Grid, TextField } from "@mui/material";
import { useFetch } from "../hooks/useFetch";

function SelectCountry({ value, setValue, label }) {
  const { data } = useFetch("https://restcountries.com/v3.1/all");

  const dataFilter = data?.filter((item) => "currencies" in item);
  const dataCountries = dataFilter?.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });

  return (
    <Grid item>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        defaultValue={"🇺🇿 UZS - Uzbekistan"}
        options={dataCountries || []}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
}

export default SelectCountry;
