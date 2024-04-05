<template>
  <div class="view-party-container" v-bind:class="rootClassName">
    <div v-for="(party, index) in parties" :key="index" class="party-item">
      <div class="party-details">
        <p class="party-detail">Name: {{ party.name }}</p>
        <p class="party-detail">Occasion: {{ party.occasion }}</p>
        <p class="party-detail">End Date: {{ party.dateend }}</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.party-item {
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.party-details {
  flex: 1;
}

.party-detail {
  margin: 5px 0;
}

.view-party-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-party-button:hover {
  background-color: #0056b3;
}
</style>
