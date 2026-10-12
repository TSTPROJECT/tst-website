const translations = {
  en: {
    navProjects:"Projects", navContent:"Content", navServices:"Services", navContact:"Contact",
    eyebrow:"INDEPENDENT SOFTWARE & CREATOR STUDIO",
    heroTitle:'Ideas into <span class="gradient-text">useful things.</span>',
    heroLead:"TST Project creates software, games, and digital tools — and shares the process behind building them.",
    explore:'Explore projects <span>↘</span>', workWithUs:"Work with TST",
    selectedWork:"SELECTED WORK", projectsTitle:"Projects in progress and in the wild.",
    projectsIntro:"Tools made to solve real problems and help people create.",
    gameCreationTool:"GAME CREATION TOOL", viewProject:"View project ↗", productInfo:"Product page ↗",
    tstvnDesc:"A visual novel maker designed to help creators organize scenes, choices, characters, and endings.",
    seephoDesc:"A desktop app that helps you find text inside screenshots and images using OCR.",
    linkNote:"Note: Replace the SeePho product link with your exact product URL before publishing.",
    beyondCode:"BEYOND THE CODE", contentTitle:'Building in public.<br><span class="muted">Sharing what we learn.</span>',
    contentOne:"AI & technology", contentOneDesc:"Experiments, useful tools, and practical lessons.",
    contentTwo:"Behind the build", contentTwoDesc:"The process, problems, and progress behind TST projects.",
    contentThree:"Creator journey", contentThreeDesc:"Honest notes from learning, making, and improving.",
    servicesKicker:"HAVE AN IDEA?", servicesTitle:"Let's make it real.",
    servicesDesc:"Need a small custom program or a Visual Novel project? Share your idea and requirements. We'll discuss the scope before agreeing on the work.",
    discussProject:'Discuss a project <span>↗</span>', contactKicker:"GET IN TOUCH",
    contactTitle:'Follow the work.<br><span class="muted">Start a conversation.</span>',
    contactDesc:"Follow TST's projects and creator content, or reach out about a potential project.",
    addLink:"(add page link)", replaceEmail:"(replace with your email)",
    footerNote:"Independent creator · Built one project at a time."
  },
  th: {
    navProjects:"ผลงาน", navContent:"คอนเทนต์", navServices:"บริการ", navContact:"ติดต่อ",
    eyebrow:"สตูดิโอซอฟต์แวร์และครีเอเตอร์อิสระ",
    heroTitle:'เปลี่ยนไอเดียให้เป็น<span class="gradient-text">สิ่งที่ใช้ได้จริง</span>',
    heroLead:"TST Project สร้างซอฟต์แวร์ เกม และเครื่องมือดิจิทัล พร้อมแบ่งปันเบื้องหลังการลงมือทำ",
    explore:'ดูผลงาน <span>↘</span>', workWithUs:"ร่วมงานกับ TST",
    selectedWork:"ผลงานที่คัดสรร", projectsTitle:"โปรเจกต์ที่กำลังพัฒนาและเปิดให้ใช้งาน",
    projectsIntro:"เครื่องมือที่สร้างขึ้นเพื่อแก้ปัญหาและช่วยให้ผู้คนสร้างสรรค์ได้ง่ายขึ้น",
    gameCreationTool:"เครื่องมือสร้างเกม", viewProject:"ดูโปรเจกต์ ↗", productInfo:"หน้าผลิตภัณฑ์ ↗",
    tstvnDesc:"โปรแกรมสร้าง Visual Novel ที่ช่วยจัดการฉาก ตัวเลือก ตัวละคร และฉากจบ",
    seephoDesc:"โปรแกรม Windows สำหรับค้นหาข้อความในภาพและภาพหน้าจอด้วย OCR",
    linkNote:"หมายเหตุ: เปลี่ยนลิงก์ SeePho เป็น URL หน้าผลิตภัณฑ์จริงก่อนเผยแพร่",
    beyondCode:"มากกว่าแค่โค้ด", contentTitle:'ลงมือสร้างให้เห็นจริง<br><span class="muted">และแบ่งปันสิ่งที่เรียนรู้</span>',
    contentOne:"AI และเทคโนโลยี", contentOneDesc:"การทดลอง เครื่องมือที่มีประโยชน์ และบทเรียนที่นำไปใช้ได้จริง",
    contentTwo:"เบื้องหลังการพัฒนา", contentTwoDesc:"ขั้นตอน ปัญหา และความคืบหน้าของโปรเจกต์ TST",
    contentThree:"เส้นทางครีเอเตอร์", contentThreeDesc:"แบ่งปันประสบการณ์การเรียนรู้ สร้างสรรค์ และพัฒนาตัวเอง",
    servicesKicker:"มีไอเดียอยู่หรือเปล่า?", servicesTitle:"มาสร้างให้เป็นจริงกัน",
    servicesDesc:"ต้องการโปรแกรมเฉพาะทางขนาดเล็กหรือเกม Visual Novel? เล่าไอเดียและความต้องการของคุณ เราจะตกลงขอบเขตงานให้ชัดเจนก่อนเริ่ม",
    discussProject:'พูดคุยเรื่องโปรเจกต์ <span>↗</span>', contactKicker:"ติดต่อ TST",
    contactTitle:'ติดตามผลงาน<br><span class="muted">หรือเริ่มพูดคุยกับเรา</span>',
    contactDesc:"ติดตามโปรเจกต์และคอนเทนต์ของ TST หรือติดต่อเกี่ยวกับงานที่สนใจ",
    addLink:"(เพิ่มลิงก์เพจ)", replaceEmail:"(เปลี่ยนอีเมลของคุณ)",
    footerNote:"ครีเอเตอร์อิสระ · สร้างทีละโปรเจกต์"
  }
};
let currentLang = "en";
const toggle = document.getElementById("languageToggle");
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "th" ? "th" : "en";
  document.body.classList.toggle("thai", lang === "th");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  toggle.textContent = lang === "en" ? "ไทย" : "EN";
}
toggle.addEventListener("click", () => setLanguage(currentLang === "en" ? "th" : "en"));
document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    alert(currentLang === "th"
      ? "ก่อนเผยแพร่ ให้ใส่ลิงก์จริงของเพจ Facebook หรือบริการ Fastwork ในไฟล์ index.html"
      : "Before publishing, add your real Facebook page or Fastwork service URL in index.html.");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
setLanguage("en");
