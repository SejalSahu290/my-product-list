<!-- eslint-disable vue/multi-word-component-names --> 
<!-- <template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
       <a class="navbar-brand" href="#">Navbar</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
           <button class="btn btn-danger btn-sm" @click="submitLogoutForm">Logout</button>
     </div>
   </nav>
   </template>
   
   <script>
   
   export default {
   
      methods: {
       submitLogoutForm() {
       try {
         localStorage.removeItem('productlistToken');
         console.log('login')
         this.$router.push('/login');
       }
       catch (error) {
         console.error('An error occurred during logout', error);
         this.errorMessage = 'An error occurred during logout. Please try again.';
       }
     }
      }
   }
   
   
   </script>
   
   <style>
   
   .container-fluid{
       background-color: #009879;
   }
   
   .btn btn-outline-success{
       background:white;
   }
   
   .navbar-brand {
     color: #ffffff; 
   }
   
   
   </style> -->
   
   
   <!-- eslint-disable vue/multi-word-component-names -->
<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button class="btn btn-danger btn-sm" @click="submitLogoutForm">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    submitLogoutForm() {
      try {
        localStorage.removeItem('productlistToken');
        console.log('login')
        this.$router.push('/login');
      } catch (error) {
        console.error('An error occurred during logout', error);
        this.errorMessage = 'An error occurred during logout. Please try again.';
      }
    }
  }
}
</script>

<style scoped>
.navbar-custom {
  background-color: #502c49;
  /* margin:left; */
}

.navbar-brand {
  color: #ecf0f1; 
  font-size: 1.3rem; 
  font-weight: bold; 
}

.navbar-brand:hover {
  color: #3498db; 
}

.navbar-toggler-icon {
  background-color: #ecf0f1; 
}

.btn-danger {
  background-color: #e74c3c; 
  color: #ffffff; 
  border: none; 
}

.btn-danger:hover {
  background-color: #c0392b; 
}

.container-fluid {
  padding-left: 2rem; 
  padding-right: 2rem;
}

@media (max-width: 992px) {
  .container-fluid {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

</style> -->


<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
  
      <a class="navbar-brand">Navbar</a>
     

   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">

       
          <li class="nav-item">
            <button class="btn btn-danger btn-sm" @click="submitLogoutForm">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    submitLogoutForm() {
      try {
        localStorage.removeItem('productlistToken');
        this.$router.push('/login');
      } catch (error) {
        console.error('An error occurred during logout', error);
        this.errorMessage = 'An error occurred during logout. Please try again.';
      }
    }
  }
}
</script>

<style scoped>
.navbar-custom {
  background-color: #502c49;
  padding: 0.5rem 1rem;
}

.navbar-brand {
  color: #ecf0f1;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-brand:hover {
  color: #3498db;
}

.navbar-toggler-icon {
  background-color: #ecf0f1;
}

.navbar-nav {
  margin-left: auto; 
}

.nav-item {
  margin-left: 15px;
}

.btn-danger {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  font-size: 14px;
  padding: 5px 15px;
  margin:left;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #c0392b;
}

@media (max-width: 992px) {
  .navbar-custom {
    padding: 0.5rem 0.5rem;
  }
  
  .navbar-nav {
    margin-left:  0px;
  }

  .navbar-toggler {
    border-color: #ecf0f1;
  }
}
</style> -->

 


<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand" >Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <button class="btn btn-danger btn-sm" @click="submitLogoutForm" style="margin-left:auto; margin-right:0;">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    submitLogoutForm() {
      try {
        localStorage.removeItem('productlistToken');
        this.$router.push('/login');
      } catch (error) {
        console.error('An error occurred during logout', error);
        this.errorMessage = 'An error occurred during logout. Please try again.';
      }
    }
  }
}
</script>

<style scoped>
.navbar-custom {
  background-color: #46502c;
  padding: 0.5rem 1rem;
}

.navbar-brand {
  color: #ecf0f1;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-brand:hover {
  color: #3498db;
}

.navbar-toggler-icon {
  background-color: #ecf0f1;
}

.navbar-nav {
  margin-left: auto; 
}

.nav-item {
  margin-left: 15px;
}

/* Styling for logout button */
.btn-danger {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right: auto;
}

.btn-danger:hover {
  background-color: #c0392b;
}


@media (max-width: 992px) {
  .navbar-custom {
    padding: 0.5rem 0.5rem;
  }

  .navbar-nav {
    margin-left: 0;
  }

  .navbar-toggler {
    border-color: #ecf0f1;
  }
}
</style>


 
