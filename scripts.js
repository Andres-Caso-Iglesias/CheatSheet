/**
 * scripts.js
 * Lógica unificada de pestañas y búsqueda para las Cheat Sheets (Linux, Windows, Google Dorks)
 */

/**
 * showTab(id)
 * Para páginas con pestañas simples (ej. Linux)
 */
function showTab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  
  const section = document.getElementById('tab-' + id);
  if (section) section.classList.add('active');
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
}

/**
 * showMainTab(id)
 * Para pestañas de nivel principal (ej. Windows: CMD vs PowerShell)
 */
function showMainTab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-main').forEach(t => t.classList.remove('active'));

  if (typeof event !== 'undefined' && event && event.target) {
    const btn = event.target.closest('.tab-main');
    if (btn) btn.classList.add('active');
  }

  // Ocultar subpestañas y mostrar la del id seleccionado
  const allSubtabs = document.querySelectorAll('.subtabs');
  allSubtabs.forEach(st => st.style.display = 'none');
  
  const targetSubtabs = document.getElementById('subtabs-' + id);
  if (targetSubtabs) {
    targetSubtabs.style.display = 'flex';
  }

  // Activar la primera subpestaña y su sección correspondiente
  const firstSubtab = targetSubtabs ? targetSubtabs.querySelector('.subtab') : null;
  const firstSection = (id === 'cmd') ? document.getElementById('tab-cmd-nav') : document.getElementById('tab-ps-nav');

  if (firstSubtab) {
    document.querySelectorAll('.subtab').forEach(st => st.classList.remove('active'));
    firstSubtab.classList.add('active');
  }

  if (firstSection) {
    firstSection.classList.add('active');
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
}

/**
 * showSubTab(id)
 * Para pestañas secundarias (ej. Navegación, Procesos en Windows)
 */
function showSubTab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.subtab').forEach(t => t.classList.remove('active'));

  const section = document.getElementById('tab-' + id);
  if (section) section.classList.add('active');

  if (typeof event !== 'undefined' && event && event.target) {
    event.target.classList.add('active');
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
}

/**
 * filterCmds(q)
 * Buscador unificado que filtra filas y reactiva las vistas previas al limpiar la búsqueda
 */
function filterCmds(q) {
  q = q.toLowerCase().trim();
  const sections = document.querySelectorAll('.section');
  const simpleTabs = document.querySelectorAll('.tab');
  const mainTabs = document.querySelectorAll('.tab-main');
  const subTabs = document.querySelectorAll('.subtab');

  if (!q) {
    // Si se borró la búsqueda, hay que restaurar el estado activo correcto.
    sections.forEach(s => s.classList.remove('active'));
    
    if (mainTabs.length > 0) {
      // Estamos en una página con pestañas anidadas (ej. Windows)
      mainTabs.forEach(t => t.classList.remove('active'));
      subTabs.forEach(t => t.classList.remove('active'));

      const firstMainTab = document.querySelector('.tab-main');
      if (firstMainTab) firstMainTab.classList.add('active');

      const firstSubtab = document.querySelector('#subtabs-cmd .subtab');
      if (firstSubtab) firstSubtab.classList.add('active');

      const firstSection = document.getElementById('tab-cmd-nav');
      if (firstSection) firstSection.classList.add('active');
    } else if (simpleTabs.length > 0) {
      // Página con pestañas simples (ej. Linux)
      simpleTabs.forEach(t => t.classList.remove('active'));
      const firstTab = document.querySelector('.tab');
      if (firstTab) firstTab.classList.add('active');

      const firstSection = document.querySelector('.section');
      if (firstSection) firstSection.classList.add('active');
    } else {
      // Sin pestañas (ej. Google Dorks)
      const firstSection = document.querySelector('.section');
      if (firstSection) firstSection.classList.add('active');
    }

    document.querySelectorAll('.cmd-row, .vi-row').forEach(r => r.classList.remove('hidden'));
    return;
  }

  // Con búsqueda activa: mostrar todas las secciones y resaltar las pestañas en uso (si procede)
  sections.forEach(s => s.classList.add('active'));
  simpleTabs.forEach(t => t.classList.add('active'));
  mainTabs.forEach(t => t.classList.add('active'));
  subTabs.forEach(t => t.classList.add('active'));

  document.querySelectorAll('.cmd-row, .vi-row').forEach(row => {
    const text = row.textContent.toLowerCase();
    row.classList.toggle('hidden', !text.includes(q));
  });
}
