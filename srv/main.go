package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/api/status", getStatus)

	r.Run()
}

func getStatus(c *gin.Context) {
	c.JSON()
}
