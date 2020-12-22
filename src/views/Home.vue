<template>
  <div class="home">
    <header class="header">
      <div class="grid">
        <div class="col-desk-6 title-1"><img src="../assets/TEST.png" alt="test image" /></div>
        <div class="col-desk-6 title-2"><img src="../assets/FRONTend.png" alt="frontend image" /></div>
      </div>
    </header>
    <main class="main-content">
        <div class="grid">
          <div class="col-desk-7">
            <div class="content-left">
              <h1>Start Your Journey</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div class="col-desk-5">
            <div class="content-right">
              <div class="arrow-left">
                <img src="../assets/icon/arrow_left.svg" class="img-responsive" alt="arrow left" />
              </div>
              <div class="arrow-right">
                <img src="../assets/icon/arrow_right.svg" class="img-responsive" alt="arrow right" />
              </div>
              <div class="card">
                <div class="image-card">
                  <img src="../assets/sweden-4787445_1280.jpg" class="img-responsive" alt="house" />
                </div>
                <div class="status-card">
                  <span class="status">Dijual</span>
                  <span class="status-2">nego</span>
                  <span class="like-icon"><img src="../assets/icon/love.svg" class="img-responsive" alt="love" /></span>
                </div>
                <div class="price-card">
                  <span class="price-1">Rp 326 jt</span>
                  <span class="price-2">Cicilan Rp 2,61jt/bln</span>
                </div>
                <div class="desc-card">
                  <span class="list-desc"><img src="../assets/icon/kamar_idur.svg" class="img-responsive icon-image" alt="kamar tidur" /> 2 K.Tidur</span>
                  <span class="list-desc"><img src="../assets/icon/kamar_mandi.svg" class="img-responsive icon-image" alt="kamar mandi" /> 2 K.Mandi</span>
                  <span class="list-desc"><img src="../assets/icon/luas_bangunan.svg" class="img-responsive icon-image" alt="luas" /> 65m2</span>
                  <span class="list-desc"><img src="../assets/icon/luas_tanah.svg" class="img-responsive icon-image" alt="luas" /> 65m2</span>
                </div>
                <div class="action">
                  <button class="button-block"  @click="$refs.modalDetail.openModal()">Lihat Detail</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
    <modal ref="modalDetail">
      <template v-slot:body>
        <div class="card m-left-0 m-right-0">
          <div class="image-card">
            <img src="../assets/sweden-4787445_1280.jpg" class="img-responsive" alt="house" />
          </div>
          <div class="status-card">
            <span class="status">Dijual</span>
            <span class="status-2">nego</span>
            <span class="like-icon"><img src="../assets/icon/love.svg" class="img-responsive" alt="love" /></span>
          </div>
          <div class="price-card">
            <span class="price-1">Rp 326 jt</span>
            <span class="price-2">Cicilan Rp 2,61jt/bln</span>
          </div>
          <div class="desc-info">
            <p class="desc-info__title">Rumah minimalis dijual di Bandung Jawa Barat</p>
            <p class="desc-info__loc">Jl.Sukajadi No. 1 Bandung, Jawa Barat</p>
          </div>
          <div class="desc-card">
            <span class="list-desc"><img src="../assets/icon/kamar_idur.svg" class="img-responsive icon-image" alt="kamar tidur" /> 2 K.Tidur</span>
            <span class="list-desc"><img src="../assets/icon/kamar_mandi.svg" class="img-responsive icon-image" alt="kamar mandi" /> 2 K.Mandi</span>
            <span class="list-desc"><img src="../assets/icon/luas_bangunan.svg" class="img-responsive icon-image" alt="luas" /> 65m2</span>
            <span class="list-desc"><img src="../assets/icon/luas_tanah.svg" class="img-responsive icon-image" alt="luas" /> 65m2</span>
          </div>
          <div class="action">
            <button class="button-block"  @click="onClickLihatPeta">Lihat Peta</button>
          </div>
        </div>
      </template>
    </modal>

    <modal ref="modalMap">
      <template v-slot:body>
        <div class="card m-left-0 m-right-0">
          <div class="map-card">
            <img src="../assets/icon/marker.svg" class="img-responsive" alt="marker" />
          </div>
          <div class="desc-info">
            <h3 class="desc-info__title">Jl.Sukajadi No. 1 Bandung, Jawa Barat</h3>
            <p class="desc-info__loc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="action">
            <button class="button-block"  @click="$refs.modalMap.closeModal()">Tutup</button>
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  name: 'Home',
  components: {
    Modal
  },
  methods: {
    onClickLihatPeta () {
      this.$refs.modalMap.openModal()
      this.$refs.modalDetail.closeModal()
    }
  }
}
</script>
