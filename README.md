# Cheat Sheets - Comandos

Biblioteca centralizada de hojas de referencia (cheat sheets) enfocada en ciberseguridad, administracion de sistemas y herramientas de red. Disenada para acceso rapido a comandos esenciales sin necesidad de navegar por multiples fuentes.

## Descripcion

Proyecto web estatico que agrupa guias de referencia interactivas con pestanas, busqueda en tiempo real y diseno responsive. Cada cheat sheet cubre un tema especifico con comandos organizados por categorias, sus parametros mas usados y una descripcion concisa.

## Contenido

### Sistemas Operativos
- **Linux** (`linux/`): Comandos de terminal, gestion de archivos, permisos, procesos, red, manipulacion de texto, herramientas forenses y esteganografia, editor vi/vim y nano
- **Windows** (`windows/`): CMD y PowerShell - navegacion, archivos, procesos, red, usuarios y grupos
- **Tmux** (`tmux/`): Terminal multiplexer - sesiones, ventanas, paneles, copy mode, layouts y configuracion

### Herramientas de Red y Seguridad
- **Nmap** (`nmap/`): Escaneo de red, descubrimiento de hosts, puertos, servicios, evasion de firewall y scripts NSE
- **Metasploit** (`metasploit/`): msfconsole, exploits, msfvenom, Meterpreter, post-explotacion y evasion
- **Hydra** (`hydra/`): Fuerza bruta de credenciales, formularios web, servicios remotos y bases de datos
- **Telnet** (`telnet/`): Conexion, debug, testing de puertos e interaccion manual con protocolos
- **FFUF** (`ffuf/`): Web fuzzer: fuerza bruta de directorios, parametros, filtros y fuzzing de APIs
- **Feroxbuster** (`feroxbuster/`): Fuzzing de directorios: escaneo recursivo, filtros, extensiones y output personalizado
- **SQLMap** (`sqlmap/`): Automatizacion de inyeccion SQL, deteccion, bypass WAF, extraccion de datos y post-explotacion
- **WPScan** (`wpscan/`): Auditoria de WordPress: plugins, themes, usuarios, brute force y enumeracion
- **SMB / Impacket** (`smb/`): Enumeracion SMB, smbclient, enum4linux, Impacket PSExec, WMIExec, SecretsDump y Pass-the-Hash
- **John / Hashcat** (`john/`): Cracking de hashes: John the Ripper, Hashcat, identificacion de hashes, rules, masks y wordlists

### Web
- **Google Dorks** (`web/`): Busquedas web avanzadas para investigacion y descubrimiento de informacion

## Caracteristicas

- **Diseno responsive**: Se adapta a movil, tablet, PC y pantallas ultrawide
- **Busqueda en tiempo real**: Filtra comandos y parametros al instante
- **Pestanas organizadas**: Navegacion por categorias dentro de cada cheat sheet
- **Sin dependencias**: HTML, CSS y JavaScript vanilla - maxima compatibilidad
- **Accesibilidad**: Incluye atributos ARIA y clases sr-only para lectores de pantalla

## Estructura

```
comandos/
├── index.html          # Pagina principal con acceso a todas las cheat sheets
├── styles.css          # Estilos globales y responsive
├── scripts.js          # Logica de pestanas y busqueda
├── linux/
│   └── linux_commands_vi.html
├── windows/
│   └── windows_commands.html
├── tmux/
│   └── tmux_commands.html
├── nmap/
│   └── nmap_commands.html
├── metasploit/
│   └── metasploit_commands.html
├── hydra/
│   └── hydra_commands.html
├── telnet/
│   └── telnet_commands.html
├── ffuf/
│   └── ffuf_commands.html
├── feroxbuster/
│   └── feroxbuster_commands.html
├── sqlmap/
│   └── sqlmap_commands.html
├── wpscan/
│   └── wpscan_commands.html
├── smb/
│   └── smb_commands.html
├── john/
│   └── john_hashcat_commands.html
└── web/
    └── google_dorks.html
```

## Tecnologias

- **HTML5**: Estructura semantica
- **CSS3**: Variables CSS, Grid, Flexbox, media queries
- **JavaScript**: Vanilla JS sin frameworks

## Uso

1. Clonar o descargar el repositorio
2. Abrir `index.html` en cualquier navegador moderno
3. Seleccionar la cheat sheet deseada
4. Usar las pestanas para navegar por categorias
5. Escribir en el buscador para filtrar comandos

## Colaborar

Si quieres contribuir, bienvenido es.

visitalo [aquí](https://andres-caso-iglesias.github.io/CheatSheet/).

## Creditos

- **Autor**: Andres-Caso-Iglesias
