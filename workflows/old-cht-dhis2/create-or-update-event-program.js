import { upsert } from '@openfn/language-dhis2';
//import { fn     } from '@openfn/language-common';

export default [
   fn(state => {
    const payload = { ...state.event };
    if (state.existingEventId) {
      payload.event = state.existingEventId;
      console.log(`Updating existing event ${state.existingEventId}`);
    } else {
      console.log('No existing event — will CREATE a new one');
    }
    state.preparedEvent = payload;
    return state;
  }),

  
  upsert(
    'events',
    {
      program:      state.localconfig.programId,
      programStage: state.localconfig.programStage,
      orgUnit:      state.orgUnit,
      filter:       state.filter
    },
    $.preparedEvent,                            
    {
      importStrategy: 'CREATE_AND_UPDATE',
      atomicMode:     'OBJECT',
      async:          false
    }
  ),

 
  fn(state => {
    console.log('Upsert result:', state.data);
    return state;
  })
];
