# Short-year

The `--short-year` flag adds a year to the end of the company name, but only the last 2 digits (eg. `24` for `2024`). By default, it expects a value of `0` for the current year. You can also add a year range. For example, 2 will display the 2 years before and after the current year.


```bash
> passfinder company -n passfinder --short-year 0

passfinder
passfinder24
```

```bash
> passfinder company -n passfinder --short-year 2

passfinder
passfinder22
passfinder23
passfinder24
passfinder25
passfinder26
```