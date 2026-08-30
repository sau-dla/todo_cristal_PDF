/**
 * Generador PDF - Todo Cristal
 * JavaScript Modular (Lista vacía por defecto, Ejemplos solo al hacer clic)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. CONFIGURACIÓN Y ESTADO
     -------------------------------------------------------------------------- */
  const DEFAULT_LOGO_PNG = "data:image/png;base64,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";
  const ITEMS_PER_PAGE = 10; // Máximo 10 productos por hoja A4

  const config = {
    logoSize: 100,
    logoOpacity: 100,
    watermarkSize: 127,
    watermarkOpacity: 5,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    fontColor: '#000000',
    customLogoSrc: DEFAULT_LOGO_PNG
  };

  const MONTHS_ES = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  // Datos globales del presupuesto (Vacíos por defecto)
  const budgetData = {
    mainTitle: '',
    dateYMD: '',
    client: '',
    ci: '',
    address: 'Av. Principal, Calle 3, Edif. Cristal',
    advancePrice: '100,00$',
    footerAddress: 'Caracas, San Agustín Norte, Calle Sur, casa 160.',
    footerPhone: 'Telf. 0412-321-4014',
    footerName: 'Juan Carlos Meléndez'
  };

  // Lista de líneas vacía por defecto
  let lines = [];

  /* --------------------------------------------------------------------------
     2. REFERENCIAS AL DOM
     -------------------------------------------------------------------------- */
  const inputLogoFile = document.getElementById('input-logo-file');
  const btnResetLogo = document.getElementById('btn-reset-logo');

  const logoSizeInput = document.getElementById('logo-size');
  const logoSizeVal = document.getElementById('logo-size-val');
  const logoOpacityInput = document.getElementById('logo-opacity');
  const logoOpacityVal = document.getElementById('logo-opacity-val');

  const watermarkSizeInput = document.getElementById('watermark-size');
  const watermarkSizeVal = document.getElementById('watermark-size-val');
  const watermarkOpacityInput = document.getElementById('watermark-opacity');
  const watermarkOpacityVal = document.getElementById('watermark-opacity-val');

  const fontFamilySelect = document.getElementById('font-family');
  const fontSizeInput = document.getElementById('font-size');
  const fontColorInput = document.getElementById('font-color');

  const inputMainTitle = document.getElementById('input-main-title');
  const inputDate = document.getElementById('input-date');
  const inputClient = document.getElementById('input-client');
  const inputCi = document.getElementById('input-ci');
  const inputAddress = document.getElementById('input-address');

  const inputAdvancePrice = document.getElementById('input-advance-price');
  const itemsCountBadge = document.getElementById('items-count-badge');

  const inputFooterAddress = document.getElementById('input-footer-address');
  const inputFooterPhone = document.getElementById('input-footer-phone');
  const inputFooterName = document.getElementById('input-footer-name');

  const btnAddLine = document.getElementById('btn-add-line');
  const btnLoadExample = document.getElementById('btn-load-example');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnTopDownload = document.getElementById('btn-top-download');

  const pdfPagesContainer = document.getElementById('pdf-pages-container');
  const linesEditorContainer = document.getElementById('lines-editor-container');

  /* --------------------------------------------------------------------------
     3. FUNCIONES DE FORMATO, FECHA Y CÁLCULO
     -------------------------------------------------------------------------- */

  function formatCurrencyRight(val) {
    if (!val || !val.trim()) return '';
    let trimmed = val.trim();
    const cleanNumStr = trimmed.replace(/[^0-9.,]/g, '').replace(',', '.');
    if (cleanNumStr !== '') {
      const num = parseFloat(cleanNumStr);
      if (!isNaN(num)) {
        const formattedNum = num.toFixed(2).replace('.', ',');
        return `${formattedNum}$`;
      }
    }
    if (trimmed.endsWith('$')) return trimmed;
    const clean = trimmed.replace(/^\$\s*/, '');
    return `${clean}$`;
  }

  function formatQuantity(val) {
    if (!val || !val.trim()) return '1,00';
    const cleanNumStr = val.trim().replace(/[^0-9.,]/g, '').replace(',', '.');
    if (cleanNumStr !== '') {
      const num = parseFloat(cleanNumStr);
      if (!isNaN(num)) {
        return num.toFixed(2).replace('.', ',');
      }
    }
    return val.trim();
  }

  function calculateLineTotal(quantity, unitPrice) {
    if (!quantity || !unitPrice) return '';
    const qStr = quantity.toString().replace(/[^0-9.,]/g, '').replace(',', '.');
    const pStr = unitPrice.toString().replace(/[^0-9.,]/g, '').replace(',', '.');
    const q = parseFloat(qStr);
    const p = parseFloat(pStr);
    if (isNaN(q) || isNaN(p)) return '';
    const total = q * p;
    return `${total.toFixed(2).replace('.', ',')}$`;
  }

  function getTodayYMD() {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function formatDateToSpanish(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const monthName = MONTHS_ES[monthIdx] || parts[1];
      return `${day} de ${monthName} del ${year}`;
    }
    return dateStr;
  }

  function initDefaultDate() {
    const todayStr = getTodayYMD();
    budgetData.dateYMD = todayStr;
    if (inputDate) inputDate.value = todayStr;
  }

  function calculateBudgetTotal() {
    let sum = 0;
    lines.forEach(line => {
      let lineVal = 0;
      const calcLineStr = calculateLineTotal(line.quantity, line.unitPrice);
      if (calcLineStr) {
        const numStr = calcLineStr.replace(/[^0-9.,]/g, '').replace(',', '.');
        if (numStr) lineVal = parseFloat(numStr);
      } else if (line.lineTotal && line.lineTotal.trim()) {
        const numStr = line.lineTotal.replace(/[^0-9.,]/g, '').replace(',', '.');
        if (numStr) lineVal = parseFloat(numStr);
      }
      sum += lineVal;
    });
    return `${sum.toFixed(2).replace('.', ',')}$`;
  }

  /* --------------------------------------------------------------------------
     4. RENDERIZADO DE HOJAS PDF
     -------------------------------------------------------------------------- */

  function getItemWeight(item) {
    if (!item) return 1;
    const nameStr = (item.productName || '') + ' ' + (item.dimensions || '');
    const titleLines = Math.max(1, Math.ceil(nameStr.length / 38));

    let detailsLines = 0;
    if (item.details && item.details.trim()) {
      const detailParts = item.details.split('\n');
      detailParts.forEach(part => {
        detailsLines += Math.max(1, Math.ceil(part.length / 42));
      });
    }

    const totalLines = titleLines + detailsLines;
    return 1 + (totalLines - 1) * 0.55;
  }

  function calculatePageChunks(lines) {
    if (!lines || lines.length === 0) return [[]];

    const MAX_PAGE_WEIGHT = 9.5;
    const MAX_LAST_PAGE_WEIGHT = 7.5;

    const chunks = [];
    let currentChunk = [];
    let currentWeight = 0;

    for (let i = 0; i < lines.length; i++) {
      const item = lines[i];
      const weight = getItemWeight(item);

      if (currentChunk.length > 0 && (currentWeight + weight > MAX_PAGE_WEIGHT)) {
        chunks.push(currentChunk);
        currentChunk = [item];
        currentWeight = weight;
      } else {
        currentChunk.push(item);
        currentWeight += weight;
      }
    }

    if (currentChunk.length > 0) {
      if (currentChunk.length > 1 && currentWeight > MAX_LAST_PAGE_WEIGHT) {
        const lastItem = currentChunk.pop();
        chunks.push(currentChunk);
        chunks.push([lastItem]);
      } else {
        chunks.push(currentChunk);
      }
    }

    return chunks;
  }

  function renderPdfPages() {
    if (!pdfPagesContainer) return;
    pdfPagesContainer.innerHTML = '';

    const pageChunks = calculatePageChunks(lines);

    const totalPages = pageChunks.length;
    const formattedTotal = calculateBudgetTotal();
    const dateFormatted = formatDateToSpanish(budgetData.dateYMD);

    if (itemsCountBadge) {
      itemsCountBadge.textContent = `${lines.length} producto${lines.length === 1 ? '' : 's'} (${totalPages} hoja${totalPages === 1 ? '' : 's'})`;
    }

    let cumulativeItemIndex = 0;

    pageChunks.forEach((chunk, pageIndex) => {
      const currentPageNum = pageIndex + 1;
      const isFirstPage = (pageIndex === 0);
      const isLastPage = (pageIndex === totalPages - 1);

      const pageDiv = document.createElement('div');
      pageDiv.className = 'pdf-page';
      pageDiv.style.fontFamily = config.fontFamily;
      pageDiv.style.fontSize = `${config.fontSize}px`;
      pageDiv.style.color = config.fontColor;

      const watermarkOpacity = (config.watermarkOpacity / 100).toString();
      const watermarkWidth = Math.round((280 * config.watermarkSize) / 100);

      let tableRowsHtml = '';
      if (chunk.length === 0) {
        tableRowsHtml = `
          <tr class="pdf-table-row">
            <td colspan="4" style="text-align: center; color: #94a3b8; padding: 1.5rem 0.5rem; font-style: italic;">
              Sin productos agregados. Haz clic en el botón ➕ al lado del Importe para agregar.
            </td>
          </tr>
        `;
      } else {
        chunk.forEach((item, itemIdxInChunk) => {
          const globalIndex = cumulativeItemIndex + itemIdxInChunk;
          const descNameHtml = `<span class="product-name-line" contenteditable="true" data-type="nameLine" data-index="${globalIndex}" data-placeholder="Nombre del producto">${item.productName || ''}</span>`;
          const descDimHtml = `<span class="product-dim-line" contenteditable="true" data-type="dimLine" data-index="${globalIndex}" data-placeholder="medidas">${item.dimensions || ''}</span>`;
          const descSubHtml = `<div class="product-details-sub" contenteditable="true" data-type="details" data-index="${globalIndex}" data-placeholder="descripción">${item.details || ''}</div>`;

          const qtyText = formatQuantity(item.quantity);
          const unitText = formatCurrencyRight(item.unitPrice);
          const calculatedLineTotal = calculateLineTotal(item.quantity, item.unitPrice);
          const totalText = calculatedLineTotal ? calculatedLineTotal : (item.lineTotal ? formatCurrencyRight(item.lineTotal) : '0,00$');

          tableRowsHtml += `
            <tr class="pdf-table-row">
              <td class="td-desc">
                <button type="button" class="pdf-line-delete-btn" data-index="${globalIndex}" title="Eliminar ítem">✕</button>
                <div class="product-title-row" style="display: flex; align-items: baseline; gap: 0.35rem; flex-wrap: wrap;">
                  ${descNameHtml}
                  ${descDimHtml}
                </div>
                ${descSubHtml}
              </td>
              <td class="td-qty" contenteditable="true" data-type="qty" data-index="${globalIndex}">${qtyText}</td>
              <td class="td-unit" contenteditable="true" data-type="unit" data-index="${globalIndex}">${unitText}</td>
              <td class="td-total" data-type="total" data-index="${globalIndex}">${totalText}</td>
            </tr>
          `;
        });
      }

      cumulativeItemIndex += chunk.length;

      const logoWidth = Math.round((95 * config.logoSize) / 100);
      const logoOpacity = (config.logoOpacity / 100).toString();

      pageDiv.innerHTML = `
        <div class="watermark-container" style="opacity: ${watermarkOpacity};">
          <img src="${config.customLogoSrc}" alt="TC Watermark" class="watermark-logo" style="width: ${watermarkWidth}px;">
          <div class="watermark-text">TODO CRISTAL</div>
        </div>
        <div class="pdf-header-row">
          <div class="pdf-logo-wrapper">
            <img src="${config.customLogoSrc}" alt="Todo Cristal Logo" style="width: ${logoWidth}px; opacity: ${logoOpacity};">
          </div>
          <div class="pdf-brand-title">TODO CRISTAL</div>
        </div>
        <div class="pdf-meta-fields">
          <div class="pdf-field-line" style="position: relative;">
            <span class="field-label-bold">FECHA:</span>
            <span class="field-underline canvas-date-trigger" style="cursor: pointer;" title="Haz clic para abrir el calendario">${dateFormatted}</span>
            ${isFirstPage ? `<input type="date" class="canvas-date-picker-input" value="${budgetData.dateYMD}" style="position: absolute; top: 100%; left: 70px; width: 180px; height: 1px; opacity: 0; border: none; padding: 0; margin: 0; pointer-events: auto;">` : ''}
          </div>
          <div class="pdf-field-line">
            <span class="field-label-bold">PRESUPUESTO SR(a):</span>
            <span class="field-underline field-client-editable" contenteditable="true">${budgetData.client}</span>
          </div>
          <div class="pdf-field-line">
            <span class="field-label-bold">C.I:</span>
            <span class="field-underline field-ci-editable" contenteditable="true">${budgetData.ci}</span>
          </div>
          <div class="pdf-field-line">
            <span class="field-label-bold">DIRECCIÓN:</span>
            <span class="field-underline field-address-editable" contenteditable="true">${budgetData.address}</span>
          </div>
        </div>
        <div class="pdf-content-body">
          ${isFirstPage ? `<div class="pdf-main-title-above field-maintitle-editable" contenteditable="true">${budgetData.mainTitle || ''}</div>` : ''}
          <div class="pdf-lines-wrapper">
            <table class="pdf-table">
              <thead>
                <tr>
                  <th class="th-desc">Productos</th>
                  <th class="th-qty">Cantidad</th>
                  <th class="th-unit">Precio Unitario</th>
                  <th class="th-total" style="position: relative;">
                    Importe
                    <button type="button" class="pdf-header-add-btn" title="Agregar producto">+</button>
                  </th>
                </tr>
              </thead>
              <tbody>${tableRowsHtml}</tbody>
            </table>
          </div>
        </div>
        ${isLastPage ? `
        <div class="pdf-totals-box-right">
          <div class="totals-box-row">
            <span class="totals-label">Costo total:</span>
            <span class="totals-value-readonly field-totalprice-readonly">${formattedTotal}</span>
          </div>
          <div class="totals-box-row totals-box-highlight">
            <span class="totals-label">Abono:</span>
            <span class="totals-value-editable field-advanceprice-editable" contenteditable="true">${formatCurrencyRight(budgetData.advancePrice)}</span>
          </div>
        </div>
        ` : ''}
        ${totalPages > 1 ? `<div class="pdf-page-number">Página ${currentPageNum} de ${totalPages}</div>` : ''}
        <div class="pdf-footer-centered">
          <div class="footer-line field-footeraddress-editable" contenteditable="true">${budgetData.footerAddress}</div>
          <div class="footer-line field-footerphone-editable" contenteditable="true">${budgetData.footerPhone}</div>
          <div class="footer-line field-footername-editable" contenteditable="true">${budgetData.footerName}</div>
        </div>
      `;

      pdfPagesContainer.appendChild(pageDiv);
    });

    bindPageEvents();
  }

  function insertLineAt(targetIndex) {
    const newLine = {
      id: Date.now(),
      quantity: '1,00',
      productName: '',
      dimensions: '',
      unitPrice: '',
      lineTotal: '',
      details: '',
      isOpen: false
    };

    if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex <= lines.length) {
      lines.splice(targetIndex, 0, newLine);
    } else {
      lines.push(newLine);
    }

    updateLinesEditor();
  }

  function syncSidebarFromLine(idx) {
    if (!lines[idx]) return;
    const cards = linesEditorContainer.querySelectorAll('details.line-item-card');
    const card = cards[idx];
    if (!card) return;

    const prodInput = card.querySelector('.line-prod-input');
    if (prodInput && document.activeElement !== prodInput) prodInput.value = lines[idx].productName || '';

    const dimInput = card.querySelector('.line-dim-input');
    if (dimInput && document.activeElement !== dimInput) dimInput.value = lines[idx].dimensions || '';

    const qtyInput = card.querySelector('.line-qty-input');
    if (qtyInput && document.activeElement !== qtyInput) qtyInput.value = lines[idx].quantity || '';

    const unitInput = card.querySelector('.line-unitprice-input');
    if (unitInput && document.activeElement !== unitInput) unitInput.value = lines[idx].unitPrice || '';

    const detailsInput = card.querySelector('.line-details-input');
    if (detailsInput && document.activeElement !== detailsInput) detailsInput.value = lines[idx].details || '';

    updateCardCalculatedTotal(idx);
    updateCardSummaryText(idx);
  }

  function bindPageEvents() {
    const deleteBtns = pdfPagesContainer.querySelectorAll('.pdf-line-delete-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        removeLine(idx);
      });
    });

    const headerAddBtns = pdfPagesContainer.querySelectorAll('.pdf-header-add-btn');
    headerAddBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        insertLineAt(lines.length);
      });
    });

    const dateTriggers = pdfPagesContainer.querySelectorAll('.canvas-date-trigger');
    dateTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const picker = pdfPagesContainer.querySelector('.canvas-date-picker-input');
        if (picker) {
          if (typeof picker.showPicker === 'function') picker.showPicker();
          else { picker.focus(); picker.click(); }
        }
      });
    });

    const datePickers = pdfPagesContainer.querySelectorAll('.canvas-date-picker-input');
    datePickers.forEach(picker => {
      picker.addEventListener('change', (e) => {
        budgetData.dateYMD = e.target.value;
        if (inputDate) inputDate.value = e.target.value;
        renderPdfPages();
      });
    });

    const nameCells = pdfPagesContainer.querySelectorAll('.product-name-line[contenteditable="true"]');
    nameCells.forEach(cell => {
      cell.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].productName = e.target.innerText;
          syncSidebarFromLine(idx);
        }
      });
    });

    const dimCells = pdfPagesContainer.querySelectorAll('.product-dim-line[contenteditable="true"]');
    dimCells.forEach(cell => {
      cell.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].dimensions = e.target.innerText;
          syncSidebarFromLine(idx);
        }
      });
    });

    const detailsCells = pdfPagesContainer.querySelectorAll('.product-details-sub[contenteditable="true"]');
    detailsCells.forEach(cell => {
      cell.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].details = e.target.innerText;
          syncSidebarFromLine(idx);
        }
      });
    });

    const qtyTableCells = pdfPagesContainer.querySelectorAll('td.td-qty[contenteditable="true"]');
    qtyTableCells.forEach(cell => {
      cell.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].quantity = e.target.innerText;
          syncSidebarFromLine(idx);
          const totalReadonly = pdfPagesContainer.querySelector('.field-totalprice-readonly');
          if (totalReadonly) totalReadonly.textContent = calculateBudgetTotal();
        }
      });
      cell.addEventListener('blur', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].quantity = formatQuantity(e.target.innerText);
          renderPdfPages();
        }
      });
    });

    const unitTableCells = pdfPagesContainer.querySelectorAll('td.td-unit[contenteditable="true"]');
    unitTableCells.forEach(cell => {
      cell.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].unitPrice = e.target.innerText;
          syncSidebarFromLine(idx);
          const totalReadonly = pdfPagesContainer.querySelector('.field-totalprice-readonly');
          if (totalReadonly) totalReadonly.textContent = calculateBudgetTotal();
        }
      });
      cell.addEventListener('blur', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].unitPrice = formatCurrencyRight(e.target.innerText);
          renderPdfPages();
        }
      });
    });

    const clientEdits = pdfPagesContainer.querySelectorAll('.field-client-editable');
    clientEdits.forEach(el => el.addEventListener('blur', (e) => {
      budgetData.client = e.target.innerText;
      if (inputClient) inputClient.value = e.target.innerText;
    }));

    const ciEdits = pdfPagesContainer.querySelectorAll('.field-ci-editable');
    ciEdits.forEach(el => el.addEventListener('blur', (e) => {
      budgetData.ci = e.target.innerText;
      if (inputCi) inputCi.value = e.target.innerText;
    }));

    const addressEdits = pdfPagesContainer.querySelectorAll('.field-address-editable');
    addressEdits.forEach(el => el.addEventListener('blur', (e) => {
      budgetData.address = e.target.innerText;
      if (inputAddress) inputAddress.value = e.target.innerText;
    }));

    const mainTitleEdits = pdfPagesContainer.querySelectorAll('.field-maintitle-editable');
    mainTitleEdits.forEach(el => el.addEventListener('blur', (e) => {
      budgetData.mainTitle = e.target.innerText;
      if (inputMainTitle) inputMainTitle.value = e.target.innerText;
    }));

    const advancePriceEdits = pdfPagesContainer.querySelectorAll('.field-advanceprice-editable');
    advancePriceEdits.forEach(el => el.addEventListener('blur', (e) => {
      budgetData.advancePrice = formatCurrencyRight(e.target.innerText);
      if (inputAdvancePrice) inputAdvancePrice.value = budgetData.advancePrice;
      renderPdfPages();
    }));
  }

  /* --------------------------------------------------------------------------
     5. GESTIÓN DE TARJETAS DE PRODUCTOS PLEGABLES EN SIDEBAR
     -------------------------------------------------------------------------- */

  function addLine() {
    insertLineAt(lines.length);
  }

  function loadExampleData() {
    budgetData.mainTitle = 'Suministro de ventanas panorámicas.';
    if (inputMainTitle) inputMainTitle.value = budgetData.mainTitle;

    lines = [
      {
        id: 1,
        quantity: '2,00',
        productName: 'ventana',
        dimensions: '1.60x1.00 cm',
        unitPrice: '150,00$',
        lineTotal: '300,00$',
        details: '150$ cada una',
        isOpen: false
      },
      {
        id: 2,
        quantity: '1,00',
        productName: 'ventana',
        dimensions: '95x1.00 cm',
        unitPrice: '60,00$',
        lineTotal: '60,00$',
        details: 'Aluminio Color bronce / Vidrio gris',
        isOpen: false
      }
    ];
    updateLinesEditor();
  }

  function removeLine(index) {
    lines.splice(index, 1);
    updateLinesEditor();
  }

  function getCardTitle(item, index) {
    let title = (item.productName || '').trim();
    if (item.dimensions && item.dimensions.trim()) {
      title += (title ? ' ' : '') + item.dimensions.trim();
    }
    if (!title) {
      title = `Nuevo Producto #${index + 1}`;
    }
    return title;
  }

  function updateLinesEditor() {
    if (!linesEditorContainer) return;
    linesEditorContainer.innerHTML = '';

    lines.forEach((item, index) => {
      const card = document.createElement('details');
      card.className = 'line-item-card';
      if (item.isOpen === true) {
        card.setAttribute('open', '');
      }

      const cardTitleText = getCardTitle(item, index);
      const calculatedLineTotal = calculateLineTotal(item.quantity, item.unitPrice);
      const displayTotal = calculatedLineTotal ? calculatedLineTotal : (item.lineTotal ? formatCurrencyRight(item.lineTotal) : '0,00$');

      card.innerHTML = `
        <summary class="line-item-card-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; min-width: 0; padding-right: 0.5rem;">
            <span class="line-card-title-text" data-card-index="${index}">${cardTitleText}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; shrink: 0;">
            <button type="button" class="btn-danger-sm remove-line-btn" data-index="${index}">✕ Eliminar</button>
            <span class="accordion-icon">▼</span>
          </div>
        </summary>

        <div class="line-item-card-body" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
          <div style="display: flex; gap: 0.5rem;">
            <div class="control-field" style="flex: 1;">
              <label class="control-label">Cantidad</label>
              <input type="text" class="form-input line-qty-input" data-index="${index}" value="${(item.quantity || '').replace(/"/g, '&quot;')}" placeholder="Ej: 1,00">
            </div>
            <div class="control-field" style="flex: 2;">
              <label class="control-label">Nombre del Producto</label>
              <input type="text" class="form-input line-prod-input" data-index="${index}" value="${(item.productName || '').replace(/"/g, '&quot;')}" placeholder="Ej: ventana">
            </div>
          </div>

          <div class="control-field">
            <label class="control-label">Medidas (Ancho x Alto)</label>
            <input type="text" class="form-input line-dim-input" data-index="${index}" value="${(item.dimensions || '').replace(/"/g, '&quot;')}" placeholder="Ej: 1.60x1.00 cm">
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <div class="control-field" style="flex: 1;">
              <label class="control-label">Precio Unitario ($)</label>
              <input type="text" class="form-input line-unitprice-input" data-index="${index}" value="${(item.unitPrice || '').replace(/"/g, '&quot;')}" placeholder="Ej: 150,00$">
            </div>
            <div class="control-field" style="flex: 1;">
              <label class="control-label">Importe ($) (Auto)</label>
              <input type="text" class="form-input line-linetotal-input" data-index="${index}" value="${displayTotal}" readonly style="background-color: rgba(15, 23, 42, 0.4); color: var(--accent-cyan); font-weight: 700; cursor: not-allowed;" title="Calculado automáticamente: Cantidad x Precio Unitario">
            </div>
          </div>

          <div class="control-field">
            <label class="control-label">Detalles Adicionales</label>
            <textarea class="form-textarea line-details-input" data-index="${index}" rows="2" placeholder="Ej: Aluminio Color bronce / Vidrio gris">${item.details || ''}</textarea>
          </div>
        </div>
      `;

      linesEditorContainer.appendChild(card);

      card.addEventListener('toggle', () => {
        item.isOpen = card.open;
      });
    });

    const qtyInputs = linesEditorContainer.querySelectorAll('.line-qty-input');
    qtyInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        lines[idx].quantity = e.target.value;
        updateCardCalculatedTotal(idx);
        renderPdfPages();
      });
      input.addEventListener('blur', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx]) {
          lines[idx].quantity = formatQuantity(e.target.value);
          e.target.value = lines[idx].quantity;
          updateCardCalculatedTotal(idx);
          renderPdfPages();
        }
      });
    });

    const prodInputs = linesEditorContainer.querySelectorAll('.line-prod-input');
    prodInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        lines[idx].productName = e.target.value;
        updateCardSummaryText(idx);
        renderPdfPages();
      });
    });

    const dimInputs = linesEditorContainer.querySelectorAll('.line-dim-input');
    dimInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        lines[idx].dimensions = e.target.value;
        updateCardSummaryText(idx);
        renderPdfPages();
      });
    });

    const unitPriceInputs = linesEditorContainer.querySelectorAll('.line-unitprice-input');
    unitPriceInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        lines[idx].unitPrice = e.target.value;
        updateCardCalculatedTotal(idx);
        renderPdfPages();
      });
      input.addEventListener('blur', (e) => {
        const idx = parseInt(e.target.dataset.index);
        if (lines[idx] && lines[idx].unitPrice) {
          lines[idx].unitPrice = formatCurrencyRight(e.target.value);
          e.target.value = lines[idx].unitPrice;
          updateCardCalculatedTotal(idx);
          renderPdfPages();
        }
      });
    });

    const detailsInputs = linesEditorContainer.querySelectorAll('.line-details-input');
    detailsInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = parseInt(e.target.dataset.index);
        lines[idx].details = e.target.value;
        renderPdfPages();
      });
    });

    const removeBtns = linesEditorContainer.querySelectorAll('.remove-line-btn');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(e.target.dataset.index);
        removeLine(idx);
      });
    });

    renderPdfPages();
  }

  function updateCardCalculatedTotal(index) {
    if (!linesEditorContainer) return;
    const totalInput = linesEditorContainer.querySelector(`.line-linetotal-input[data-index="${index}"]`);
    if (totalInput && lines[index]) {
      const calcStr = calculateLineTotal(lines[index].quantity, lines[index].unitPrice);
      totalInput.value = calcStr ? calcStr : '0,00$';
    }
  }

  function updateCardSummaryText(index) {
    if (!linesEditorContainer) return;
    const titleSpan = linesEditorContainer.querySelector(`.line-card-title-text[data-card-index="${index}"]`);
    if (titleSpan && lines[index]) {
      titleSpan.textContent = getCardTitle(lines[index], index);
    }
  }

  /* --------------------------------------------------------------------------
     6. EXPORTACIÓN DE PDF NATIVA Y LIMPIA
     -------------------------------------------------------------------------- */

  function resetDownloadBtns() {
    if (btnDownloadPdf) {
      btnDownloadPdf.innerHTML = '📄 Descargar PDF';
      btnDownloadPdf.disabled = false;
    }
    if (btnTopDownload) {
      btnTopDownload.innerHTML = '📄 Descargar PDF';
      btnTopDownload.disabled = false;
    }
  }

  async function downloadPDF() {
    const clientClean = (budgetData.client || 'Cliente').replace(/[^a-zA-Z0-9]/g, '_');
    const filename = 'Presupuesto_Todo_Cristal_' + clientClean + '.pdf';

    if (btnTopDownload) {
      btnTopDownload.innerHTML = '⌛ Generando PDF...';
      btnTopDownload.disabled = true;
    }
    if (btnDownloadPdf) {
      btnDownloadPdf.innerHTML = '⌛ Generando PDF...';
      btnDownloadPdf.disabled = true;
    }

    // 1. Ocultar botones interactivos (+ y ✕) e input de fecha flotante
    const actionBtns = pdfPagesContainer.querySelectorAll('.pdf-line-delete-btn, .pdf-header-add-btn, .canvas-date-picker-input');
    actionBtns.forEach(btn => btn.style.display = 'none');

    // 2. Remover atributo contenteditable temporalmente
    const editables = pdfPagesContainer.querySelectorAll('[contenteditable]');
    editables.forEach(el => el.removeAttribute('contenteditable'));

    const pageEls = Array.from(pdfPagesContainer.querySelectorAll('.pdf-page'));

    if (pageEls.length === 0) {
      actionBtns.forEach(btn => btn.style.display = '');
      editables.forEach(el => el.setAttribute('contenteditable', 'true'));
      resetDownloadBtns();
      return;
    }

    // Guardar estilos originales
    const originalStyles = pageEls.map(p => ({
      el: p,
      shadow: p.style.boxShadow,
      margin: p.style.margin,
      h: p.style.height,
      minH: p.style.minHeight,
      maxH: p.style.maxHeight,
      zoom: p.style.zoom
    }));

    // Ajustar estilos para la captura A4 limpia (295mm para evitar desbordamientos de 0.01mm por redondeo de píxeles)
    pageEls.forEach(p => {
      p.style.boxShadow = 'none';
      p.style.margin = '0';
      p.style.height = '295mm';
      p.style.minHeight = '295mm';
      p.style.maxHeight = '295mm';
      p.style.zoom = '1';
    });

    try {
      const jsPDFLib = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
      if (typeof jsPDFLib === 'function' && typeof window.html2canvas === 'function') {
        const pdf = new jsPDFLib({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        for (let i = 0; i < pageEls.length; i++) {
          const canvas = await window.html2canvas(pageEls[i], {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false
          });
          const imgData = canvas.toDataURL('image/jpeg', 0.98);
          if (i > 0) {
            pdf.addPage('a4', 'portrait');
          }
          pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
        }

        pdf.save(filename);
      } else {
        // Fallback usando html2pdf
        const opt = {
          margin: 0,
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, allowTaint: true, logging: false },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        if (pageEls.length === 1) {
          await html2pdf().set(opt).from(pageEls[0]).save();
        } else {
          let worker = html2pdf().set(opt).from(pageEls[0]).toPdf();
          for (let i = 1; i < pageEls.length; i++) {
            worker = worker.get('pdf').then((pdf) => {
              pdf.addPage();
            }).from(pageEls[i]).toContainer().toCanvas().toPdf();
          }
          await worker.save();
        }
      }
    } catch (err) {
      console.error('Error generando PDF:', err);
    } finally {
      originalStyles.forEach(item => {
        item.el.style.boxShadow = item.shadow;
        item.el.style.margin = item.margin;
        item.el.style.height = item.h;
        item.el.style.minHeight = item.minH;
        item.el.style.maxHeight = item.maxH;
        item.el.style.zoom = item.zoom;
      });
      actionBtns.forEach(btn => btn.style.display = '');
      editables.forEach(el => el.setAttribute('contenteditable', 'true'));
      resetDownloadBtns();
    }
  }

  /* --------------------------------------------------------------------------
     7. EVENT LISTENERS E INICIALIZACIÓN
     -------------------------------------------------------------------------- */

  if (inputLogoFile) {
    inputLogoFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          config.customLogoSrc = evt.target.result;
          renderPdfPages();
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (btnResetLogo) {
    btnResetLogo.addEventListener('click', () => {
      if (inputLogoFile) inputLogoFile.value = '';
      config.customLogoSrc = 'assets/logo.svg';
      renderPdfPages();
    });
  }

  if (logoSizeInput) {
    logoSizeInput.addEventListener('input', (e) => {
      config.logoSize = parseInt(e.target.value) || 100;
      if (logoSizeVal) logoSizeVal.textContent = `${config.logoSize}%`;
      renderPdfPages();
    });
  }

  if (logoOpacityInput) {
    logoOpacityInput.addEventListener('input', (e) => {
      config.logoOpacity = parseInt(e.target.value) || 100;
      if (logoOpacityVal) logoOpacityVal.textContent = `${config.logoOpacity}%`;
      renderPdfPages();
    });
  }

  if (watermarkSizeInput) {
    watermarkSizeInput.addEventListener('input', (e) => {
      config.watermarkSize = parseInt(e.target.value) || 100;
      if (watermarkSizeVal) watermarkSizeVal.textContent = `${config.watermarkSize}%`;
      renderPdfPages();
    });
  }

  if (watermarkOpacityInput) {
    watermarkOpacityInput.addEventListener('input', (e) => {
      config.watermarkOpacity = parseInt(e.target.value) || 0;
      if (watermarkOpacityVal) watermarkOpacityVal.textContent = `${config.watermarkOpacity}%`;
      renderPdfPages();
    });
  }

  if (fontFamilySelect) {
    fontFamilySelect.addEventListener('change', (e) => {
      config.fontFamily = e.target.value;
      renderPdfPages();
    });
  }

  if (fontSizeInput) {
    fontSizeInput.addEventListener('input', (e) => {
      config.fontSize = parseInt(e.target.value) || 14;
      renderPdfPages();
    });
  }

  if (fontColorInput) {
    fontColorInput.addEventListener('input', (e) => {
      config.fontColor = e.target.value;
      renderPdfPages();
    });
  }

  if (inputMainTitle) {
    inputMainTitle.addEventListener('input', (e) => {
      budgetData.mainTitle = e.target.value;
      renderPdfPages();
    });
  }

  if (inputDate) {
    inputDate.addEventListener('change', (e) => {
      budgetData.dateYMD = e.target.value;
      renderPdfPages();
    });
  }

  if (inputClient) {
    inputClient.addEventListener('input', (e) => {
      budgetData.client = e.target.value;
      renderPdfPages();
    });
  }

  if (inputCi) {
    inputCi.addEventListener('input', (e) => {
      budgetData.ci = e.target.value;
      renderPdfPages();
    });
  }

  if (inputAddress) {
    inputAddress.addEventListener('input', (e) => {
      budgetData.address = e.target.value;
      renderPdfPages();
    });
  }

  if (inputAdvancePrice) {
    inputAdvancePrice.addEventListener('input', (e) => {
      budgetData.advancePrice = e.target.value;
      renderPdfPages();
    });
    inputAdvancePrice.addEventListener('blur', (e) => {
      budgetData.advancePrice = formatCurrencyRight(e.target.value);
      e.target.value = budgetData.advancePrice;
      renderPdfPages();
    });
  }

  if (inputFooterAddress) {
    inputFooterAddress.addEventListener('input', (e) => {
      budgetData.footerAddress = e.target.value;
      renderPdfPages();
    });
  }

  if (inputFooterPhone) {
    inputFooterPhone.addEventListener('input', (e) => {
      budgetData.footerPhone = e.target.value;
      renderPdfPages();
    });
  }

  if (inputFooterName) {
    inputFooterName.addEventListener('input', (e) => {
      budgetData.footerName = e.target.value;
      renderPdfPages();
    });
  }

  if (btnAddLine) btnAddLine.addEventListener('click', addLine);
  if (btnLoadExample) btnLoadExample.addEventListener('click', loadExampleData);

  if (btnDownloadPdf) btnDownloadPdf.addEventListener('click', downloadPDF);
  if (btnTopDownload) btnTopDownload.addEventListener('click', downloadPDF);

  /* --------------------------------------------------------------------------
     8. NAVEGACIÓN MÓVIL Y RESPONSIVE (PESTAÑAS EDITOR / VISTA PREVIA)
     -------------------------------------------------------------------------- */
  const tabBtnEditor = document.getElementById('tab-btn-editor');
  const tabBtnPreview = document.getElementById('tab-btn-preview');
  const appContainer = document.querySelector('.app-container');

  if (tabBtnEditor && tabBtnPreview && appContainer) {
    tabBtnEditor.addEventListener('click', () => {
      tabBtnEditor.classList.add('active');
      tabBtnPreview.classList.remove('active');
      appContainer.classList.remove('show-preview');
    });

    tabBtnPreview.addEventListener('click', () => {
      tabBtnPreview.classList.add('active');
      tabBtnEditor.classList.remove('active');
      appContainer.classList.add('show-preview');
    });
  }

  // Inicialización (Lista de productos VACÍA por defecto)
  initDefaultDate();
  updateLinesEditor();

});
