fn(state => {
  state.localconfig = {
    programId: "GaOaL76FraA",
    caseId: "IsrhSrEFAX8",
    programStage: "otnWqv9MAzn"
  };

  state.filter = `${state.localconfig.caseId}:EQ:${state.case_id}`;
  console.log(state.filter);

  // Normalize age if present
  if ('age_in_months' in state.properties) {
    const rawAge = parseFloat(state.properties.age_in_months);

    // Check for NaN and ensure it's a valid number >= 0
    if (!isNaN(rawAge) && rawAge >= 0) {
      // DHIS2 INTEGER_POSITIVE means ≥1, so enforce minimum of 1
      const age = Math.floor(rawAge);
      state.properties.age_in_months = age >= 1 ? age : 1;
    } else {
      console.warn('⚠️ Invalid age_in_months value:', state.properties.age_in_months);
      delete state.properties.age_in_months; // or set to null if you prefer
    }
  }

  state.mappingsList = [
    { code: "final_CHE_B23_DE40", dhis2_uid: "LKyvrAiGjKV", datatype: "BOOLEAN" },
    { code: "ALM_B23_DE15", dhis2_uid: "bQWZtGOdn6z", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE13", dhis2_uid: "edsDrLAzx95", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE61", dhis2_uid: "ubJFipVoMl2", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE14", dhis2_uid: "SX3UyVIhAZP", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE57", dhis2_uid: "r0148Uo26Yi", datatype: "BOOLEAN" },
    { code: "CHE_B12S1_DE06", dhis2_uid: "uxQTzY7v7Nq", datatype: "BOOLEAN" },
    { code: "CHE.B11S1.DE01", dhis2_uid: "y3tCy143gP5", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE70", dhis2_uid: "wvIZHqXsAFX", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE40", dhis2_uid: "UBDoldBMVye", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE68", dhis2_uid: "ySqC9RnGQxD", datatype: "BOOLEAN" },
    { code: "CHE_B7_DE02", dhis2_uid: "rcK4Td65GK7", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE10", dhis2_uid: "mTrykBBMfJL", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE65", dhis2_uid: "Th4EvYXGSwl", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE34", dhis2_uid: "oGI31eqZSco", datatype: "BOOLEAN" },
    { code: "age_in_days", dhis2_uid: "SfLueMvecnc", datatype: "INTEGER_ZERO_OR_POSITIVE" },
    { code: "age_in_months", dhis2_uid: "wiiDcsQ5pdQ", datatype: "INTEGER_POSITIVE" },
    { code: "final_CHE_B23_DE66", dhis2_uid: "xOTL8X1B2NI", datatype: "BOOLEAN" },
    { code: "case_id", dhis2_uid: "IsrhSrEFAX8", datatype: "TEXT" },
    { code: "final_CHE_B23_DE42", dhis2_uid: "ecFkzcELtvw", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE48", dhis2_uid: "gtjeeziwAN1", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE16", dhis2_uid: "v0zEE7m2SnT", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE35", dhis2_uid: "Dv5Q4FmyvyM", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE56", dhis2_uid: "BEX4UOGrYOJ", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE38", dhis2_uid: "logvGxVToum", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE31", dhis2_uid: "qGDJu8GwiT1", datatype: "BOOLEAN" },
    { code: "CHE_B14S2_DE34", dhis2_uid: "vc4yEOMV5XY", datatype: "BOOLEAN" },
    { code: "CHE_B14S2_DE20", dhis2_uid: "o4Y9Ve0hL61", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE80", dhis2_uid: "tzg1Y4NgewA", datatype: "BOOLEAN" },
    { code: "needs_test", dhis2_uid: "Uso4Gnn7wpN", datatype: "BOOLEAN" },
    { code: "CHE_B10S1_DE06", dhis2_uid: "ptHiIxoWT2j", datatype: "BOOLEAN", option: "CHE.B10S1.DE08" },
    { code: "final_CHE_B23_DE10", dhis2_uid: "RFMdp6UZuNP", datatype: "BOOLEAN" },
    { code: "CHE_B27_G_DE01", dhis2_uid: "DAdX9ycqHrm", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE55", dhis2_uid: "ZM3lMcNxf5a", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE64", dhis2_uid: "JmpN6Dnfik8", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE44", dhis2_uid: "iYTiSNfGH8t", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE47", dhis2_uid: "dja6mCss9o5", datatype: "BOOLEAN" },
    { code: "CHE.B11S1.DE01", dhis2_uid: "lrcwtaAnbi8", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE45", dhis2_uid: "iYUhvrRnJdu", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE45", dhis2_uid: "v1OnAv6a6GF", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE32", dhis2_uid: "kATEiT6rXkJ", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE15", dhis2_uid: "Deqqd8R3nlb", datatype: "BOOLEAN" },
    { code: "CHE_B11S1_DE02", dhis2_uid: "nspzFe4axmI", datatype: "BOOLEAN", option: "CHE_B11S1_DE04" },
    { code: "CHE_B10S1_DE01", dhis2_uid: "bnsS26hfyoh", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE17", dhis2_uid: "Gcua1eaZ5eC", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE18", dhis2_uid: "ly5sMjri6n7", datatype: "BOOLEAN" },
    { code: "CHE_B13S1_DE03", dhis2_uid: "EHgO0awHKbi", datatype: "BOOLEAN" },
    { code: "CHE_B13S1_DE05", dhis2_uid: "rdE7R8MWJsg", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE30", dhis2_uid: "ftxiAWBUm8c", datatype: "BOOLEAN" },
    { code: "CHE_B13S1_DE06", dhis2_uid: "jNsPe6yzhCQ", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE62", dhis2_uid: "sXkhG7ZMvjP", datatype: "BOOLEAN" },
    { code: "CHE_B13S1_DE02", dhis2_uid: "HOfe9Ms2IDM", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE33", dhis2_uid: "x0SXj91wkBn", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE60", dhis2_uid: "VjjHNHKBiBe", datatype: "BOOLEAN" },
    { code: "CHE_B23_DE52", dhis2_uid: "VSisNsqc4OU", datatype: "BOOLEAN" },
    { code: "CHE_B23_DE37", dhis2_uid: "DIzMx85EYgE", datatype: "BOOLEAN" },
    { code: "CHE_B23_DE19", dhis2_uid: "OMA0OA30Ru3", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE98", dhis2_uid: "jpuL5Ovyl2a", datatype: "BOOLEAN" },
    { code: "CHE_B12S1_DE03", dhis2_uid: "ihOqqg5dDPF", datatype: "BOOLEAN", option: "CHE_B12S1_DE04" },
    { code: "CHE_B12S1_DE03", dhis2_uid: "ysNDpMshWu2", datatype: "BOOLEAN", option: "CHE_B12S1_DE05" },
    { code: "CHE_B24_G_DE44", dhis2_uid: "JprlrJGhe6N", datatype: "BOOLEAN", option: "CHE.B24.G.DE47" },
    { code: "CHE_B23_DE59", dhis2_uid: "i9KJ02MRiuE", datatype: "BOOLEAN" },
    { code: "CHE_B6_DE10", dhis2_uid: "gY6pXRwdThm", datatype: "NUMBER" },
    { code: "final_CHE_B23_DE50", dhis2_uid: "XMcaHg9Ies9", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE02 | final_CHE_B23_DE02A | final_CHE_B23_DE85 | final_CHE_B23_DE85B", dhis2_uid: "PwUUC18At3K", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE81", dhis2_uid: "jJPlVaVeleR", datatype: "BOOLEAN" },
    { code: "CHE_B14S2_DE11", dhis2_uid: "B45VEPEvyR1", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE52", dhis2_uid: "G1xXtYgeuXN", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE60", dhis2_uid: "jt2BpRfHp7q", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE47", dhis2_uid: "VdWxQ7YgFTF", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE89", dhis2_uid: "ONz7NNrrvnG", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE91", dhis2_uid: "O7nmBEUP8Se", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE88", dhis2_uid: "gdr30afwBpC", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE71", dhis2_uid: "sI5nJKbDXxk", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE83", dhis2_uid: "UonXPDOdZf8", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE92", dhis2_uid: "Km9BtfBd3M7", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE20", dhis2_uid: "Y64yUy6zBEp", datatype: "BOOLEAN" },
    { code: "CHE_B6_DE19", dhis2_uid: "hs3Wugcy4mt", datatype: "TEXT" },
    { code: "CHE_B17_DE11", dhis2_uid: "XZndbQxziZO", datatype: "BOOLEAN", option: "CHE.B17.DE14" },
    { code: "CHE_B23_DE36", dhis2_uid: "s0XGHZwjuJg", datatype: "BOOLEAN" },
    { code: "CHE_B23_DE72", dhis2_uid: "BExzTTmDhvO", datatype: "BOOLEAN" },
    { code: "CHE_B17_DE01", dhis2_uid: "tqw5aWxCR1x", datatype: "BOOLEAN", option: "CHE.B17.DE04" },
    { code: "CHE_B16S2_DE01", dhis2_uid: "mxNluxv7LWg", datatype: "BOOLEAN" },
    { code: "CHE_B12S1_DE11", dhis2_uid: "BANh6Or7fvh", datatype: "BOOLEAN" },
    { code: "CHE_B12S2_DE05", dhis2_uid: "gWwh7HdDLvN", datatype: "BOOLEAN" },
    { code: "CHE_B3_DE06", dhis2_uid: "m5OehFImiIJ", datatype: "TEXT" },
    { code: "che_referral", dhis2_uid: "eE4UpNHJQMY", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE78", dhis2_uid: "zDEeWCdlV9r", datatype: "BOOLEAN" },
    { code: "ask_pause_test | Needs test", dhis2_uid: "pBELKomJbHO", datatype: "BOOLEAN" },
    { code: "p_sex", dhis2_uid: "RsZ4gQzWPWU", datatype: "TEXT" },
    { code: "CHE_B10S2_DE03", dhis2_uid: "RW8z4lJDa5E", datatype: "BOOLEAN" },
    { code: "CHE_B10S2_DE06", dhis2_uid: "vMj9NZYibkx", datatype: "BOOLEAN" },
    { code: "CHE_B10S2_DE06", dhis2_uid: "y4jM0oVVPEU", datatype: "BOOLEAN" },
    { code: "CHE_B10S2_DE05", dhis2_uid: "AupNCEGaCPe", datatype: "BOOLEAN" },
    { code: "CHE_B10S2_DE04", dhis2_uid: "WNGCQNAqy9z", datatype: "BOOLEAN" },
    { code: "ALM_B24_DE01", dhis2_uid: "yOpI9ukAbz3", datatype: "BOOLEAN" },
    { code: "ask_vacci_card_available", dhis2_uid: "n0oh8R3odX2", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE24", dhis2_uid: "gvdjpgHqs4z", datatype: "BOOLEAN" },
    { code: "ask_vacci_missing_dose", dhis2_uid: "ZNGQ2uyeoh9", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE01", dhis2_uid: "FzPX1C9YHk9", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE19", dhis2_uid: "Y7RtctxKULG", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE25", dhis2_uid: "sACrnP32WsH", datatype: "BOOLEAN" },
    { code: "test_malaria", dhis2_uid: "cPWFbLyuPQ8", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE20", dhis2_uid: "E3HpTJ4lmkt", datatype: "BOOLEAN" },
    { code: "CHE_B24_G_DE44", dhis2_uid: "dxfsAbxfeUo", datatype: "TEXT" },
    { code: "CHE_outcome_outcome", dhis2_uid: "G5yiBUphdZd", datatype: "TEXT" },
    { code: "CHE_outcome_medications", dhis2_uid: "SQPjMbdOsyv", datatype: "TEXT" },
    { code: "test_urine", dhis2_uid: "V4m1iJnP4YJ", datatype: "BOOLEAN" },
    { code: "ask_vacci_missing_dose", dhis2_uid: "ZNGQ2uyeoh9", datatype: "BOOLEAN" },
    { code: "CHE_B14S2_DE27", dhis2_uid: "AgOM6kruN1l", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE06", dhis2_uid: "jmaPh46qxZL", datatype: "BOOLEAN" },
    { code: "CHE_B23_DE09", dhis2_uid: "TjoAB8zJpcA", datatype: "BOOLEAN" },
    { code: "final_CHE_B23_DE03", dhis2_uid: "WjNYqG8zi5V", datatype: "BOOLEAN" },
    { code: "CHE_outcome_medications", option: "ALM.outcome.antibiotics", dhis2_uid: "vxr97FUecP5", datatype: "BOOLEAN" },
    { code: "CHE_outcome_medications", option: "ALM.outcome.antimalarials", dhis2_uid: "inqgUs2Qtoe", datatype: "BOOLEAN" },
    { code: "CHE_outcome_medications", option: "ALM.outcome.vitamins", dhis2_uid: "zlpC9uaegas", datatype: "BOOLEAN" },
    { code: "CHE_outcome_medications", option: "ALM.outcome.deworming", dhis2_uid: "IvZyMzjuRes", datatype: "BOOLEAN" },
    { code: "CHE_B6_DE07", dhis2_uid: "L7aO70bcrbP", datatype: "NUMBER" },
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-1", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Pneumonia
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-2", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Persistent diarrhoea
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-3", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Dysentery
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-4", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Malaria
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-5", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Fever: No Malaria
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-6", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Measles with eye or mouth complications, gum or mouth ulcers, or thrush
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-7", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Ear infection
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-8", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Feeding problem
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-9", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Anaemia
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-10", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Uncomplicated Severe Acute Malnutrition
    { code: "CHE_B18S1_DE02_FU", option: "CHE.B18S1.DE02-11", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Moderate Acute Malnutrition
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-1", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Pneumonia or severe pneumonia
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-2", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Local bacterial infection
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-3", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Jaundice
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-4", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Diarrhoea
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-5", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Feeding problem: breastfed infant
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-6", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Feeding problem: non-breastfed infant
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-7", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Low weight for age: breastfed infant
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-8", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Low weight for age: non-breastfed infant
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-9", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Thrush: breastfed infant
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-10", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Thrush: non-breastfed infant
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-11", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" },//Critical illness when referral was refused or not feasible
    { code: "CHE_B18S1_DE02YI", option: "CHE.B18S1.DE02YI-12", dhis2_uid: "nql64ALnLEI", datatype: "TEXT" }//Clinical severe infection when referral was refused or not feasible
  ];

  return state;
});

fn(state => {
  // Convert sex code to 'm' or 'f' before processing
  if (state.properties && state.properties.p_sex) {
    if (state.properties.p_sex === "CHE.A.DE18") {
      state.properties.p_sex = "m";
    } else if (state.properties.p_sex === "CHE.A.DE17") {
      state.properties.p_sex = "f";
    }
  }



  const converter = (value, datatype) => {
    if (datatype === "BOOLEAN") {
      if (value === 1 || value === '1' || value === true) return true;
      if (value === 0 || value === '0' || value === -1 || value === '-1' || value === false) return false;
      return value;
    }
    if (datatype === "NUMBER") {
      const num = parseFloat(value);
      return isNaN(num) ? value : num;
    }
    return value;
  };

  const dv = (dataElement, value) => {
    if (value !== undefined && value !== null) {
      return { dataElement, value };
    }
  };

  const match = (mapping) => {
    const { dhis2_uid, code, option, datatype } = mapping;
    const props = state.properties || {};

    if (datatype === "BOOLEAN" && option) {
      const value = props[code];
      if (typeof value === "string") {
        const selectedOptions = value.split(" ");
        return dv(dhis2_uid, selectedOptions.includes(option));
      }
    } else if (datatype === "OPTIONS") {
      if (code in props) {
        const value = props[code];
        const validOption = state.mappingsList.find(m => m.code === value && m.datatype === "TEXT");
        if (validOption) {
          return dv(dhis2_uid, validOption.dhis2_uid);
        }
      }
    } else {
      if (code in props) {
        return dv(dhis2_uid, converter(props[code], datatype));
      }
    }
  };

  let dataValues = state.mappingsList
    .map(match)
    .filter(n => n);

  dataValues.push(dv(state.localconfig.caseId, state.case_id));

  //CHE_outcome_outcome - Referral
  if (state.properties?.CHE_outcome_outcome) {
    const v = state.properties.CHE_outcome_outcome;

    if (
      typeof v === "string" &&
      (v.includes("ALM.outcome.referral_inpatient") ||
        v.includes("ALM.outcome.referral_outpatient"))
    ) {
      dataValues.push({ dataElement: "MNPc48EAQ7X", value: true }); // string
    }
    else if (typeof v === "string" && v.includes("ALM.outcome.referral_refused")) {
      dataValues.push({ dataElement: "MNPc48EAQ7X", value: false });
    }
  }

  //ALM_B24_G_DE01 - Urine dipstick
  if (state.properties?.ALM_B24_G_DE01) {
    const v = state.properties.ALM_B24_G_DE01;

    if (
      typeof v === "string" &&
      (
        v.includes("ALM.B24.G.DE02") ||
        v.includes("ALM.B24.G.DE03") ||
        v.includes("ALM.B24.G.DE04")
      )
    ) {
      dataValues.push({ dataElement: "niCoT7i0XtP", value: true }); // string
    }
    else if (typeof v === "string" && v.includes("opt_none")) {
      dataValues.push({ dataElement: "niCoT7i0XtP", value: false });
    }
  }

  // NEW: write fhLZxgFDp2V when both flags are "1"
  /* if (
     state.properties?.ask_lp_jcJw1ZY_7aaFDzeRA_0 === "1" &&
     state.properties?.final_CHE_B23_DE13 === "1"
   ) {
     dataValues.push({ dataElement: "fhLZxgFDp2V", value: true });
   }
 
   if (
     state.properties["final_CHE_B23_DE19"] === "1" &&
     state.properties["CHE_B24_G_DE44"] === "CHE.B24.G.DE45"
   ) {
     dataValues.push({ dataElement: "djiymxi9T9m", value: true });
   }
   */

  dataValues.push({
    dataElement: "fhLZxgFDp2V",
    value:
      state.properties?.ask_lp_jcJw1ZY_7aaFDzeRA_0 === "1" &&
      state.properties?.final_CHE_B23_DE13 === "1"
  });

  /*
    if (
      state.properties["ask_lp_jcJw1ZY_7aaFDzeRA_0"] === "1" &&
      state.properties["final_CHE_B23_DE13"] === "1"
    ) {
      dataValues.push({ dataElement: "fhLZxgFDp2V", value: true });
    }
  */


  const eDate = new Date(state.reported_date).toISOString().split('T')[0];

  state.event = {
    orgUnit: state.orgUnit,
    program: state.localconfig.programId,
    programStage: state.localconfig.programStage,
    eventDate: eDate,
    occurredAt: eDate,
    status: "COMPLETED",
    storedBy: "mediator",
    dataValues: dataValues
  };

  return state;
});