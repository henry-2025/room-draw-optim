package templates

type ID uint16
type Room struct {
	GlobalID  ID        `json:"global_id"`
	LocalID   string    `json:"local_id,omitempty"`
	DormID    ID        `json:"dorm_id,omitempty"`
	Capacity  uint16    `json:"capacity,omitempty"`
	Dsa       bool      `json:"dsa,omitempty"`
	Suite     ID        `json:"suite,omitempty"`
	Filled    bool      `json:"filled,omitempty"`
	Occupants []Student `json:"occupants,omitempty"`
}

type RoomDB map[ID]Room
