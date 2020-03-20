export const toggleLights = {
  methods: {
    toggleBezelGroup: function(e, divId, lightArray) {
      let lightRow = this.$refs.light;
      lightArray.forEach(light => {
        lightRow[light].classList.remove("labelLightOn");
      });
      lightRow[divId.id].classList.add("labelLightOn");
    },
    toggleBezelLight: function(e) {
      let lightId = this.$refs.light[e.target.firstElementChild.id];
      if (lightId.classList.length < 2) {
        lightId.classList.add("labelLightOn");
      } else {
        lightId.classList.remove("labelLightOn");
      }
    }
  }
};
