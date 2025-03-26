collections.set('run-logs', i => `${i.case_id}-cht-submission`, $.data);

fn(state => {
  console.log('CHT to DHIS2 preparation');

  // Destructure the needed values from state.data
  const { case_id, orgUnit, properties, reported_date } = state.data;

  // Helper functions
  function indexOf(collection, target) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === target) {
        return i;
      }
    }
    return -1;
  }

  function checkAnswers(chosenAnswers, target, delimiter = ' ') {
    if (chosenAnswers === undefined) {
      return undefined;
    }
    let chosenAnswersList = chosenAnswers.split(delimiter);
    return indexOf(chosenAnswersList, target) !== -1;
  }

  function dataElement(dataElement, value, comment) {
    return { dataElement, value, comment };
  }

  // Converter function: converts 1/"1" to true, 0/"0" to false
  const converter = function (x) {
    if (x === 1 || x === '1') {
      return true;
    } else if (x === 0 || x === '0' || x === -1 || x === '-1') {
      return false;
    } else {
      return x;
    }
  };

  // This function creates a data element for the case_id
  function match_id(uid, flag) {
    return dataElement(uid, case_id);
  }

  // Updated match function: use the "properties" from state.data
  function match(uid, flag, conversionFn = converter) {
    if (properties && flag in properties) {
      return dataElement(uid, conversionFn(properties[flag]));
    }
  }

  const convertToNumeric = value => value;

  // Formats the reported_date (timestamp in ms) to "YYYY-MM-DD"
  function formatTimestampToDate(timestamp) {
    const dateObj = new Date(timestamp);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Build the preparedEvent object
  const preparedEvent = {
    program: 'GaOaL76FraA',
    orgUnit: orgUnit, // from state.data.orgUnit ("DiszpKrYNg8")
    occurredAt: formatTimestampToDate(reported_date),
    status: 'COMPLETED',
    dataValues: [
      match_id('IsrhSrEFAX8', 'case_id'),
      match('SfLueMvecnc', 'age_01day', convertToNumeric),
      match('wiiDcsQ5pdQ', 'age_0_2months', convertToNumeric),
      match('m5OehFImiIJ', 'CHE_B3_DE06'),
      match('eE4UpNHJQMY', 'urgent_referral'),
      match('Y64yUy6zBEp', 'CHE_B23_DE20'),
      match('Y7RtctxKULG', 'CHE_B23_DE19'),
      match('WjNYqG8zi5V', 'CHE_B23_DE03'),
      match('jmaPh46qxZL', 'ALM_B23_DE01'),
      match('RFMdp6UZuNP', 'CHE_B10S1_DE05A'),
      match('kATEiT6rXkJ', 'CHE_B23_DE32'),
      match('Gcua1eaZ5eC', 'CHE_B23_DE17'),
      match('Dv5Q4FmyvyM', 'CHE_B23_DE35'),
      match('xOTL8X1B2NI', 'CHE_B23_DE66'),
      match('wvIZHqXsAFX', 'CHE_B23_DE70'),
      match('sI5nJKbDXxk', 'CHE_B23_DE71'),
      match('dhLox6Ape1s', 'CHE_B23_DE86'),
      match('PwUUC18At3K', 'CHE_B23_DE85'),
      match('gdr30afwBpC', 'CHE_B23_DE88'),
      match('O7nmBEUP8Se', 'CHE_B23_DE91'),
      match('Km9BtfBd3M7', 'CHE_B23_DE92'),
      match('eqxoTDGxyuQ', 'CHE_B23_DE90'),
      match('jJPlVaVeleR', 'CHE_B23_DE81'),
      match('jpuL5Ovyl2a', 'ALM_B23_DE02'),
    ].filter(n => n),
  };

  console.log('The event', JSON.stringify(preparedEvent, null, 2));
  return {
    ...state,
    preparedEvent,
    case_id,
    orgUnit,
    properties,
    reported_date,
  };
});
