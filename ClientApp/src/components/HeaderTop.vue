<script>
export default {
  data() {
    return {
      isNavOpen: false,
      isMaskShow: false,
      icon: 'fa-solid fa-bars'
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleWindowResize)
  },
  computed: {
    iconStatus() {
      return this.isNavOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    },
    modalState() {
      return this.isMaskShow ? 'block' : 'none'
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
      this.isMaskShow = !this.isMaskShow
    },
    handleWindowResize () {
      if (window.innerWidth > 992) {
        this.isMaskShow = false
      } else {
        this.isNavOpen = false
        this.isMaskShow = false
      }
    }
  }
}
</script>

<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">

      <div>
        <a class="navbar-brand" href="/">Penny's Profile</a>
        <a class="navbar-blog" href="https://medium.com/@panting0111" target="_blank"><font-awesome-icon icon="fa-brands fa-medium"/></a>
        <a class="navbar-blog" href="https://github.com/pennypan0111" target="_blank"><font-awesome-icon icon="fa-brands fa-github"/></a>
      </div>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
        <font-awesome-icon :icon="iconStatus" />
      </button>

      <div class="collapse navbar-collapse justify-content-end" :class="{ 'show': isMaskShow }" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item active">
            <a class="nav-link" href="#AboutMe">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Portfolio">Portfolio</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>

  <div :class="{ 'modal-mask': isMaskShow }" @click="toggleNav"></div>

</template>
