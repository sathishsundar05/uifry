<script setup>
import Header from "./Components/Header/Header.vue";
import PreHeader from "./Components/Header/PreHeader.vue";
import Banner from "./Components/Banner.vue";
import Clients from "./Components/Clients.vue";
import FeatureList from "./Components/FeatureList.vue";
import BussinessBanner from "./Components/BussinessBanner.vue";
import BussinessThriveBanner from "./Components/BussinessThriveBanner.vue";
import Posts from "./Components/Posts.vue";
import BussinessMetricsBanner from "./Components/BussinessMetricsBanner.vue";
import Pricing from "./Components/Pricing.vue";
import Testimonial from "./Components/Testimonial.vue";
import Faq from "./Components/Faq.vue";
import Footer from "./Components/Footer/Footer.vue";
import SubFooter from "./Components/Footer/SubFooter.vue";
</script>

<template>
  <div class="rounded-t">
    <PreHeader />
  </div>
  <div class="container-fluid md:px-20 bg-white px-4">
    <Header />
    <Banner />
    <Clients />
    <BussinessBanner />
    <FeatureList />
    <BussinessThriveBanner />
    <Posts />
    <BussinessMetricsBanner />
    <FeatureList />
  </div>
  <div class="bg-primary-100 my-20">
    <Pricing />
  </div>
  <div class="container-fluid md:px-20 bg-white px-4">
    <Testimonial class="hidden lg:flex" />
    <Faq />
    <Footer />
    <hr class="hidden lg:flex">
    <SubFooter />
  </div>
  
</template>

<style scoped></style>
