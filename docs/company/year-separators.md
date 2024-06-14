# --year-separators

The `--year-separators` flag is used to add a special character between the company name and the year.

```bash
> passfinder company -n passfinder --year --year-separators

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
```

This option also works with `--short-year`.

```bash
> passfinder company -n passfinder --short-year --year-separators

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