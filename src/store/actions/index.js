export const ResultsData = response => ({ type: 'RESULTS', payload: response });
export const GengresData = response => ({ type: 'RESULTS_BYGENRES', payload: response });
export const TitlesData = response => ({ type: 'RESULTS_BYTITLES', payload: response });
export const ReleaseData = response => ({ type: 'RESULTS_BYRELEASE', payload: response });
export const RatingData = response => ({ type: 'RESULTS_BYRATING', payload: response });
export const HandleInputs = value => ({ tyep: 'TEXT_INPUTS', payload: value });
