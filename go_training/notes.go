//conditionals in go
package main

import (
    "fmt"
)

func main() {
    x := 5

    if x > 0 {
        fmt.Printf("x seems to be big\n")
    }

    if x < 100 {
        fmt.Printf("In this case x is not that big\n")
    } else {
        fmt.Printf("Well the arg passed is big\n")
    }
}

/* We just generally going through the basics of conditional statements.
*/


