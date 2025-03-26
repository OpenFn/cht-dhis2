get('events', {
  orgUnit: state.orgUnit,
  program: 'GaOaL76FraA',
  filter: `IsrhSrEFAX8:EQ:${state.case_id}`,
});

fn(state => {
  const events = state.data.events || [];
  if (events.length > 0) {
    console.log('Existing event found. Will update.');
    state.existingEvent = events[0];
  } else {
    console.log('No existing event found. Proceeding with create.');
    state.existingEvent = null;
  }
  return state;
});

// collections.set('run-logs', $.case_id, { 'cht-submission': $.data })
