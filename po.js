// ============================================
// ECE Engineer Portfolio - Comprehensive JavaScript
// ============================================

// Portfolio Data
const portfolio = {
    projects: [
        {
            id: 1,
            title: "Smart Home Automation System",
            category: "iot",
            type: "IoT Project",
            date: "2024",
            description: "Architected and deployed a complete smart home ecosystem using ESP32 with advanced wireless capabilities. Implemented real-time control protocols over WiFi/BLE with MQTT messaging for seamless IoT integration. Features multi-sensor fusion, cloud connectivity, and mobile-first application interface.",
            features: ["ESP32 Firmware", "WiFi/BLE Stack", "MQTT Protocol", "Sensor Integration", "OTA Updates"],
            technologies: "ESP32 • Arduino IDE • WiFi • BLE • MQTT • ARM Cortex • IoT"
        },
        {
            id: 2,
            title: "Industrial Control System",
            category: "embedded",
            type: "Embedded Systems",
            date: "2023",
            description: "Engineered a real-time industrial control platform on ARM Cortex-M4 microcontroller with FreeRTOS. Incorporated deterministic task scheduling, advanced interrupt handling, and SPI/I2C communication protocols. Achieved sub-millisecond response times with comprehensive UART-based debugging framework.",
            features: ["FreeRTOS", "ARM Cortex-M4", "Real-Time Systems", "Interrupt Handling", "Protocol Stacks"],
            technologies: "ARM Cortex-M4 • FreeRTOS • C/C++ • SPI • I2C • UART • Embedded"
        },
        {
            id: 3,
            title: "High-Frequency PCB Design",
            category: "pcb",
            type: "PCB Design",
            date: "2023",
            description: "Designed multi-layer RF PCB with impedance control (50Ω) and signal integrity optimization at GHz frequencies. Implemented via stitching, controlled trace lengths, and differential pair routing. Fabricated and validated prototype with network analyzer measurements.",
            features: ["Impedance Control", "Signal Integrity", "RF Layout", "Layer Stack Design", "Manufacturing"],
            technologies: "Altium Designer • RF Design • PCB Layout • KiCAD • Simulation"
        },
        {
            id: 4,
            title: "Wireless Sensor Network",
            category: "wireless",
            type: "Wireless Communication",
            date: "2024",
            description: "Deployed distributed LoRaWAN sensor network for environmental monitoring with 5+ km range. Optimized power consumption to achieve multi-month battery life. Implemented adaptive data rate (ADR) algorithm and secure communication with AES-128 encryption.",
            features: ["LoRaWAN Protocol", "Mesh Networking", "Low-Power Design", "AES Encryption", "Remote Monitoring"],
            technologies: "LoRa • LoRaWAN • Arduino • Low-Power Microcontroller • Wireless"
        },
        {
            id: 5,
            title: "Digital Signal Processing Engine",
            category: "signal",
            type: "Signal Processing",
            date: "2023",
            description: "Implemented advanced DSP algorithms for real-time audio/signal processing on embedded platform. Optimized FFT computations using fixed-point arithmetic for minimal resource footprint. Achieved 150+ MIPS throughput with single ARM processor.",
            features: ["FFT Algorithms", "Fixed-Point Math", "Real-Time DSP", "Signal Filtering", "Performance Optimization"],
            technologies: "MATLAB • C/C++ • DSP Library • Embedded Systems • Signal Processing"
        },
        {
            id: 6,
            title: "VLSI Design Project",
            category: "vlsi",
            type: "Digital Design",
            date: "2024",
            description: "Designed and simulated a synchronous 32-bit counter in SystemVerilog with formal verification. Synthesized for FPGA targeting Xilinx platforms. Validated timing closure and power analysis using commercial tools.",
            features: ["SystemVerilog", "FPGA Design", "Timing Analysis", "Formal Verification", "Power Optimization"],
            technologies: "SystemVerilog • FPGA • Xilinx Tools • Verilog • Digital Design"
        }
    ],
    
    skills: [
        {
            category: "Microcontrollers & Platforms",
            skills: ["Arduino", "ARM Cortex-M4/M7", "ESP8266/ESP32", "STM32", "Raspberry Pi", "PIC Microcontrollers"]
        },
        {
            category: "Communication Protocols",
            skills: ["UART", "SPI", "I2C", "CAN", "WiFi", "Bluetooth", "Zigbee", "LoRaWAN", "MQTT"]
        },
        {
            category: "Programming Languages",
            skills: ["C", "C++", "Python", "Verilog", "MATLAB", "JavaScript", "Assembly", "SystemVerilog"]
        },
        {
            category: "Design & CAD Tools",
            skills: ["KiCAD", "Altium Designer", "LTspice", "EAGLE", "Fusion 360", "3D Design"]
        },
        {
            category: "Development Environments",
            skills: ["Arduino IDE", "Keil µVision", "PlatformIO", "VS Code", "STM32CubeIDE"]
        },
        {
            category: "Operating Systems & Frameworks",
            skills: ["FreeRTOS", "Linux", "Real-time Systems", "IoT Frameworks", "Edge Computing"]
        }
    ],
    
    stats: {
        projectsCompleted: 15,
        yearsExperience: 1.5,
        certificationCount: 5,
        skillsCount: 25
    }
};

// Utility Functions
function displayProjects(projects) {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-on-scroll';
        card.setAttribute('data-category', project.category);
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-date">${project.date}</span>
            </div>
            <p class="project-type">${project.type}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-features">
                ${project.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
            <div class="project-technologies">
                <small>Technologies: ${project.technologies}</small>
            </div>
        `;
        grid.appendChild(card);
    });
    activateScrollAnimations();
}

function displaySkills() {
    const grid = document.querySelector('.skills-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    portfolio.skills.forEach(skillGroup => {
        const card = document.createElement('div');
        card.className = 'skill-card fade-on-scroll';
        card.innerHTML = `
            <h3>${skillGroup.category}</h3>
            <div class="skill-tags">
                ${skillGroup.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
    activateScrollAnimations();
}

function getUserStats() {
    return portfolio.stats;
}

function animateNumber(element, target, duration) {
    if (!element) return;
    
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;
    
    function update() {
        current += increment;
        if (current >= target) {
            element.textContent = isDecimal ? target.toFixed(1) : target;
        } else {
            element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

function activateScrollAnimations() {
    const elements = document.querySelectorAll('.fade-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    
    // ========== Mobile Menu Toggle ==========
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            menuToggle.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
        });
        
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
                menuToggle.textContent = '☰';
            });
        });
    }
    
    // ========== Active Navigation Link ==========
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ========== Smooth Scrolling ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========== Project Filtering ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ========== Project Search ==========
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.project-description').textContent.toLowerCase();
                const technologies = card.querySelector('.project-technologies').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm) || technologies.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // ========== Theme Toggle ==========
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
        });
    }
    
    // ========== Contact Form ==========
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submitted:', formData);
            alert('Thank you for reaching out! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // ========== Scroll to Top Button ==========
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        font-size: 1.5rem;
        z-index: 99;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    `;
    
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
            scrollButton.style.alignItems = 'center';
            scrollButton.style.justifyContent = 'center';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollButton.addEventListener('mouseover', () => {
        scrollButton.style.transform = 'translateY(-5px)';
        scrollButton.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
    });
    
    scrollButton.addEventListener('mouseout', () => {
        scrollButton.style.transform = 'translateY(0)';
        scrollButton.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
    });
    
    // ========== Activate Scroll Animations ==========
    activateScrollAnimations();
    
    // ========== Animate Stats on Page Load ==========
    animateNumber(document.getElementById('stat-projects'), 15, 1000);
    animateNumber(document.getElementById('stat-years'), 1.5, 1200);
    animateNumber(document.getElementById('stat-certifications'), 5, 1000);
    animateNumber(document.getElementById('stat-skills'), 25, 1200);
    
    // ========== Console Message ==========
    console.log('%c🚀 ECE Engineer Portfolio Loaded Successfully!', 'font-size: 16px; color: #667eea; font-weight: bold;');
    console.log('%cWelcome to the Professional Portfolio', 'font-size: 14px; color: #764ba2;');
});

