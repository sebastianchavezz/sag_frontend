<template>
  <div class="view-party-container" v-bind:class="rootClassName">
    <div v-for="(party, index) in parties" :key="index" class="party-item">
      <div>
        <p>Name: {{ party.name }}</p>
        <p>Occasion: {{ party.occasion }}</p>
        <p>End Date: {{ party.dateend }}</p>
      </div>
      <button @click="viewParty(party)" class="view-party-button">View Party</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewParty',
  props: {
    rootClassName: String,
    parties: Array
  },
  methods: {
    viewParty(party) {
      // Handle the logic for viewing the party
      console.log('Viewing party:', party);
      console.log('partyid: ', party.partyid);
      // Navigate to the view-party/:partyid route
      this.$router.push({ name: 'ViewPartyDetails', params: { partyid: party.partyid } });
    }
  }
  }
</script>

<style scoped>
.view-party-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center vertically and horizontally */
}

.party-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.view-party-button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
