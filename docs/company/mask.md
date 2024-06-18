# Mask

The `--mask` and `-m` flag is used to add a mask to a password. The mask works like the john tool with :

* `%w` -> word
* `%s` -> symbols
* `%d` -> digits
* `%l` -> lowercase
* `%u` -> uppercase
* `%a` -> all chars

```bash
> passfinder company -n passfinder --mask "%w202%d%s"

[...]
passfinder2027<
passfinder2027>
passfinder2027?
passfinder2027/
passfinder2027\
passfinder2028!
passfinder2028@
passfinder2028#
passfinder2028$
passfinder2028%
[...]
```