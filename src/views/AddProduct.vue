<!-- eslint-disable no-undef -->
<template>
    <div id="app">
      <h1>Add Product</h1>
  <div class="product-form">

      <form @submit.prevent="submitForm" style="width: 95%;">
      
  
        <div class="product-list">
          <label for="name">Name</label>
          <input type="text" v-model="form.name" id="title" required />
        </div>
  
        <div class="product-list">
          <label for="price">Price</label>
          <input type="number" v-model="form.price" id="price" required />
        </div>


        <div class="product-list">
          <label for="quantity">Quantity</label>
          <input type="number" v-model="form.quantity" id="quantity" required />
        </div>
    
        <br>
        <button type="submit" class="submit-btn">Submit</button>
        </form>
  </div>

    </div>
  </template>
  
  <script>


import productServices from '@/services/productService';

  export default {
    data() {
      return {
        form: {
        //   id: '',
          name: '',
          price: '',
          date: '',
          quantity:'',
    
        } ,
       
      };
    },
    methods: {
    

    async submitForm() {
      await productServices.PostProducts(this.form)
      this.$router.push('/');
      console.log('Form Data:', this.form);

      this.form.name = '';
      this.form.price = '';
      this.form.date = '';
      this.form.quantity = '';
    }
    },

  };
  </script>
  
   <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  /* Form Styling */
  .product-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    max-width: 400px;
    margin: 0 auto;
    padding: 20px; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9; 
  }
  
  .form {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;   
    text-align: center ; 
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  
  input:focus,
  textarea:focus,
  select:focus {
    border-color: #42b983; 
    outline: none; 
  }
  
  textarea {
    resize: vertical; 
  }
  
  .submit-btn {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #359a68;
  }
  </style>
   


 


   
