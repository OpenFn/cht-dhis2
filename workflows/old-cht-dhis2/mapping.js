//TODO: Remove this once we have orgUnit from report
// const facilities = {
//   "712526f6-f826-45a7-a80b-6546ad9fde9d": "DiszpKrYNg8", //corresponding_on_DHIS2,
// };

const convertToBool = val => {
  if (typeof val === 'boolean') return val;
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();
    return val === '1' || val === 'true' || val === 'yes';
  }
  return !!val;
};

const safeGet = (obj, path, defaultValue = undefined) => {
  return (
    path.split('.').reduce((acc, part) => acc && acc[part], obj) ?? defaultValue
  );
};

const genderMap = value => {
  if (!value) return undefined;
  return value.toLowerCase().trim().startsWith('f') ? 'Female' : 'Male';
};

const convertToNumeric = value => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? undefined : parsed;
  }
  return undefined;
};

const mapReport = report => {
  const dataElements = [
    // { dataElement: "EuiLnVQP7fz", path: 'fever_detected' },
    // { dataElement: "c7DB86yPCPw", path: 'danger_signs' },
    // { dataElement: "pUQ3PxCLBGW", path: 'symptoms_severity_level' },
    // { dataElement: "UkSorKPBQKp", path: 'd_diarrhoea' },
    {
      dataElement: 'mQfnNz6HAxg',
      path: 'properties.d_disease_severe_malaria_possible',
      transform: convertToBool,
    },
    { dataElement: 'rUiCXLuXe0D', path: 'properties.p_id' },
    {
      dataElement: 'L9FyeXeKysL',
      path: 'properties.p_gender',
      transform: genderMap,
    },
    { dataElement: 'sRViHZrNOOi', path: 'properties.p_age' },
    { dataElement: 'zWAPsDC96SK', path: 'properties.p_weight' },
    { dataElement: 'nrsvTZKdAxD', path: 'properties.p_temp' },
    {
      dataElement: 'f8AiyAoBmQZ',
      path: 'properties.d_pneumonia',
      transform: convertToBool,
    },
    {
      dataElement: 'nOqH46e5VmP',
      path: 'properties.d_malaria',
      transform: convertToBool,
    },
    {
      dataElement: 'S6XCvAD6uv6',
      path: 'properties.d_scabies_infected',
      transform: convertToBool,
    },
    {
      dataElement: 'Vg8aEzNouYb',
      path: 'properties.d_measles',
      transform: convertToBool,
    },
    {
      dataElement: 'Ofyvm4Ynqh7',
      path: 'properties.ds_amoxicillin',
      transform: convertToBool,
    },
    {
      dataElement: 'EijcDbR4oWL',
      path: 'properties.ds_paracetamol',
      transform: convertToNumeric,
    },
    {
      dataElement: 'DsiPa2sGoEe',
      path: 'properties.ds_erythromycin',
      transform: convertToNumeric,
    },
    {
      dataElement: 'xpWPRlZlN7b',
      path: 'properties.d_deworming_needed',
      transform: convertToBool,
    },
    { dataElement: 'tgUaWBaAIag', path: 'properties.dur_amoxicillin' },
  ];

  return {
    dataValues: dataElements.map(({ dataElement, path, transform }) => ({
      dataElement,
      value: transform
        ? transform(safeGet(report, path))
        : safeGet(report, path),
    })),
    notes: [
      {
        value: safeGet(report, 'data.closed.doc.contact.notes'),
        storedBy: safeGet(report, 'data.closed.doc.contact.name'),
        storedDate: report.reported_date,
      },
    ],
  };
};

fn(state => {
  const { report } = state.data;

  state.dhis2Mapping = {
    orgUnit: 'DiszpKrYNg8',
    occurredAt: report.reported_date,
    program: 'wNRmGnc1t11',
    status: 'COMPLETED',
    ...mapReport(report),
  };

  console.log(state.dhis2Mapping);
  return state;
});
