<script>
import SectionTitle from '../components/SectionTitle.vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import ExperienceCard from '../components/ExperienceCard.vue'

export default {
  components: {
    SectionTitle,
    PortfolioCard,
    ExperienceCard
  }
}
</script>

<template>

  <section class="Profile" id="Profile">
    <div class="container pt-lg-5">
        <div class="row py-5 align-items-center">
          <div class="col-lg-7 col-12 Profile-imgBox pt-5 px-0">
              <img src="../assets/img/penny.jpg">
          </div>
          <div class="col-lg-5 col-12 pt-5">
            <h1 class="primary-default font-weight-bold Profile-title">關於我<br/>想要應徵貴司職缺<br/>的這件事</h1>
            <p class="Profile-introduce my-4">Hi！我是Penny，在自我探索的過程中，偶然間接觸到了程式領域，而就此踏入了程式的世界。了解前端框架同時能獨立運用前端框架完成切版作業及網頁互動效果。
              <br/><br/>如果目前為止有符合您尋才的基本需求，事不宜遲快點擊了解更多來認識我吧！
            </p>
            <div class="text-center text-lg-left">
              <a href="#AboutMe" class="readMore-btn px-3 py-2">了解更多</a>
            </div>
          </div>
        </div>
      </div>
  </section>

  <section class="AboutMe" id="AboutMe">
    <div class="container pb-5">
      <SectionTitle title="About Me" color="secondary-default"></SectionTitle>

      <div class="aboutMe-content">
        <p>在接觸到程式領域之前，曾靠著自學設計軟體，接觸到了平面設計的相關工作，期間涉略的領域包含：平面設計、印刷發包、社群圖文等。在設計領域了解的越深入後，我理解到「設計」不僅僅是視覺上的呈現，還包括了如何為使用者提供優秀的體驗，站在消費者/使用者的立場去全盤思考，而這也是引領我進入「UI/UX設計」領域的契機。</p>
        <p>在踏入UI/UX設計領域初期，報名參加了資展國際所開設的，互動式網站UI/UX設計師就業養成班，做為期約半年的培訓，期間學習到關於用戶研究、資訊架構、互動設計等相關領域的知識，也進一步拓展了自己的技能，從0到1自學前端框架及互動呈現並順利的在工作中實際運用。</p>
      </div>
    </div>
  </section>

  <section class="Experience" id="Experience">
    <div class="container">
      <SectionTitle title="Experience" color="primary-default"></SectionTitle>
      <el-timeline class="pb-5">
        <ExperienceCard
          time="2022/11 - 至今"
          title="動力安全資訊股分有限公司｜UIUX設計師、前端工程師"
          content="負責內部系統介面視覺優化，同時將其中使用的元件樣式制定成規範並建立成文件庫，以便加速其他專案的開發和模板化。此外，期間靠著網路資源從0到1自學Vue.js前端框架、第三方套件運用、API串接以及基礎的.Net Core Web API 建置，將公司內部原有的專案透過新學的技術進行改寫。"
        />
        <ExperienceCard
          time="2022/05 - 2022/10 (資歷5個月)"
          title="資展國際(原資策會)｜互動式網站UI/UX設計師就業養成班"
          content="考量目前社會趨勢逐漸傾向於網路發展，經多方搜索資料後，主動報名參加資展國際開設的「互動式網站UI/UX設計師就業養成班」，做為期約半年的網頁設計培訓，學習過程中有與團隊合作一同開發網頁的實際協作經歷，也有獨立完成個人專案的經驗與能力。"
        />
        <ExperienceCard
          time="2018/11 - 2022/05 (資歷3年6個月)"
          title="富信大飯店股份有限公司｜設計專員"
          content="在擔任設計專員期間，主要負責製作活動專案平面文宣(海報、DM...等)，印刷物輸出發包，以及針對季節新品進行商品拍攝。並曾於同期間兼任行銷職務，將以往所學相關行銷知識與設計技能結合應用。"
        />
        <ExperienceCard
          time="2017/06 - 2018/10 (資歷1年4個月)"
          title="金田餐飲股份有限公司｜行銷專員"
          content="主要負責代理國外餐飲品牌管理，並擔任門市與進駐百貨之接洽窗口，從中學習到了專案時程的規劃，以及對外應變的溝通能力。"
        />
        <ExperienceCard
          time="2016/07 - 2017/06 (資歷11個月)"
          title="喜鴻旅行社｜行銷專員"
          content="剛進職場的第一份工作，主要發想規劃官網網頁活動企劃，並與設計部門協同製作出活動網頁，同時負責社群軟體經營、廣告投放，以及內部專案新人教育訓練講師。"
        />
      </el-timeline>
    </div>
  </section>

  <section class="Portfolio" id="Portfolio">
    <div class="container">
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
    </div>
  </section>

</template>
