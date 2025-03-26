fn(state => {
  if (state.existingEvent) {
    // Set the event ID so that DHIS2 updates the event
    state.preparedEvent.event = state.existingEvent.event;
  }
  return state;
});

create('events', $.preparedEvent, {
  params: {
    importStrategy: 'CREATE_AND_UPDATE',
    atomicMode: 'OBJECT',
    async: false, // Prefer boolean false here
  },
});

fn(state => {
  state.eventId =
    state.data.bundleReport.typeReportMap.EVENT?.objectReports[0].uid;
  return state;
});

collections.set('run-logs', i => `${i.case_id}-dhis2-response`, {
  case_id: $.case_id,
  ...$.data,
});
