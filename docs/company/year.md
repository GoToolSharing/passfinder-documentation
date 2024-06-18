# Year

The `--year` and `-y` flag is used to add the current year to the end of a password. By default, it expects a value of `0` for the current year. You can also add a year range. For example, 2 will display the 2 years before and after the current year.

```bash
> passfinder company -n passfinder --year 0

passfinder
passfinder2024
```

```bash
> passfinder company -n passfinder --year 2

passfinder
passfinder2022
passfinder2023
passfinder2024
passfinder2025
passfinder2026
```

The `--year-separators` flag is used to add a special character between the company name and the year.

```bash
> passfinder company -n passfinder --year 0 --year-separators

passfinder
passfinder2024
passfinder!2024
passfinder@2024
passfinder#2024
passfinder$2024
passfinder%2024
passfinder+2024
passfinder?2024
passfinder=2024
passfinder*2024
```

This option also works with `--short-year`.

```bash
> passfinder company -n passfinder --short-year 0 --year-separators

passfinder
passfinder24
passfinder!24
passfinder@24
passfinder#24
passfinder$24
passfinder%24
passfinder+24
passfinder?24
passfinder=24
passfinder*24
```