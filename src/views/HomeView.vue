<template>
  <h1>Product-List</h1>
  <router-link to="/add-product" class="product-list-btn">Add Product</router-link>
    <div class="home">
      <table class="styled-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index ) in rows" :key="row.id">
            <td>{{index + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>₹{{ row.price }}</td>
            <td> {{ formatDate(row.date) }}</td>
            <td> {{ row.quantity }}</td>
           
            <td>
              <button class="edit-btn" @click="editRow(row.id)">Edit</button>
              <button class="delete-btn" @click="deleteRow(row.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  
  import productService from '@/services/productService';
  
  
  export default {
    name: 'HomeView',
    data() {
  
      return {
        rows: [],
      };
    },
   
    async mounted(){
      const response = await productService.fetchProducts();
      this.rows = response;
    },
    methods: {
      formatDate(isoDate) {
      const date = new Date(isoDate);
      return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
      editRow(id) {
        console.log(id)
        this.$router.push('/edit-product/'+id);
      },
     async deleteRow(id) {
         this.rows = this.rows.filter(row => row.id !== id);
         await productService.DeleteProducts(id);
      }
    }
  };
  </script>
  

  <style scoped>
  .home {
    margin: 20px;
    font-family: Arial, sans-serif;
  }
  
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    text-align: left;
  }
  
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }
  
  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  
  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  
  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  
  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  
  .styled-table tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  
  /* Action button styles */
  .edit-btn, .delete-btn {
    padding: 5px 10px;
    margin-right: 5px;
    border: none;
    cursor: pointer;
    color: #ffffff;
  }
  
  .edit-btn {
    background-color: #4caf50;
  }
  
  .delete-btn {
    background-color: #f44336;
  }
  
  .edit-btn:hover {
    background-color: #45a049;
  }
  
  .delete-btn:hover {
    background-color: #e53935;
  }
  </style>
  
  
