package api

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	"github.com/henry2025/roomdraw-optim-backend/templates"
)

type API struct {
	engine     *gin.Engine
	roomCounts map[int]int
	db         *sql.DB
	roomCache  templates.RoomDB
}

func New() *API {
	s := &API{
		engine:     gin.Default(),
		roomCounts: make(map[int]int),
		db:         nil,
	}
	s.AttachRoutes()

	return s
}

func (a *API) SetupDB() error {
	return nil
}

func (a *API) Run() error {
	return a.engine.Run()
}

func (a *API) loadDormCache() error {
	rows, err := a.db.Query("SELECT * FROM dorms;")
	var (
		local_id  string
		dorm_id   templates.ID
		global_id templates.ID
		capacity  uint16
		dsa       bool
		suite     templates.ID
	)

	for rows.Next() {
		rows.Scan(&local_id, &dorm_id, &global_id, &capacity, &dsa, &suite)
		a.roomCache[global_id] = templates.Room{
			LocalID:  local_id,
			DormID:   dorm_id,
			GlobalID: dorm_id,
			Capacity: capacity,
			Dsa:      dsa,
			Suite:    suite}
	}
	return err
}
