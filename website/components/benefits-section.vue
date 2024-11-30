
<script setup>
const benefits = [
  'Benefit 1: We are the best',
  'Benefit 2: We are the fastest',
  'Benefit 3: We are the cheapest',
  'Benefit 4: We are the most reliable',
  'Benefit 5: We are the most experienced',
  'Benefit 6: We are the most innovative',
  'Benefit 7: We are the most customer-focused',
  'Benefit 8: We are the most environmentally friendly',
  'Benefit 9: We are the most community-oriented',
  'Benefit 10: We are the most transparent'
];

const currentBenefit = ref(0);

const handlePrevBenefit = () => {
  currentBenefit.value = (currentBenefit.value - 1 + benefits.length) % benefits.length;
};

const handleNextBenefit = () => {
  currentBenefit.value = (currentBenefit.value + 1) % benefits.length;
};

onMounted(() => {
  const timer = setInterval(() => {
    handleNextBenefit();
  }, 3000);

  onBeforeUnmount(() => {
    clearInterval(timer);
  });
})

</script>

<template>
  <div class="benefits">
    <h2>Benefits of Choosing Us</h2>
    <div class="benefit-container">
      <button @click="handlePrevBenefit">&#8249;</button>
      <div class="benefit-card">
        <div>{{ benefits[currentBenefit] }}</div>
      </div>
      <button @click="handleNextBenefit">&#8250;</button>
    </div>
  </div>
</template>

<style scoped>
:root {
    --primary-color: #0A192F;
    --secondary-color: #172A45;
    --accent-color: #64FFDA;
    --text-color: #8892B0;
    --background-color: #0A192F;
    --heading-font: 'Roboto', sans-serif;
    --body-font: 'Open Sans', sans-serif;
}

.benefits {
    background-color: #f6f6f6;
    padding: 50px 0;
    text-align: center;
    color: var(--primary-color);
    font-family: var(--body-font);
}

.benefits h2 {
    margin-bottom: 60px;
    font-size: 2.5rem;
    font-family: var(--heading-font);
    color: var(--primary-color);
    animation: fadeIn 1s ease-in-out;
}

.benefit-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.benefit-container button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 10px;
    transition: background-color 0.3s, transform 0.3s;
}

.benefit-container button:hover {
    background-color: var(--accent-color);
    transform: scale(1.05);
}

.benefit-card {
    width: 52vw;
    height: 20vw;
    background-color: rgb(93, 93, 93);
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s, background-color 0.3s;
}

.benefit-card:hover {
    background-color: var(--secondary-color);
    transform: scale(1.02);
}

.benefit-text{
    text-align: center;
    max-width: 80%;
    margin: auto;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .benefit-text {
        width: 90vw;
        height: auto;
        font-size: 1.2rem;
        border-radius: 20px;
    }
    
    .benefit-container button {
        margin-top: 20px;
    }
}

</style>