package templates

import "errors"

type PreferencePair struct {
	RoomRange []Room `json:"room_range"`
	Rank      uint16 `json:"rank"`
}

type SuitePreference struct {
	Suite ID     `json:"suite"`
	Rank  uint16 `json:"rank"`
}

type RoomForm struct {
	Size        uint16           `json:"size"`
	Members     []StudentID      `json:"members"`
	Preferences []PreferencePair `json:"preferences"`
}

type MacroForm struct {
	Size        uint16
	Members     []StudentID
	Preferences []SuitePreference
}

// Validate that the range in a preference pair stays within a dorm and that the
// rooms are contiguous
func validatePreferencePair(p PreferencePair, db RoomDB) error {
	dormID := p.RoomRange[0].DormID
	var lastRoom ID = dormID

	for _, v := range p.RoomRange {
		// 1. assert that each of the dorm ids are all the same dorm
		if dormID != v.DormID {
			return errors.New("The specified preference does not lie in the same dorm")
		}

		// 2. assert that the elements are contiguous
		if v.DormID-lastRoom != 1 {
			return errors.New("The specified preference range is not contiguous")
		}
	}
	return nil
}
