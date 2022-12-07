package templates

type FilledStatus struct {
	Singles uint16 `json:"singles"`
	Doubles uint16 `json:"doubles"`
	Triples uint16 `json:"triples"`
	Quads   uint16 `json:"quads"`
}

type OptimizationResults []Room
