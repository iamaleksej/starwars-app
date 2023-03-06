import { createAsyncThunk } from "@reduxjs/toolkit";


export const getPerson = createAsyncThunk("person/getPerson", async ({ currentLang, personId }) => {
   let queryLang = ''
   if (currentLang === 'wo') {
      queryLang = '?format=wookiee'
   }
   try {
      const res = await fetch(
         `https://swapi.dev/api/people/${personId}/${queryLang}`
      )
      if (currentLang === 'wo') {
         const text = await res.text()
         const preparedText = text
            .replace(/whhuanan/g, '"whhuanan"')
            .replace(/rcwochuanaoc/g, "results")
            .replace(/oaoohuwhao/g, "count")
            .replace(/hurcan/g, "url")
            .replace(/whrascwo/g, "name")
            .replace(/acwoahrracao/g, "height")
            .replace(/rhahrcaoac_roworarc/g, "birth_year")
            .replace(/scracc/g, "mass")
            .replace(/rrwowhwaworc/g, "gender")
            .replace(/acraahrc_oaooanoorc/g, "hair_color")
            .replace(/corahwh_oaooanoorc/g, "skin_color")
            .replace(/worowo_oaooanoorc/g, "eye_color")
            .replace(/whwokao/g, "next")

         const preparedJson = await JSON.parse(preparedText);
         console.log(preparedJson);
         return preparedJson
      } else {
         const json = await res.json();
         console.log(json);
         return json
      }
   } catch (err) {
      console.log(err);
   }
});