<template>
  <div class="CASMESSAGESCONTAINER">
    <div class="noPhoneMessage">
      <h1>Not Available for use on Phones. Please use a tablet or desktop.</h1>
    </div>

    <div class="searchContainer">
      <div class="searchBox">
        <div class="searchItems">
          <input
            v-focus
            v-model="searchText"
            type="text"
            placeholder="Search System Messages"
          />
        </div>
      </div>
    </div>

    <div v-if="searchText" class="resultsContainer">
      <div
        :id="searchResults.id"
        class="resultsItems"
        v-for="(results, index) in searchResults"
        :key="index"
        ref="list"
      >
        <div class="bezelRowCover" :id="index"></div>
        <div class="resultsButtonName">
          <p>{{ results.message }}</p>
        </div>

        <p class="resultsDesc">{{ results.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import store from "../store/store";

export default {
  name: "SystemMessagesView",
  components: {},
  data() {
    return {
      searchText: "",
      systemMessages: ""
    };
  },

  directives: {
    focus: {
      inserted: function(input) {
        input.focus();
      }
    }
  },
  mounted: function() {
    this.systemMessages = this.$store.getters[
      "SystemMessagesStore/getSystemMessages"
    ];
  },

  computed: {
    searchResults: function() {
      const options = {
        tokenize: true,
        matchAllTokens: true,
        includeScore: false,
        shouldSort: true,
        maxPatternLength: 4,
        minMatchCharLength: 1,
        findAllMatches: false,
        keys: ["message"],
        location: 0,
        threshold: 0.3,
        distance: 3
      };
      const fuse = new Fuse(this.systemMessages, options);
      return fuse.search(this.searchText);
    }
  }
};
</script>

<style lang="scss" scoped>
.CASMESSAGESCONTAINER {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 60vh;

  overflow: hidden;
  position: relative;
}
.titleBox {
  font-family: var(--daysFont);
  color: var(--mainYellow);
  margin: auto;
  p {
    text-align: center;
    font-family: var(--mainFont);
    margin-top: 10px;
    font-size: 25px;

    color: hsla(88, 87%, 60%, 0.9);
  }
}
.titleText {
  font-size: 66px;
}
.smallTitle {
  font-size: 49px;
  text-align: center;
}
hr {
  border: 1px solid var(--lightWhite);
}

.searchContainer {
  height: 100%;
  width: 100%;
  place-content: center;
  margin-top: 10px;
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
    color: var(--brightWhite);
    font-size: 1.3em;
    padding: 1em;
    letter-spacing: 1px;
    font-weight: 200;
  }
  input {
    width: 329px;
    height: 35px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: #e0e0e0 solid 1px;
    font-size: 1.3em;
    padding: 0.3em;
    background: transparent;
    color: white;
  }
}
.resultsContainer {
  width: 90%;
  margin: 1em auto;
  max-width: 864px;
  display: grid;
  grid-auto-rows: min-content;
  gap: 0.5em;
  overflow: hidden;

  padding: 10px;
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
  &::selction {
    border: 2px solid var(--mainYellow);
  }
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
