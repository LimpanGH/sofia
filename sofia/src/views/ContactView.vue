<template>
  <div class="wrapper">
    <div class="container">
      <!-- <h1>Contact</h1> -->
      <h2>Feel free to reach out to me at</h2>
      <p><a href="mailto:asdf@example.com"> asdf@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
      <p>Address: 123 Main St, Anytown, USA</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/sofia-masrour/">LI</a></p>
    </div>
  </div>
</template>

<style scoped>
div {
  max-width: 80%;
  margin: 2rem auto;
  padding: 0 20px;
}

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: var(--font-color-primary);
}

p a {
  font-weight: bold;
  font-family: var(--font-family-primary);
}

p:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 1024px) {
  div {
    display: flex;
    flex-direction: column;
    padding: 10rem 15rem 10rem 15rem;

    min-height: 50%;
    min-width: 50%;
  }

  .container {
    border: 1px solid white;
    border-radius: 5rem;
  }

  h2 {
    font-size: 2.5rem;
    font-family: var(--font-family-primary);
  }

  p {
    font-size: 2rem;
    font-family: var(--font-family-primary);
  }
}
</style>

<!-- 
<style scoped>


.wrapper {
  max-width: 80%;
  margin: 2rem auto;
  padding: 0 20px;
}

.container {
  margin: 0 auto;
  padding: 1rem;
}

h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: var(--font-color-primary);
}

p a {
  font-weight: bold;
  font-family: var(--font-family-primary);
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
  }

  .container {
    padding: 3rem;
    border: 1px solid var(--border-color, #ccc);
    border-radius: 2rem;
    background-color: var(--bg-secondary, #f9f9f9);
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style> -->
