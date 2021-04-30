<template>
  <div class="container-fluid mb-5 mt-4">
    <div class="row">
      <div class="col-md-3 mb-4">
        <CustomerMenu />
      </div>
      <div class="col-md-9 mb-4">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h5 class="font-weight-bold">
              <i class="fas fa-tachometer-alt"></i> DASHBOARD
            </h5>
            <hr />
            Selamat Datang <strong></strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import customer menu component
import CustomerMenu from "@/components/CustomerMenu";

export default {
  components: {
    //customer menu component
    CustomerMenu,
  },
};
</script>
