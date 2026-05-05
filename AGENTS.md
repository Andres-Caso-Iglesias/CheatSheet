# AGENTS.md - Proyecto Cheat Sheets de Comandos

## Descripción del Proyecto
Proyecto de hojas de referencia (cheat sheets) para comandos de sistemas operativos y editores de texto.

## Estructura Actual
```
comandos/
├── index.html                    # Página de inicio - Seleccionar Linux o Windows
├── AGENTS.md                    # Documentación del proyecto
├── linux/
│   └── linux_commands_vi.html  # Linux (nav, files, perms, proc, net, text) + vi + nano
└── windows/
    └── windows_commands.html    # Windows CMD y PowerShell con sub-pestañas
```

## Estado del Proyecto
- [x] Página de inicio (index.html) - COMPLETO
- [x] Linux commands (linux_commands_vi.html) - COMPLETO
  - Secciones: nav → files → perms → proc → net → text → vi → nano
  - Incluye: systemctl, journalctl, ip (reemplaza ifconfig), ss (reemplaza netstat)
  - Formato "Para qué sirve:" aplicado en todas las secciones de comandos
  - vi y nano en formato de tarjetas (.vi-grid, .vi-card)
- [x] Windows commands (windows_commands.html) - COMPLETO
  - Estructura de dos niveles: pestañas principales (CMD/PowerShell) + sub-pestañas (Navegación, Archivos, Procesos, Red)
  - CMD: dir, cd, md, rd, cls, copy, move, del, xcopy, robocopy, attrib, tasklist, taskkill, systeminfo, ipconfig, ping, tracert, netstat, arp, nslookup
  - PowerShell: Get-ChildItem, Set-Location, New-Item, Remove-Item, Clear-Host, Copy-Item, Move-Item, Get-Content, Set-Content, Select-String, Out-File, Get-Process, Stop-Process, Get-Service, Start-Service, Stop-Service, Test-Connection, Get-NetIPAddress, Get-NetRoute, Get-NetAdapter, Resolve-DnsName
  - Formato "Para qué sirve:" aplicado en todos los comandos

## Convenciones del Proyecto

### Estilo de Código
- **HTML**: Usar comillas dobles, indentación de 2 espacios
- **CSS**: Variables CSS definidas en `:root`, usar `var(--nombre-variable)`
- **JavaScript**: Funciones `showTab(id)` y `filterCmds(q)` para navegación y búsqueda
- **Comentarios**: En HTML usar `<!-- Comentario -->`, en CSS usar `/* Comentario */`

### Estructura de Secciones
Cada sección de comandos debe seguir el formato:
```html
<div class="section" id="tab-xxx" data-group="xxx">
  <div class="cmd-group">
    <div class="group-title">Título del Grupo</div>
    <div class="cmd-row">
      <span class="cmd-name">comando</span>
      <span class="cmd-desc">
        <span class="cmd-purpose">Para qué sirve:</span> Descripción breve.<br>
        <span class="param">-flag</span> descripción · <span class="param">-otro</span> otro
      </span>
    </div>
  </div>
</div>
```

### Clases CSS Principales
- `cmd-row`: Fila de comando (grid con 2 columnas)
- `cmd-name`: Nombre del comando (azul, fondo claro)
- `cmd-desc`: Descripción y parámetros
- `cmd-purpose`: "Para qué sirve:" (texto pequeño, mayúsculas)
- `param`: Parámetros/flags (fondo gris, fuente monoespaciada)
- `vi-card`: Tarjetas para editores (vi/nano)
- `vi-key`: Teclas/comandos en tarjetas
- `vi-desc`: Descripción en tarjetas

## Reglas para el Agente

### 1. Estructura de Archivos
- Mantener todas las secciones dentro de `<div id="allCmds">` y este dentro de `<div class="main-container">`
- Linux: orden de secciones `nav → files → perms → proc → net → text → vi → nano`
- Windows: sistema de dos niveles (pestañas principales + sub-pestañas)
  - Pestañas principales: `CMD` y `PowerShell` (funciones `showMainTab(id)`)
  - Sub-pestañas: `Navegación → Archivos → Procesos → Red` (funciones `showSubTab(id)`)
  - IDs: `tab-cmd-nav`, `tab-cmd-files`, `tab-cmd-proc`, `tab-cmd-net`, `tab-ps-nav`, `tab-ps-files`, `tab-ps-proc`, `tab-ps-net`

### 2. Formato de Comandos
- SIEMPRE incluir `<span class="cmd-purpose">Para qué sirve:</span>` antes de la descripción
- Parámetros SIEMPRE en una línea nueva (usar `<br>` después del punto de "Para qué sirve:")
- Usar `·` como separador entre parámetros (no comas ni puntos)

### 3. Editores (vi/nano)
- Mantener formato de tarjetas (`.vi-grid`, `.vi-card`)
- vi: NO usar "Para qué sirve:" (formato original)
- nano: MISMO formato que vi (tarjetas), con marca de agua "NO USAR" y "ni aunque sea tu última opción"

### 4. Diseño Visual
- Fondo del body: `#f1f5f9` (gris claro)
- Contenedor principal: `max-width: 900px`, fondo blanco, sombra
- Título: `font-size: 2.2rem`, centrado
- Pestañas: centradas, `justify-content: center`
- Búsqueda: mismo ancho que las pestañas

### 5. Funcionalidad JavaScript
- Linux: `showTab(id)` y `filterCmds(q)`
- Windows: `showMainTab(id)`, `showSubTab(id)` y `filterCmds(q)`
- `showTab(id)` / `showMainTab(id)` / `showSubTab(id)`: Cambian pestaña y muestran sección, LIMPIAN búsqueda
- `filterCmds(q)`: Filtra comandos en tiempo real, muestra TODAS las secciones si hay búsqueda
- Linux: ocultar/mostrar `.cmd-row` Y `.vi-row`
- Windows: ocultar/mostrar `.cmd-row`

## Próximas Tareas

### Mejoras Futuras (Opcional)
- [ ] Añadir sección de comandos de red para Linux: `journalctl`, `iptables`, `firewall-cmd`
- [ ] Añadir más comandos de archivos para CMD: `fc`, `find`, `sort`
- [ ] Añadir más cmdlets de PowerShell: `Get-Content`, `Set-Content`, `Out-File`
- [ ] Crear sección de atajos de teclado para Windows Terminal
- [ ] Probar en navegador que todo funciona correctamente
- [ ] Considerar agregar sección de comandos Git

## Notas
- El usuario prefiere explicaciones directas y sin rodeos
- Usar Rioplatense si el input es en español
- Mantener el criterio de "Para qué sirve:" en comandos Linux y Windows
- Estructura de Windows usa sistema de dos niveles (pestañas principales + sub-pestañas)

### Google Dorks
- Añadir una nueva sección web/google_dorks.html enlazada desde el índice (index.html).
- Mantener consistencia con el formato existente: secciones con "Para qué sirve:", ejemplos y una tarjeta/tabla si aplica.
- Contenido propuesto: site:, inurl:, intitle:, intext:, filetype: con descripciones breves y ejemplos.
- Actualizar la navegación para incluir el enlace correspondiente.
