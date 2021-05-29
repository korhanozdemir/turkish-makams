import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chosen_category: {},
    chosen_makam: {},
    makams: [
      {
        name: "Çargah",
        text: "Çârgâh makam consists of a çârgâh pentachord and a çârgâh tetrachord starting on the note gerdâniye (G). Thus, the tonic is C (note çârgâh), the dominant is G (note gerdâniye), and the leading tone is B (note bûselik)",
        image_url: "Cargah.png",
        category: 0,
      },
      {
        name: "Buselik",
        text: "Buselik makam consists of a Bûselik pentachord plus a Kürdî tetrachord on the note Hüseynî (E) and is essentially the same as the Western A-minor.The tonic is A (Dügâh), the dominant Hüseynî (E), and the leading tone G-sharp (Nim Zirgüle). Additionally, when descending from the octave towards the tonic, the sixth (F, Acem) is sometimes sharpened to become F-sharp (Dik Acem), and the dominant (E, Hüseynî) flattened four commas to the note Hisar (1A)",
        image_url: "Buselik.png",
        category: 0,
      },
      {
        name: "Rast",
        text: "Rast makam consists of a Rast pentachord plus a Rast tetrachord on the note Neva (D). The tonic is G (Rast), the dominant D (Neva), and the leading tone F-sharp (Irak). However, when descending from the octave towards the tonic, the leading tone is always flattened 4 commas to the note Acem (F), and thus a Bûselik tetrachord replaces the Rast tetrachord.",
        image_url: "Rast.png",
        category: 0,
      },
      {
        name: "Uşşâk",
        text: "Uşşâk makam consists of an Uşşâk tetrachord plus a Bûselik pentachord on the note Neva (D). The tonic is A (Dügâh), the dominant—here actually a subdominant—is D (Neva), and the leading tone—here actually a subtonic—is G (Rast).",
        image_url: "Uşşak.png",
        category: 0,
      },
      {
        name: "Kürdi",
        text: "Kürdi makam consists of a Kürdi tetrachord and a Buselik pentachord starting on the note Neva (D).",
        image_url: "kurdi.png",
        category: 0,
      },
      {
        name: "Neva",
        text: "Neva makam consists of a Uşşak tetrachord and a Rast pentachord starting on the note Neva (D).",
        image_url: "Neva.png",
        category: 0,
      },
      {
        name: "Hümayun",
        text: "Hümayun makam consists of a Hicaz tetrachord and a Buselik pentachord starting on the note Neva (D).",
        image_url: "Humayun.png",
        category: 0,
      },
      {
        name: "Hicaz",
        text: "Hicaz makam consists of a Hicaz tetrachord and a Rast pentachord starting on the note Neva (D).",
        image_url: "Hicaz.png",
        category: 0,
      },
      {
        name: "Uzzal",
        text: "Uzzal makam consists of a Hicaz pentachord and a Uşşak tetrachord starting on the note Hüseyni (E).",
        image_url: "Uzzal.png",
        category: 0,
      },
      {
        name: "Zirgüleli Hicaz",
        text: "Zirgüleli Hicaz makam consists of a Hicaz pentachord and a Hicaz tetrachord starting on the note Hüseyni (E).",
        image_url: "Zirguleli-hicaz.png",
        category: 0,
      },
      {
        name: "Hüseyni",
        text: "Hüseyni makam consists of a Hüseyni pentachord and a Uşşak tetrachord starting on the note Hüseyni (E).",
        image_url: "Huseyni.png",
        category: 0,
      },
      {
        name: "Karcığar",
        text: "Karcığar makam consists of a Uşşak tetrachord and a Hicaz pentachord starting on the note Neva (D).",
        image_url: "karcigar.png",
        category: 0,
      },
      {
        name: "Basit Suzinak",
        text: "Basit Suzinak makam consists of a Rast pentachord and a Hicaz tetrachord starting on the note Neva (D).",
        image_url: "basit-suzinak.png",
        category: 0,
      },
      {
        name: "Acemaşıran",
        text: "Acemaşıran makam is a transposed version of Çargah makam starting on the note Acemaşıran (F)",
        image_url: "Transposed/Acemasiran.png",
        category: 1,
      },
      {
        name: "Mahur",
        text: "Mahur makam is a transposed version of Çargah makam starting on the note Rast (G)",
        image_url: "Transposed/Mahur.png",
        category: 1,
      },
      {
        name: "Nihavent ",
        text: "Nihavent makam is a transposed version of Buselik makam starting on the note Rast (G)",
        image_url: "Transposed/Nihavent.png",
        category: 1,
      },
      {
        name: "Ruhnevâz",
        text: "Ruhnevâz makam is a transposed version of Buselik makam starting on the note Hüseynîaşiran (E)",
        image_url: "Transposed/Ruhnevaz.png",
        category: 1,
      },
      {
        name: "Sultaniyegâh",
        text: "Sultaniyegâh makam is a transposed version of Buselik makam starting on the note Yegâh (D)",
        image_url: "Transposed/sultaniyegah.png",
        category: 1,
      },
      {
        name: "Kürdilihicazkâr",
        text: "Kürdilihicazkâr makam is a transposed version of Kürdi makam starting on the note Rast (G)",
        image_url: "Transposed/kurdilihicazkar.png",
        category: 1,
      },
      {
        name: "Aşk’efzâ",
        text: "Aşk’efzâ makam is a transposed version of Kürdi makam starting on the note Hüseynîaşiran (E)",
        image_url: "Transposed/askefza.png",
        category: 1,
      },
      {
        name: "Evcârâ",
        text: "Evcârâ makam is a transposed version of Zirgüleli Hicaz makam starting on the note Nim Hicaz (F#)",
        image_url: "Transposed/Evcara.png",
        category: 1,
      },
      {
        name: "Sûz-i Dil",
        text: "Sûz-i Dil makam is a transposed version of Zirgüleli Hicaz makam starting on the note Hüseynîaşiran (E)",
        image_url: "Transposed/suzi-dil.png",
        category: 1,
      },
      {
        name: "Şedd-i Arabân",
        text: "Şedd-i Arabân makam is a transposed version of Zirgüleli Hicaz makam starting on the note Acemaşıran (F)",
        image_url: "Transposed/seddi-araban.png",
        category: 1,
      },
    ],
    categories: [
      { name: "Simple Makams", category: 0 },
      { name: "Transposed Makams", category: 1 },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
