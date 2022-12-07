package api

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/henry2025/roomdraw-optim-backend/templates"
)

func (a *API) AttachRoutes() {
	a.engine.GET("/status/capacity", getStatusHandler(a.roomCounts))
	a.engine.GET("/status/assignments", getAssignments(a.db))
	a.engine.POST("/preferences/room_group", postPreferenceForm(a.db))
	a.engine.POST("/preferences/preference_submit", postPreferenceForm(a.db))
}

func getStatusHandler(counts map[int]int) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		c.JSON(http.StatusOK, counts)

	}

	return gin.HandlerFunc(fn)
}

func postPreferenceForm(db *sql.DB) gin.HandlerFunc {

	fn := func(c *gin.Context) {
		defer c.Request.Body.Close()
		var p templates.RoomForm
		err := json.NewDecoder(c.Request.Body).Decode(&p)
		if err != nil {
			defer c.Request.Response.Body.Close()
			c.Request.Response.StatusCode = http.StatusInternalServerError
		}
	}

	return gin.HandlerFunc(fn)

}

func getAssignments(db *sql.DB) gin.HandlerFunc {
	fn := func(c *gin.Context) {

	}

	return gin.HandlerFunc(fn)
}
