<script>
import SectionTitle from '../components/SectionTitle.vue'
import PortfolioCard from '../components/PortfolioCard.vue'

export default {
  components: {
    SectionTitle,
    PortfolioCard
  }
}
</script>

<template>

  <section class="Portfolio" id="Portfolio">
    <SectionTitle title="Portfolio" color="primary-default"></SectionTitle>
    <div class="row">
      <PortfolioCard
        srcImg="../src/assets/img/pixelGame.jpg"
        category="Static Page"
        title="Space Inyaders。太空侵略者"
        introduce="設計以復古像素風格為主的UI界面，結合 JavaScript 編寫遊戲互動，打造經典射擊遊戲體驗"
        hrefButton="https://pennypan0111.github.io/pixel-game/pixelGame-easy.html"
      />
      <PortfolioCard
        srcImg="../src/assets/img/PlayOne.jpg"
        category="Static Page with RWD"
        title="Play One。陪玩"
        introduce="大量運用 CSS Animation 動畫效果，為Switch遊戲的介紹頁面創造出生動的視覺效果，並有效地展示遊戲的特色和亮點"
        hrefButton="https://pennypan0111.github.io/gm/"
        />
      <PortfolioCard
        srcImg="../src/assets/img/ExchangeRate.jpg"
        category="Static Page with RWD"
        title="Exchange Rate。幣值轉換"
        introduce="使用 vue axios 套件，串接即時匯率的 Open API ，設定自行輸入台幣金額，可即時轉換對應的日圓及美金"
        hrefButton="https://pennypan0111.github.io/vueExchangeRate/"
        />
      <PortfolioCard
        srcImg="../src/assets/img/ToDoList.jpg"
        category="Static Page with RWD"
        title="To Do List。代辦清單"
        introduce="利用 Vue.js 的 Options API 寫法，建立簡單的待辦事項清單，並可執行新增、刪除、更新等操作"
        hrefButton="https://pennypan0111.github.io/vueToDoList/"
        />
      <PortfolioCard
        srcImg="../src/assets/img/Juice.jpg"
        category="Figma Prototype & Component"
        title="Juice。果汁"
        introduce="自行構思獨具特色的品牌主題和風格，並透過原型設計的模擬，生動地展示品牌官方網站的實際運作畫面"
        hrefButton="https://www.figma.com/proto/DcpAyPWL1LlkZq48xhsiNa/Juice%E3%80%82%E6%9E%9C%E6%B1%81?page-id=0%3A1&type=design&node-id=1-3&viewport=755%2C414%2C0.19&t=AYNmdkgKJ5fMskN6-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design"
        />
      <PortfolioCard
        srcImg="../src/assets/img/Lucky_Roulette.jpg"
        category="Figma Prototype & Component"
        title="Lucky Roulette。幸運輪盤"
        introduce="透過精心構建的原型互動設計，逼真地模擬出完整的網頁抽獎流程，以達到事先洞察可能情境，確保開發後能呈現順暢的抽獎體驗"
        hrefButton="https://www.figma.com/proto/QHDyZ7v5DxX9WdNFfhvRyh/Lucky-Roulette%E3%80%82%E5%B9%B8%E9%81%8B%E8%BC%AA%E7%9B%A4?page-id=0%3A1&node-id=339-9&starting-point-node-id=339%3A9&scaling=scale-down&mode=design&t=FVX1CXAiIeUE2iBM-1"
        />
      <PortfolioCard
        srcImg="../src/assets/img/wedding_story.jpg"
        category="Figma Prototype & Component"
        title="Wedding Story。幸福物語"
        introduce="善用 Component 功能，將重複性高的內容製作成 Component ，以確保整體內容的一致性，及提高設計效率"
        hrefButton="https://www.figma.com/file/ggN15aKgkrnINy7sRJV0ed/shopping-App?type=design&node-id=0%3A1&mode=design&t=99LKG858SuYtfxlh-1"
        />
      <PortfolioCard
        srcImg="../src/assets/img/about_design.jpg"
        category="Photoshop、Illustrator"
        title="平面設計"
        introduce="使用 Adobe Photoshop、Illustrator 製作平面文宣、社群廣告圖、大型輸出物及相關印刷品輸出發包等作品"
        />
      <PortfolioCard
        srcImg="../src/assets/img/about_video.jpg"
        category="Premiere "
        title="影片後製剪輯"
        introduce="自行接案，負責 Youtuber、公司或企業相關的影片後期製作和剪輯等需求作品"
        />
    </div>
  </section>

</template>
