<script setup>
import Menu from '../Menu.vue';
import SocialLinks from '../Common/SocialLinks.vue';
const menus = [
    {
        name: 'Home',
        url: '#'
    },
    {
        name: 'About',
        url: '#'
    },
    {
        name: 'Pricing',
        url: '#'
    },
    {
        name: 'Blog',
        url: '#'
    },
    {
        name: 'Contact',
        url: '#'
    }
]
</script>

<template>
    <div class="flex px-3 lg:px-0 lg:items-center">
        <div class="w-6/12 lg:w-4/12">
            <img src="../../Assets/footerlogo.png" class="pt-3 lg:pt-0" />
        </div>
        <div class="w-3/12 lg:w-8/12">
            <Menu :menu-list="menus" class="flex-col lg:flex-row lg:justify-end" />
        </div>
        <div class="w-3/12 lg:hidden">
            <SocialLinks class="flex-col items-center" />
        </div>
    </div>
</template>