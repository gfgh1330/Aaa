const wizardTemplates = {
    publish: `
        <div id="publish-wizard">
            <div class="wizard-step active" data-step="1">
                <h3 data-lang-key="step1_publish_title">الخطوة 1: رفع الصورة</h3>
                <div class="step-content-wrapper">
                    <div class="upload-area"><i class="fas fa-image"></i><p data-lang-key="upload_prompt">انقر هنا أو اسحب الصورة</p></div>
                    <div class="image-preview-wrapper" style="display:none;">
                        <img class="image-preview" src="#">
                        <div class="info-box" style="display:none;"></div>
                        <button class="button link" data-action="change-image"><i class="fas fa-exchange-alt"></i> <span data-lang-key="change_image_btn">تبديل الصورة</span></button>
                    </div>
                </div>
                <div class="wizard-nav"><span></span><button class="button" data-action="next" disabled data-lang-key="next_btn">التالي</button></div>
            </div>
            <div class="wizard-step" data-step="2">
                <h3 data-lang-key="step2_publish_title">الخطوة 2: إضافة البيانات</h3>
                <p data-lang-key="step2_publish_desc">أدخل النص أو ارفع الملف الذي تريد إخفاءه.</p>
                <textarea data-type="text-input" placeholder="اكتب النص هنا..."></textarea>
                <div class="or-divider" data-lang-key="or_divider">أو</div>
                <label class="button secondary" style="display:block; text-align:center;"><i class="fas fa-paperclip"></i> <span data-lang-key="upload_file_btn">رفع ملف</span>
                    <input type="file" data-type="file-for-hiding" style="display:none;">
                </label>
                <div class="info-box" data-type="file-name-display" style="display:none;"></div>
                <div class="wizard-nav"><button class="button secondary" data-action="back" data-lang-key="back_btn">رجوع</button><button class="button" data-action="encode" data-lang-key="finish_btn">إنهاء وإنشاء</button></div>
            </div>
            <div class="wizard-step" data-step="3">
                 <h3 data-lang-key="step3_publish_title">اكتمل بنجاح!</h3>
                <div class="step-content-wrapper"><div class="image-preview-wrapper"><img class="image-preview" src="#"></div></div>
                <div class="wizard-nav">
                    <a class="button" data-type="download-link" download="encoded.png" style="width:100%; text-align:center; box-sizing: border-box;"><i class="fas fa-download"></i> <span data-lang-key="download_image_btn">تحميل الصورة</span></a>
                </div>
                 <div class="wizard-nav"><button class="button secondary" data-action="start-over" data-lang-key="start_over_btn">البدء من جديد</button></div>
            </div>
        </div>`,
    receive: `
        <div id="receive-wizard">
            <div class="wizard-step active" data-step="1">
                 <h3 data-lang-key="step1_receive_title">الخطوة 1: رفع الصورة</h3>
                 <div class="step-content-wrapper">
                    <div class="upload-area"><i class="fas fa-search"></i><p data-lang-key="upload_prompt_receive">انقر هنا أو اسحب الصورة</p></div>
                    <div class="image-preview-wrapper" style="display:none;">
                        <img class="image-preview" src="#">
                        <div class="info-box" style="display:none;"></div>
                        <button class="button link" data-action="change-image"><i class="fas fa-exchange-alt"></i> <span data-lang-key="change_image_btn">تبديل الصورة</span></button>
                    </div>
                </div>
                <div class="wizard-nav"><span></span><button class="button" data-action="decode" disabled data-lang-key="extract_btn">استخراج</button></div>
            </div>
            <div class="wizard-step" data-step="2">
                <h3 data-lang-key="step2_receive_title">البيانات المستخرجة</h3>
                <div class="result-area"></div>
                <div class="wizard-nav"><button class="button secondary" data-action="start-over" data-lang-key="start_over_btn">البدء من جديد</button></div>
            </div>
        </div>`,
    convert: `
        <div id="convert-wizard">
            <div class="wizard-step active" data-step="1">
                <h3 data-lang-key="step1_convert_title">الخطوة 1: رفع الصورة</h3>
                <div class="step-content-wrapper">
                    <div class="upload-area"><i class="fas fa-file-image"></i><p data-lang-key="upload_prompt">انقر هنا أو اسحب الصورة</p></div>
                    <div class="image-preview-wrapper" style="display:none;">
                        <img class="image-preview" src="#">
                         <div class="info-box" style="display:none;"></div>
                        <button class="button link" data-action="change-image"><i class="fas fa-exchange-alt"></i> <span data-lang-key="change_image_btn">تبديل الصورة</span></button>
                    </div>
                </div>
                <div class="wizard-nav"><span></span><button class="button" data-action="next" disabled data-lang-key="next_btn">التالي</button></div>
            </div>
            <div class="wizard-step" data-step="2">
                <h3 data-lang-key="step2_convert_title">الخطوة 2: تحديد الصيغة</h3>
                <p data-lang-key="step2_convert_desc">اختر الصيغة الجديدة.</p>
                <div class="format-selector">
                    <button class="button" data-format="png">PNG</button><button class="button" data-format="jpeg">JPEG</button><button class="button" data-format="webp">WEBP</button>
                </div>
                <div class="wizard-nav"><button class="button secondary" data-action="back" data-lang-key="back_btn">رجوع</button><button class="button" data-action="convert" disabled data-lang-key="convert_btn">تحويل</button></div>
            </div>
            <div class="wizard-step" data-step="3">
                <h3 data-lang-key="step3_convert_title">اكتمل التحويل بنجاح!</h3>
                <div class="step-content-wrapper"><div class="image-preview-wrapper"><img class="image-preview" src="#"></div></div>
                <div class="wizard-nav">
                     <a class="button" data-type="download-link" style="width:100%; text-align:center; box-sizing: border-box;"><i class="fas fa-download"></i> <span data-lang-key="download_image_btn">تحميل الصورة</span></a>
                </div>
                 <div class="wizard-nav"><button class="button secondary" data-action="start-over" data-lang-key="start_over_btn">البدء من جديد</button></div>
            </div>
        </div>`
};

const translations = {
    ar: { site_title: "أدوات الصور", publish_title: "وضع النشر", receive_title: "وضع الاستقبال", convert_title: "تحويل الصيغ", settings_title: "الإعدادات", mode_title: "الوضع", theme_title: "السمة", dark_mode: "الوضع الداكن", publish_mode: "نشر (إخفاء)", receive_mode: "استقبال (استخراج)", convert_mode: "تحويل الصيغ", language_title: "اللغة", language_select: "اختر اللغة", loading_text: "جاري التحميل...", next_btn: "التالي", back_btn: "رجوع", finish_btn: "إنهاء وإنشاء", extract_btn: "استخراج", convert_btn: "تحويل", upload_prompt: "انقر هنا أو اسحب الصورة", upload_prompt_receive: "انقر هنا أو اسحب الصورة", change_image_btn: "تبديل الصورة", start_over_btn: "البدء من جديد", step1_publish_title: "الخطوة 1: رفع الصورة", step1_publish_desc: "اختر صورة بصيغة PNG أو JPEG لإخفاء البيانات.", capacity_info: "السعة التخزينية المتاحة:", image_size: "حجم الصورة:", step2_publish_title: "الخطوة 2: إضافة البيانات", step2_publish_desc: "أدخل النص أو ارفع الملف.", or_divider: "أو", upload_file_btn: "رفع ملف", step3_publish_title: "اكتمل بنجاح!", download_image_btn: "تحميل الصورة", step1_receive_title: "الخطوة 1: رفع الصورة", step1_receive_desc: "اختر الصورة التي تحتوي على بيانات مخفية (PNG).", step2_receive_title: "البيانات المستخرجة", step1_convert_title: "الخطوة 1: رفع الصورة", step1_convert_desc: "اختر الصورة التي تريد تحويل صيغتها.", step2_convert_title: "الخطوة 2: تحديد الصيغة", step2_convert_desc: "اختر الصيغة الجديدة.", step3_convert_title: "اكتمل التحويل بنجاح!", no_data_found: "لم يتم العثور على بيانات مخفية.", same_language_selected: "أنت تستخدم هذه اللغة بالفعل." },
    en: { site_title: "Image Tools", publish_title: "Publish Mode", receive_title: "Receive Mode", convert_title: "Convert Mode", settings_title: "Settings", mode_title: "Mode", theme_title: "Theme", dark_mode: "Dark Mode", publish_mode: "Publish (Hide)", receive_mode: "Receive (Extract)", convert_mode: "Converter", language_title: "Language", language_select: "Select Language", loading_text: "Loading...", next_btn: "Next", back_btn: "Back", finish_btn: "Finish & Create", extract_btn: "Extract", convert_btn: "Convert", upload_prompt: "Click here or drag an image", upload_prompt_receive: "Click here or drag an image", change_image_btn: "Change Image", start_over_btn: "Start Over", step1_publish_title: "Step 1: Upload Image", step1_publish_desc: "Choose a PNG or JPEG to hide data in.", capacity_info: "Available capacity:", image_size: "Image Size:", step2_publish_title: "Step 2: Add Data", step2_publish_desc: "Enter text or upload the file.", or_divider: "OR", upload_file_btn: "Upload File", step3_publish_title: "Success!", download_image_btn: "Download Image", step1_receive_title: "Step 1: Upload Image", step1_receive_desc: "Choose the image with hidden data (PNG).", step2_receive_title: "Extracted Data", step1_convert_title: "Step 1: Upload Image", step1_convert_desc: "Choose the image to convert.", step2_convert_title: "Step 2: Select Format", step2_convert_desc: "Choose the new format.", step3_convert_title: "Conversion Complete!", no_data_found: "No hidden data found.", same_language_selected: "You are already using this language." }
};

let currentMode = 'publish';
let wizardState = {};
const DELIMITER = '$$$STEGO$$$';

const DOMElements = {
    mainContent: document.getElementById('main-content'),
    mainTitle: document.getElementById('main-title'),
    canvas: document.getElementById('canvas'),
    loaderOverlay: document.getElementById('loader-overlay'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    themeToggle: document.getElementById('theme-toggle'),
    toastNotification: document.getElementById('toast-notification'),
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            const span = el.querySelector('span');
            if (span) {
                span.textContent = " " + translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    localStorage.setItem('stego_lang', lang);
    DOMElements.mainTitle.textContent = translations[lang][`${currentMode}_title`];
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('stego_theme', theme);
}

function switchMode(mode) {
    currentMode = mode;
    DOMElements.mainContent.innerHTML = wizardTemplates[mode] || `<p>Error: Wizard not found</p>`;
    initializeWizard(mode);
    setLanguage(localStorage.getItem('stego_lang') || 'ar'); 
    document.querySelectorAll('.sidebar a[id^="mode-"]').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`mode-${mode}-btn`).classList.add('active');
    closeSidebar();
}

function initializeWizard(wizardId) {
    const wizardEl = document.getElementById(`${wizardId}-wizard`);
    if (!wizardEl) return;
    wizardState[wizardId] = {};
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = wizardId === 'receive' ? 'image/png' : 'image/*';
    wizardEl.appendChild(fileInput);

    wizardEl.querySelector('.upload-area').addEventListener('click', () => fileInput.click());
    wizardEl.querySelector('[data-action="change-image"]').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => handleImageUpload(e, wizardId));

    wizardEl.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (action === 'next') showStep(wizardId, 2);
            if (action === 'back') showStep(wizardId, 1);
            if (action === 'start-over') switchMode(wizardId);
            if (action === 'encode') handleEncode(wizardId);
            if (action === 'decode') handleDecode(wizardId);
            if (action === 'convert') handleConvert(wizardId);
        });
    });

    if (wizardId === 'publish') {
        const fileForHidingInput = wizardEl.querySelector('[data-type="file-for-hiding"]');
        fileForHidingInput.addEventListener('change', e => {
            if (e.target.files.length > 0) {
                wizardState[wizardId].fileToHide = e.target.files[0];
                const fileNameDisplay = wizardEl.querySelector('[data-type="file-name-display"]');
                fileNameDisplay.textContent = wizardState[wizardId].fileToHide.name;
                fileNameDisplay.style.display = 'block';
            }
        });
    }

    if (wizardId === 'convert') {
        const formatSelector = wizardEl.querySelector('.format-selector');
        formatSelector.addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON') {
                formatSelector.querySelectorAll('.button').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                wizardEl.querySelector('[data-action="convert"]').disabled = false;
            }
        });
    }
}

async function handleImageUpload(event, wizardId) {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    if (wizardId === 'receive' && file.type !== 'image/png') { alert('Please select a PNG file for extraction.'); return; }

    wizardState[wizardId].imageFile = file;
    const wizardEl = document.getElementById(`${wizardId}-wizard`);
    
    const previewWrapper = wizardEl.querySelector('.image-preview-wrapper');
    previewWrapper.querySelector('.image-preview').src = URL.createObjectURL(file);
    wizardEl.querySelector('.upload-area').style.display = 'none';
    previewWrapper.style.display = 'block';
    
    const actionBtn = wizardEl.querySelector('[data-action="next"], [data-action="decode"]');
    if (actionBtn) actionBtn.disabled = false;

    const lang = localStorage.getItem('stego_lang') || 'ar';
    const infoBox = previewWrapper.querySelector('.info-box');
    const imageSizeKB = (file.size / 1024).toFixed(2);
    let infoText = `${translations[lang]['image_size']} ${imageSizeKB} KB`;
    
    if (wizardId === 'publish') {
        const image = await loadImage(file);
        const maxBytes = Math.floor((image.width * image.height * 3) / 8);
        const capacityKB = (maxBytes / 1024).toFixed(2);
        infoText += ` | ${translations[lang]['capacity_info']} ${capacityKB} KB`;
    }
    infoBox.textContent = infoText;
    infoBox.style.display = 'block';
}

function showStep(wizardId, step) {
    const wizardEl = document.getElementById(`${wizardId}-wizard`);
    wizardEl.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
    wizardEl.querySelector(`.wizard-step[data-step="${step}"]`).classList.add('active');
}

function showToast(messageKey) {
    const lang = localStorage.getItem('stego_lang') || 'ar';
    DOMElements.toastNotification.textContent = translations[lang][messageKey];
    DOMElements.toastNotification.classList.add('show');
    setTimeout(() => { DOMElements.toastNotification.classList.remove('show'); }, 3000);
}

function closeSidebar() { DOMElements.sidebar.classList.remove('open'); DOMElements.sidebarOverlay.classList.remove('open'); }
function loadImage(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = e => { const img = new Image(); img.onload = () => resolve(img); img.onerror = reject; img.src = e.target.result; }; reader.onerror = reject; reader.readAsDataURL(file); }); }

async function handleEncode(wizardId) {
    const wizardEl = document.getElementById(`${wizardId}-wizard`);
    const textData = wizardEl.querySelector('[data-type="text-input"]').value;
    const fileToHide = wizardState[wizardId].fileToHide;
    const imageFile = wizardState[wizardId].imageFile;
    if (!textData && !fileToHide) { alert('Please provide text or a file to hide.'); return; }
    DOMElements.loaderOverlay.style.display = 'flex';
    try {
        const image = await loadImage(imageFile);
        const canvas = DOMElements.canvas; canvas.width = image.width; canvas.height = image.height;
        const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, image.width, image.height);
        let dataToHide;
        if (fileToHide) {
            const header = `file:${fileToHide.name}:${fileToHide.type}::`;
            const fileBytes = new Uint8Array(await fileToHide.arrayBuffer());
            const headerBytes = new TextEncoder().encode(header);
            dataToHide = new Uint8Array(headerBytes.length + fileBytes.length);
            dataToHide.set(headerBytes); dataToHide.set(fileBytes, headerBytes.length);
        } else {
            dataToHide = new TextEncoder().encode(`text::${textData}`);
        }
        const delimiterBytes = new TextEncoder().encode(DELIMITER);
        const finalData = new Uint8Array(dataToHide.length + delimiterBytes.length);
        finalData.set(dataToHide); finalData.set(delimiterBytes, dataToHide.length);
        let dataIndex = 0, bitIndex = 0;
        for (let i = 0; i < imageData.data.length && dataIndex < finalData.length; i += 4) {
            for (let j = 0; j < 3; j++) {
                if (dataIndex < finalData.length) {
                    const bit = (finalData[dataIndex] >> (7 - bitIndex)) & 1;
                    imageData.data[i + j] = (imageData.data[i + j] & 0xFE) | bit;
                    if (++bitIndex === 8) { bitIndex = 0; dataIndex++; }
                }
            }
        }
        ctx.putImageData(imageData, 0, 0);
        const outputUrl = canvas.toDataURL('image/png');
        wizardEl.querySelector('[data-step="3"] .image-preview').src = outputUrl;
        wizardEl.querySelector('[data-type="download-link"]').href = outputUrl;
        showStep(wizardId, 3);
    } catch (e) { alert('An error occurred: ' + e.message); }
    finally { DOMElements.loaderOverlay.style.display = 'none'; }
}

async function handleDecode(wizardId) {
    const imageFile = wizardState[wizardId].imageFile;
    DOMElements.loaderOverlay.style.display = 'flex';
    try {
        const image = await loadImage(imageFile);
        const canvas = DOMElements.canvas; canvas.width = image.width; canvas.height = image.height;
        const ctx = canvas.getContext('2d'); ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, image.width, image.height).data;
        const decodedBytes = []; let currentByte = 0, bitCount = 0;
        for (let i = 0; i < imageData.length; i += 4) {
            for (let j = 0; j < 3; j++) {
                const bit = imageData[i + j] & 1;
                currentByte = (currentByte << 1) | bit;
                if (++bitCount === 8) {
                    decodedBytes.push(currentByte);
                    if (decodedBytes.length > DELIMITER.length) {
                        const tail = new TextDecoder().decode(new Uint8Array(decodedBytes.slice(-DELIMITER.length)));
                        if (tail === DELIMITER) {
                            const hiddenData = new Uint8Array(decodedBytes.slice(0, -DELIMITER.length));
                            displayDecodedData(hiddenData, wizardId);
                            DOMElements.loaderOverlay.style.display = 'none';
                            return;
                        }
                    }
                    currentByte = 0; bitCount = 0;
                }
            }
        }
        throw new Error('no_data_found');
    } catch (e) { alert(translations[localStorage.getItem('stego_lang') || 'ar'][e.message] || e.message); }
    finally { DOMElements.loaderOverlay.style.display = 'none'; }
}

function displayDecodedData(data, wizardId) {
    const wizardEl = document.getElementById(`${wizardId}-wizard`);
    const resultArea = wizardEl.querySelector('.result-area');
    resultArea.innerHTML = '';
    try {
        let separatorIndex = -1;
        for (let i = 0; i < data.length - 1; i++) {
            if (String.fromCharCode(data[i]) === ':' && String.fromCharCode(data[i + 1]) === ':') {
                separatorIndex = i; break;
            }
        }
        if (separatorIndex === -1) throw new Error('no_data_found');
        const headerString = new TextDecoder().decode(data.slice(0, separatorIndex));
        const contentBytes = data.slice(separatorIndex + 2);
        const [type, name, mime] = headerString.split(':');
        if (type === 'text') {
            resultArea.textContent = new TextDecoder().decode(contentBytes);
        } else if (type === 'file') {
            const blob = new Blob([contentBytes], { type: mime });
            const url = URL.createObjectURL(blob);
            resultArea.innerHTML = `<a href="${url}" download="${name}" class="button">${name}</a>`;
        } else { throw new Error('no_data_found'); }
        showStep(wizardId, 2);
    } catch (e) {
        resultArea.textContent = translations[localStorage.getItem('stego_lang') || 'ar']['no_data_found'];
        showStep(wizardId, 2);
    }
}

async function handleConvert(wizardId) {
    const wizardEl = document.getElementById(`${wizardId}-wizard`);
    const formatBtn = wizardEl.querySelector('.format-selector .active');
    if (!formatBtn) { alert('Please select a format.'); return; }
    const format = formatBtn.dataset.format;
    const imageFile = wizardState[wizardId].imageFile;
    DOMElements.loaderOverlay.style.display = 'flex';
    try {
        const image = await loadImage(imageFile);
        const canvas = DOMElements.canvas; canvas.width = image.width; canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        if (format === 'jpeg') { ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, canvas.width, canvas.height); }
        ctx.drawImage(image, 0, 0);
        const outputUrl = canvas.toDataURL(`image/${format}`, 0.95);
        wizardEl.querySelector('[data-step="3"] .image-preview').src = outputUrl;
        const downloadLink = wizardEl.querySelector('[data-type="download-link"]');
        downloadLink.href = outputUrl;
        downloadLink.download = `${imageFile.name.split('.').slice(0, -1).join('.')}.${format}`;
        showStep(wizardId, 3);
    } catch (e) { alert('An error occurred: ' + e.message); }
    finally { DOMElements.loaderOverlay.style.display = 'none'; }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('stego_lang') || 'ar';
    const savedTheme = localStorage.getItem('stego_theme') || 'light';
    
    setTheme(savedTheme);
    DOMElements.themeToggle.checked = savedTheme === 'dark';
    
    switchMode('publish');
    setLanguage(savedLang);

    document.getElementById('settings-btn').addEventListener('click', () => {
        DOMElements.sidebar.classList.add('open');
        DOMElements.sidebarOverlay.classList.add('open');
    });
    DOMElements.sidebarOverlay.addEventListener('click', closeSidebar);
    DOMElements.themeToggle.addEventListener('change', (e) => setTheme(e.target.checked ? 'dark' : 'light'));
    
    document.getElementById('mode-publish-btn').addEventListener('click', (e) => { e.preventDefault(); switchMode('publish'); });
    document.getElementById('mode-receive-btn').addEventListener('click', (e) => { e.preventDefault(); switchMode('receive'); });
    document.getElementById('mode-convert-btn').addEventListener('click', (e) => { e.preventDefault(); switchMode('convert'); });
    
    document.getElementById('lang-menu').addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');
    });
    document.querySelectorAll('.lang-switcher').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            const lang = btn.dataset.lang;
             if (lang === localStorage.getItem('stego_lang')) {
                showToast('same_language_selected');
                document.getElementById('lang-menu').classList.remove('open');
                return;
            }
            DOMElements.loaderOverlay.style.display = 'flex';
            setTimeout(() => {
                setLanguage(lang);
                document.getElementById('lang-menu').classList.remove('open');
                closeSidebar();
                DOMElements.loaderOverlay.style.display = 'none';
            }, 500);
        });
    });
});
</script>
</body>
</html>