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
const matchSplit = (chosenAnswers, target, delimiter = ' ') => {
  let chosenAnswersList = chosenAnswers.split(delimiter);
  return indexOf(chosenAnswersList, target) != -1;
};
const convertToNumeric = value => {
  return value;
};
const mapReport = report => {
  const dataElements = [
    { dataElement: 'dummyID', path: 'properties.as_dehydration' },
    { dataElement: 'dummyID', path: 'properties.p_age' },
    { dataElement: 'dummyID', path: 'properties.p_height' },
    { dataElement: 'dummyID', path: 'properties.p_temp' },
    { dataElement: 'dummyID', path: 'properties.p_weight' },
    { dataElement: 'dummyID', path: 'properties.p_heamoglobin' },
    { dataElement: 'dummyID', path: 'case_id' },
    {
      dataElement: 'dummyID',
      path: 'properties.as_danger',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.as_coryza',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.continue_afterlab',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.st_reason_visit',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_anemia',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_anemia_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_conjunctivitis',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_dehydration_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_dehydration_some',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_deworming_needed',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_diarrhoea_cholera_like',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_diarrhoea_non_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_diarrhoea_severe_persistent',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_diarrhoea_watery',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_diarrhoeal_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_febrile_refer',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_febrile_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_febrile_severe_no_malaria',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_febrile_severe_persistent',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_severe_malaria_possible',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_disease_severe_no_malaria',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_dysentery',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_dysentery_bacterial',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_ear_acute_w_antibiotics',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_ear_acute_w_discharge',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_ear_no_infection',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_fever',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_jaundice',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_malaria',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_malaria_possible',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_malaria_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_malnutrition_cannot_assess',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_mam',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_sam_w_complications',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_sam_possible',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_sam_wa_complications',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_mastoidity',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_measles',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_measles_w_complications',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_measles_severe_complicated',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_no_dehydration',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_no_malnutrition',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_pneumonia',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_pneumonia_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_throat_likelly_streptococcal',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_throat_viral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_throat_abcess',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_tb_possible',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_typhoid_fever_possible',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_urti',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_uti',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_infection_likely_viral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_vitA_needed',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_wheezing_episode',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_wheezing_recurrent',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_wheezing_resistant',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_pcm_past_12h',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.p_gender',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.p_muac',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_cough',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_cough_past_14d',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_danger_ask',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_danger_look',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_diarrhoea_14d',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_ear_discharge',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_ear_discharge_past_14d',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_ear_pain',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_fever_past_7d',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.ask_glucose_under_3mmol',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_immunizations_received',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_fever_past_24h',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_dysuria',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.st_tt_past',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_rdt_available',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_haemoglob_available',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_T_not_possible',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_urine_test_available',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_abcess_drainage',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_abcess_referral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_bladder',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_abcess_small',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_boils',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_chickenpox',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_eczema',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_cellulitis_erysipelas',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_impetigo_extensive',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_lice_head',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_herpes',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_herpes_referral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_impetigo_simple',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_chickenpox_infected',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_eczema_infected',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_scabies_infected',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_rash_likelly_viral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_mycosis',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_candidiasis_oral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_pitiryasis_versicolor',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_scabies_simple',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_cellulitis_severe',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_shingles',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_skin',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_tinea_capitis',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_tinea_corporis',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_uti_likely',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_ulcer_referral',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_urine_test_available2',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.d_worms',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.str_further_comment',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_diagnosis_further',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.str_diagnosis_further',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_rdt_positive',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_urine_test_positive',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_measles_past_3m_mam',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.st-followup_condition',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.has_child_improved',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.st-followup_reason',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_rutf_planned_followup',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_glucose_below_3_conv',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.is_glucose_test_available_conv',
      transform: convertToBool,
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_cough',
      transform: { func: matchSplit, args: ['s_cough', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_immunizations_received',
      transform: { func: matchSplit, args: ['s_cough', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_danger_look',
      transform: { func: matchSplit, args: ['s_convulsion', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_malnutrition_signs',
      transform: { func: matchSplit, args: ['s_clouded_cornea', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_malnutrition_signs',
      transform: { func: matchSplit, args: ['s_oedema_bilateral', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_malnutrition_signs',
      transform: {
        func: matchSplit,
        args: ['s_oedema_bilateral_1_2plus', ' '],
      },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_malnutrition_signs',
      transform: { func: matchSplit, args: ['s_oedema_bilateral_3plus', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_malnutrition_signs',
      transform: { func: matchSplit, args: ['s_wasting_severe', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_malnutrition_signs',
      transform: { func: matchSplit, args: ['s_no_weight_gain', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_chest_wall_indrawing',
      transform: { func: matchSplit, args: ['s_not_sucking', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_chest_wall_indrawing',
      transform: {
        func: matchSplit,
        args: ['s_lower_chest_wall_indrawing', ' '],
      },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_chest_wall_indrawing',
      transform: { func: matchSplit, args: ['s_stridor', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_cyanosis', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_weight_loss', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_cough_n_appetite_loss', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_cough_n_weak', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_cold_sweat', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_contact_tb', ' '] },
    },
    {
      dataElement: 'dummyID',
      path: 'properties.s_tb2',
      transform: { func: matchSplit, args: ['s_cough_blood', ' '] },
    },
  ];
  return {
    dataValues: dataElements.map(({ dataElement, path, transform }) => {
      let value = safeGet(report, path);

      if (transform) {
        if (typeof transform === 'function') {
          // Simple transform function
          value = transform(value);
        } else if (typeof transform === 'object' && transform.func) {
          // Transform function with additional arguments
          const args = [value, ...(transform.args || [])];
          value = transform.func.apply(null, args);
        }
      }

      return {
        dataElement,
        value,
      };
    }),
  };
};

fn(state => {
  const { report } = state.data;

  state.dhis2Mapping = {
    orgUnit: state.data.orgUnit,
    occurredAt: state.data.reported_date,
    program: 'wNRmGnc1t11',
    status: 'COMBLETED',
    ...mapReport(report),
  };

  console.log(state.dhis2Mapping);
  return state;
});
