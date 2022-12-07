package templates

type StudentID uint16

type Student struct {
	StudentID StudentID `json:"student_id"`
	Name      string    `json:"name,omitempty"`
	Year      uint16    `json:"year,omitempty"`
}
