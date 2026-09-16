alterState((state) => {
  // Function to process object entries and flatten the structure
  const processObjectEntries = (result, entries, prefix = '') => {
    for (let [key, value] of entries) {
      const newKey =  key; // Create a flat key with dot notation
      if (value === null || typeof value !== 'object') {
        result[newKey] = value; // Store leaf value in result
      } else {
        // Recursively process nested objects or arrays
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            processObjectEntries(result, Object.entries(item), `${newKey}[${index}]`);
          });
        } else {
          processObjectEntries(result, Object.entries(value), newKey);
        }
      }
    }
    return result;
  };

  // Initialize result as an object, not an array
  let result = {};
  
  // Start processing with the state.data
  result = processObjectEntries(result, Object.entries(state.data.properties));

  // Update state.data with the flattened result
  state.properties = result;
// Assign state.case_id based on the condition
  state.case_id = state.properties.source_id !== null && state.properties.source_id !== undefined && state.properties.source_id !== ''
    ? state.properties.source_id
    : state.data.case_id;  state.reported_date = state.data.reported_date
  state.orgUnit = state.properties.external_id,
  state.data= {};
  return state;
});
