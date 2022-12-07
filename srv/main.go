package main

import (
	"fmt"

	"github.com/henry2025/roomdraw-optim-backend/api"
)

func main() {
	s := api.New()

	err := s.Run()
	if err != nil {
		fmt.Print(err)
	}
}
