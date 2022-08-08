package main

//Calculate the mean of two numbers

import (
    "fmt"
)

func main() {
    var x int
    var y int

    x = 2
    y = 4

    fmt.Printf("x = %v, type of %T\n", x, x)
    fmt.Printf("y = %v, type of %T\n", y, y)

    mean := (x + y) / 2.0
    fmt.Printf("The results: %v, type of %T\n", mean, mean)
}
