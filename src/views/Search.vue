<template>
  <div class="HOMECONTAINER">
    <div class="noPhoneMessage">
      <h1>Not Available for use on Phones. Please use a tablet or desktop.</h1>
    </div>
    <div class="searchContainer">
      <div class="searchBox">
        <div class="searchItems">
          <p>What can I help you find?</p>
          <input v-focus v-model="searchText" type="text" placeholder="ex. radar, traffic, wind..." />
        </div>
      </div>
    </div>

    <div v-if="searchText" class="resultsContainer">
      <div
        :id="results.id"
        class="resultsItems"
        v-for="results in searchResults"
        :key="results.id"
        ref="list"
      >
        <div @click="getPath" class="bezelRowCover" :id="results.id"></div>
        <div class="resultsButtonName">
          <p>{{ results.buttonName }}</p>
        </div>

        <p class="resultsDesc">{{ results.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import pfdData from "../static/javascript/pfd";
import Fuse from "fuse.js";
import store from "../store/store";

export default {
  name: "Search",
  components: {},
  data() {
    return {
      searchText: "",
      pfdData: []
    };
  },
  directives: {
    focus: {
      inserted: function(input) {
        input.focus();
      }
    }
  },
  created: function() {
    this.$store.dispatch("pfdStore/setPfdData", { self: this });
    this.$store.dispatch("systemMessagesStore/setSystemMessages");
    this.$store.dispatch("CASMessageStore/setCASMessages");
  },
  methods: {
    getPath: function(e) {
      this.$store.dispatch("pfdStore/setSelected", e.target.id);
      this.$router.push(`/SearchPath`);
    },
    getInfo: function(e) {
      this.$store.dispatch("pfdStore/setSelected", e.target.dataset.pathid);
      this.$router.push(`/info/${e.target.dataset.pathid}`);
    },
    setPfdData: function() {
      this.pfdData = this.$store.getters["pfdStore/getPfdData"];
    },
    simulate: function() {
      this.$router.push("/simulate");
    }
  },
  computed: {
    searchResults: function() {
      const options = {
        shouldSort: true,
        tokenize: true,
        matchAllTokens: true,
        findAllMatches: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 20,
        minMatchCharLength: 1,
        keys: ["desc"]
      };
      const fuse = new Fuse(this.pfdData, options);
      return fuse.search(this.searchText);
    }
  }
};
</script>

<style lang="scss" scoped>
.HOMECONTAINER {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 1fr;
  overflow: hidden;
  position: relative;
}

.searchContainer {
  height: 100%;
  width: 100%;
  place-content: center;
}
.buttons {
  text-align: center;
  margin-bottom: 2em;
  height: 10vh;
  display: grid;
  grid-template-rows: 1fr 2fr;
  button {
    height: 50px;
    justify-self: center;
  }
  h3 {
    color: var(--lightWhite);
    font-style: italic;
  }
}
.searchItems {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--lightWhite);
    font-size: 1.3em;
    padding: 1em;
  }
  input {
    width: 329px;
    height: 35px;
    border: #707070 solid 1px;
    border-radius: 10px;
    font-size: 1.3em;
    padding: 0.3em;
  }
}
.resultsContainer {
  width: 90%;
  margin: 1em auto;
  max-width: 864px;
  display: grid;
  grid-auto-rows: min-content;
  gap: 0.5em;

  height: 100%;
}
.resultsItems {
  position: relative;
  display: grid;
  grid-template-columns: 1.7fr 8fr;

  background: #2c2a2a;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #707070;
}
.resultsButtonName {
  background: url("../assets/singleLabel.svg") no-repeat;
  background-size: 80%;
  background-position: center;
  p {
    padding: 10px;
    text-align: center;
    color: var(--brightWhite);
    font-size: 0.9em;
    font-weight: 700;
  }
}
.resultsDesc {
  align-self: center;
  justify-self: center;
  font-size: 0.85em;
  color: var(--lightWhite);
}
.smallButton {
  padding: 0;
  background: linear-gradient(
    180deg,
    rgba(52, 59, 65, 1) 0%,
    rgba(13, 14, 15, 1) 23%
  );
  width: 48px;
  height: 28px;
  text-decoration: none;
  border: #4d4b4b solid 0.5px;
  border-radius: 3px;
  margin: auto;
  color: var(--lightWhite);
  font-size: 0.6em;
  font-weight: bold;
  box-shadow: 0px 1px 2px rgba(01, 01, 01, 1);

  text-align: center;
  padding: 0.8em;
  color: rgb(179, 179, 179);
}
.noPhoneMessage {
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10%;
}
@media screen and (max-width: 700px) {
  .noPhoneMessage {
    height: 100vh;
    width: 100vw;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10%;
  }
}
</style>
