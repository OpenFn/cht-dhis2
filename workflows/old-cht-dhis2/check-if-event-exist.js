import { get } from '@openfn/language-dhis2';

export default [
  get(
    'events',
    {
      orgUnit:      state.orgUnit,
      program:      state.localconfig.programId,
      programStage: state.localconfig.programStage,
      filter:       state.filter
    }
  ),

  fn(state => {
    const events = state.data.events || [];
    if (events.length > 0) {
      const uid = events[0].event;
      console.log(`Existing event found (ID = ${uid}). Will update.`);
      state.existingEventId = uid;
    } else {
      console.log('No existing event found. Proceeding with create.');
      state.existingEventId = null;
    }
    return state;
  })
];
